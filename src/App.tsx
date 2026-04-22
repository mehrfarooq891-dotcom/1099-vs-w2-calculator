/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { 
  ChevronDown, 
  ChevronUp, 
  Download, 
  Briefcase, 
  TrendingUp, 
  Calculator,
  Trophy,
  ArrowRight,
  ShieldCheck,
  Check,
  HelpCircle,
  Quote,
  Info,
  Users,
  Target,
  Shield
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import jsPDF from 'jspdf';

// --- Constants & Data (Updated for 2026 Estimates) ---

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

const FEDERAL_BRACKETS_2026 = {
  single: [
    { threshold: 0, rate: 0.10 },
    { threshold: 12250, rate: 0.12 },
    { threshold: 49800, rate: 0.22 },
    { threshold: 106150, rate: 0.24 },
    { threshold: 202650, rate: 0.32 },
    { threshold: 257325, rate: 0.35 },
    { threshold: 643250, rate: 0.37 },
  ],
  mfj: [
    { threshold: 0, rate: 0.10 },
    { threshold: 24500, rate: 0.12 },
    { threshold: 99600, rate: 0.22 },
    { threshold: 212300, rate: 0.24 },
    { threshold: 405300, rate: 0.32 },
    { threshold: 514650, rate: 0.35 },
    { threshold: 771900, rate: 0.37 },
  ],
  hoh: [
    { threshold: 0, rate: 0.10 },
    { threshold: 17450, rate: 0.12 },
    { threshold: 66600, rate: 0.22 },
    { threshold: 106150, rate: 0.24 },
    { threshold: 202650, rate: 0.32 },
    { threshold: 257300, rate: 0.35 },
    { threshold: 643250, rate: 0.37 },
  ]
};

const STANDARD_DEDUCTION_2026 = {
  single: 15450,
  mfj: 30900,
  hoh: 23200,
};

const SS_CAP_2026 = 180500;
const SE_NET_MULTIPLIER = 0.9235;
const QBI_PHASEOUT_SINGLE = 202650;
const QBI_PHASEOUT_MFJ = 405300;

// --- Types ---

interface DeductionItem {
  value: number;
  active: boolean;
}

interface Deductions {
  [key: string]: DeductionItem;
}

// --- Helper Components ---

const AnimatedNumber = ({ value, prefix = "$", duration = 800 }: { value: number, prefix?: string, duration?: number }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const startTimeRef = useRef<number | null>(null);
  const startValueRef = useRef(0);

  useEffect(() => {
    startValueRef.current = displayValue;
    startTimeRef.current = null;
    
    const animate = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const progress = Math.min((timestamp - startTimeRef.current) / duration, 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
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

const InputGroup = ({ label, children }: { label: string, children: React.ReactNode }) => (
  <div className="space-y-2">
    <label className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-text-muted">{label}</label>
    {children}
  </div>
);

const Accordion = ({ title, children, icon: Icon }: any) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="border border-border-color/30 rounded-lg overflow-hidden bg-bg-card/30">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 hover:bg-bg-input/20 transition-colors"
      >
        <div className="flex items-center gap-3">
          {Icon && <Icon size={16} className="text-blue" />}
          <span className="text-xs md:text-sm font-bold text-text-primary">{title}</span>
        </div>
        {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-4 pt-0 space-y-4">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const AboutPage = ({ onBack }: { onBack: () => void }) => (
  <motion.div
    key="about"
    initial={{ opacity: 0, y: 10 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -10 }}
    transition={{ duration: 0.2 }}
    className="flex-grow"
  >
    <section className="py-24 px-6">
      <div className="max-w-5xl mx-auto space-y-20">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-text-primary">About COMPS ENGINE</h1>
          <p className="text-xl text-text-muted max-w-2xl mx-auto">
            Making complex tax decisions simple and transparent for every US professional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-blue/20 blur-3xl rounded-full scale-75 group-hover:scale-90 transition-transform duration-500" />
              <img 
                src="https://randomuser.me/api/portraits/men/36.jpg" 
                alt="David Chen" 
                className="relative w-full aspect-square object-cover rounded-2xl border-2 border-border-color/30 grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
            
            <div className="p-8 border border-border-color/30 rounded-2xl bg-bg-card/50 space-y-4">
              <div className="flex items-center gap-3 text-blue">
                <Target size={20} />
                <h3 className="font-mono font-bold uppercase tracking-widest text-sm">Mission</h3>
              </div>
              <p className="text-lg font-bold text-text-primary italic leading-relaxed">
                "Making complex tax decisions simple and transparent for every US professional."
              </p>
            </div>
          </div>

          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-black text-text-primary">Meet David Chen</h2>
              <p className="text-lg text-text-muted leading-relaxed">
                David Chen is a tax strategy specialist with 13 years of experience helping 
                US professionals navigate the W2 vs 1099 decision. Having advised over 
                2,000 contractors and employees across California, New York, and Texas, he 
                built COMPS ENGINE to make complex tax calculations accessible to everyone.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { label: "13 Years", sub: "Tax Strategy Experience", icon: Shield },
                { label: "2,000+", sub: "Professionals Advised", icon: Users },
                { label: "All 50", sub: "US States Covered", icon: Check },
                { label: "2026", sub: "Tax Compliance Ready", icon: ShieldCheck }
              ].map((stat, i) => (
                <div key={i} className="p-6 border border-border-color/20 rounded-xl bg-bg-input/10 space-y-2">
                  <stat.icon size={20} className="text-blue mb-2" />
                  <div className="text-2xl font-black text-text-primary font-mono">{stat.label}</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-text-muted">{stat.sub}</div>
                </div>
              ))}
            </div>

            <div className="space-y-8 pt-6 border-t border-border-color/30">
              <div className="space-y-4">
                <h3 className="text-xs font-mono font-black text-blue uppercase tracking-widest">Trust Signals</h3>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-text-muted">
                    <Check size={14} className="text-green" /> Updated for 2026 tax year
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold text-text-muted">
                    <Check size={14} className="text-green" /> Not affiliated with the IRS
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-xl bg-red/5 border border-red/20 space-y-2">
                 <div className="flex items-center gap-2 text-red">
                    <HelpCircle size={16} />
                    <span className="text-[10px] font-black uppercase tracking-widest">Disclaimer</span>
                 </div>
                 <p className="text-xs text-text-muted leading-relaxed">
                    COMPS ENGINE provides estimates for informational purposes only. Not tax or legal advice. Consult a licensed CPA for your situation.
                 </p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="pt-20 text-center">
           <button 
             onClick={onBack}
             className="px-10 py-5 bg-blue text-white font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all shadow-blue-glow inline-flex items-center gap-3"
           >
             Back to Calculator <Calculator size={20} />
           </button>
        </div>
      </div>
    </section>
  </motion.div>
);

// --- Main App ---

export default function App() {
  const [currentView, setCurrentView] = useState<'home' | 'about'>('home');
  const [status, setStatus] = useState('single');
  const [stateName, setStateName] = useState('California');
  const [w2Salary, setW2Salary] = useState(105000);
  const [contractIncome, setContractIncome] = useState(130000);

  const [benefits, setBenefits] = useState({
    health: 6000,
    match: 4,
    pto: 15,
    other: 1200
  });

  const [deductions, setDeductions] = useState<Deductions>({
    homeOffice: { value: 2400, active: true },
    equipment: { value: 1500, active: true },
    software: { value: 1200, active: true },
    other: { value: 0, active: false }
  });

  // --- Calculation Engine ---

  const calculateFederalTax = (taxableIncome: number, filingStatus: string) => {
    const brackets = FEDERAL_BRACKETS_2026[filingStatus as keyof typeof FEDERAL_BRACKETS_2026];
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

  const calculateResults = (sName: string = stateName) => {
    const s = status as keyof typeof STANDARD_DEDUCTION_2026;
    const stdDed = STANDARD_DEDUCTION_2026[s];
    const stateObj = STATES.find(x => x.name === sName) || STATES[0];

    // W2 Logic
    const w2Fica = Math.min(w2Salary, SS_CAP_2026) * 0.062 + w2Salary * 0.0145;
    const w2Sdi = sName === 'California' ? w2Salary * 0.011 : 0;
    const w2FedTax = calculateFederalTax(Math.max(0, w2Salary - stdDed), status);
    
    let w2StateTax = 0;
    const caTaxable = w2Salary - stdDed;
    if (stateObj.type === 'flat') w2StateTax = caTaxable * stateObj.rate;
    else if (stateObj.name === 'California') {
        const caBrackets = [
            { threshold: 0, rate: 0.01 }, { threshold: 10412, rate: 0.02 }, { threshold: 24684, rate: 0.04 },
            { threshold: 38959, rate: 0.06 }, { threshold: 54081, rate: 0.08 }, { threshold: 68350, rate: 0.093 },
            { threshold: 349137, rate: 0.103 }, { threshold: 418961, rate: 0.113 }, { threshold: 698274, rate: 0.123 },
            { threshold: 1000000, rate: 0.133 }
        ];
        for (let i = 0; i < caBrackets.length; i++) {
            const current = caBrackets[i];
            const next = caBrackets[i + 1]?.threshold || Infinity;
            const resLayer = Math.min(Math.max(0, caTaxable - current.threshold), next - current.threshold);
            w2StateTax += resLayer * current.rate;
            if (caTaxable <= next) break;
        }
    } else {
        w2StateTax = caTaxable * stateObj.rate;
    }

    const w2CashTakeHome = w2Salary - w2FedTax - w2StateTax - w2Fica - w2Sdi;
    const w2BenefitsTotal = benefits.health + (w2Salary * (benefits.match / 100)) + (w2Salary / 260 * benefits.pto) + benefits.other;
    const w2TotalValue = w2CashTakeHome + w2BenefitsTotal;

    // 1099 Logic
    let totalExpenses = 0;
    (Object.values(deductions) as DeductionItem[]).forEach(d => { if (d.active) totalExpenses += d.value; });
    
    const profit = Math.max(0, contractIncome - totalExpenses);
    const seTaxableIncome = profit * SE_NET_MULTIPLIER;
    const seTax = (Math.min(seTaxableIncome, SS_CAP_2026) * 0.124) + (seTaxableIncome * 0.029);
    const seDed = seTax / 2;
    
    const agi = profit - seDed;
    let qbi = agi * 0.20;
    const qPhase = status === 'mfj' ? QBI_PHASEOUT_MFJ : QBI_PHASEOUT_SINGLE;
    if (profit > qPhase) {
        const range = status === 'mfj' ? 100000 : 50000;
        const reduction = Math.min(1, (profit - qPhase) / range);
        qbi = qbi * (1 - reduction);
    }
    
    const cFedTax = calculateFederalTax(Math.max(0, agi - qbi - stdDed), status);
    
    let cStateTax = 0;
    const profitTaxable = profit - stdDed;
    if (stateObj.type === 'flat') cStateTax = profitTaxable * stateObj.rate;
    else if (stateObj.name === 'California') {
        const caBrackets = [
            { threshold: 0, rate: 0.01 }, { threshold: 10412, rate: 0.02 }, { threshold: 24684, rate: 0.04 },
            { threshold: 38959, rate: 0.06 }, { threshold: 54081, rate: 0.08 }, { threshold: 68350, rate: 0.093 },
            { threshold: 349137, rate: 0.103 }, { threshold: 418961, rate: 0.113 }, { threshold: 698274, rate: 0.123 },
            { threshold: 1000000, rate: 0.133 }
        ];
        for (let i = 0; i < caBrackets.length; i++) {
            const current = caBrackets[i];
            const next = caBrackets[i + 1]?.threshold || Infinity;
            const resLayer = Math.min(Math.max(0, profitTaxable - current.threshold), next - current.threshold);
            cStateTax += resLayer * current.rate;
            if (profitTaxable <= next) break;
        }
    } else {
        cStateTax = profitTaxable * stateObj.rate;
    }

    const cTakeHome = profit - cFedTax - cStateTax - seTax;

    return {
        w2: {
            takeHome: w2CashTakeHome,
            federal: w2FedTax,
            state: w2StateTax,
            total: w2TotalValue,
        },
        c1099: {
            takeHome: cTakeHome,
            seTax: seTax,
            qbi: qbi,
            profit: profit,
        }
    };
  };

  const results = useMemo(() => calculateResults(), [status, stateName, w2Salary, contractIncome, benefits, deductions]);

  const margin = results.c1099.takeHome - results.w2.total;
  const is1099Winner = margin > 0;

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.text("COMPS ENGINE FISCAL LOG", 20, 30);
    doc.setFontSize(14);
    doc.text(`Scenario: W2 Salary $${w2Salary.toLocaleString()} vs 1099 Gross $${contractIncome.toLocaleString()}`, 20, 45);
    doc.text(`Jurisdiction: ${stateName} | Status: ${status}`, 20, 55);
    doc.text("--------------------------------------------------", 20, 65);
    doc.text(`W2 Cash Take-Home: $${results.w2.takeHome.toLocaleString()}`, 20, 75);
    doc.text(`W2 Total Value: $${results.w2.total.toLocaleString()}`, 20, 85);
    doc.text(`1099 Adjusted Take-Home: $${results.c1099.takeHome.toLocaleString()}`, 20, 95);
    doc.text(`1099 Net Profit: $${results.c1099.profit.toLocaleString()}`, 20, 105);
    doc.text(`Margin: $${Math.abs(margin).toLocaleString()} (${is1099Winner ? '1099 Wins' : 'W2 Wins'})`, 20, 115);
    doc.save("fiscal-log.pdf");
  };

  const scrollToTool = () => {
    document.getElementById('tool')?.scrollIntoView({ behavior: 'smooth' });
  };

  const compareStates = ['California', 'Texas', 'New York'];
  const stateTableData = compareStates.map(name => {
    const r = calculateResults(name);
    const m = r.c1099.takeHome - r.w2.total;
    return { name, w2: r.w2.total, c1099: r.c1099.takeHome, winner: m > 0 ? '1099' : 'W2' };
  });

  return (
    <div className="flex flex-col min-h-screen bg-bg-main font-sans selection:bg-blue/30 selection:text-white">
      
      {/* GLOBAL HEADER */}
      <nav className="sticky top-0 z-50 glass border-b border-border-color/30 px-6 py-4">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <button 
            onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
            className="flex items-center gap-2 text-blue font-mono font-bold tracking-tighter hover:opacity-80 transition-opacity"
          >
            <Calculator size={18} />
            <span>COMPS ENGINE</span>
          </button>
          
          <div className="flex items-center gap-6">
            <button 
              onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
              className={`text-[10px] uppercase font-black tracking-widest transition-colors ${currentView === 'home' ? 'text-blue' : 'text-text-muted hover:text-text-primary'}`}
            >
              Calculator
            </button>
            <button 
              onClick={() => { setCurrentView('about'); window.scrollTo(0, 0); }}
              className={`text-[10px] uppercase font-black tracking-widest transition-colors ${currentView === 'about' ? 'text-blue' : 'text-text-muted hover:text-text-primary'}`}
            >
              About
            </button>
          </div>
        </div>
      </nav>

      <AnimatePresence mode="wait">
        {currentView === 'home' ? (
          <motion.div
            key="home"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {/* 1. HERO SECTION */}
            <section className="relative py-24 md:py-32 px-6 overflow-hidden border-b border-border-color/30">
        <div className="max-w-5xl mx-auto space-y-8 text-center relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue/10 border border-blue/20 text-blue font-mono text-[10px] md:text-sm font-bold uppercase tracking-widest"
          >
            <ShieldCheck size={14} />
            FISCAL 2026 COMPLIANCE LOADED
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black tracking-tighter leading-none text-text-primary"
          >
            W2 vs 1099 Calculator<br />
            <span className="text-blue text-glow-blue">See Your True Take-Home Pay</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-text-muted max-w-2xl mx-auto leading-relaxed"
          >
            Compare your salary vs contract income across all 50 states. 
            Updated for 2026 tax year.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 md:gap-8 pt-8"
          >
            <div className="flex items-center gap-2 text-[10px] md:text-sm font-bold text-text-muted">
              <Check size={16} className="text-green" /> ✓ All 50 US States
            </div>
            <div className="flex items-center gap-2 text-[10px] md:text-sm font-bold text-text-muted">
              <Check size={16} className="text-green" /> ✓ 2026 Tax Rates
            </div>
            <div className="flex items-center gap-2 text-[10px] md:text-sm font-bold text-text-muted">
              <Check size={16} className="text-green" /> ✓ No Signup Required
            </div>
            <div className="flex items-center gap-2 text-[10px] md:text-sm font-bold text-text-muted">
              <Check size={16} className="text-green" /> ✓ Instant Results
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4 }}
            className="pt-10"
          >
            <button 
                onClick={scrollToTool}
                className="group relative inline-flex items-center gap-3 px-8 py-4 bg-blue text-white font-black uppercase tracking-widest rounded-full hover:bg-blue/90 transition-all shadow-blue-glow"
            >
                Calculate Results <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </motion.div>
        </div>
        
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] bg-blue blur-[120px] rounded-full" />
          <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-green blur-[100px] rounded-full" />
        </div>
      </section>

      {/* 2. TOOL SECTION */}
      <section id="tool" className="py-20 px-6 bg-bg-main relative">
        <div className="max-w-5xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter text-text-primary">Compare Offers</h2>
            <div className="h-1 w-20 bg-blue mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-10">
              <div className="space-y-6">
                <h3 className="text-xs font-mono font-black text-blue uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck size={16} /> 01. Core Context
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <InputGroup label="Filing Status">
                    <select 
                      value={status}
                      onChange={(e) => setStatus(e.target.value)}
                      className="w-full bg-bg-input border border-border-color rounded-lg px-4 py-3 text-xs md:text-sm text-text-primary outline-none focus:border-blue transition-all"
                    >
                      {FILING_STATUSES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                    </select>
                  </InputGroup>
                  <InputGroup label="Target State">
                    <select 
                      value={stateName}
                      onChange={(e) => setStateName(e.target.value)}
                      className="w-full bg-bg-input border border-border-color rounded-lg px-4 py-3 text-xs md:text-sm text-text-primary outline-none focus:border-blue transition-all"
                    >
                      {STATES.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                    </select>
                  </InputGroup>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xs font-mono font-black text-blue uppercase tracking-widest flex items-center gap-2">
                  <TrendingUp size={16} /> 02. Income Comparison
                </h3>
                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <label className="text-xs font-bold text-text-muted uppercase">W2 Salary</label>
                      <span className="text-lg font-mono font-bold text-text-primary">${w2Salary.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" min="30000" max="600000" step="1000"
                      value={w2Salary} onChange={(e) => setW2Salary(parseInt(e.target.value))}
                      className="w-full accent-blue bg-border-color h-2 rounded-full cursor-pointer appearance-none"
                    />
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-end">
                      <label className="text-xs font-bold text-text-muted uppercase">1099 Gross Income</label>
                      <span className="text-lg font-mono font-bold text-text-primary text-green">${contractIncome.toLocaleString()}</span>
                    </div>
                    <input 
                      type="range" min="30000" max="600000" step="1000"
                      value={contractIncome} onChange={(e) => setContractIncome(parseInt(e.target.value))}
                      className="w-full accent-green bg-border-color h-2 rounded-full cursor-pointer appearance-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <Accordion title="W2 Employer Benefits" icon={Briefcase}>
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <InputGroup label="Health Insurance value">
                        <input type="number" value={benefits.health} onChange={e => setBenefits({...benefits, health: parseInt(e.target.value)||0})} className="w-full bg-bg-main border border-border-color rounded-md px-3 py-2 text-sm text-text-primary" />
                      </InputGroup>
                      <InputGroup label="401k match (%)">
                        <input type="number" value={benefits.match} onChange={e => setBenefits({...benefits, match: parseInt(e.target.value)||0})} className="w-full bg-bg-main border border-border-color rounded-md px-3 py-2 text-sm text-text-primary" />
                      </InputGroup>
                      <InputGroup label="PTO value (days)">
                        <input type="number" value={benefits.pto} onChange={e => setBenefits({...benefits, pto: parseInt(e.target.value)||0})} className="w-full bg-bg-main border border-border-color rounded-md px-3 py-2 text-sm text-text-primary" />
                      </InputGroup>
                      <InputGroup label="Other benefits">
                        <input type="number" value={benefits.other} onChange={e => setBenefits({...benefits, other: parseInt(e.target.value)||0})} className="w-full bg-bg-main border border-border-color rounded-md px-3 py-2 text-sm text-text-primary" />
                      </InputGroup>
                   </div>
                </Accordion>

                <Accordion title="Business Deductions (1099)" icon={Calculator}>
                   <div className="space-y-4">
                      {(Object.entries(deductions) as [string, DeductionItem][]).map(([key, item]) => (
                        <div key={key} className="flex items-center justify-between gap-4">
                          <div className="flex items-center gap-3 text-text-primary">
                            <input type="checkbox" checked={item.active} onChange={e => setDeductions({...deductions, [key]: {...item, active: e.target.checked}})} className="accent-blue w-4 h-4" />
                            <span className="text-xs font-bold uppercase text-text-muted">{key.replace(/([A-Z])/g, ' $1')}</span>
                          </div>
                          <input type="number" value={item.value} onChange={e => setDeductions({...deductions, [key]: {...item, value: parseInt(e.target.value)||0}})} className="w-24 bg-bg-main border border-border-color rounded-md px-2 py-1 text-xs text-right text-text-primary" />
                        </div>
                      ))}
                   </div>
                </Accordion>
              </div>

              <div className="pt-4">
                  <button onClick={scrollToTool} className="w-full py-4 bg-blue text-white font-black uppercase tracking-widest rounded-lg hover:shadow-blue-glow transition-all flex items-center justify-center gap-2">
                    Compare Now <ArrowRight size={18} />
                  </button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-bg-card border border-border-color rounded-xl p-8 space-y-6 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                   <div className="absolute top-0 left-0 w-full h-1 bg-text-muted/30" />
                   <div>
                     <h3 className="text-xs font-mono font-bold text-text-muted uppercase tracking-widest mb-4">W2 Package</h3>
                     <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-[10px] text-text-muted font-bold uppercase">Cash Take-Home</span>
                          <p className="text-3xl font-mono font-black text-white"><AnimatedNumber value={results.w2.takeHome} /></p>
                        </div>
                        <div className="space-y-2 border-t border-border-color/30 pt-4">
                          <div className="flex justify-between items-center text-[11px] font-mono">
                            <span className="text-text-muted">Federal Tax</span> <span className="text-red">-${results.w2.federal.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center text-[11px] font-mono">
                            <span className="text-text-muted">State Tax</span> <span className="text-red">-${results.w2.state.toLocaleString()}</span>
                          </div>
                        </div>
                     </div>
                   </div>
                   <div className="pt-8 mt-auto border-t border-border-color/30">
                      <span className="text-[10px] text-text-muted font-bold uppercase block mb-1">TOTAL VALUE</span>
                      <p className="text-2xl font-mono font-black text-blue"><AnimatedNumber value={results.w2.total} /></p>
                   </div>
                </div>

                <div className="bg-bg-card border border-border-color rounded-xl p-8 space-y-6 shadow-2xl relative overflow-hidden flex flex-col justify-between">
                   <div className="absolute top-0 left-0 w-full h-1 bg-green/50" />
                   <div>
                     <h3 className="text-xs font-mono font-bold text-green uppercase tracking-widest mb-4">1099 Package</h3>
                     <div className="space-y-4">
                        <div className="space-y-1">
                          <span className="text-[10px] text-text-muted font-bold uppercase">Adjusted Take-Home</span>
                          <p className="text-3xl font-mono font-black text-green"><AnimatedNumber value={results.c1099.takeHome} /></p>
                        </div>
                        <div className="space-y-2 border-t border-border-color/30 pt-4">
                          <div className="flex justify-between items-center text-[11px] font-mono">
                            <span className="text-text-muted">SE Tax</span> <span className="text-red">-${results.c1099.seTax.toLocaleString()}</span>
                          </div>
                          <div className="flex justify-between items-center text-[11px] font-mono">
                            <span className="text-text-muted">QBI Shield</span> <span className="text-green">+${results.c1099.qbi.toLocaleString()}</span>
                          </div>
                        </div>
                     </div>
                   </div>
                   <div className="pt-8 mt-auto border-t border-border-color/30">
                      <span className="text-[10px] text-text-muted font-bold uppercase block mb-1">NET PROFIT</span>
                      <p className="text-2xl font-mono font-black text-text-primary"><AnimatedNumber value={results.c1099.profit} /></p>
                   </div>
                </div>
              </div>

              <div className={`p-6 rounded-xl border-l-4 flex items-center justify-between shadow-lg ${is1099Winner ? 'bg-green/10 border-green' : 'bg-blue/10 border-blue'}`}>
                 <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center ${is1099Winner ? 'bg-green text-white' : 'bg-blue text-white'}`}>
                      <Trophy size={20} />
                    </div>
                    <div>
                      <p className="text-xs md:text-sm font-black uppercase text-text-primary">
                        {is1099Winner ? '1099 Wins' : 'W2 Wins'} by ${Math.abs(margin).toLocaleString()}/year
                      </p>
                    </div>
                 </div>
              </div>

              <p className="text-[9px] text-text-muted leading-tight uppercase font-mono italic text-center">
                * COMPLIANCE: 2026 FISCAL AUDIT ACTIVE
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CONTENT SECTIONS */}
      <section className="py-24 px-6 border-y border-border-color/30 bg-bg-card/20">
        <div className="max-w-4xl mx-auto space-y-24">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-text-primary text-center">The Progressive Tax Wall</h2>
            <div className="h-1 w-12 bg-blue mx-auto" />
            <p className="text-text-muted leading-relaxed text-center text-lg">
              Most professionals ignore how the "Invisible Tax" of employer-side FICA works. When you switch to 1099, you aren't just becoming the boss—you're becoming the IRS Collector. You're liable for both the employee and employer share of Social Security and Medicare taxes, totaling 15.3%.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-text-primary text-center">The SDI Factor — A W2 Hidden Cost</h2>
            <div className="h-1 w-12 bg-blue mx-auto" />
            <p className="text-text-muted leading-relaxed text-center text-lg">
              State Disability Insurance (SDI) is often a hidden deduction on W2 paychecks. In states like California, this is a 1.1% hit on all wages. 1099 contractors are exempt from this payroll tax.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-text-primary text-center">The No QBI Trap in California</h2>
            <div className="h-1 w-12 bg-blue mx-auto" />
            <p className="text-text-muted leading-relaxed text-center text-lg">
              Federal law allows for a massive 20% Qualified Business Income (QBI) deduction. But major jurisdictions—specifically California—do not conform to this at the state level.
            </p>
          </div>
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-text-primary text-center">State by State Breakdown</h2>
            <div className="h-1 w-12 bg-blue mx-auto" />
            <div className="overflow-hidden border border-border-color/30 rounded-xl bg-bg-card">
              <table className="w-full text-left font-mono">
                <thead>
                  <tr className="bg-bg-input/30 border-b border-border-color/30">
                    <th className="p-4 text-[10px] font-black uppercase text-text-muted">State</th>
                    <th className="p-4 text-[10px] font-black uppercase text-text-muted">W2 Net</th>
                    <th className="p-4 text-[10px] font-black uppercase text-text-muted">1099 Net</th>
                    <th className="p-4 text-[10px] font-black uppercase text-text-muted">Winner</th>
                  </tr>
                </thead>
                <tbody className="text-xs md:text-sm">
                  {stateTableData.map(row => (
                    <tr key={row.name} className="border-b border-border-color/10 last:border-0 hover:bg-white/5">
                      <td className="p-4 font-bold text-text-primary">{row.name}</td>
                      <td className="p-4 text-text-muted">${row.w2.toLocaleString()}</td>
                      <td className="p-4 text-text-muted">${row.c1099.toLocaleString()}</td>
                      <td className={`p-4 font-black ${row.winner === '1099' ? 'text-green' : 'text-blue'}`}>{row.winner}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EXPERT SECTION */}
      <section className="py-24 px-6 bg-gradient-to-b from-bg-main to-bg-card/30">
        <div className="max-w-3xl mx-auto">
          <div className="relative p-10 md:p-16 border border-blue/20 rounded-2xl glass space-y-10 text-center">
              <Quote className="absolute top-8 left-8 text-blue/10 scale-[3]" size={64} />
              <p className="relative z-10 text-xl md:text-2xl font-bold italic leading-relaxed text-text-primary">
                "The difference between W2 and 1099 isn't just about taxes — it's about your entire financial picture. Know the numbers before you negotiate."
              </p>
              <div className="flex flex-col items-center gap-4">
                  <img src="https://randomuser.me/api/portraits/men/36.jpg" alt="Expert" className="w-20 h-20 rounded-full border-4 border-blue/30 shadow-blue-glow" />
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-lg font-black text-text-primary">David Chen</h4>
                      <p className="text-xs font-bold uppercase tracking-widest text-blue font-mono">Tax Strategy Specialist</p>
                    </div>
                    <p className="text-xs text-text-muted leading-relaxed max-w-md mx-auto">
                      David Chen is a tax strategy specialist with 13 years of experience helping 
                      US professionals navigate the W2 vs 1099 decision. Having advised over 
                      2,000 contractors and employees across California, New York, and Texas, he 
                      built COMPS ENGINE to make complex tax calculations accessible to everyone.
                    </p>
                  </div>
              </div>
          </div>
        </div>
      </section>

      {/* 7. FAQ */}
      <section className="py-24 px-6 bg-bg-main">
        <div className="max-w-4xl mx-auto space-y-16">
          <div className="text-center space-y-4">
              <h2 className="text-3xl font-black uppercase tracking-tighter text-text-primary">Fiscal Queries</h2>
              <div className="h-1 w-12 bg-blue mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div className="space-y-3">
              <h3 className="text-sm font-black uppercase text-blue flex items-center gap-2">What is the self-employment tax rate?</h3>
              <p className="text-sm text-text-muted leading-relaxed">The rate is 15.3%, representing combined employer and employee shares of Social Security and Medicare.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-black uppercase text-blue flex items-center gap-2">What is the QBI deduction?</h3>
              <p className="text-sm text-text-muted leading-relaxed">QBI (Section 199A) allows contractors to deduct up to 20% of net profit from federal taxes.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-black uppercase text-blue flex items-center gap-2">How does California differ from Texas?</h3>
              <p className="text-sm text-text-muted leading-relaxed">Texas has zero state tax. California has high rates and doesn't conform to QBI at the state level.</p>
            </div>
            <div className="space-y-3">
              <h3 className="text-sm font-black uppercase text-blue flex items-center gap-2">Should I form an LLC for 1099 income?</h3>
              <p className="text-sm text-text-muted leading-relaxed">LLCs provide liability protection. S-Corp elections within LLCs can save on payroll taxes for high earners.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. CTA BANNER */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="bg-blue rounded-3xl p-10 md:p-16 text-center space-y-8 shadow-blue-glow relative">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight text-white leading-tight">
              Know your numbers before<br />your next salary negotiation.
            </h2>
            <button onClick={scrollToTool} className="bg-bg-main text-white px-8 py-4 font-black uppercase tracking-widest rounded-full hover:scale-105 transition-all flex items-center gap-3 mx-auto">
              Compare My Offers <Calculator size={20} />
            </button>
          </div>
        </div>
      </section>

          </motion.div>
        ) : (
          <AboutPage onBack={() => { setCurrentView('home'); window.scrollTo(0, 0); }} />
        )}
      </AnimatePresence>

      {/* 9. FOOTER & EXPORT */}
      <footer className="py-12 px-6 border-t border-border-color/30 bg-bg-main">
        <div className="max-w-6xl mx-auto space-y-8">
          <div className="flex flex-col md:flex-row justify-between gap-10">
             <div className="max-w-md space-y-4">
                <button 
                  onClick={() => { setCurrentView('home'); window.scrollTo(0, 0); }}
                  className="text-blue font-mono font-bold hover:opacity-80 transition-opacity"
                >
                  COMPS ENGINE
                </button>
                <p className="text-[10px] text-text-muted uppercase leading-relaxed font-mono">
                  COMPS ENGINE provides estimates for informational purposes only. Not tax or legal advice. Consult a licensed CPA.
                </p>
             </div>
             <div className="flex flex-col items-end gap-6">
               <button onClick={exportPDF} className="flex items-center gap-2 px-6 py-2 rounded-lg border border-border-color hover:bg-bg-input/20 transition-all text-xs font-black uppercase tracking-widest text-text-primary">
                 <Download size={14} className="text-blue" /> Export PDF Fiscal Log
               </button>
               <button 
                 onClick={() => { setCurrentView('about'); window.scrollTo(0, 0); }}
                 className="text-[10px] uppercase font-black text-text-muted hover:text-blue transition-colors"
               >
                 About the Author
               </button>
             </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
