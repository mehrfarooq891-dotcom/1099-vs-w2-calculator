/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Info, 
  Briefcase, 
  Users, 
  TrendingUp, 
  Calculator,
  CheckCircle,
  AlertTriangle,
  RefreshCw,
  Trophy,
  ArrowRight,
  ShieldCheck,
  Zap,
  Repeat,
  Repeat2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
import jsPDF from 'jspdf';

// Initialize ChartJS
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement
);

// --- Constants & Data ---

const FILING_STATUSES = [
  { id: 'single', label: 'Single' },
  { id: 'mfj', label: 'Jointly' },
  { id: 'hoh', label: 'HoH' },
];

const STATES = [
  { name: 'Alabama', rate: 0.05, type: 'flat' },
  { name: 'Alaska', rate: 0, type: 'flat', badge: 'No tax' },
  { name: 'Arizona', rate: 0.025, type: 'flat' },
  { name: 'Arkansas', rate: 0.039, type: 'flat' },
  { name: 'California', rate: 0.093, type: 'progressive', max: 0.133, sdi: 0.011 },
  { name: 'Colorado', rate: 0.044, type: 'flat' },
  { name: 'Connecticut', rate: 0.05, type: 'progressive' },
  { name: 'Delaware', rate: 0.066, type: 'flat' },
  { name: 'District of Columbia', rate: 0.08, type: 'progressive' },
  { name: 'Florida', rate: 0, type: 'flat', badge: 'No tax' },
  { name: 'Georgia', rate: 0.0549, type: 'flat' },
  { name: 'Hawaii', rate: 0.08, type: 'progressive' },
  { name: 'Idaho', rate: 0.058, type: 'flat' },
  { name: 'Illinois', rate: 0.0495, type: 'flat' },
  { name: 'Indiana', rate: 0.0305, type: 'flat' },
  { name: 'Iowa', rate: 0.06, type: 'flat' },
  { name: 'Kansas', rate: 0.057, type: 'flat' },
  { name: 'Kentucky', rate: 0.04, type: 'flat' },
  { name: 'Louisiana', rate: 0.0425, type: 'flat' },
  { name: 'Maine', rate: 0.075, type: 'progressive' },
  { name: 'Maryland', rate: 0.05, type: 'progressive' },
  { name: 'Massachusetts', rate: 0.05, type: 'flat' },
  { name: 'Michigan', rate: 0.0425, type: 'flat' },
  { name: 'Minnesota', rate: 0.07, type: 'progressive' },
  { name: 'Mississippi', rate: 0.05, type: 'flat' },
  { name: 'Missouri', rate: 0.048, type: 'flat' },
  { name: 'Montana', rate: 0.05, type: 'flat' },
  { name: 'Nebraska', rate: 0.06, type: 'progressive' },
  { name: 'Nevada', rate: 0, type: 'flat', badge: 'No tax' },
  { name: 'New Hampshire', rate: 0, type: 'flat', badge: 'No tax' },
  { name: 'New Jersey', rate: 0.0637, type: 'progressive', max: 0.1075 },
  { name: 'New Mexico', rate: 0.059, type: 'flat' },
  { name: 'New York', rate: 0.065, type: 'progressive', max: 0.109 },
  { name: 'North Carolina', rate: 0.045, type: 'flat' },
  { name: 'North Dakota', rate: 0.025, type: 'flat' },
  { name: 'Ohio', rate: 0.035, type: 'flat' },
  { name: 'Oklahoma', rate: 0.0475, type: 'flat' },
  { name: 'Oregon', rate: 0.08, type: 'progressive' },
  { name: 'Pennsylvania', rate: 0.0307, type: 'flat' },
  { name: 'Rhode Island', rate: 0.05, type: 'progressive' },
  { name: 'South Carolina', rate: 0.064, type: 'flat' },
  { name: 'South Dakota', rate: 0, type: 'flat', badge: 'No tax' },
  { name: 'Tennessee', rate: 0, type: 'flat', badge: 'No tax' },
  { name: 'Texas', rate: 0, type: 'flat', badge: 'No tax' },
  { name: 'Utah', rate: 0.0465, type: 'flat' },
  { name: 'Vermont', rate: 0.07, type: 'progressive' },
  { name: 'Virginia', rate: 0.0575, type: 'flat' },
  { name: 'Washington', rate: 0, type: 'flat', badge: 'No tax' },
  { name: 'West Virginia', rate: 0.065, type: 'flat' },
  { name: 'Wisconsin', rate: 0.06, type: 'progressive' },
  { name: 'Wyoming', rate: 0, type: 'flat', badge: 'No tax' },
];

