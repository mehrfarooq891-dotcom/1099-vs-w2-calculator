import React, { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  Bookmark, 
  CheckCircle2, 
  XCircle, 
  FileText, 
  ThumbsUp, 
  ThumbsDown, 
  Sparkles,
  ArrowLeftRight,
  TrendingUp,
  Sliders,
  DollarSign,
  Heart,
  Calendar,
  Lock,
  Globe
} from 'lucide-react';

interface ProsConsPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse' | 'realestate' | 'truck' | 'therapist' | 'consultant' | 'mixed' | 'estimated' | 'homeoffice' | 'healthins' | 'retirement' | 'misclassified' | 'w2or1099' | 'rateconv' | 'deductions_checklist' | 'proscons') => void;
}

const ProsConsPage: React.FC<ProsConsPageProps> = ({ handleNavClick }) => {
  // Setup state for the interactive Pros & Cons priority evaluator
  const [preferences, setPreferences] = useState<Record<string, number>>({
    incomePotential: 3,  // 1-5 rating scale of priority
    taxWriteOffs: 3,
    flexibility: 3,
    diversification: 3,
    retirementShield: 3,
    locationFreedom: 3,
    payrollTaxBurden: 3,
    benefitsLoss: 3,
    ptoDeficit: 3,
    complianceStress: 3,
    unemploymentRisk: 3,
    adminHours: 3
  });

  const handlePreferenceChange = (key: string, val: number) => {
    setPreferences(prev => ({ ...prev, [key]: val }));
  };

  // Compute the weight of 1099 vs W2 based on preferences
  const scoreMetrics = React.useMemo(() => {
    // 1099 score drives from how much the user values 1099 pros, and how little they fear/hate the 1099 cons
    const proSum = preferences.incomePotential + preferences.taxWriteOffs + preferences.flexibility + preferences.diversification + preferences.retirementShield + preferences.locationFreedom;
    const conSum = preferences.payrollTaxBurden + preferences.benefitsLoss + preferences.ptoDeficit + preferences.complianceStress + preferences.unemploymentRisk + preferences.adminHours;
    
    // Normalize to 100 points
    const rawTotal = proSum + (36 - conSum); // 36 is the max possible con sum (6 * 6)
    const normalizedScore = Math.min(100, Math.max(0, Math.round((rawTotal / 66) * 100)));
    return {
      score: normalizedScore,
      advice: normalizedScore >= 65 
        ? "Your priorities strongly favor the autonomy, cash multiplier potential, and tax shield capabilities of the 1099 structure." 
        : normalizedScore >= 45 
        ? "You are highly balanced. The choice depends on whether a client can offer a 30% to 50% hourly markup to offset your compliance friction." 
        : "Your preference for stability, comprehensive employer-sponsored safety nets, and zero admin overhead points directly to remaining a W2 employee."
    };
  }, [preferences]);

  return (
    <motion.div
      key="proscons-post"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex-grow scroll-smooth font-sans"
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
          <span className="text-blue">Career Tradeoffs</span>
          <span>/</span>
          <span className="text-text-muted select-none">1099 vs W2 Pros and Cons</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            1099 vs W2: The Complete Pros and Cons List (From Someone Who's Done Both)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <ArrowLeftRight size={14} className="text-blue shrink-0" />
               <span>1099 VS W2 PROS AND CONS</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, TAX WRITER</span>
            </div>
            <div>
              <span>LAST UPDATED: </span>
              <span className="text-text-primary font-bold">JUNE 2026</span>
            </div>
            <div>
              <span>WORD COUNT: </span>
              <span className="text-blue font-bold">1,475 WORDS</span>
            </div>
          </div>
        </div>

        {/* SUMMARY CARD */}
        <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue font-mono">The Author's Core Thesis</h3>
          <p className="text-sm text-text-muted leading-relaxed font-sans text-justify">
             I spent six years climbing the corporate ladder under W2 structures before taking the leap into 1099 self-employment. The core lesson is clear: 1099 is not a pay raise; it is an entirely different business model. If you do not charge at least a 30% premium to cover self-employment taxes, private healthcare, unpaid vacation, and admin tasks, you are taking a massive pay cut under the guise of freedom.
          </p>
        </div>

        {/* NARRATIVE INTRODUCTION */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
             I still remember the day I walked away from my W2 tech job. I had a comfortable $115,000 salary, subsidized dental care, and a 4% 401(k) company match. But when a client offered me a 1099 contract at $90 an hour, my head swirled with the promise of high earnings. On paper, $90 an hour translates to roughly $187,200 a year. It felt like a guaranteed victory.
          </p>

          <p>
             I signed the contract, set up a single-member LLC, and waited for my first invoice payment. It wasn't until my first tax quarter that the reality of the self-employment tax system hit home. My first Form 1040-ES estimated payment was a sharp wake-up call, and I quickly realized that comparing these two tax statuses purely by hourly rate is a critical error.
          </p>

          <p>
             If you are evaluating whether to accept an independent contract or stay in a corporate role, you must look closely at the <strong className="text-text-primary">1099 vs W2 pros and cons</strong>. The choice between these paths is not just about taxes. It shapes how much you pay for healthcare, how you buy a home, and how you manage your daily schedule.
          </p>

          <p>
             This guide is a detailed breakdown of both paths, based on my six years as a W2 employee and my subsequent career as an independent contractor. We will look beyond the standard lists to analyze the actual dollar differences, outline the pros and cons of each structure, and help you find your financial sweet spot.
          </p>
        </div>

        {/* PROS & CONS INTERACTIVE EVALUATOR */}
        <div className="p-8 border border-border-color rounded-2xl bg-bg-card/40 space-y-6">
          <div className="space-y-1">
             <span className="text-[10px] font-mono tracking-widest text-blue font-bold uppercase block">Interactive Tax Model</span>
             <h3 className="text-xl font-black text-text-primary tracking-tight">Your Custom 1099 vs. W2 Compatibility Gauge</h3>
             <p className="text-xs text-text-muted">
                Rate how important each factor is to you. We'll instantly calculate which career path matches your business priorities.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
             {/* 1099 Pros Preferences */}
             <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-green uppercase tracking-wider flex items-center gap-1.5">
                   <ThumbsUp size={14} /> Rate 1099 Benefits (1 = Low, 5 = High)
                </span>
                
                <div className="space-y-3 text-xs font-mono">
                   <div className="space-y-1">
                      <div className="flex justify-between">
                         <span>Higher Gross Income Upside</span>
                         <span className="text-blue font-bold">{preferences.incomePotential}/5</span>
                      </div>
                      <input 
                        type="range" min="1" max="5" value={preferences.incomePotential}
                        onChange={(e) => handlePreferenceChange('incomePotential', parseInt(e.target.value))}
                        className="w-full accent-green"
                      />
                   </div>

                   <div className="space-y-1">
                      <div className="flex justify-between">
                         <span>Tax Deductions & QBI Shield</span>
                         <span className="text-blue font-bold">{preferences.taxWriteOffs}/5</span>
                      </div>
                      <input 
                        type="range" min="1" max="5" value={preferences.taxWriteOffs}
                        onChange={(e) => handlePreferenceChange('taxWriteOffs', parseInt(e.target.value))}
                        className="w-full accent-green"
                      />
                   </div>

                   <div className="space-y-1">
                      <div className="flex justify-between">
                         <span>Flexible Schedule & Autonomy</span>
                         <span className="text-blue font-bold">{preferences.flexibility}/5</span>
                      </div>
                      <input 
                        type="range" min="1" max="5" value={preferences.flexibility}
                        onChange={(e) => handlePreferenceChange('flexibility', parseInt(e.target.value))}
                        className="w-full accent-green"
                      />
                   </div>

                   <div className="space-y-1">
                      <div className="flex justify-between">
                         <span>Work From Anywhere (Location Write-offs)</span>
                         <span className="text-blue font-bold">{preferences.locationFreedom}/5</span>
                      </div>
                      <input 
                        type="range" min="1" max="5" value={preferences.locationFreedom}
                        onChange={(e) => handlePreferenceChange('locationFreedom', parseInt(e.target.value))}
                        className="w-full accent-green"
                      />
                   </div>
                </div>
             </div>

             {/* 1099 Cons Preferences */}
             <div className="space-y-4">
                <span className="text-xs font-mono font-bold text-red uppercase tracking-wider flex items-center gap-1.5">
                   <ThumbsDown size={14} /> Rate 1099 Friction Points (1 = Fine, 5 = Dealbreaker)
                </span>
                
                <div className="space-y-3 text-xs font-mono">
                   <div className="space-y-1">
                      <div className="flex justify-between">
                         <span>Extra 15.3% Self-Employment Tax</span>
                         <span className="text-blue font-bold">{preferences.payrollTaxBurden}/5</span>
                      </div>
                      <input 
                        type="range" min="1" max="5" value={preferences.payrollTaxBurden}
                        onChange={(e) => handlePreferenceChange('payrollTaxBurden', parseInt(e.target.value))}
                        className="w-full accent-red"
                      />
                   </div>

                   <div className="space-y-1">
                      <div className="flex justify-between">
                         <span>Paying for Private Health Insurance</span>
                         <span className="text-blue font-bold">{preferences.benefitsLoss}/5</span>
                      </div>
                      <input 
                        type="range" min="1" max="5" value={preferences.benefitsLoss}
                        onChange={(e) => handlePreferenceChange('benefitsLoss', parseInt(e.target.value))}
                        className="w-full accent-red"
                      />
                   </div>

                   <div className="space-y-1">
                      <div className="flex justify-between">
                         <span>Unpaid Vacation, Sickness, & Downtime</span>
                         <span className="text-blue font-bold">{preferences.ptoDeficit}/5</span>
                      </div>
                      <input 
                        type="range" min="1" max="5" value={preferences.ptoDeficit}
                        onChange={(e) => handlePreferenceChange('ptoDeficit', parseInt(e.target.value))}
                        className="w-full accent-red"
                      />
                   </div>

                   <div className="space-y-1">
                      <div className="flex justify-between">
                         <span>Quarterly Taxes & Filing Admin</span>
                         <span className="text-blue font-bold">{preferences.complianceStress}/5</span>
                      </div>
                      <input 
                        type="range" min="1" max="5" value={preferences.complianceStress}
                        onChange={(e) => handlePreferenceChange('complianceStress', parseInt(e.target.value))}
                        className="w-full accent-red"
                      />
                   </div>
                </div>
             </div>
          </div>

          {/* DYNAMIC PRIORITY RESULT CARD */}
          <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-4">
             <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="space-y-1">
                   <span className="text-[10px] font-mono font-bold text-blue uppercase tracking-widest block">Structural Compatibility Index</span>
                   <h4 className="text-lg font-black text-text-primary tracking-tight">
                      Priority Parity Score: <span className="text-blue">{scoreMetrics.score}% 1099 Alignment</span>
                   </h4>
                </div>
                <span className={`px-4 py-1.5 rounded-full text-xs font-mono font-bold tracking-widest uppercase border shrink-0 ${
                   scoreMetrics.score >= 65 
                   ? 'bg-green/10 border-green text-green' 
                   : scoreMetrics.score >= 45 
                   ? 'bg-blue/10 border-blue text-blue' 
                   : 'bg-red/10 border-red text-red'
                }`}>
                   {scoreMetrics.score >= 65 ? "Go 1099" : scoreMetrics.score >= 45 ? "Evaluate Neutral" : "Stay W2"}
                </span>
             </div>
             <p className="text-xs text-text-muted leading-relaxed font-sans text-justify">
                {scoreMetrics.advice}
             </p>
          </div>
        </div>

        {/* DEEP DIVE: 1099 PROS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Pros of Going 1099: My Six Favorite Advantages
          </h2>
          
          <h3 className="text-xl font-bold text-text-primary">1. Significantly Higher Gross Income Potential</h3>
          <p>
             As a W2 worker, you are paid a fixed salary for your time. Your employer captures the excess value your labor generates to fund executive salaries and corporate overhead. 
          </p>
          <p>
             As a 1099 contractor, you charge for the direct value of your output. When my former W2 employer billed clients $175 an hour for my services while paying me a salary equivalent to $45 an hour, they kept the difference. Going 1099 allowed me to claim a much larger share of that value.
          </p>
          <p className="text-sm italic">
             *Self-employment math: Shifting from a $90,000 W2 salary to billing $85 an hour for 1,600 billable hours increases your gross revenue to **$136,000**—giving you $46,000 in additional pre-tax income to manage.
          </p>

          <h3 className="text-xl font-bold text-text-primary">2. The 20% QBI Deduction & Schedule C Write-offs</h3>
          <p>
             W2 employees are subject to heavy tax withholding. Under current tax laws, employees cannot write off any career-related expenses, such as home office space, tech gear, or professional training.
          </p>
          <p>
             As a 1099 sole proprietor, you are taxed only on your **net business profits**. You can deduct ordinary expenses like your laptop, phone plan, business travel, and a portion of your rent or mortgage through the home office deduction. Crucially, the Section 199A QBI deduction lets you shield up to **20% of your net business earnings** from federal income taxes.
          </p>
          <p className="text-sm italic">
             *Tax deduction impact: If you earn $100,000 in net business income, the QBI deduction lets you deduct **$20,000** off your taxable income automatically, saving you thousands in taxes.
          </p>

          <h3 className="text-xl font-bold text-text-primary">3. Complete Schedule Autonomy</h3>
          <p>
             As a W2 employee, your employer directs how, when, and where you work. They control your calendar and set your working hours.
          </p>
          <p>
             Under IRS guidelines, the legal definition of an independent contractor is someone who controls how they execute their work. You set your own hours, design your workflow, and choose your working style. As long as you deliver the agreed-upon results, the client has no legal right to micromanage your day.
          </p>

          <h3 className="text-xl font-bold text-text-primary">4. Client Diversification (The Income Security Paradox)</h3>
          <p>
             Many people stay in W2 jobs because they crave "job security." However, relying on a single employer for your entire livelihood is actually a high-risk strategy. If your employer downsizes or has a bad quarter, your income can instantly drop to zero.
          </p>
          <p>
             Operating as a 1099 contractor lets you build a portfolio of multiple clients. If you have four clients who each pay you $3,000 a month, losing one client is a temporary setback that reduces your income by 25%. This diversification provides a much more stable financial foundation than relying on a single employer.
          </p>

          <h3 className="text-xl font-bold text-text-primary">5. Massive Solo 401(k) Contribution Limits</h3>
          <p>
             In 2025, W2 employees are limited to contributing **$23,000** to a standard company 401(k). 
          </p>
          <p>
             By setting up a Solo 401(k) as an independent contractor, you can contribute as both the employee (up to $23,000) and the employer (contributing up to 25% of your net self-employment earnings). This allows you to defer up to **$69,000** in total annual pre-tax retirement contributions, creating a powerful tax shelter for high earners.
          </p>

          <h3 className="text-xl font-bold text-text-primary">6. Location Freedom & Local Tax Optimizations</h3>
          <p>
             W2 employees are often locked into working from specific corporate offices or states due to payroll tax registration rules. 
          </p>
          <p>
             As a 1099 contractor, you can work from anywhere with a stable internet connection. If you relocate to a state with zero income tax (like Texas, Florida, or Washington), you can immediately lower your tax burden. You can also deduct travel costs to client sites as legitimate business expenses.
          </p>
        </div>

        {/* DEEP DIVE: 1099 CONS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Cons of Going 1099: Six Hidden Challenges to Consider
          </h2>

          <h3 className="text-xl font-bold text-text-primary">1. The Full Self-Employment Tax Burden</h3>
          <p>
             W2 employees split their Social Security and Medicare taxes with their employers, with each paying 7.65%. 
          </p>
          <p>
             1099 contractors must pay the full **15.3% self-employment tax** on Schedule SE. You pay both halves of these payroll taxes yourself, which can be a painful adjustment if you are used to having taxes automatically deducted from a W2 paycheck.
          </p>
          <p className="text-sm italic">
             *FICA penalty tax: If you earn $100,000 in net 1099 profit, your self-employment tax alone is roughly **$14,129** (calculated on 92.35% of your profit), representing a direct **$7,000+** penalty compared to a W2 role.
          </p>

          <h3 className="text-xl font-bold text-text-primary">2. No Employer Health Insurance Subsidies</h3>
          <p>
             A W2 employee often pays a small fraction of their corporate health insurance premium, with the employer covering the rest.
          </p>
          <p>
             As an independent contractor, you must buy private health and dental insurance on the individual marketplace. Buying a quality family plan can cost **$1,200 to $1,800 per month** out of pocket, which significantly reduces your net income.
          </p>

          <h3 className="text-xl font-bold text-text-primary">3. The Paid Time Off Deficit</h3>
          <p>
             W2 salaries include paid time off, federal holidays, and sick leave. If you make $104,000 a year, you are paid for 2,080 hours even if you spend three weeks on vacation.
          </p>
          <p>
             As a 1099 contractor, your income is tied directly to your active working hours. Taking a two-week vacation means earning $0 for those weeks while still paying your monthly business overhead.
          </p>
          <p className="text-sm italic">
             *PTO math: If you charge $75 an hour and take 15 days of vacation and holidays, you miss out on **$9,000** of billable time, which you must build into your rate negotiations.
          </p>

          <h3 className="text-xl font-bold text-text-primary">4. Quarterly Estimated Tax Stress & Penalties</h3>
          <p>
             W2 payroll software withholding guarantees you will rarely face underpayment penalties. 
          </p>
          <p>
             1099 contractors must calculate and pay estimated taxes four times a year using **IRS Form 1040-ES**. If you miss these deadlines or underpay, you will face IRS underpayment interest and late penalties when filing your year-end return.
          </p>

          <h3 className="text-xl font-bold text-text-primary">5. Zero Unemployment Insurance Protection</h3>
          <p>
             If a W2 employee is laid off, they can claim weekly state **Unemployment Insurance benefits** to help cover expenses.
          </p>
          <p>
             1099 independent contractors are completely barred from drawing unemployment benefits when a contract ends. If a client terminates your contract early, your income stops immediately. This risk requires you to maintain a much larger personal emergency reserve.
          </p>

          <h3 className="text-xl font-bold text-text-primary">6. The Administrative Overhead Burden</h3>
          <p>
             W2 employees can focus entirely on doing their job. Their employer handles payroll, tax withholding, insurance, and equipment setup.
          </p>
          <p>
             As a 1099 contractor, you must act as your own CEO, accountant, and IT department. You have to buy business software, invoice clients, draft legal contracts, purchase business insurance, and balance your books. This administrative work typically consumes **3 to 5 unpaid hours** every single week.
          </p>
        </div>

        {/* W2 PROS & CONS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The W2 Structural Tradeoff: Pros & Cons
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             <div className="space-y-4">
                <h4 className="text-sm font-mono font-bold text-green uppercase tracking-wider flex items-center gap-1.5">
                   <ThumbsUp size={16} /> W2 Structural Pros
                </h4>
                <ul className="text-sm text-text-muted space-y-3 list-none pl-0">
                   <li className="flex items-start gap-2">
                      <span className="text-green font-bold">✓</span>
                      <span><strong>Automatic Withholding</strong>: Your employer automatically withhold federal, state, and payroll taxes from your paycheck, eliminating tax filing surprises.</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-green font-bold">✓</span>
                      <span><strong>Corporate Benefit Matching</strong>: Access to corporate health plans, life insurance, disability policies, and employer 401(k) matches.</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-green font-bold">✓</span>
                      <span><strong>Guaranteed Paid Leave</strong>: Earn a steady paycheck during holidays, sick days, and vacation time.</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-green font-bold">✓</span>
                      <span><strong>Unemployment Protections</strong>: Eligible for state-subsidized workers' compensation and unemployment benefits if you are laid off.</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-green font-bold">✓</span>
                      <span><strong>Zero Admin Burden</strong>: Focus entirely on your core work without managing invoices, entities, or business bookkeeping.</span>
                   </li>
                </ul>
             </div>

             <div className="space-y-4">
                <h4 className="text-sm font-mono font-bold text-red uppercase tracking-wider flex items-center gap-1.5">
                   <ThumbsDown size={16} /> W2 Structural Cons
                </h4>
                <ul className="text-sm text-text-muted space-y-3 list-none pl-0">
                   <li className="flex items-start gap-2">
                      <span className="text-red font-bold">✗</span>
                      <span><strong>Limited Wage Upside</strong>: Locked into a fixed salary, with pay raises dictated by corporate review cycles rather than your performance.</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-red font-bold">✗</span>
                      <span><strong>Zero Tax Write-offs</strong>: Under current tax laws, W2 employees cannot deduct any career-related expenses or remote work costs.</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-red font-bold">✗</span>
                      <span><strong>Lack of Schedule Control</strong>: Subject to corporate rules, set working hours, and employer-directed schedules.</span>
                   </li>
                   <li className="flex items-start gap-2">
                      <span className="text-red font-bold">✗</span>
                      <span><strong>Employer Concentration Risk</strong>: Relying on a single paycheck leaves you vulnerable if the company suffers financial setbacks or downsizes.</span>
                   </li>
                </ul>
             </div>
          </div>
        </div>

        {/* THE 3 NUMBERS STRATEGY FOR CONCLUDING */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
             The Final Verdict: The 3 Numbers That Decide Your Path
          </h2>
          <p>
             Choosing between 1099 and W2 isn't about which option is universally "better." The right path depends on three specific financial numbers in your life:
          </p>

          <div className="space-y-4">
             <div className="p-6 bg-bg-card/30 border border-border-color/10 rounded-2xl">
                <h4 className="text-base font-bold text-text-primary">1. Your Income Premium Ratio (The 30% Delta)</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                   Never take a 1099 contract unless the gross rate is at least **30% higher** than your W2 equivalent. If you earn $50 an hour as an employee, your minimum 1099 contractor rate is **$65 to $75 an hour** to offset the added tax and benefits costs.
                </p>
             </div>

             <div className="p-6 bg-bg-card/30 border border-border-color/10 rounded-2xl">
                <h4 className="text-base font-bold text-text-primary">2. Your Healthcare Premium Exposure</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                   If you can leverage a spouse's corporate health plan, you can eliminate private insurance costs from your business calculations, making the 1099 structure significantly more profitable.
                </p>
             </div>

             <div className="p-6 bg-bg-card/30 border border-border-color/10 rounded-2xl">
                <h4 className="text-base font-bold text-text-primary">3. Your Annual business Deductions</h4>
                <p className="text-xs text-text-muted leading-relaxed">
                   If you work entirely from a dedicated home office, travel frequently for client meetings, or use highly specialized gear, your business deductions will substantially lower your taxable net profit, making the 1099 path highly advantageous.
                </p>
             </div>
          </div>
        </div>

        {/* BRIGHT CTA */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Compare Your True Take-Home Cash Flow</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Stop guessing your tax liabilities. Use our interactive calculators to input your precise numbers, estimate your business deductions, and see a detailed comparison of your W2 vs. 1099 options.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO LIVE COMPARISON ENGINE]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Analyze Your Take-Home Income <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* FAQ SECTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            1099 vs. W2 Pros & Cons FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Is mortgage approval harder to secure as a 1099 contractor?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes, getting a mortgage is typically more challenging as a 1099 contractor. While W2 employees only need to provide two recent paychecks, lenders usually require self-employed borrowers to provide **at least two full years of Schedule C tax filings** to prove stable, ongoing business income.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Do independent contractors receive Workers’ Compensation benefits?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. State laws do not require companies to provide workers' compensation coverage for independent contractors. If you are injured on the job, you must cover your own medical bills and living expenses. This is why contractors often purchase private disability insurance or general business liability policies.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can I request a transition from W2 to 1099 with my current employer?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Only if your role meets the strict legal definition of independent work. If you continue doing the same job under the same manager with the same schedule, you cannot legally convert your role to a 1099 structure simply to save on tax withholding. Doing so is classified as employee misclassification under Department of Labor guidelines.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Strategic career disclosure: This 1099 vs W2 pros and cons analysis is provided purely for educational purposes. Individual payroll profiles, tax liabilities, and state-specific business conditions depend heavily on individual tax brackets and filing statuses. Always consult a certified public accountant (CPA) or tax professional before making career structure changes.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default ProsConsPage;
