import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, BookOpen, Info, HelpCircle, FileText, CheckCircle2, TrendingUp, DollarSign, Wallet, ShieldCheck } from 'lucide-react';

interface ContractorRatePageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california') => void;
}

const ContractorRatePage: React.FC<ContractorRatePageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="rate-post"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex-grow scroll-smooth"
    >
      <article className="py-20 px-6 max-w-4xl mx-auto space-y-12 bg-bg-main text-text-muted leading-relaxed text-base md:text-lg">
        
        {/* Breadcrumb Navigation & Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-text-muted">
          <button 
            onClick={() => handleNavClick('home')}
            className="hover:text-blue transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-blue">Contractor Analytics</span>
          <span>/</span>
          <span className="text-text-muted select-none">Pricing Strategy</span>
        </div>

        {/* HERO HEADER */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none">
            How Much More Should You Charge as a 1099 Contractor? The Real Percentage (With Calculator)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <TrendingUp size={14} />
               <span>STANDARDIZED PRICING STRATEGY</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA</span>
            </div>
            <div>
              <span>LAST UPDATED: </span>
              <span className="text-text-primary font-bold">MAY 2026</span>
            </div>
            <div>
              <span>ESTIMATION FRAMEWORK: </span>
              <span className="text-blue font-bold">1,400 WORDS</span>
            </div>
          </div>
        </div>

        {/* EXCELLENT PLANNED SCENARIO INTRODUCTION */}
        <div className="space-y-6">
          <p>
            When skilled professionals transition from a full-time W2 role to independent contracting, they often make a fatal mathematical error. They look at their previous annual salary, divide it by 2,080 hours, tack on a modest 20% premium, and believe they are negotiating from a position of strength.
          </p>

          <p className="border-l-4 border-red/40 pl-4 py-1 text-text-primary font-medium italic">
            "Most new contractors add 20% to their old salary and still lose money once true operating expenditures are factored in."
          </p>

          <p>
            Operating in the US corporate ecosystem requires recognizing that your cash salary is only a fraction of your real total compensation. In fact, employer-sponsored programs, public protections, and payroll tax subsidies constitute a significant percentage of a W2 employee’s total net package. When you transition to a 1099 relationship, you are no longer just an individual provider; you are a service enterprise. Every benefit, protective shield, and fiscal match must be funded from your raw gross billing.
          </p>

          <p>
            To successfully bill under the tax keyword <strong className="text-text-primary">how much more should I charge as a 1099 contractor</strong>, you must understand the underlying structural overheads. Adding a standard margin is not enough to yield the same net lifestyle. Without precise calculation, you will find yourself working more hours for less actual cash.
          </p>
        </div>

        {/* SECTION 1 — ABSOLUTE BREAKDOWN OF ABSORBED COSTS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Burden of Ownership: What Companies Hide
          </h2>
          
          <p>
            When negotiating client engagements, recognize that companies hire independent contractors precisely because they do not have to pay statutory benefits, healthcare subsidies, and compliance administrative overhead. Those savings form their budget cushion. To avoid getting shortchanged, you must build all these lines into your pricing system. Let us break down exactly what employers fund that you must now absorb:
          </p>

          {/* THE DETAILED LIST OF OVERHEAD ITEMS */}
          <div className="space-y-4">
            
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">1. The Self-Employment (FICA) Tax Disadvantage: +7.65%</h4>
              </div>
              <p className="text-sm">
                Under a W2 arrangement, your employer is legally mandated to cover exactly half of your FICA payroll tax burden—representing 6.2% for Social Security and 1.45% for Medicare. As a 1099 contractor, this buffer falls away. You pay the full 15.3% self-employment tax. This represents an immediate, non-negotiable <strong className="text-text-primary font-mono">+7.65%</strong> tax penalty on your net earnings that you must recoup through your billing.
              </p>
            </div>

            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">2. Health, Vision, and Dental Coverage: $6,000 to $8,400 annually</h4>
              </div>
              <p className="text-sm">
                Corporate group plans heavily subsidize medical coverage. If you purchase high-deductible healthcare, dental, and vision policies independently through the public exchange, expect premium costs around <strong className="text-text-primary">$500 to $700 per month</strong> for single coverage alone. This represents an immediate overhead layer of <strong className="text-text-primary font-mono">$6,000 to $8,400 per year</strong> that must be compensated before taking care of basic living expenses.
              </p>
            </div>

            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">3. Lost 401(k) Matching Opportunities: 4% of Salary</h4>
              </div>
              <p className="text-sm">
                Most mid-tier and enterprise companies provide safe-harbor matches or retirement incentive distributions. An average employer matching mechanism is worth roughly <strong className="text-text-primary">4%</strong> of salary. On a base of $95,000, that translates to <strong className="text-text-primary font-mono">$3,800 in lost retirement capital</strong> per year. Replacing this asset is crucial for long-term equity growth.
              </p>
            </div>

            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">4. Non-Billable PTO and Federal Holidays: 15 days (~5.8%)</h4>
              </div>
              <p className="text-sm">
                If you take off 10 days of standard vacation and 5 statutory holidays, you lose exactly 3 full weeks of billable availability. There is no sick pay or general paid holiday structure on a 1099 engagement. A contractor only earns on active billable output. To replace this loss, your hourly or retainer metrics must expand by roughly <strong className="text-text-primary font-mono">5.8%</strong> (15 empty days divided by 260 standard working days) to finance your time off.
              </p>
            </div>

            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">5. Unemployment Insurance, Workers Comp, and Licensing</h4>
              </div>
              <p className="text-sm">
                W2 employees are insulated from immediate legal liabilities and covered by employer-paid workers' compensation and Federal/State unemployment taxes (FUTA/SUTA). As a contractor, you must purchase professional liability insurance (errors and omissions), handle standard bookkeeping overheads, fund self-employed state disabilities, and purchase business structure licenses. This represents from <strong className="text-text-primary">$1,500 to $3,500 annually</strong> in general operational overhead.
              </p>
            </div>

          </div>
        </div>

        {/* SECTION 2 — THE STANDARD CORE EQUIV FORMULA */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Total Absorption Formula
          </h2>
          <p>
            To compute exactly how much you need to bill, use the following operational framework to transition your pricing target safely:
          </p>

          <div className="p-8 bg-bg-card/50 border border-border-color/40 rounded-3xl space-y-4">
            <h4 className="text-xs font-mono font-black text-blue uppercase tracking-widest flex items-center gap-2">
              <Wallet size={16} /> Mathematically Adjusted Target Formula
            </h4>
            <div className="text-lg md:text-2xl text-text-primary font-black font-sans leading-relaxed text-center py-4 bg-bg-main border border-border-color/30 rounded-2xl">
              1099 Equivalent Rate = W2 Salary × 1.35 + Desired Margin
            </div>
            <p className="text-sm text-text-muted leading-relaxed">
              As a foundational baseline, professional CPAs suggest a minimum multiplier of <strong className="text-text-primary">1.35 to 1.50</strong> to achieve parity. Out of every dollar you bill, assume that approximately 35% to 50% is consumed straight by taxes, healthcare premiums, and non-working PTO coverage. To make a genuine profit advancement, your contract value must exceed this 35%+ structural threshold.
            </p>
          </div>
        </div>

        {/* SECTION 3 — EXHAUSTIVE REAL EXAMPLE: $95K SCENARIO */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The $95,000 W2 Reality Case Study
          </h2>
          
          <p>
            Let’s run the exact comparison numbers for a professional earning <strong className="text-text-primary">$95,000 as a W2 employee</strong> versus operating as an independent 1099 contractor in <strong className="text-text-primary">Texas</strong> (no state income tax). 
          </p>

          <p>
            To replace the $95,000 base take-home under equivalent lifestyle conditions, the standard calculations scale as follows:
          </p>

          <div className="space-y-3 font-mono text-sm bg-bg-card/25 p-6 rounded-2xl border border-border-color/30">
            <div className="flex justify-between border-b border-border-color/10 pb-2 text-text-primary font-bold">
              <span>W2 Target Base Baseline:</span>
              <span>$95,000.00</span>
            </div>
            <div className="flex justify-between">
              <span>FICA Matching Reimbursement (7.65%):</span>
              <span className="text-red">+$7,267.50</span>
            </div>
            <div className="flex justify-between">
              <span>Private Medical Premium ($600/mo):</span>
              <span className="text-red">+$7,200.00</span>
            </div>
            <div className="flex justify-between">
              <span>4% Retirement Match Equivalency:</span>
              <span className="text-red">+$3,800.00</span>
            </div>
            <div className="flex justify-between">
              <span>PTO Replacement Pool (15 days):</span>
              <span className="text-red">+$5,480.77</span>
            </div>
            <div className="flex justify-between">
              <span>Operating Liability Insurances & Admin:</span>
              <span className="text-red">+$2,000.00</span>
            </div>
            <div className="flex justify-between border-t border-blue/40 pt-2 text-blue font-black text-base">
              <span>Absolute Parity Minimum:</span>
              <span>$120,748.27</span>
            </div>
          </div>

          <p>
            But we cannot stop there. Once we reach the absolute parity minimum of <strong className="text-text-primary font-mono">$120,748.27</strong>, we must account for the self-employment tax calculation. When you bill $120,748.27, your estimated self-employment tax is approximately <strong className="text-text-primary font-mono font-bold">$17,045</strong>. Therefore, to walk away with a genuine lifestyle upgrade and pay standard federal income rates, your minimum target rate should sit around <strong className="text-text-primary font-mono">$130,000 to $135,000</strong>.
          </p>

          <p>
            This means you require roughly a <strong className="text-text-primary font-mono font-bold">42% premium</strong> over your old salary just to scale comfortably. An hourly billing value of <strong className="text-text-primary font-mono">$65.00/hour to $70.00/hour</strong> is the absolute floor for professional negotiation in this bracket.
          </p>
        </div>

        {/* SECTION 4 — COMPARISON GRID AT KEY INCOME BASES */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Equivalent Compensation Grid
          </h2>
          <p>
            Find your target salary range in the table below to determine corresponding 1099 annual contracts and minimum hourly rate recommendations. This incorporates standard business overhead matching, self-employment tax offsets, private insurance values, and vacation reserves:
          </p>

          {/* TABLE */}
          <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/20">
            <table className="w-full text-left text-sm border-collapse font-mono">
              <thead>
                <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                  <th className="p-4">W2 Target Base</th>
                  <th className="p-4 text-right">Benefits Value</th>
                  <th className="p-4 text-right">Self-Employment Gap</th>
                  <th className="p-4 text-right">Minimum 1099 Equivalent</th>
                  <th className="p-4 text-right text-blue">Floor Hourly Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-color/10">
                <tr>
                  <td className="p-4 text-text-primary font-sans font-bold">$60,000</td>
                  <td className="p-4 text-right">$14,860</td>
                  <td className="p-4 text-right">$4,590</td>
                  <td className="p-4 text-right text-text-primary font-bold font-mono">$79,450</td>
                  <td className="p-4 text-right text-blue font-black font-mono">$40.00 / hr</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-primary font-sans font-bold">$80,000</td>
                  <td className="p-4 text-right">$17,020</td>
                  <td className="p-4 text-right">$6,120</td>
                  <td className="p-4 text-right text-text-primary font-bold font-mono">$103,140</td>
                  <td className="p-4 text-right text-blue font-black font-mono">$52.00 / hr</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-primary font-sans font-bold">$100,000</td>
                  <td className="p-4 text-right">$19,250</td>
                  <td className="p-4 text-right font-mono">$7,650</td>
                  <td className="p-4 text-right text-text-primary font-bold font-mono">$126,900</td>
                  <td className="p-4 text-right text-blue font-black font-mono">$64.00 / hr</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-primary font-sans font-bold">$120,000</td>
                  <td className="p-4 text-right">$21,410</td>
                  <td className="p-4 text-right font-mono">$9,180</td>
                  <td className="p-4 text-right text-text-primary font-bold font-mono font-mono">$150,590</td>
                  <td className="p-4 text-right text-blue font-black font-mono font-mono">$76.00 / hr</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-primary font-sans font-bold">$150,000</td>
                  <td className="p-4 text-right font-mono">$24,650</td>
                  <td className="p-4 text-right font-mono">$11,475</td>
                  <td className="p-4 text-right text-text-primary font-bold font-mono font-mono">$186,125</td>
                  <td className="p-4 text-right text-blue font-black font-mono font-mono font-mono">$94.00 / hr</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SECTION 5 — HOW BUSINESS DEDUCTIONS FIT IN */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Write-Off Lever: Lowering Your Real Cost Targets
          </h2>
          <p>
            While the multipliers above seem formidable, the tax code rewards contractors who actively track business expenses. Every valid business deduction reduces your net schedule C profit. Since both self-employment tax and income tax are calculated purely on net business profit, a high expense record acts as a significant discount booster on the raw contract rate requirement.
          </p>
          <p>
            For example, if you rent a dedicated office space, buy a high-end laptop, travel to client sites, and write off continuous education materials, you can legally shelter a substantial portion of your gross revenues. Additionally, the <strong className="text-text-primary">Section 199A Qualified Business Income (QBI) deduction</strong> offers up to a 20% tax buffer on eligible pass-through earnings, lowering your effective federal rate below that of an equivalent W2 high earner. This allows you to scale down the rate slightly if your business structure is optimized for high write-off allowances.
          </p>
        </div>

        {/* SECTION 6 — EXCELLENT CLIENT NEGOTIATION TIPS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Pro Contractor Client Negotiation Tactics
          </h2>
          <p>
            Knowing your target pricing and successfully closing deals are two separate challenges. Use these strategies when presenting your premium 1099 pricing structures to potential client companies:
          </p>

          <ul className="space-y-4">
            <li className="flex gap-4 p-4 border border-border-color/25 rounded-2xl bg-bg-card/25">
              <span className="text-blue font-mono font-black shrink-0 mt-1">✔</span>
              <div>
                <strong className="text-text-primary">Frame Pricing Around ROI and Output:</strong> Companies pay contractors for solving immediate, complex operational bottlenecks with low friction. Emphasize that you ramp up instantly without requiring on-boarding periods or capital-heavy training cycles.
              </div>
            </li>
            <li className="flex gap-4 p-4 border border-border-color/25 rounded-2xl bg-bg-card/25">
               <span className="text-blue font-mono font-black shrink-0 mt-1">✔</span>
               <div>
                 <strong className="text-text-primary">Highlight Zero Benefits Drag:</strong> Point out clearly to HR or hiring managers that you require zero health insurance matches, 401k administration burdens, severance exposure, or payroll tax match outlays. This means you represent a fully variable, highly-decoupled, zero-benefit resource.
               </div>
            </li>
            <li className="flex gap-4 p-4 border border-border-color/25 rounded-2xl bg-bg-card/25">
               <span className="text-blue font-mono font-black shrink-0 mt-1">✔</span>
               <div>
                 <strong className="text-text-primary">Offer Structured Tiered Retainers:</strong> Instead of simple flat hourly models that reward slow execution, bundle your services into output-focused weekly or monthly retainers. It secures reliable baseline income for you while ensuring predictable budgets for your corporate clients.
               </div>
            </li>
          </ul>
        </div>

        {/* SECTION 7 — INTERAL LINK AND CALL TO ACTION FOR THE REVERSE CALCULATOR */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10">
          <h3 className="text-2xl font-black text-text-primary">Secure your fair contract margin today</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
            Stop guessing with your target rates. W2 and 1099 contracts cannot be compared piece-meal. Use our dynamic, state-adjusted interactive tool to see exactly how your offers stack up for your bottom line.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO REVERSE CALCULATOR]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Analyze My Target Billing <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* SECTION 8 — FAQ FOR GOOGLE SEARCH SNIPPET STRUCTURING */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Is a 1099 contract better than a W2 salary?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Only if the contract rate represents at least a 30% to 50% premium over the W2 salary baseline. While a 1099 structure offers unparalleled business write-offs, tax-sheltering strategies, and scheduling flexibility, it drops the FICA matches and corporate medical subsidies.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                How do I translate an annual salary to an hourly contractor rate?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Take your target annual salary, multiply it by 1.4 to incorporate necessary benefits, retirement matches, insurances, and non-working PTO intervals. Then, divide the resulting total by 2,000 estimated yearly billable hours. This secures you a precise floor hourly billing amount.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Does a contractor pay both federal and state income tax?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes. Independent contractors are subject to the exact same federal bracket system as standard W2 workers, plus any corresponding state-level income scales. The key difference resides strictly in the self-employment FICA payroll layer, which is assessed separately at 15.3% on net earnings.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Disclaimer: Calculations represent professional estimates for comparative pricing purposes. Consult with a qualified accountant when executing major client transactions or establishing your business organization.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default ContractorRatePage;
