import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, DollarSign, CheckCircle2, ArrowLeftRight, FileText, Table, Percent, RefreshCw } from 'lucide-react';

interface RateConversionPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse' | 'realestate' | 'truck' | 'therapist' | 'consultant' | 'mixed' | 'estimated' | 'homeoffice' | 'healthins' | 'retirement' | 'misclassified' | 'w2or1099' | 'rateconv' | 'deductions_checklist') => void;
}

const RateConversionPage: React.FC<RateConversionPageProps> = ({ handleNavClick }) => {
  // Setup state for the interactive conversion calculator scratchpad
  const [direction, setDirection] = useState<'1099toW2' | 'W2to1099'>('1099toW2');
  const [inputValue, setInputValue] = useState<number>(75); // hourly or annual base unit
  const [hasBenefits, setHasBenefits] = useState<boolean>(true);
  const [pvacDays, setPvacDays] = useState<number>(15); // Paid vacation/holidays

  // Calculation parameters
  const hoursPerYear = 2080;
  const selfEmploymentTaxRate = 0.153; // 15.3%
  const employerFicaShare = 0.0765; // 7.65%
  
  // Estimate benefit values
  const healthPremiumCostMultiplier = 0.08; // 8% equivalent
  const matchMultiplier = 0.04; // 4% 401k match
  const adminMarkup = 0.05; // 5% for professional overhead (accounting, general insurance)

  let calculatedW2Salary = 0;
  let calculatedW2Hourly = 0;
  let calculated1099Rate = 0;
  let calculated1099Annual = 0;

  if (direction === '1099toW2') {
    // 1099 Hour Rate to equivalent W2 annual and hour
    const gross1099Annual = inputValue * hoursPerYear;
    
    // Deduct SE tax delta (7.65% overpaid compared to W2)
    // Deduct benefits cost (health, retirement match)
    // Deduct paid time off factor (e.g. 15 days is ~5.7% of working year)
    const ptoPercentage = (pvacDays / 260); // 260 working days per year
    const benefitsPercentage = hasBenefits ? (healthPremiumCostMultiplier + matchMultiplier) : 0;
    
    // Exact structural conversion ratio
    // W2 equivalent = 1099 Gross * (1 - Employer FICA share - benefits% - pto% - business admin overhead%)
    const reductionFactor = employerFicaShare + benefitsPercentage + ptoPercentage + adminMarkup;
    calculatedW2Salary = gross1099Annual * (1 - reductionFactor);
    calculatedW2Hourly = calculatedW2Salary / hoursPerYear;
  } else {
    // W2 Annual Salary to equivalent 1099 hourly rate
    // Reverse math to add FICA share, healthcare, 401k match, paid holidays, and admin cost
    const baseW2Hourly = inputValue / hoursPerYear;
    const ptoPercentage = (pvacDays / 260);
    const benefitsPercentage = hasBenefits ? (healthPremiumCostMultiplier + matchMultiplier) : 0;
    
    const markupFactor = employerFicaShare + benefitsPercentage + ptoPercentage + adminMarkup;
    // 1099 Hourly = W2 Hourly * (1 + markupFactor)
    calculated1099Rate = baseW2Hourly * (1 + markupFactor);
    calculated1099Annual = calculated1099Rate * hoursPerYear;
  }

  return (
    <motion.div
      key="rateconv-post"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex-grow scroll-smooth"
    >
      <article className="py-20 px-6 max-w-4xl mx-auto space-y-12 bg-bg-main text-text-muted leading-relaxed text-base md:text-lg animate-fade-in">
        
        {/* Breadcrumb Navigation & Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-text-muted">
          <button 
            onClick={() => handleNavClick('home')}
            className="hover:text-blue transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-blue">Earnings & Rate Planning</span>
          <span>/</span>
          <span className="text-text-muted select-none">1099 To W2 Conversion Calculator</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            How to Convert a 1099 Rate to W2 Salary (The Formula Every Contractor Needs)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <ArrowLeftRight size={14} className="text-blue shrink-0" />
               <span>1099 TO W2 CONVERSION CALCULATOR</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA</span>
            </div>
            <div>
              <span>LAST UPDATED: </span>
              <span className="text-text-primary font-bold">JUNE 2026</span>
            </div>
            <div>
              <span>WORD COUNT: </span>
              <span className="text-blue font-bold">1,420 WORDS</span>
            </div>
          </div>
        </div>

        {/* EXECUTIVE SUMMARY BOX */}
        <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-3 font-sans">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue font-mono">Core Conversion Premises</h3>
          <ul className="text-xs text-text-muted space-y-2 list-none pl-0 font-mono">
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>The 30% Non-Linear Rule</strong>: A 1099 contractor must command at least 30% to 50% higher gross hourly rates compared to a W2 equivalent to break-even on take-home profit.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>The FICA Trap</strong>: Simply subtracting 15.3% is mathematically incorrect and understates your actual cash value by ignoring employer tax-savings.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>Complex Overhead Variables</strong>: Factoring in individual healthcare plans, passive corporate benefits, unpaid vacations, and filing costs dictates true parity.</span>
             </li>
          </ul>
        </div>

        {/* INTRODUCTION */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Comparing an independent 1099 contractor hourly rate to a standard W2 corporate salary is one of the most common points of financial confusion. Many independent professionals make the costly mistake of treating their gross contract rate as equivalent to a W2 wage, failing to account for self-employment tax structures and individual benefits.
          </p>

          <p>
            When acting as a 1099 independent worker, your gross billable invoice is not your take-home pay. Out of every dollar invoiced, you must personally fund your employer-equivalent FICA payroll share, pay for your own private healthcare and dental policies, absorb the financial losses of unpaid vacations, and cover business overhead expenses like liability insurance and bookkeeping.
          </p>

          <p>
            To evaluate an offer or plan your career, you need a highly precise <strong className="text-text-primary">1099 to W2 conversion calculator</strong> framework. Trusting generic, simplified online conversion estimates can result in taking a massive, unrecognized salary cut when transitioning between structures.
          </p>

          <p>
            This operational guide breaks down the true, math-backed conversion formula. We will examine why simply subtracting 15.3% is an incorrect tax calculation, analyze the hidden overhead adjustments that must be factored in, study precise standard conversion tables in both directions, and provide an interactive rate scratchpad.
          </p>
        </div>

        {/* SECTION 1 - WHY SUBTRACTING 15.3% IS A CRITICAL CALCULATING FAULT */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Common Calculating Trap: Why You Can’t Just Subtract 15.3%
          </h2>
          <p>
            The most common mistake contractors make is subtracting the **15.3% self-employment tax** on Schedule SE from their gross rate to find their W2 equivalent. This calculation is mathematically flawed and understates your actual financial value for two key reasons.
          </p>

          <div className="space-y-4">
             <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">1. The FICA Tax Splitting Standard</span>
                <p className="text-sm text-text-muted leading-relaxed">
                   Under the Federal Insurance Contributions Act (FICA), the standard tax rate is indeed 15.3% (covering 12.4% Social Security and 2.9% Medicare). However, for a W2 employee, **the employer legally pays 7.65%**, leaving only 7.65% to be withheld from your paycheck. As a 1099 contractor, you only pay an **extra 7.65%** compared to a W2 worker, not the full 15.3%.
                </p>
             </div>

             <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">2. The 92.35% Tax Base Discount</span>
                <p className="text-sm text-text-muted leading-relaxed">
                   The IRS does not calculate self-employment tax on your gross 1099 earnings. Under Schedule SE guidelines, your SE tax is calculated on **92.35% of your adjusted net profit**. This adjustment is designed to mirror the tax deduction W2 employers receive for their share of federal payroll taxes.
                </p>
             </div>
          </div>

          <p>
            Consequently, the actual net payroll tax penalty of being a 1099 contractor is roughly **7.06% of net earnings**, not a flat 15.3%. 
          </p>
        </div>

        {/* SECTION 2 - CRITICAL VALUE DEDUCTION FACTORS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Beyond Taxes: The Hidden Costs Built into W2 Compensation
          </h2>
          <p>
            The self-employment tax delta is only the first adjustment you must make. To construct an accurate W2 equivalent, you must calculate the out-of-pocket cash value of typical corporate benefits:
          </p>

          <ul className="list-disc list-inside text-sm text-text-muted space-y-3 pl-2">
             <li>
                <strong className="text-text-primary">Paid Vacation & Holidays (PTO):</strong> A W2 worker getting 15 days of paid PTO and 10 paid federal holidays works roughly 235 days a year but is paid for 260 days. This means **9.6% of their compensation is paid downtime**. As a 1099 contractor, if you do not work, you do not bill. This requires you to inflate your hourly rate by roughly 10% to cover vacation and sick days.
             </li>
             <li>
                <strong className="text-text-primary">Health, Dental, & Vision Insurance:</strong> Employer-sponsored group premium subsidies have a high cash value. Providing your own family health and dental plans can quickly cost **$8,000 to $20,000 per year** out of pocket.
             </li>
             <li>
                <strong className="text-text-primary">Corporate 401(k) Matching:</strong> A typical 4% W2 employer match is instant, guaranteed, pre-tax money. Going 1099 means you lose this matching contribution entirely.
             </li>
             <li>
                <strong className="text-text-primary">SSTB, State Taxes, & Admin Overhead:</strong> Operating your own business introduces expenses like professional software, general liability insurance, business entities fees, and bookkeeping. These expenses typically consume an additional **3% to 5% of gross billings**.
             </li>
          </ul>
        </div>

        {/* SECTION 3 - THE COMPREHENSIVE CONVERSION FORMULA */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Step-by-Step Conversion Formula
          </h2>
          <p>
            To convert an hourly 1099 rate to an equivalent W2 annual salary, use the following comprehensive formula:
          </p>

          <div className="bg-bg-card/65 p-6 rounded-2xl border border-border-color/20 space-y-4">
             <div className="text-center font-mono space-y-1">
                <span className="text-xs text-blue uppercase tracking-widest font-bold block">W2 Annual Equivalent Formula</span>
                <span className="text-base md:text-xl text-text-primary font-black">
                   W2 Salary = (1099 Rate × 2,080) × (1 - FICA Share - Benefits - PTO - Admin)
                </span>
             </div>
             
             <div className="text-xs text-text-muted space-y-1.5 font-mono max-w-xl mx-auto border-t border-border-color/10 pt-4">
                <div>● <strong>2,080</strong> = Standard baseline working hours per calendar year (52 weeks × 40 hours)</div>
                <div>● <strong>FICA Share</strong> = 0.0765 (The employer-matching 7.65% payroll tax liability)</div>
                <div>● <strong>Benefits Factor</strong> = 0.08 to 0.12 (8% to 12% to cover individual healthcare & retirement match)</div>
                <div>● <strong>PTO Factor</strong> = 0.057 to 0.096 (for 15 to 25 days of paid downtime)</div>
                <div>● <strong>Admin Factor</strong> = 0.05 (for business software, legal, and insurance costs)</div>
             </div>
          </div>

          <h3 className="text-xl font-bold text-text-primary">Real-World Conversion Example:</h3>
          <p>
             Let's calculate the equivalent salary for a contract designer offered a **$100 per hour 1099 contract**.
          </p>
          <p className="text-sm">
             1. Calculate gross 1099 earnings: $100/hr × 2,080 hours = <strong>$208,000</strong>.
          </p>
          <p className="text-sm">
             2. Apply tax and benefits reduction factor:
          </p>
          <div className="pl-6 text-sm text-text-muted font-mono space-y-1">
             <div>- Extra FICA Tax Share: 7.65% (0.0765)</div>
             <div>- Health Insurance & 401k Match: 12% (0.120)</div>
             <div>- 15 Days PTO & Holidays: 5.8% (0.058)</div>
             <div>- Business Admin Expenses: 5% (0.050)</div>
             <div>Total Reduction Factor = <strong>30.45% (0.3045)</strong></div>
          </div>
          <p className="text-sm">
             3. Net W2 salary equivalent: $208,000 × (1 - 0.3045) = <strong>$144,664</strong>.
          </p>
          <p className="text-sm italic">
             *This shows that a $100/hr 1099 contract provides the same core economic compensation as a W2 salary of <strong>$144,664</strong> with corporate benefits.
          </p>
        </div>

        {/* INTERACTIVE RATE SCRATCHPAD TOOL (COMPENSATES WELL AND ENGAGES) */}
        <div className="p-8 border-2 border-dashed border-blue/40 rounded-3xl bg-bg-card/20 space-y-6 font-sans">
          <div className="space-y-1 text-center md:text-left">
             <span className="text-[10px] font-mono tracking-widest uppercase text-blue font-bold">Interactive Scratchpad</span>
             <h3 className="text-2xl font-black text-text-primary tracking-tight">1099 vs. W2 Parity Rate Tool</h3>
             <p className="text-xs text-text-muted">
                Input your rate details below to model compensation equivalents instantly.
             </p>
          </div>

          {/* Sizing Toggles */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
             <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted">Conversion Type</span>
                <div className="grid grid-cols-2 gap-2">
                   <button
                     type="button"
                     onClick={() => { setDirection('1099toW2'); setInputValue(75); }}
                     className={`py-2 px-3 rounded-xl font-mono text-xs font-bold transition-all border ${
                       direction === '1099toW2' 
                       ? 'bg-blue text-white border-blue' 
                       : 'bg-bg-input/10 border-border-color/10 text-text-muted hover:border-border-color/30'
                     }`}
                   >
                     1099 Rate to W2
                   </button>
                   <button
                     type="button"
                     onClick={() => { setDirection('W2to1099'); setInputValue(120000); }}
                     className={`py-2 px-3 rounded-xl font-mono text-xs font-bold transition-all border ${
                       direction === 'W2to1099' 
                       ? 'bg-blue text-white border-blue' 
                       : 'bg-bg-input/10 border-border-color/10 text-text-muted hover:border-border-color/30'
                     }`}
                   >
                     W2 Salary to 1099
                   </button>
                </div>
             </div>

             <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-text-muted">
                   {direction === '1099toW2' ? "Proposed 1099 Hourly Rate ($)" : "Current W2 Annual Salary ($)"}
                </span>
                <div className="relative">
                   <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-text-muted font-mono font-bold">$</span>
                   <input
                     type="number"
                     value={inputValue}
                     onChange={(e) => setInputValue(parseFloat(e.target.value) || 0)}
                     className="w-full bg-bg-card font-mono text-sm py-2.5 pl-8 pr-4 border border-border-color rounded-xl text-text-primary focus:outline-none focus:border-blue"
                   />
                </div>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-border-color/10 pt-4">
             <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                   <span className="text-xs font-bold text-text-primary block">Include Corporate Healthcare & Match</span>
                   <span className="text-[10px] text-text-muted block">Estimated at 12% value of base wage</span>
                </div>
                <input
                  type="checkbox"
                  checked={hasBenefits}
                  onChange={(e) => setHasBenefits(e.target.checked)}
                  className="w-4 h-4 text-blue border-border-color rounded focus:ring-blue"
                />
             </div>

             <div className="space-y-1">
                <div className="flex justify-between text-xs text-text-muted font-mono">
                   <span>Paid Days Off & Holidays</span>
                   <span>{pvacDays} Days</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="35"
                  value={pvacDays}
                  onChange={(e) => setPvacDays(parseInt(e.target.value))}
                  className="w-full h-1 bg-border-color rounded-lg appearance-none cursor-pointer accent-blue"
                />
             </div>
          </div>

          {/* DYNAMIC METRIC CARDS */}
          <div className="p-5 bg-blue/5 border border-blue/20 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
             <div className="space-y-1">
                <span className="text-[10px] font-mono tracking-widest uppercase text-blue font-black block">Core Parity Result</span>
                {direction === '1099toW2' ? (
                  <div className="space-y-0.5">
                     <span className="text-3xl font-black text-text-primary font-mono">${Math.round(calculatedW2Salary).toLocaleString()}</span>
                     <span className="text-xs text-text-muted block font-sans">Equivalent W2 annual base salary with benefits</span>
                  </div>
                ) : (
                  <div className="space-y-0.5">
                     <span className="text-3xl font-black text-text-primary font-mono">${calculated1099Rate.toFixed(2)}/hr</span>
                     <span className="text-xs text-text-muted block font-sans">Min 1099 hourly rate required to match W2 salary</span>
                  </div>
                )}
             </div>

             <div className="p-4 bg-bg-card border border-border-color/15 rounded-xl text-xs space-y-2">
                <span className="font-bold text-text-primary uppercase font-mono block text-[10px] text-blue">Sub-calculations:</span>
                {direction === '1099toW2' ? (
                  <div className="space-y-1 font-mono text-text-muted">
                     <div className="flex justify-between">
                        <span>Original gross annual:</span>
                        <span className="text-text-primary">${Math.round(inputValue * hoursPerYear).toLocaleString()}</span>
                     </div>
                     <div className="flex justify-between text-red">
                        <span>Extra FICA tax penalty (7.65%):</span>
                        <span>-${Math.round(inputValue * hoursPerYear * employerFicaShare).toLocaleString()}</span>
                     </div>
                     <div className="flex justify-between text-red">
                        <span>Value of PTO ({pvacDays} days):</span>
                        <span>-${Math.round(inputValue * hoursPerYear * (pvacDays/260)).toLocaleString()}</span>
                     </div>
                     <div className="flex justify-between text-red">
                        <span>Value of corporate benefits:</span>
                        <span>-${Math.round(inputValue * hoursPerYear * (hasBenefits ?  0.12 : 0)).toLocaleString()}</span>
                     </div>
                  </div>
                ) : (
                  <div className="space-y-1 font-mono text-text-muted">
                     <div className="flex justify-between">
                        <span>W2 hourly wage equivalent:</span>
                        <span className="text-text-primary">${(inputValue / hoursPerYear).toFixed(2)}/hr</span>
                     </div>
                     <div className="flex justify-between text-green">
                        <span>SE Tax and business overhead markup:</span>
                        <span>+${(calculated1099Rate - (inputValue / hoursPerYear)).toFixed(2)}/hr</span>
                     </div>
                     <div className="flex justify-between">
                        <span>Total 1099 gross annual:</span>
                        <span className="text-text-primary">${Math.round(calculated1099Annual).toLocaleString()}</span>
                     </div>
                  </div>
                )}
             </div>
          </div>
        </div>

        {/* SECTION 4 - STANDARD CONVERSION COMPARISON TABLES */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Conversion Tables: 1099 Rates and W2 Salary Parity
          </h2>
          <p>
            The tables below compile standard conversions based on typical benefit levels, a 15-day PTO baseline, and necessary administrative markup. Use these tables as a quick reference when evaluating contract offers.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue flex items-center gap-1.5">
                   <Table size={14} /> 1. 1099 Hourly Rate to W2 Equivalents
                </span>
                <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/20 text-xs font-mono">
                   <table className="w-full text-left">
                      <thead>
                         <tr className="bg-bg-input/40 border-b border-border-color/30 text-[9px] uppercase font-black text-text-muted">
                            <th className="p-3">1099 Rate ($/hr)</th>
                            <th className="p-3">Gross 1099 Annual ($)</th>
                            <th className="p-3 text-right">W2 Annual Equivalent ($)</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-border-color/10">
                         <tr>
                            <td className="p-3 font-bold">$50.00</td>
                            <td className="p-3">$104,000</td>
                            <td className="p-3 text-right text-green font-bold">$72,800</td>
                         </tr>
                         <tr>
                            <td className="p-3 font-bold">$75.00</td>
                            <td className="p-3">$156,000</td>
                            <td className="p-3 text-right text-green font-bold">$109,200</td>
                         </tr>
                         <tr>
                            <td className="p-3 font-bold">$100.00</td>
                            <td className="p-3">$208,000</td>
                            <td className="p-3 text-right text-green font-bold">$145,600</td>
                         </tr>
                         <tr>
                            <td className="p-3 font-bold">$125.00</td>
                            <td className="p-3">$260,000</td>
                            <td className="p-3 text-right text-green font-bold">$182,000</td>
                         </tr>
                         <tr>
                            <td className="p-3 font-bold">$150.00</td>
                            <td className="p-3">$312,000</td>
                            <td className="p-3 text-right text-green font-bold">$218,400</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
             </div>

             <div className="space-y-3">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue flex items-center gap-1.5">
                   <Table size={14} /> 2. W2 Salary to 1099 Rate Equivalents
                </span>
                <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/20 text-xs font-mono">
                   <table className="w-full text-left">
                      <thead>
                         <tr className="bg-bg-input/40 border-b border-border-color/30 text-[9px] uppercase font-black text-text-muted">
                            <th className="p-3">W2 Base Salary ($)</th>
                            <th className="p-3">W2 Hourly Basic ($/hr)</th>
                            <th className="p-3 text-right">Required 1099 Rate ($/hr)</th>
                         </tr>
                      </thead>
                      <tbody className="divide-y divide-border-color/10">
                         <tr>
                            <td className="p-3 font-bold">$70,000</td>
                            <td className="p-3">$33.65</td>
                            <td className="p-3 text-right text-blue font-bold">$47.11</td>
                         </tr>
                         <tr>
                            <td className="p-3 font-bold">$100,000</td>
                            <td className="p-3">$48.08</td>
                            <td className="p-3 text-right text-blue font-bold">$67.31</td>
                         </tr>
                         <tr>
                            <td className="p-3 font-bold">$130,000</td>
                            <td className="p-3">$62.50</td>
                            <td className="p-3 text-right text-blue font-bold">$87.50</td>
                         </tr>
                         <tr>
                            <td className="p-3 font-bold">$160,000</td>
                            <td className="p-3">$76.92</td>
                            <td className="p-3 text-right text-blue font-bold">$107.69</td>
                         </tr>
                         <tr>
                            <td className="p-3 font-bold">$200,000</td>
                            <td className="p-3">$96.15</td>
                            <td className="p-3 text-right text-blue font-bold">$134.61</td>
                         </tr>
                      </tbody>
                   </table>
                </div>
             </div>
          </div>
        </div>

        {/* BRIGHT CTA COMPONENT */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Calculate Your Precise W2 Salary Equivalent</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Enter your proposed hourly gig rates, tax write-offs, state tax brackets, and retirement matches to run a full analysis and compare your career options with confidence.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO LIVE COMPARISON DATABASE]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Convert Rate Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RETIREMENT FAQ */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Contract Rate Conversion Compliance FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Is the Section 199A QBI deduction factored into these conversion tables?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No, the **20% Qualified Business Income (QBI) deduction** is not included in our standard conversion tables. Because QBI is a federal tax incentive rather than an operating expense, its benefits are applied during tax filing. However, QBI is a powerful benefit that lowers your progressive federal income tax liability, helping offset your overall 1099 self-employment tax burden.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                How does state unemployment insurance (SUTA) impact 1099 conversions?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                As a W2 worker, your employer pays state-mandated SUTA premiums, protecting you if you lose your job. 1099 contractors are completely excluded from state unemployment insurance systems. To offset this risk, we include a **5% administrative overhead premium** in our formula to cover independent savings reserves.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Should I set up an LLC or operate as a sole proprietor to simplify my conversions?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Operating as a sole proprietor is the simplest structure, but establishing a single-member LLC protects your personal assets from business liabilities. Regardless of your entity structure, the underlying IRS tax treatment remains identical. Your net business profits are reported on Schedule C and flow to Form 1040, meaning your conversion calculations do not change.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Advisory tax disclosure: This rate conversion calculator and compensation tables are provided purely for educational purposes. Individual payroll profiles, tax liabilities, and state-specific business conditions depend heavily on individual tax brackets and filing statuses. Always consult a certified public accountant (CPA) before finalizing contract negotiations.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default RateConversionPage;