const FEDERAL_BRACKETS_2025 = {
  single: [
    { threshold: 0, rate: 0.10 },
    { threshold: 11925, rate: 0.12 },
    { threshold: 48475, rate: 0.22 },
    { threshold: 103350, rate: 0.24 },
    { threshold: 197300, rate: 0.32 },
    { threshold: 250525, rate: 0.35 },
    { threshold: 626350, rate: 0.37 },
  ],
  mfj: [
    { threshold: 0, rate: 0.10 },
    { threshold: 23850, rate: 0.12 },
    { threshold: 96950, rate: 0.22 },
    { threshold: 206700, rate: 0.24 },
    { threshold: 394600, rate: 0.32 },
    { threshold: 501050, rate: 0.35 },
    { threshold: 751600, rate: 0.37 },
  ],
  hoh: [
    { threshold: 0, rate: 0.10 },
    { threshold: 17000, rate: 0.12 },
    { threshold: 64850, rate: 0.22 },
    { threshold: 103350, rate: 0.24 },
    { threshold: 197300, rate: 0.32 },
    { threshold: 250500, rate: 0.35 },
    { threshold: 626350, rate: 0.37 },
  ]
};

const STANDARD_DEDUCTION_2025 = {
  single: 15000,
  mfj: 30000,
  hoh: 22500,
};

const SS_CAP_2025 = 176100;
const SE_TAX_RATE = 0.153;
const FICA_RATE_EMPLOYEE = 0.0765;
const SE_NET_MULTIPLIER = 0.9235;
const QBI_RATE = 0.20;
const QBI_PHASEOUT_SINGLE = 197300;
const QBI_PHASEOUT_MFJ = 394600;
const ADD_MEDICARE_THRESHOLD_SINGLE = 200000;
const ADD_MEDICARE_THRESHOLD_MFJ = 250000;
const ADD_MEDICARE_RATE = 0.009;

// --- Helper Components ---

