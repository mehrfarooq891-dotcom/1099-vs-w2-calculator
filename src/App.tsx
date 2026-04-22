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
  Target,
  Shield,
  Users
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
            federal: cFedTax,
            state: cStateTax
        }
    };
  };

  const results = useMemo(() => calculateResults(), [status, stateName, w2Salary, contractIncome, benefits, deductions]);

  const stateTableData = useMemo(() => {
    return ['California', 'Texas', 'New York'].map(name => {
      const res = calculateResults(name);
      return {
        name,
        w2: res.w2.total,
        c1099: res.c1099.takeHome,
        winner: res.c1099.takeHome > res.w2.total ? '1099' : 'W2'
      };
    });
  }, [status, w2Salary, contractIncome, benefits, deductions]);

  const toolRef = useRef<HTMLDivElement>(null);
  const scrollToTool = () => toolRef.current?.scrollIntoView({ behavior: 'smooth' });

  const exportPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("COMPS ENGINE: Fiscal Comparison Report", 20, 20);
    doc.setFontSize(12);
    doc.text(`Filing Status: ${status}`, 20, 40);
    doc.text(`Target State: ${stateName}`, 20, 50);
    doc.text(`W2 Salary: $${w2Salary.toLocaleString()}`, 20, 60);
    doc.text(`1099 Gross: $${contractIncome.toLocaleString()}`, 20, 70);
    
    doc.text("W2 Results:", 20, 90);
    doc.text(`Total Value: $${results.w2.total.toLocaleString()}`, 30, 100);
    doc.text(`Cash Take-Home: $${results.w2.takeHome.toLocaleString()}`, 30, 110);
    
    doc.text("1099 Results:", 20, 130);
    doc.text(`Adjusted Take-Home: $${results.c1099.takeHome.toLocaleString()}`, 30, 140);
    doc.text(`SE Tax: $${results.c1099.seTax.toLocaleString()}`, 30, 150);
    
    doc.save(`COMPS_ENGINE_REPORT_${new Date().toISOString().split('T')[0]}.pdf`);
  };

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
            <section ref={toolRef} className="py-24 px-6 bg-bg-main relative">
              <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* TOOL INPUTS */}
                <div className="lg:col-span-12 space-y-12">
                   <div className="text-center space-y-4">
                      <h2 className="text-4xl font-black uppercase tracking-tighter text-text-primary">Compare Offers</h2>
                      <div className="h-1 w-12 bg-blue mx-auto" />
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
                      {/* CORE CONTEXT */}
                      <div className="space-y-8 p-8 rounded-2xl bg-bg-card/50 border border-border-color/30">
                        <h3 className="text-xs font-black uppercase tracking-widest text-blue flex items-center gap-2">
                           <Briefcase size={16} /> Core Context
                        </h3>
                        
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                           <InputGroup label="Filing Status">
                              <select 
                                value={status} 
                                onChange={e => setStatus(e.target.value)}
                                className="w-full bg-bg-input border border-border-color rounded-lg px-4 py-3 text-sm text-text-primary focus:border-blue outline-none transition-all cursor-pointer"
                              >
                                {FILING_STATUSES.map(s => <option key={s.id} value={s.id}>{s.label}</option>)}
                              </select>
                           </InputGroup>
                           <InputGroup label="Target State">
                              <select 
                                value={stateName} 
                                onChange={e => setStateName(e.target.value)}
                                className="w-full bg-bg-input border border-border-color rounded-lg px-4 py-3 text-sm text-text-primary focus:border-blue outline-none transition-all cursor-pointer"
                              >
                                {STATES.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                              </select>
                           </InputGroup>
                        </div>

                        <div className="space-y-6 pt-4">
                           <InputGroup label={`W2 Salary: $${w2Salary.toLocaleString()}`}>
                              <input type="range" min="50000" max="500000" step="1000" value={w2Salary} onChange={e => setW2Salary(parseInt(e.target.value))} className="w-full accent-blue appearance-none bg-blue/10 h-1.5 rounded-full outline-none" />
                           </InputGroup>
                           <InputGroup label={`1099 Gross: $${contractIncome.toLocaleString()}`}>
                              <input type="range" min="50000" max="500000" step="1000" value={contractIncome} onChange={e => setContractIncome(parseInt(e.target.value))} className="w-full accent-green appearance-none bg-green/10 h-1.5 rounded-full outline-none" />
                           </InputGroup>
                        </div>
                      </div>

                      {/* EXTRA INPUTS (ACCORDIONS) */}
                      <div className="space-y-4">
                        <Accordion title="W2 Employer Benefits" icon={TrendingUp}>
                          <div className="space-y-4">
                            <InputGroup label="Annual Health Premium Value">
                              <input type="number" value={benefits.health} onChange={e => setBenefits({...benefits, health: parseInt(e.target.value)||0})} className="w-full bg-bg-main border border-border-color rounded-md px-4 py-2 text-sm text-text-primary" />
                            </InputGroup>
                            <InputGroup label="401k Match (%)">
                              <input type="number" value={benefits.match} onChange={e => setBenefits({...benefits, match: parseInt(e.target.value)||0})} className="w-full bg-bg-main border border-border-color rounded-md px-4 py-2 text-sm text-text-primary" />
                            </InputGroup>
                            <InputGroup label="Paid Time Off (Days)">
                              <input type="number" value={benefits.pto} onChange={e => setBenefits({...benefits, pto: parseInt(e.target.value)||0})} className="w-full bg-bg-main border border-border-color rounded-md px-4 py-2 text-sm text-text-primary" />
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
                   </div>
                </div>

                {/* 3. RESULTS DASHBOARD */}
                <div className="lg:col-span-12 space-y-12 pt-12">
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      {/* W2 RESULTS */}
                      <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className={`p-10 rounded-3xl border-2 transition-all relative overflow-hidden ${results.w2.total > results.c1099.takeHome ? 'border-blue shadow-blue-glow' : 'border-border-color/30 opacity-80'}`}
                      >
                         <h4 className="text-xs font-black uppercase text-blue font-mono tracking-widest pb-6 border-b border-border-color/30 mb-8">W2 Package Value</h4>
                         <div className="space-y-6">
                            <div className="flex justify-between items-end">
                               <span className="text-text-muted text-sm font-bold uppercase">Cash Take-Home</span>
                               <div className="text-3xl font-black text-white font-mono"><AnimatedNumber value={results.w2.takeHome} /></div>
                            </div>
                            <div className="space-y-2 border-t border-border-color/30 pt-4">
                               <div className="flex justify-between text-xs font-bold text-red/80">
                                  <span>Federal Income Tax</span>
                                  <span>-<AnimatedNumber value={results.w2.federal} /></span>
                                </div>
                                <div className="flex justify-between text-xs font-bold text-red/80">
                                  <span>State Income Tax</span>
                                  <span>-<AnimatedNumber value={results.w2.state} /></span>
                                </div>
                            </div>
                            <div className="pt-8 text-center border-t border-border-color/30">
                               <div className="text-[10px] font-black uppercase text-text-muted tracking-widest mb-1">Total Economic Value</div>
                               <div className="text-5xl font-black text-blue tracking-tighter"><AnimatedNumber value={results.w2.total} /></div>
                            </div>
                         </div>
                         {results.w2.total > results.c1099.takeHome && (
                            <div className="absolute top-4 right-4 bg-blue text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                               <Trophy size={12} /> Winner
                            </div>
                         )}
                      </motion.div>

                      {/* 1099 RESULTS */}
                      <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        className={`p-10 rounded-3xl border-2 transition-all relative overflow-hidden ${results.c1099.takeHome > results.w2.total ? 'border-green shadow-blue-glow' : 'border-border-color/30 opacity-80'}`}
                      >
                         <h4 className="text-xs font-black uppercase text-green font-mono tracking-widest pb-6 border-b border-border-color/30 mb-8">1099 Adj Take-Home</h4>
                         <div className="space-y-6">
                            <div className="flex justify-between items-end">
                               <span className="text-text-muted text-sm font-bold uppercase">Net After-Tax Profit</span>
                               <div className="text-3xl font-black text-white font-mono"><AnimatedNumber value={results.c1099.takeHome} /></div>
                            </div>
                            <div className="space-y-2 border-t border-border-color/30 pt-4">
                               <div className="flex justify-between text-xs font-bold text-red/80">
                                  <span>Self-Employment Tax</span>
                                  <span>-<AnimatedNumber value={results.c1099.seTax} /></span>
                                </div>
                                <div className="flex justify-between text-xs font-bold text-green/80">
                                  <span>QBI Deduction Shield</span>
                                  <span>+<AnimatedNumber value={results.c1099.qbi} /></span>
                                </div>
                            </div>
                            <div className="pt-8 text-center border-t border-border-color/30">
                               <div className="text-[10px] font-black uppercase text-text-muted tracking-widest mb-1">Final Discretionary Cash</div>
                               <div className="text-5xl font-black text-green tracking-tighter"><AnimatedNumber value={results.c1099.takeHome} /></div>
                            </div>
                         </div>
                         {results.c1099.takeHome > results.w2.total && (
                            <div className="absolute top-4 right-4 bg-green text-white text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest flex items-center gap-1">
                               <Trophy size={12} /> Winner
                            </div>
                         )}
                      </motion.div>
                   </div>
                </div>

              </div>
            </section>

            {/* 4. CONTENT SECTIONS */}
            <section className="py-24 px-6 bg-bg-card/20 border-y border-border-color/30">
              <div className="max-w-6xl mx-auto space-y-32">
                
                {/* POINT 1 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div className="space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary leading-none">
                      The Progressive<br /><span className="text-blue">Tax Wall</span>
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed">
                      As your income grows, each additional dollar is taxed at a higher rate. COMPS ENGINE captures the exact math of federal and state brackets for 2026, ensuring you know where your next raise actually lands.
                    </p>
                    <div className="flex items-center gap-4 p-6 bg-bg-input/20 border border-border-color/30 rounded-xl">
                       <HelpCircle className="text-blue shrink-0" />
                       <p className="text-xs font-mono font-bold uppercase tracking-widest text-text-muted">Pro Tip: 1099 earners can bypass some layers through QBI deduction.</p>
                    </div>
                  </div>
                  <div className="p-10 bg-bg-main border border-border-color/30 shadow-2xl rounded-3xl">
                     <div className="space-y-6">
                        <div className="h-4 w-full bg-blue/20 rounded-full overflow-hidden"><div className="h-full bg-blue w-1/4" /></div>
                        <div className="h-4 w-full bg-blue/20 rounded-full overflow-hidden"><div className="h-full bg-blue w-2/3" /></div>
                        <div className="h-4 w-full bg-blue/20 rounded-full overflow-hidden"><div className="h-full bg-blue w-full" /></div>
                        <div className="pt-4 flex justify-between text-[10px] font-mono font-bold text-text-muted uppercase">
                           <span>12%</span><span>22%</span><span>24%</span><span>35%</span>
                        </div>
                     </div>
                  </div>
                </div>

                {/* POINT 2 */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                  <div className="order-2 md:order-1 p-10 bg-bg-main border border-border-color/30 shadow-2xl rounded-3xl">
                     <div className="flex flex-col gap-4">
                        {[1,2,3,4,5].map(i => (
                           <div key={i} className={`h-12 border border-border-color/30 rounded-lg p-3 flex justify-between items-center ${i==1?'bg-red/10 border-red/30':''}`}>
                              <span className="text-xs font-bold text-text-muted">Benefit Line {i}</span>
                              <span className="text-sm font-black text-white">$1,200</span>
                           </div>
                        ))}
                     </div>
                  </div>
                  <div className="order-1 md:order-2 space-y-8">
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-text-primary leading-none">
                      The "SDI Factor"<br /><span className="text-green">In California</span>
                    </h2>
                    <p className="text-lg text-text-muted leading-relaxed">
                      W2 workers in California face an automatic 1.1% SDI deduction that contractors can skip. At high incomes, this is a multi-thousand dollar swing that most generic calculators completely ignore.
                    </p>
                    <div className="flex items-center gap-4 p-6 bg-bg-input/20 border border-border-color/30 rounded-xl">
                       <Check className="text-green shrink-0" />
                       <p className="text-xs font-mono font-bold uppercase tracking-widest text-text-muted">COMPS ENGINE handles state-specific conformity logic automatically.</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* 5. STATE COMPARISON TABLE */}
            <section className="py-24 px-6 bg-bg-main overflow-x-auto">
              <div className="max-w-6xl mx-auto space-y-12">
                <div className="text-center space-y-4">
                  <h2 className="text-3xl font-black uppercase tracking-tighter text-text-primary">State Comparison</h2>
                  <div className="h-1 w-12 bg-blue mx-auto" />
                </div>
                
                <div className="bg-bg-card/50 border border-border-color/30 rounded-3xl overflow-hidden shadow-2xl min-w-[600px]">
                  <table className="w-full text-left">
                    <thead className="bg-bg-input/20 border-b border-border-color/30">
                      <tr>
                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-blue">Jurisdiction</th>
                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-text-muted">W2 Tot Value</th>
                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-text-muted">1099 Adj Net</th>
                        <th className="p-4 text-[10px] font-black uppercase tracking-widest text-text-muted">Winner</th>
                      </tr>
                    </thead>
                    <tbody className="text-xs md:text-sm">
                      {stateTableData.map(row => (
                        <tr key={row.name} className="border-b border-border-color/10 last:border-0 hover:bg-white/5">
                          <td className="p-4 font-bold text-text-primary">{row.name}</td>
                          <td className="p-4 text-text-muted">${row.w2.toLocaleString()}</td>
                          <td className="p-4 text-text-muted">${row.c1099.toLocaleString()}</td>
                          <td className="p-4">
                            <span className={`px-3 py-1 rounded-full font-black uppercase text-[10px] ${row.winner === 'W2' ? 'bg-blue/10 text-blue' : 'bg-green/10 text-green'}`}>
                              {row.winner}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
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
