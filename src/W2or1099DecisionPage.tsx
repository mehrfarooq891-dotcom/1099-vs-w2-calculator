import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, DollarSign, CheckCircle2, XCircle, ChevronRight, Bookmark, ArrowUpRight, Award, Key } from 'lucide-react';

interface W2or1099DecisionPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse' | 'realestate' | 'truck' | 'therapist' | 'consultant' | 'mixed' | 'estimated' | 'homeoffice' | 'healthins' | 'retirement' | 'misclassified' | 'w2or1099') => void;
}

const W2or1099DecisionPage: React.FC<W2or1099DecisionPageProps> = ({ handleNavClick }) => {
  // Setup state for the interactive 7-Question Test
  const [answers, setAnswers] = useState<Record<number, boolean>>({});
  
  const questions = [
    {
      id: 1,
      title: "Is your 1099 offer 30%+ higher than your W2 equivalent?",
      explanation: "Independent contractors pay their own FICA payroll tax (15.3%) and operate without corporate health plans, paid time off, or retirement matching. To break even on net compensation, a 1099 hourly rate must be at least 30% higher—ideally 50% higher—than its W2 Wrage equivalent.",
      yesMetric: "Premium Verified",
      noMetric: "Negative Spread Risk"
    },
    {
      id: 2,
      title: "Do you have or can you easily secure independent health insurance?",
      explanation: "An employer-sponsored family health plan can have an economic value of $15,000 to $25,000 annually. If you can leverage a spouse's corporate coverage, you eliminate the single largest out-of-pocket operating barrier to self-employment.",
      yesMetric: "Benefits Protected",
      noMetric: "High Premium Exposure"
    },
    {
      id: 3,
      title: "Do you have a personal liquid emergency fund covering 6+ months?",
      explanation: "1099 contractors are completely barred from drawing state-subsidized Unemployment Insurance if a contract is terminated. Liquid cash protects your operations against client cash-flow delays and standard payment terms (e.g., Net 30 or Net 60).",
      yesMetric: "Operations Funded",
      noMetric: "Cash Flow Solvency Risk"
    },
    {
      id: 4,
      title: "Are you comfortable tracking business expenses and filing quarterly taxes?",
      explanation: "Independent status requires filing IRS Schedule C and submitting Form 1040-ES quarterly payments. You must track software, home office ratios, and auto logs. If you hate tracking expenses or lack accounting software discipline, tax penalties will erode your earnings.",
      yesMetric: "Compliance Ready",
      noMetric: "High Penalty Exposure"
    },
    {
      id: 5,
      title: "Does your state of operation have low or zero state income tax?",
      explanation: "Operating under high-tax state jurisdictions (like California or New York) increases your cumulative tax shield burden. In zero-tax states (like Texas, Florida, or Washington), your sole proprietorship retains a greater percentage of gross earnings, improving the 1099 advantage.",
      yesMetric: "State Tax Protected",
      noMetric: "High Bracket Pressure"
    },
    {
      id: 6,
      title: "Do you have zero dependents or do your dependents have access to stable benefits?",
      explanation: "When you support dependents, the value of corporate group dental, life, disability, and vision coverage increases. Transitioning to 1099 with multiple dependents requires buying individual policies, which reduces your net compensation.",
      yesMetric: "Minimal Dependence",
      noMetric: "Family Benefits Overhead"
    },
    {
      id: 7,
      title: "Is this a long-term, multi-client opportunity rather than a localized single-client contract?",
      explanation: "True self-employment operates with multiple sources of income. If you rely on a single client for 40 hours a week, you face IRS misclassification audits and have a high client concentration risk. Multi-client models are the key to long-term success.",
      yesMetric: "Autonomous Model",
      noMetric: "Single-Client Vulnerability"
    }
  ];

  const handleToggle = (id: number, val: boolean) => {
    setAnswers(prev => ({ ...prev, [id]: val }));
  };

  const yesCount = Object.values(answers).filter(v => v === true).length;
  const answeredCount = Object.keys(answers).length;

  return (
    <motion.div
      key="w2or1099-post"
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
          <span className="text-blue">Career Tax Strategy</span>
          <span>/</span>
          <span className="text-text-muted select-none">Should I Become a 1099 Contractor or Stay W2</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            Should You Go 1099 or Stay W2? The 7-Question Test That Gives You a Clear Answer
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Bookmark size={14} className="text-blue shrink-0" />
               <span>W2 CLASS VS. 1099 TAX CONVERSION</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA & COMPLIANCE WRITER</span>
            </div>
            <div>
              <span>LAST UPDATED: </span>
              <span className="text-text-primary font-bold">JUNE 2026</span>
            </div>
            <div>
              <span>WORD COUNT: </span>
              <span className="text-blue font-bold">1,415 WORDS</span>
            </div>
          </div>
        </div>

        {/* EXECUTIVE SUMMARY BOX */}
        <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-3 font-sans">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue font-mono">Decision Framework At A Glance</h3>
          <ul className="text-xs text-text-muted space-y-2 list-none pl-0 font-mono">
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>The Income Delta Need</strong>: Never transition to a 1099 contract unless your gross compensation increases by at least 30% to offset your self-employment tax burden.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>The Safety Undercurrent</strong>: Going 1099 means losing state-mandated safety nets like worker's compensation, unemployment insurance, and disability benefits.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>Tax and Operating Discipline</strong>: Managing estimated quarterly taxes, business structural files, and compliance logs is required to protect your business profits.</span>
             </li>
          </ul>
        </div>

        {/* INTRODUCTORY COPY */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Deciding whether to accept an independent 1099 contract or remain a W2 employee is one of the most critical financial decisions of your career. This structural choice impacts how your income is taxed, how you purchase healthcare, who manages your schedule, and what legal safety nets protect you.
          </p>

          <p>
            Unfortunately, many professionals evaluate this decision purely by comparing hourly rates. Accepting a $100 per hour 1099 contract sounds superior to a $75 per hour W2 position. However, once you account for self-employment taxes, lost healthcare benefits, unpaid time off, and retirement match deficits, that wage premium can quickly disappear.
          </p>

          <p>
            If you are asking, <strong className="text-text-primary">"should I become a 1099 contractor or stay W2"</strong>, you must run a comprehensive operating comparison. Simply guessing or hoping your expenses are deductible is a recipe for high tax liabilities and cash flow shortages.
          </p>

          <p>
            This guide provides a structured, numeric breakdown. We will analyze the real financial differences between these roles, explore the 7 key criteria for making this decision, provide a real-world case study, and walk through our interactive scoring framework to help you choose the right path for your business.
          </p>
        </div>

        {/* INTERACTIVE DECISION EVALUATOR */}
        <div className="p-8 border border-border-color rounded-2xl bg-bg-card/45 space-y-8 font-sans">
          <div className="space-y-2 text-center md:text-left">
             <span className="text-[10px] font-mono tracking-widest uppercase text-blue font-bold">Interactive Tax Asset</span>
             <h3 className="text-2xl font-black text-text-primary tracking-tight">The 1099 vs. W2 Suitability Assessment</h3>
             <p className="text-xs text-text-muted max-w-xl">
                Review each question below and select your answer. The tool will calculate your suitablity score and provide tailored tax feedback instantly.
             </p>
          </div>

          <div className="divide-y divide-border-color/10 space-y-4">
             {questions.map((q) => {
                const isYes = answers[q.id] === true;
                const isNo = answers[q.id] === false;
                return (
                  <div key={q.id} className="pt-4 first:pt-0 space-y-3">
                     <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="space-y-1 max-w-xl">
                           <span className="text-[10px] text-blue font-mono font-bold block">QUESTION 0{q.id}</span>
                           <h4 className="text-sm font-bold text-text-primary tracking-tight leading-snug">{q.title}</h4>
                           <p className="text-xs text-text-muted leading-relaxed text-justify">{q.explanation}</p>
                        </div>
                        
                        <div className="flex items-center gap-2 shrink-0 md:pt-4">
                           <button
                             type="button"
                             onClick={() => handleToggle(q.id, true)}
                             className={`px-4 py-2 rounded-xl text-xs font-bold font-mono tracking-wider transition-all border ${
                               isYes 
                               ? 'bg-green/10 border-green text-green shadow-sm' 
                               : 'bg-bg-input/20 border-border-color/10 text-text-muted hover:border-border-color/30'
                             }`}
                           >
                              YES
                           </button>
                           <button
                             type="button"
                             onClick={() => handleToggle(q.id, false)}
                             className={`px-4 py-2 rounded-xl text-xs font-bold font-mono tracking-wider transition-all border ${
                               isNo 
                               ? 'bg-red/10 border-red text-red shadow-sm' 
                               : 'bg-bg-input/20 border-border-color/10 text-text-muted hover:border-border-color/30'
                             }`}
                           >
                              NO
                           </button>
                        </div>
                     </div>
                     
                     {/* Badge Metrics */}
                     {answers[q.id] !== undefined && (
                       <div className="pl-0 md:pl-2">
                          <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-widest ${
                            answers[q.id] ? 'bg-green/10 text-green' : 'bg-red/10 text-red'
                          }`}>
                            <span className="w-1.5 h-1.5 rounded-full bg-current"></span>
                            {answers[q.id] ? q.yesMetric : q.noMetric}
                          </span>
                       </div>
                     )}
                  </div>
                );
             })}
          </div>

          {/* DYNAMIC RESULTS ENGINE */}
          <div className="pt-6 border-t border-border-color/30">
             {answeredCount < 7 ? (
               <div className="p-4 bg-bg-input/30 rounded-xl text-center text-xs text-text-muted font-mono">
                  <span>Answer all **{7 - answeredCount} remaining questions** to unlock your tax suitability score.</span>
               </div>
             ) : (
               <div className="p-6 rounded-2xl bg-blue/5 border border-blue/20 space-y-4">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                     <div className="space-y-1">
                        <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-blue">Calculated Suitability Class</span>
                        <h4 className="text-xl font-black text-text-primary tracking-tight">
                           Your Compatibility Score: <span className="text-blue">{yesCount} out of 7</span>
                        </h4>
                     </div>
                     <span className={`px-4 py-2 rounded-full text-xs font-mono font-bold tracking-widest border uppercase shrink-0 ${
                        yesCount >= 5 
                        ? 'bg-green/10 border-green text-green' 
                        : yesCount >= 3 
                        ? 'bg-blue/10 border-blue text-blue' 
                        : 'bg-red/10 border-red text-red'
                     }`}>
                        {yesCount >= 5 ? "Strong 1099 Independent" : yesCount >= 3 ? "Neutral: Proceed with Care" : "Safest Path: Stay W2"}
                     </span>
                  </div>

                  <p className="text-xs text-text-muted leading-relaxed text-justify">
                     {yesCount >= 5 
                       ? "Assessment: Your circumstances strongly align with independent contractor operations. You have cleared the core income premium, benefits, and emergency reserves hurdles. Your operating structure will help you optimize pre-tax retirement accounts, write off direct business expenses, and maximize your take-home pay."
                       : yesCount >= 3 
                       ? "Assessment: You are in an transitional position. While your contract rate or structure may offer some advantages, you face significant vulnerabilities in areas like liquid cash reserves, health insurance overhead, or administrative requirements. We recommend recalculating your hourly rate to seek a larger W2 premium to safeguard your business before making the transition."
                       : "Assessment: The metrics strongly advise remaining a W2 employee. Transitioning to a 1099 contractor at this stage would expose you to high self-employment tax liabilities, expensive individual health plans, and unpaid downtime risks. Stick with your stable W2 framework to protect your finances."
                     }
                  </p>
               </div>
             )}
          </div>
        </div>

        {/* DEEP INTEGRATED ANALYSIS FOR THE questions */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The 7 Core Questions: Tax and Business Realities
          </h2>

          <h3 className="text-xl font-bold text-text-primary">1. Is your 1099 offer 30%+ higher than your W2 equivalent?</h3>
          <p>
             When you work as a W2 employee, your employer pays **7.65% of your FICA payroll taxes** (matching your contributions for Social Security and Medicare). They also pay for workers' compensation and state unemployment insurance.
          </p>
          <p>
             Once you transition to a 1099 contractor, you become responsible for the full **15.3% Self-Employment Contribution Act (SECA) tax** on Schedule SE. You also lose paid holidays, sick leave, and corporate dental or health plans. 
          </p>
          <p className="text-sm italic">
             *If you earn $100,000 as a W2 employee, accepting a 1099 contract at the same $100,000 compensation rate represents a net pay cut of **$15,000 to $25,000** annually once you account for payroll taxes and out-of-pocket benefits.
          </p>

          <h3 className="text-xl font-bold text-text-primary">2. Do you have or can you get individual health insurance?</h3>
          <p>
             Purchasing private family health insurance on your own is highly expensive. Buying a plan as an independent contractor can cost **$1,000 to $1,800 per month** out of pocket.
          </p>
          <p>
             While you can claim a 100% above-the-line deduction for these premiums on Form 1040 Schedule 1, this write-off only reduces your federal and state income taxes—it does not lower your 15.3% self-employment tax. If your spouse has access to a group health plan, leveraging their employer coverage eliminates this major expense, helping you keep more of your 1099 earnings.
          </p>

          <h3 className="text-xl font-bold text-text-primary">3. Do you have an emergency fund covering 6+ months?</h3>
          <p>
             W2 employees are protected by state-mandated safety nets. If you are laid off, you can claim weekly state **Unemployment Insurance benefits** to help cover expenses.
          </p>
          <p>
             1099 independent contractors are completely barred from drawing unemployment benefits when a contract is terminated. Additionally, corporate clients often pay on Net-30 or Net-60 schedules, meaning you may have to wait 2 months after submitting an invoice to receive payment. A strong liquid personal emergency reserve is essential to manage these cash flow delays safely.
          </p>

          <h3 className="text-xl font-bold text-text-primary">4. Are you comfortable tracking expenses and quarterly taxes?</h3>
          <p>
             Under a W2 arrangement, your employer runs payroll and handles withholding, meaning you rarely owe a large sum when you file your annual tax return.
          </p>
          <p>
             As a 1099 contractor, you must act as your own payroll department. You must submit quarterly estimated tax payments using **IRS Form 1040-ES** four times a year. If you fail to submit these payments, you will face underpayment interest and penalties at tax time. You must also track operating expenses (like home office square footage and business mileage) to claim deductions on Schedule C.
          </p>

          <h3 className="text-xl font-bold text-text-primary">5. Does your state have high income tax?</h3>
          <p>
             Your location matters. If you operate in a high-tax state (like California or New York), your higher earnings can push you into expensive state brackets. 
          </p>
          <p>
             States like Texas, Florida, and Washington have zero state income tax, which increases the financial benefits of independent contracting. Additionally, high-tax states often impose strict franchise taxes or annual registration fees on LLCs, further reducing your profit margins.
          </p>

          <h3 className="text-xl font-bold text-text-primary">6. Do you have dependents who need stable benefits?</h3>
          <p>
             Providing health coverage for a family is significantly more complex than buying an individual plan. 
          </p>
          <p>
             If you support dependents, the value of corporate group health benefits, health savings account (HSA) matching, and life or disability insurance is substantial. If you go 1099, buying separate family policies can cost thousands. If you are single with no dependents, transitioning to self-employment is much cleaner and less expensive.
          </p>

          <h3 className="text-xl font-bold text-text-primary">7. Is this a long-term opportunity or short-term contract?</h3>
          <p>
             If you accept a short-term contract, you must prepare to hunt for your next client as soon as the project ends. This require spending significant time on business development and marketing, unpaid tasks that erode your average hourly rate.
          </p>
          <p>
             In contrast, if you secure a long-term, multi-client book of business, you can build a stable enterprise. This structural approach allows you to optimize retirement plans (like Solo 401ks), manage cash flows, and build ongoing business equity.
          </p>
        </div>

        {/* FINANCIAL RECONCILIATION CASE STUDY */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Side-by-Side Comparison: $100k W2 vs. $130k 1099 Contract
          </h2>
          <p>
             Let's analyze a realistic scenario. Liam is a software developer deciding between two opportunities: a stable **$100,000 W2 salary** with corporate benefits, or an independent **$130,000 1099 contract (a 30% hourly premium)**. 
          </p>
          <p>
             Let's compare his actual financial outcomes:
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Calculator size={16} /> Compensation Ledger: Liam’s $100k W2 vs. $130k 1099 Tax Breakdown
            </h4>

            {/* LEDGER COMPARISON TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm font-mono">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Financial Metric</th>
                        <th className="p-4 text-right">Option A: $100,000 W2 Salary ($)</th>
                        <th className="p-4 text-right">Option B: $130,000 1099 Contract ($)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Gross Contractual Compensation</td>
                        <td className="p-4 text-right">$100,000</td>
                        <td className="p-4 text-right text-text-primary">$130,000 <span className="text-[10px] block opacity-70">(30% nominal premium)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">FICA payroll tax share (Social Security & Medicare)</td>
                        <td className="p-4 text-right text-red">-$7,650 <span className="text-[10px] block opacity-70">(7.65% standard share)</span></td>
                        <td className="p-4 text-right text-red">-$18,369 <span className="text-[10px] block opacity-70">(15.3% net self-employment tax)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Employer-Subsidized Health Insurance Plan</td>
                        <td className="p-4 text-right text-green">-$0 <span className="text-[10px] block opacity-70">(Fully covered group plan)</span></td>
                        <td className="p-4 text-right text-red">-$7,200 <span className="text-[10px] block opacity-70">($600/month out-of-pocket net premiums)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Unpaid Downtime & Holidays (15 Days)</td>
                        <td className="p-4 text-right text-green">+$0 <span className="text-[10px] block opacity-70">(Paid holidays and sick leave)</span></td>
                        <td className="p-4 text-right text-red">-$7,500 <span className="text-[10px] block opacity-70">(Downtime; no unpaid days)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Vested Employer 401(k) Match</td>
                        <td className="p-4 text-right text-green">+$3,000 <span className="text-[10px] block opacity-70">(3% employer standard matching)</span></td>
                        <td className="p-4 text-right">+$0 <span className="text-[10px] block opacity-70">(No corporate match provided)</span></td>
                     </tr>
                     <tr className="bg-bg-input/20 font-black">
                        <td className="p-4 text-text-primary font-sans">Adjusted Pre-Tax Adjusted Base</td>
                        <td className="p-4 text-right text-green-500">$95,350</td>
                        <td className="p-4 text-right text-blue-500">$96,931</td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Net Liquid Take-Home Pay</td>
                        <td className="p-4 text-right text-blue font-black text-base font-mono">$72,850 <span className="text-[10px] block opacity-70 font-sans font-normal text-xs font-mono">(Federal income tax adjusted)</span></td>
                        <td className="p-4 text-right text-green font-black text-base font-mono font-mono">$73,954 <span className="text-[10px] block opacity-70 font-sans font-normal text-xs font-mono">(Includes QBI write-offs)</span></td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted font-sans">
              *The final reconciliation: Despite earning $30,000 more in gross receipts, Liam’s actual net profit increase on his first year of self-employment is just **$1,104**. This shows why a 30% premium is the absolute bare minimum required to justify a transition.
            </p>
          </div>
        </div>

        {/* BRIGHT CTA COMPONENT */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Run Your Personal W2 vs. 1099 Conversion</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Enter your gross corporate salary, proposed 1099 hourly rates, health insurance configurations, and state tax brackets to clear any confusion and analyze your true take-home pay.
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
              Access the W2 vs. 1099 Converter <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* DECISION COMPLIANCE FAQ */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            W2 vs. 1099 Conversion Compliance FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can my employer convert my current W2 job into a 1099 position?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No, this is highly illegal under federal labor laws and IRS guidelines. If you continue to perform the same duties under the same supervisor with the same schedule, you cannot be converted to a 1099 structure simply to save the company tax dollars. Doing so is classified as corporate tax evasion.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Does the Section 199A QBI deduction apply to all 1099 contractors?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                The **20% Qualified Business Income (QBI) deduction** applies to most sole proprietors, partnerships, and S-corporations. However, if your business falls under a Specified Service Trade or Business (SSTB)—such as law, medicine, consulting, or accounting—the deduction begins to phase out once your taxable income crosses specific federal thresholds ($191,950 for single filers in 2025).
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can I operate as a 1099 contractor and still contribute to a Roth IRA?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes. Your 1099 net earnings are classified as earned income, satisfying the prerequisite for Traditional or Roth IRA contributions. You can contribute up to **$7,000** ($8,000 if age 50+) for the 2025 tax period. Crucially, these contributions are completely separate from your primary business structures like a SEP-IRA or Solo 401(k), allowing you to maximize your tax shelter.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Regulatory career disclosure: This W2 and 1099 suitability analysis is provided purely for educational purposes. Individual payroll profiles, tax liabilities, and employer compliance standards depend heavily on state laws, filing statuses, and cumulative income metrics. Always consult a certified tax professional or CPA before changing your tax structure.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default W2or1099DecisionPage;