const AnimatedNumber = ({ value, prefix = "$", duration = 600 }: { value: number, prefix?: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const startValueRef = useRef(0);

  useEffect(() => {
    startValueRef.current = displayValue;
    startTimeRef.current = null;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3); // easeOutCubic
      
      const current = startValueRef.current + (value - startValueRef.current) * easedProgress;
      setDisplayValue(current);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    
    const frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [value, duration]);

  return (
    <span>
      {prefix}{displayValue.toLocaleString(undefined, { 
        minimumFractionDigits: 0, 
        maximumFractionDigits: 0 
      })}
    </span>
  );
};

const StatBox = ({ label, value, subValue = null, colorClass = "text-text-primary", prefix = "$" }: any) => (
  <div className="flex flex-col gap-0.5">
    <span className="text-[10px] uppercase tracking-[0.15em] text-text-muted font-bold font-sans">{label}</span>
    <div className="flex items-baseline gap-2">
      <span className={`text-2xl font-bold font-mono tracking-tight ${colorClass}`}>
        <AnimatedNumber value={value} prefix={prefix} />
      </span>
      {subValue && (
        <span className="text-[10px] font-mono text-text-muted">{subValue}</span>
      )}
    </div>
  </div>
);

const Accordion = ({ title, children, defaultOpen = false, icon: Icon = Briefcase }: any) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <div className="border border-border-color rounded-md mb-3 overflow-hidden bg-bg-card transition-all duration-300">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-bg-input transition-colors group"
      >
        <div className="flex items-center gap-3">
          <Icon size={14} className="text-blue group-hover:text-text-primary transition-colors" />
          <span className="text-xs font-bold uppercase tracking-widest text-text-primary">{title}</span>
        </div>
        {isOpen ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 border-t border-border-color bg-bg-main/50">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// --- State Guides Content ---

const CaliforniaGuide = () => (
  <div className="space-y-12">
    <div>
      <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-text-primary leading-tight max-w-4xl">
        1099 vs W2 Calculator California 2025: The Golden State Salary Gap
      </h1>
      <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
        California is the most complex state in the Union for tax strategy. If you're weighing a $120k salary against a $150k contract offer in the Bay Area or LA, the math isn't as simple as a 25% raise.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      <div className="space-y-6">
        <h2 className="text-xl font-bold text-text-primary uppercase tracking-wide">The Progressive Tax Wall</h2>
        <p className="text-text-secondary leading-relaxed">
          California's income tax system is famously aggressive, scaling from a modest 1% up to a staggering 13.3% for the highest earners. Unlike Texas or Florida where your state tax is zero, a $150k California 1099 income carries a heavy state-level burden.
        </p>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-text-primary uppercase tracking-wide">The SDI Factor: A W2 Hidden Cost</h2>
        <p className="text-text-secondary leading-relaxed">
          If you're currently a W2 employee in California, you'll see a line item for SDI (State Disability Insurance). Currently, W2 workers pay roughly 1.1% of their wages. When you move to 1099, you stop paying this tax automatically.
        </p>
      </div>
    </div>

    <div className="bg-bg-card border border-border-color p-8 rounded-sm space-y-8">
      <h2 className="text-2xl font-bold text-text-primary uppercase tracking-wider">The "No QBI" Trap in California</h2>
      <p className="text-text-secondary leading-relaxed">
        This is the single biggest surprise for new contractors in California. At the federal level, the Section 199A QBI deduction allows you to shield 20% of your profit. But California does not conform to this law at the state level.
      </p>
    </div>
  </div>
);

const TexasGuide = () => (
  <div className="space-y-12">
    <div>
      <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-text-primary leading-tight max-w-4xl">
        1099 vs W2 Calculator Texas 2025: The Zero-Tax Trade-off
      </h1>
      <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
        In Texas, the lack of state income tax makes 1099 work incredibly attractive—but you must still account for the double FICA burden.
      </p>
    </div>
  </div>
);

const NewYorkGuide = () => (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl md:text-5xl font-black tracking-tighter mb-6 text-text-primary leading-tight max-w-4xl">
          1099 vs W2 Calculator New York 2025: The Empire State Breakdown
        </h1>
        <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
          New York City adds a local tax layer that contractors must bill for to reach parity with W2 compensation.
        </p>
      </div>
    </div>
);

const StateGuideSwitcher = ({ state }: { state: string }) => {
  switch (state) {
    case 'California': return <CaliforniaGuide />;
    case 'Texas': return <TexasGuide />;
    case 'New York': return <NewYorkGuide />;
    default: return <CaliforniaGuide />;
  }
};

// --- Types ---

interface DeductionItem {
  value: number;
  active: boolean;
}

interface Deductions {
  [key: string]: DeductionItem;
}

// --- Main App ---

export default function App() {
  // ... (previous state)
  const [activeTab, setActiveTab] = useState<'compare' | 'reverse' | 'hustle'>('compare');
  const [status, setStatus] = useState('single');
  const [stateName, setStateName] = useState('California');

  // Tab Inputs
  const [w2Salary, setW2Salary] = useState(105000);
  const [contractIncome, setContractIncome] = useState(130000);
  const [targetW2Salary, setTargetW2Salary] = useState(105000);
  const [hustleW2Salary, setHustleW2Salary] = useState(105000);
  const [hustle1099Income, setHustle1099Income] = useState(30000);

  // W2 Benefits
  const [benefits, setBenefits] = useState({
    health: 500,
    match: 4,
    pto: 15,
    perks: 100
  });

  // 1099 Deductions
  const [deductions, setDeductions] = useState<Deductions>({
    homeOffice: { value: 2400, active: true },
    equipment: { value: 1500, active: true },
    internet: { value: 1200, active: true },
    healthInsurance: { value: 6000, active: true },
    mileage: { value: 0, active: false },
    profDev: { value: 1000, active: true },
    other: { value: 0, active: false }
  });

  // --- Calculation Engine ---

  const calculateFederalTax = (taxableIncome: number, filingStatus: string) => {
    const brackets = FEDERAL_BRACKETS_2025[filingStatus as keyof typeof FEDERAL_BRACKETS_2025];
    let tax = 0;
    for (let i = 0; i < brackets.length; i++) {
        const current = brackets[i];
        const next = brackets[i + 1]?.threshold || Infinity;
        const taxableLayer = Math.min(Math.max(0, taxableIncome - current.threshold), next - current.threshold);
        tax += taxableLayer * current.rate;
        if (taxableIncome <= next) break;
    }
    return tax;
  };

  const calculateStateTax = (taxable: number) => {
    const s = STATES.find(x => x.name === stateName) || STATES[0];
    if (s.rate === 0) return 0;
    
    if (s.name === 'California') {
        const caBrackets = [
            { threshold: 0, rate: 0.01 }, { threshold: 10412, rate: 0.02 }, { threshold: 24684, rate: 0.04 },
            { threshold: 38959, rate: 0.06 }, { threshold: 54081, rate: 0.08 }, { threshold: 68350, rate: 0.093 },
            { threshold: 349137, rate: 0.103 }, { threshold: 418961, rate: 0.113 }, { threshold: 698274, rate: 0.123 },
            { threshold: 1000000, rate: 0.133 }
        ];
        let tax = 0;
        for (let i = 0; i < caBrackets.length; i++) {
            const current = caBrackets[i];
            const next = caBrackets[i + 1]?.threshold || Infinity;
            const taxableLayer = Math.min(Math.max(0, taxable - current.threshold), next - current.threshold);
            tax += taxableLayer * current.rate;
            if (taxable <= next) break;
        }
        return tax;
    }
    return taxable * s.rate;
  };

  const calculateFICA = (salary: number, filingStatus: string) => {
    const ssPart = Math.min(salary, SS_CAP_2025) * 0.062;
    const medicarePart = salary * 0.0145;
    const threshold = filingStatus === 'mfj' ? ADD_MEDICARE_THRESHOLD_MFJ : ADD_MEDICARE_THRESHOLD_SINGLE;
    const addMedTax = Math.max(0, salary - threshold) * ADD_MEDICARE_RATE;
    return ssPart + medicarePart + addMedTax;
  };

  const calculateW2Results = (salary: number) => {
    const standardDeduction = STANDARD_DEDUCTION_2025[status as keyof typeof STANDARD_DEDUCTION_2025];
    const fica = calculateFICA(salary, status);
    const sdi = stateName === 'California' ? salary * 0.011 : 0;
    const federalTax = calculateFederalTax(Math.max(0, salary - standardDeduction), status);
    const stateTax = calculateStateTax(Math.max(0, salary - standardDeduction));
    
    const yearlyHealth = benefits.health * 12;
    const yearlyMatch = salary * (benefits.match / 100);
    const dayRate = salary / 260;
    const ptoValue = benefits.pto * dayRate;
    const yearlyPerks = (benefits.perks || 0) * 12;
    const totalBenefits = yearlyHealth + yearlyMatch + ptoValue + yearlyPerks;
    
    const cashTakeHome = salary - federalTax - stateTax - fica - sdi;
    return {
      gross: salary,
      federalTax,
      stateTax,
      fica,
      sdi,
      cashTakeHome,
      totalValue: cashTakeHome + totalBenefits,
      benefitBreakdown: { health: yearlyHealth, match: yearlyMatch, pto: ptoValue, perks: yearlyPerks }
    };
  };

  const calculate1099Results = (income: number) => {
    const s = status as keyof typeof STANDARD_DEDUCTION_2025;
    const standardDeduction = STANDARD_DEDUCTION_2025[s];
    let totalBusExpenses = 0;
    (Object.values(deductions) as DeductionItem[]).forEach(d => { if (d.active) totalBusExpenses += d.value; });
    
    const netProfit = Math.max(0, income - totalBusExpenses);
    const seTaxableIncome = netProfit * SE_NET_MULTIPLIER;
    const ssPart = Math.min(seTaxableIncome, SS_CAP_2025) * 0.124;
    const medicarePart = seTaxableIncome * 0.029;
    const threshold = s === 'mfj' ? ADD_MEDICARE_THRESHOLD_MFJ : ADD_MEDICARE_THRESHOLD_SINGLE;
    const addMedTax = Math.max(0, netProfit - threshold) * ADD_MEDICARE_RATE;
    const seTax = ssPart + medicarePart + addMedTax;
    
    const seDeduction = seTax / 2;
    const healthInsPremium = deductions.healthInsurance.active ? deductions.healthInsurance.value : 0;
    const agi = netProfit - seDeduction - healthInsPremium;
    
    let qbi = Math.max(0, agi * 0.20);
    const phaseout = s === 'mfj' ? QBI_PHASEOUT_MFJ : QBI_PHASEOUT_SINGLE;
    if (netProfit > phaseout) {
        const range = s === 'mfj' ? 100000 : 50000;
        const reduction = Math.min(1, (netProfit - phaseout) / range);
        qbi = qbi * (1 - reduction);
    }
    
    const taxableIncome = Math.max(0, agi - qbi - standardDeduction);
    const federalTax = calculateFederalTax(taxableIncome, status);
    const stateTax = calculateStateTax(taxableIncome);

    return {
        gross: income,
        expenses: totalBusExpenses,
        netProfit,
        seTax,
        qbi,
        federalTax,
        stateTax,
        takeHome: netProfit - federalTax - stateTax - seTax
    };
  };

  const resultsCompare = useMemo(() => ({
    w2: calculateW2Results(w2Salary),
    contract: calculate1099Results(contractIncome)
  }), [w2Salary, contractIncome, status, stateName, benefits, deductions]);

  const resultsHustle = useMemo(() => {
    const w2 = calculateW2Results(hustleW2Salary);
    const res1099 = calculate1099Results(hustle1099Income);
    return { w2, res1099 };
  }, [hustleW2Salary, hustle1099Income, status, stateName, deductions]);

  const reverseRate = useMemo(() => {
    const target = calculateW2Results(targetW2Salary).totalValue;
    let low = targetW2Salary;
    let high = targetW2Salary * 2.5;
    let mid = targetW2Salary;
    for (let i = 0; i < 20; i++) {
      mid = (low + high) / 2;
      const res = calculate1099Results(mid);
      if (res.takeHome < target) low = mid;
      else high = mid;
    }
    return mid;
  }, [targetW2Salary, status, stateName, deductions]);

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("1099 vs W2 COMPENSATION LOG", 20, 30);
    doc.setFontSize(12);
    doc.text(`Filing Status: ${status}`, 20, 50);
    doc.text(`Jurisdiction: ${stateName}`, 20, 60);
    doc.text(`Fiscal Year: 2025/2026`, 20, 70);
    doc.save("fiscal-log.pdf");
  };

  // --- JSX Rendering ---

  return (
    <div className="flex flex-col h-screen bg-bg-main overflow-hidden text-sm selection:bg-blue/30 font-sans">
      {/* --- Top Header --- */}
      <header className="h-14 grid-line-b bg-bg-main flex items-center justify-between px-6 z-50">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 bg-blue rounded-sm flex items-center justify-center">
            <Calculator size={14} className="text-bg-main" />
          </div>
          <span className="font-mono font-bold tracking-tighter uppercase text-text-primary">
            COMPS<span className="text-blue">_ENGINE</span>
            <span className="text-[10px] ml-2 opacity-40 font-normal">v4.2.0_2025</span>
          </span>
        </div>

        <nav className="flex items-center bg-bg-card border border-border-color rounded-md p-1">
          <button 
            onClick={() => setActiveTab('compare')}
            className={`px-4 py-1.5 rounded-sm flex items-center gap-2 transition-all ${activeTab === 'compare' ? 'bg-blue text-bg-main font-bold' : 'text-text-muted hover:text-text-primary'}`}
          >
            <Repeat size={14} />
            <span className="text-[10px] uppercase tracking-wider">Compare Offers</span>
          </button>
          <button 
            onClick={() => setActiveTab('reverse')}
            className={`px-4 py-1.5 rounded-sm flex items-center gap-2 transition-all ${activeTab === 'reverse' ? 'bg-blue text-bg-main font-bold' : 'text-text-muted hover:text-text-primary'}`}
          >
            <TrendingUp size={14} />
            <span className="text-[10px] uppercase tracking-wider">Find My Rate</span>
          </button>
          <button 
            onClick={() => setActiveTab('hustle')}
            className={`px-4 py-1.5 rounded-sm flex items-center gap-2 transition-all ${activeTab === 'hustle' ? 'bg-blue text-bg-main font-bold' : 'text-text-muted hover:text-text-primary'}`}
          >
            <Zap size={14} />
            <span className="text-[10px] uppercase tracking-wider">Side Hustle</span>
          </button>
        </nav>

        <div className="flex items-center gap-4">
          <button onClick={exportPDF} className="flex items-center gap-2 text-text-muted hover:text-text-primary transition-colors">
            <Download size={16} />
            <span className="text-[10px] uppercase tracking-widest font-bold">Export PDF</span>
          </button>
        </div>
      </header>

      <main className="flex-1 flex overflow-hidden">
        {/* --- Sidebar (Inputs) --- */}
        <aside className="w-[380px] grid-line-r flex flex-col bg-bg-card overflow-y-auto custom-scrollbar">
          <div className="p-6 space-y-8">
            <section className="space-y-4">
              <div className="flex items-center justify-between mb-2">
                 <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue">Core Context</h2>
                 <ShieldCheck size={14} className="text-text-muted opacity-50" />
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-text-muted uppercase">Filing Status</label>
                  <select 
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                    className="w-full bg-bg-input border border-border-color rounded-sm p-2 text-xs font-mono focus:border-blue outline-none transition-all"
                  >
                    {FILING_STATUSES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                  </select>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-text-muted uppercase">Target State</label>
                  <select 
                    value={stateName}
                    onChange={(e) => setStateName(e.target.value)}
                    className="w-full bg-bg-input border border-border-color rounded-sm p-2 text-xs font-mono focus:border-blue outline-none transition-all"
                  >
                    {STATES.map(s => <option key={s.name} value={s.name}>{s.name} {s.badge ? `(${s.badge})` : ''}</option>)}
                  </select>
                </div>
              </div>
            </section>

            {activeTab === 'compare' && (
              <section className="space-y-6">
                 <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue">Income Comparison</h2>
                 <div className="space-y-4">
                    <div className="space-y-2">
                       <div className="flex justify-between items-end">
                         <label className="text-[10px] font-bold text-text-muted uppercase">W2 Salary</label>
                         <span className="text-sm font-mono text-text-primary">${w2Salary.toLocaleString()}</span>
                       </div>
                       <input type="range" min="30000" max="500000" step="1000" value={w2Salary} onChange={(e) => setW2Salary(parseInt(e.target.value))} className="w-full accent-blue appearance-none bg-border-color h-1 rounded-full cursor-pointer" />
                    </div>
                    <div className="space-y-2">
                       <div className="flex justify-between items-end">
                         <label className="text-[10px] font-bold text-text-muted uppercase">1099 Gross Income</label>
                         <span className="text-sm font-mono text-text-primary">${contractIncome.toLocaleString()}</span>
                       </div>
                       <input type="range" min="30000" max="600000" step="1000" value={contractIncome} onChange={(e) => setContractIncome(parseInt(e.target.value))} className="w-full accent-green appearance-none bg-border-color h-1 rounded-full cursor-pointer" />
                    </div>
                 </div>
              </section>
            )}

            {activeTab === 'reverse' && (
              <section className="space-y-6">
                 <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue">Reverse Strategy</h2>
                 <div className="space-y-2">
                    <div className="flex justify-between items-end">
                       <label className="text-[10px] font-bold text-text-muted uppercase">Target W2 Salary</label>
                       <span className="text-sm font-mono text-text-primary">${targetW2Salary.toLocaleString()}</span>
                    </div>
                    <input type="range" min="50000" max="400000" step="5000" value={targetW2Salary} onChange={(e) => setTargetW2Salary(parseInt(e.target.value))} className="w-full accent-blue appearance-none bg-border-color h-1 rounded-full cursor-pointer" />
                 </div>
              </section>
            )}

            {activeTab === 'hustle' && (
              <section className="space-y-6">
                <h2 className="text-[10px] font-black uppercase tracking-[0.2em] text-blue">Hustle Calibration</h2>
                <div className="space-y-4">
                   <div className="space-y-2">
                      <div className="flex justify-between items-end">
                         <label className="text-[10px] font-bold text-text-muted uppercase">Primary Salary</label>
                         <span className="text-sm font-mono text-text-primary">${hustleW2Salary.toLocaleString()}</span>
                      </div>
                      <input type="range" min="10000" max="300000" step="5000" value={hustleW2Salary} onChange={(e) => setHustleW2Salary(parseInt(e.target.value))} className="w-full accent-blue appearance-none bg-border-color h-1 rounded-full cursor-pointer" />
                   </div>
                   <div className="space-y-2">
                      <div className="flex justify-between items-end">
                         <label className="text-[10px] font-bold text-text-muted uppercase">Hustle Revenue</label>
                         <span className="text-sm font-mono text-text-primary">${hustle1099Income.toLocaleString()}</span>
                      </div>
                      <input type="range" min="1000" max="150000" step="1000" value={hustle1099Income} onChange={(e) => setHustle1099Income(parseInt(e.target.value))} className="w-full accent-green appearance-none bg-border-color h-1 rounded-full cursor-pointer" />
                   </div>
                </div>
              </section>
            )}

            <Accordion title="W2 Employer Benefits" icon={Briefcase}>
               <div className="space-y-4 py-2">
                  <div className="space-y-1">
                    <label className="text-[9px] text-text-muted uppercase font-bold">Health Subsidy ($ / mo)</label>
                    <input type="number" value={benefits.health} onChange={(e) => setBenefits({...benefits, health: parseInt(e.target.value) || 0})} className="w-full bg-bg-main border border-border-color p-2 rounded-sm font-mono text-xs" />
                  </div>
                  <div className="space-y-1">
                    <label className="text-[9px] text-text-muted uppercase font-bold">401k Match (%)</label>
                    <input type="number" value={benefits.match} onChange={(e) => setBenefits({...benefits, match: parseInt(e.target.value) || 0})} className="w-full bg-bg-main border border-border-color p-2 rounded-sm font-mono text-xs" />
                  </div>
               </div>
            </Accordion>

            <Accordion title="Business Deductions" icon={TrendingUp}>
               <div className="space-y-3 py-2">
                  {(Object.entries(deductions) as [string, DeductionItem][]).map(([key, item]) => (
                    <div key={key} className="flex items-center justify-between p-2 bg-bg-main/30 border border-border-color/50 rounded-sm">
                       <label className="text-[9px] text-text-muted uppercase font-bold">{key.replace(/([A-Z])/g, ' $1')}</label>
                       <div className="flex items-center gap-2">
                          <input type="number" value={item.value} onChange={(e) => setDeductions({...deductions, [key]: {...item, value: parseInt(e.target.value) || 0}})} className="w-20 bg-bg-main border border-border-color p-1 rounded-sm font-mono text-[10px]" />
                          <input type="checkbox" checked={item.active} onChange={(e) => setDeductions({...deductions, [key]: {...item, active: e.target.checked}})} className="accent-blue" />
                       </div>
                    </div>
                  ))}
               </div>
            </Accordion>
          </div>
        </aside>

        {/* --- Content Area --- */}
        <div className="flex-1 overflow-y-auto bg-bg-main custom-scrollbar">
          <div className="p-8 max-w-6xl mx-auto space-y-10">
            {activeTab === 'compare' && (
              <div className="space-y-10">
                <div className={`p-6 border-l-4 rounded-md flex items-center justify-between ${resultsCompare.contract.takeHome > resultsCompare.w2.totalValue ? 'border-green bg-green/5' : 'border-blue bg-blue/5'}`}>
                   <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${resultsCompare.contract.takeHome > resultsCompare.w2.totalValue ? 'bg-green text-bg-main' : 'bg-blue text-bg-main'}`}>
                        <Trophy size={24} />
                      </div>
                      <div>
                        <h3 className="text-lg font-black uppercase tracking-tighter">
                          {resultsCompare.contract.takeHome > resultsCompare.w2.totalValue ? '1099 Wins' : 'W2 Wins'}
                        </h3>
                        <p className="text-xs text-text-muted font-medium">
                          Margin: <span className="text-text-primary font-bold font-mono tracking-tight">${Math.abs(resultsCompare.contract.takeHome - resultsCompare.w2.totalValue).toLocaleString()}</span> delta / year
                        </p>
                      </div>
                   </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="bg-bg-card border border-border-color rounded-sm p-6 space-y-6">
                      <h2 className="text-2xl font-black tracking-tighter uppercase">W2 Package</h2>
                      <StatBox label="Cash Take-Home" value={resultsCompare.w2.cashTakeHome} colorClass="text-blue" />
                      <div className="h-[1px] bg-border-color" />
                      <div className="space-y-2 text-xs font-mono text-text-muted">
                         <div className="flex justify-between"><span>Federal Tax</span><span>-${resultsCompare.w2.federalTax.toLocaleString()}</span></div>
                         <div className="flex justify-between"><span>State Tax</span><span>-${resultsCompare.w2.stateTax.toLocaleString()}</span></div>
                         <div className="flex justify-between font-bold text-text-primary pt-2 border-t border-border-color"><span>TOTAL VALUE</span><span>${resultsCompare.w2.totalValue.toLocaleString()}</span></div>
                      </div>
                   </div>
                   <div className="bg-bg-card border border-border-color rounded-sm p-6 space-y-6">
                      <h2 className="text-2xl font-black tracking-tighter uppercase">1099 Package</h2>
                      <StatBox label="Adjusted Take-Home" value={resultsCompare.contract.takeHome} colorClass="text-green" />
                      <div className="h-[1px] bg-border-color" />
                      <div className="space-y-2 text-xs font-mono text-text-muted">
                         <div className="flex justify-between"><span>SE Tax</span><span>-${resultsCompare.contract.seTax.toLocaleString()}</span></div>
                         <div className="flex justify-between"><span>QBI Shield</span><span className="text-green">+${resultsCompare.contract.qbi.toLocaleString()}</span></div>
                         <div className="flex justify-between font-bold text-text-primary pt-2 border-t border-border-color"><span>NET PROFIT</span><span>${resultsCompare.contract.netProfit.toLocaleString()}</span></div>
                      </div>
                   </div>
                </div>

                <div className="h-[300px] w-full bg-bg-card border border-border-color p-6 rounded-sm">
                   <Bar 
                     data={{
                        labels: ['W2 Total Value', '1099 Net Value'],
                        datasets: [{
                          data: [resultsCompare.w2.totalValue, resultsCompare.contract.takeHome],
                          backgroundColor: ['#58A6FF', '#3FB950'],
                          borderRadius: 4
                        }]
                     }}
                     options={{ maintainAspectRatio: false, plugins: { legend: { display: false } } }}
                   />
                </div>
              </div>
            )}

            {activeTab === 'reverse' && (
              <div className="space-y-10 text-center max-w-2xl mx-auto">
                 <h2 className="text-4xl font-black tracking-tighter uppercase">Parity Discovery</h2>
                 <p className="text-text-muted italic">Required 1099 rate to match ${targetW2Salary.toLocaleString()} W2 total value:</p>
                 <div className="bg-bg-card border border-blue/40 rounded-lg p-10 shadow-blue-glow">
                    <div className="text-7xl font-black tracking-tighter font-mono text-text-primary">
                       $<AnimatedNumber value={reverseRate} />
                    </div>
                    <div className="flex justify-center gap-6 mt-6">
                       <span className="text-xs font-bold text-blue uppercase bg-blue/10 px-4 py-1.5 rounded-full border border-blue/20">~${(reverseRate / 2080).toLocaleString(undefined, { maximumFractionDigits: 0 })} / Hour</span>
                       <span className="text-xs font-bold text-text-muted uppercase bg-bg-main px-4 py-1.5 rounded-full border border-border-color">12-Month Runrate</span>
                    </div>
                 </div>
              </div>
            )}

            {activeTab === 'hustle' && (
               <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-bg-card border border-border-color rounded-sm p-6 space-y-8">
                     <h3 className="text-xs font-black uppercase tracking-[0.2em] text-blue">Tax Matrix</h3>
                     <StatBox label="Combined Net Pay" value={resultsHustle.w2.cashTakeHome + resultsHustle.res1099.takeHome} colorClass="text-blue" />
                     <div className="grid grid-cols-2 gap-4">
                        <StatBox label="W2 Portion" value={resultsHustle.w2.cashTakeHome} prefix="$" />
                        <StatBox label="Hustle Portion" value={resultsHustle.res1099.takeHome} prefix="$" colorClass="text-green" />
                     </div>
                  </div>
                  <div className="bg-bg-card border border-border-color rounded-sm p-6 flex flex-col items-center justify-center">
                     <div className="h-48 w-48">
                        <Doughnut 
                          data={{
                            labels: ['Take Home', 'IRS Drain'],
                            datasets: [{
                              data: [resultsHustle.w2.cashTakeHome + resultsHustle.res1099.takeHome, (resultsHustle.w2.gross + resultsHustle.res1099.gross) - (resultsHustle.w2.cashTakeHome + resultsHustle.res1099.takeHome)],
                              backgroundColor: ['#58A6FF', '#F85149'],
                              borderWidth: 0,
                            }]
                          }}
                          options={{
                            maintainAspectRatio: false,
                            cutout: '80%',
                            plugins: { legend: { display: false } }
                          }}
                        />
                     </div>
                     <span className="text-[10px] uppercase font-bold text-text-muted mt-6">Effective Tax Load</span>
                     <p className="text-2xl font-black font-mono">{(100 - ((resultsHustle.w2.cashTakeHome + resultsHustle.res1099.takeHome) / (resultsHustle.w2.gross + resultsHustle.res1099.gross) * 100)).toFixed(1)}%</p>
                  </div>
               </div>
            )}

            <section className="pt-24 border-t border-border-color">
               <StateGuideSwitcher state={stateName} />
            </section>
          </div>

          <footer className="py-8 bg-bg-card grid-line-t px-8 flex justify-between items-center text-[10px] font-bold text-text-muted uppercase tracking-widest">
             <span>FISCAL 2025 COMPLIANCE MODULE LOADED</span>
             <div className="flex gap-4">
                <span>{new Date().toLocaleDateString()}</span>
                <button onClick={exportPDF} className="text-blue underline">Export PDF Fiscal Log</button>
             </div>
          </footer>
        </div>
      </main>
    </div>
  );
}
