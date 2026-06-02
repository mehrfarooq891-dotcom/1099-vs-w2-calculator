import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, BookOpen, Info, HelpCircle, FileText, CheckCircle2, Award, Percent, TrendingUp } from 'lucide-react';

interface QbiDeductionPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington') => void;
}

const QbiDeductionPage: React.FC<QbiDeductionPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="qbi-post"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex-grow scroll-smooth"
    >
      <article className="py-20 px-6 max-w-4xl mx-auto space-y-12 bg-bg-main text-text-muted leading-relaxed text-base md:text-lg">
        
        {/* Breadcrumb & Navigation Links */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-text-muted">
          <button 
            onClick={() => handleNavClick('home')}
            className="hover:text-blue transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-blue">Tax Optimization</span>
          <span>/</span>
          <span className="text-text-muted select-none">QBI Deduction Guide</span>
        </div>

        {/* TITLE BLOCK (H1) */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none">
            The QBI Deduction for 1099 Contractors: 20% Off Your Tax Bill (If You Qualify)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Award size={14} />
               <span>SECTION 199A STRATEGY</span>
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
              <span>EXPERT FOCUS: </span>
              <span className="text-blue font-bold">1,380 WORDS</span>
            </div>
          </div>
        </div>

        {/* INTRODUCTION & DIRECT LEAD */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            There's a tax deduction worth potentially $10,000+ that half of 1099 contractors don't know they qualify for.
          </p>

          <p>
            When Congress overhauled the Internal Revenue Code in 2017 under the Tax Cuts and Jobs Act, they slashed the corporate tax rate for traditional C-corporations. To throw a bone to the millions of small business owners and freelancers, they introduced Section 199A—the Qualified Business Income (QBI) deduction. Despite being on the books for years, it remains one of the least understood benefits in the entire self-employment landscape. 
          </p>

          <p>
            If you operate as an independent contractor, sole proprietor, or single-member LLC, you are likely sitting on a tax goldmine. This isn’t a standard write-off where you must spend money to get a break. Instead, it is a statutory gift. The IRS simply isolates a portion of your net business earnings and marks it as tax-free.
          </p>

          <p>
            Understanding how the <strong className="text-text-primary">QBI deduction 1099 independent contractor</strong> framework functions is critical. It can single-handedly close the tax gap between a W2 paycheck and a 1099 contract. This guide bypasses dry tax-code jargon to provide standard, plain-English rules to ensure you don’t leave thousands of dollars on the table for the 2025 tax year.
          </p>
        </div>

        {/* SECTION 1: WHAT IS QBI IN PLAIN ENGLISH */}
        <div className="space-y-4 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The QBI Deduction Explained in Plain English
          </h2>
          <p>
            Think of the QBI deduction as an automatic discount on your business profits. If you run a regular schedule C business, the IRS allows you to deduct up to <strong className="text-text-primary">20% of your qualified business income</strong> directly from your taxable income. 
          </p>
          <p>
            Let us clarify a vital operational point. When you write off an expense like a new laptop or your internet bill, you are reducing your net business income. This saves you money, but it requires you to physically build up a receipt and spend money on hardware. In contrast, the QBI deduction is applied to the money you <em className="italic">keep</em>. It does not replace or interfere with your business expense write-offs. It acts alongside them.
          </p>
          <p>
            Qualified business income represents the net amount of qualified items of income, gain, deduction, and loss from your active trade or business. It excludes your W2 wages, investment dividends, capital gains, interest income, and foreign income. It is the core profit your 1099 activity generated within US borders.
          </p>
        </div>

        {/* SECTION 2: WHO QUALIFIES & WHO DOES NOT (SSTBS) */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Who Qualifies Under Section 199A?
          </h2>
          <p>
            To receive the maximum deduction, your business must fit certain legislative criteria. For the vast majority of freelancers, programmers, graphic artists, copywriters, and blue-collar contractors, eligibility is straightforward. You operate a Qualified Trade or Business (QTB) and receive the deduction automatically.
          </p>
          <p>
            However, Congress designed a structural wall for certain high-earning service providers. These are designated as <strong className="text-text-primary">Specified Service Trades or Businesses (SSTBs)</strong>. If your enterprise relies primarily on the reputation, skill, or licensing of its operators, you fall into the SSTB cage.
          </p>

          <div className="p-6 bg-bg-card/30 border border-border-color/20 rounded-2xl space-y-4">
            <h4 className="text-xs font-mono font-bold text-red uppercase tracking-widest flex items-center gap-2">
              <AlertCircle size={16} /> Fields Defined as SSTBs
            </h4>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-xs font-mono text-text-primary">
              <span className="p-2 border border-border-color/10 rounded bg-bg-main">Medicine & Health</span>
              <span className="p-2 border border-border-color/10 rounded bg-bg-main">Law & Litigation</span>
              <span className="p-2 border border-border-color/10 rounded bg-bg-main">Accounting & CPAs</span>
              <span className="p-2 border border-border-color/10 rounded bg-bg-main">Consulting Services</span>
              <span className="p-2 border border-border-color/10 rounded bg-bg-main">Financial Services</span>
              <span className="p-2 border border-border-color/10 rounded bg-bg-main">Performing Arts</span>
            </div>
            <p className="text-xs text-text-muted leading-relaxed">
              *Notable Exclusion: Engineers and architects were specifically spared from the SSTB definition by lobbyists, and always qualify as QTBs regardless of income levels.
            </p>
          </div>

          <p>
            Here is the critical detail: <strong className="text-text-primary">The SSTB designation only hurts you if you are a high earner.</strong> If your total taxable income is below the statutory thresholds, the distinction is entirely irrelevant. An independent consultant earning a clean $70,000 gets the identical 20% tax discount as a carpenter earning $70,000.
          </p>
        </div>

        {/* SECTION 3: THE PHASE-OUT STRAT AND CONCRETE NUMBERS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The 2025 Thresholds and the "Phase-Out" Explained
          </h2>
          <p>
            Once your total taxable income (across all your personal sources, not just 1099 revenue) reaches the IRS speed limit, the deduction rules get highly technical. For the <strong className="text-text-primary">2025 tax year</strong>, these limits are:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 font-mono text-center">
            <div className="p-6 border border-border-color/20 rounded-2xl bg-bg-card/40">
              <span className="text-[10px] text-text-muted uppercase">Single Filers (2025)</span>
              <h4 className="text-2xl font-black text-text-primary mt-2">$197,300</h4>
              <p className="text-xs text-text-muted mt-2">Phases out fully by $247,300</p>
            </div>
            <div className="p-6 border border-border-color/20 rounded-2xl bg-bg-card/40">
              <span className="text-[10px] text-text-muted uppercase">Married Filing Jointly (2025)</span>
              <h4 className="text-2xl font-black text-text-primary mt-2">$394,600</h4>
              <p className="text-xs text-text-muted mt-2">Phases out fully by $494,600</p>
            </div>
          </div>

          <p>
            What does a <strong className="text-text-primary">phase-out</strong> mean? It is a structural wind-down. 
          </p>
          <p>
            Imagine David, a single 1099 marketing consultant (SSTB) whose 2025 taxable income is exactly <strong className="text-text-primary">$222,300</strong>. Since his income is precisely $25,000 over the single $197,300 baseline (representing exactly 50% of the $50,000 total phase-out window), his QBI deduction is not wiped out. It is cut in half. Instead of receiving a full 20% benefit, David’s deduction is reduced to a 10% rate. If his taxable income climbs to $248,000, his deduction drops to 0%.
          </p>
          <p>
            For non-SSTB businesses (like software developers or builders), passing this boundary does not delete the match. It triggers secondary complex computations based on corporate W2 wages paid to staff or your cost basis of physical equipment (depreciable property).
          </p>
        </div>

        {/* SECTION 4: THE CALCULATION CHAIN STEP-BY-STEP */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The QBI Calculation Chain
          </h2>
          <p>
            The QBI deduction is not calculated on your raw revenues. It operates through a detailed operational waterfall:
          </p>

          <div className="space-y-4">
            <div className="flex gap-4 items-start">
               <span className="h-6 w-6 rounded-full bg-blue text-white flex items-center justify-center font-mono text-xs font-black shrink-0 mt-1">1</span>
               <div>
                  <strong className="text-text-primary">Establish Gross 1099 Revenues:</strong> Your raw total billings. Let us assume a target of $100,000.
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <span className="h-6 w-6 rounded-full bg-blue text-white flex items-center justify-center font-mono text-xs font-black shrink-0 mt-1">2</span>
               <div>
                  <strong className="text-text-primary">Subtract Business Expenses:</strong> Deduct standard operating outlays (Schedule C items) like travel, hosting, and office equipment. If expenses equal $15,000, your Net Business Profit equals $85,000.
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <span className="h-6 w-6 rounded-full bg-blue text-white flex items-center justify-center font-mono text-xs font-black shrink-0 mt-1">3</span>
               <div>
                  <strong className="text-text-primary">Deduct Half of Self-Employment Tax:</strong> The IRS grants you an "above-the-line" adjustment representing exactly 50% of your calculated self-employment tax. If your SE tax is $12,010, you subtract $6,005 to arrive at your adjusted tax foundation.
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <span className="h-6 w-6 rounded-full bg-blue text-white flex items-center justify-center font-mono text-xs font-black shrink-0 mt-1">4</span>
               <div>
                  <strong className="text-text-primary">Apply 20% Deduction Floor:</strong> Multiply your adjusted business net profit by 20%. Note that this calculation is capped at exactly 20% of your total personal taxable income minus net capital gains.
               </div>
            </div>
            <div className="flex gap-4 items-start">
               <span className="h-6 w-6 rounded-full bg-blue text-white flex items-center justify-center font-mono text-xs font-black shrink-0 mt-1">5</span>
               <div>
                  <strong className="text-text-primary">Settle Federal Income Tax:</strong> Subtract your standardized deduction and your new QBI deduction from your baseline. Calculate your final bracket margins.
               </div>
            </div>
          </div>
        </div>

        {/* SECTION 5: REAL EXAMPLE AND DOLLAR ADVANTAGES */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Calculated Case Study: Sarah, Freelance Designer
          </h2>
          <p>
            Let us deploy a concrete scenario. Sarah operates a freelance design company. In 2025, her single-member LLC generates <strong className="text-text-primary">$85,000 in gross Billings</strong>. Her software licensing, server space, and travel expenses total exactly <strong className="text-text-primary">$12,000</strong>. Sarah files as single with no dependent credits, and takes the standard $15,000 deduction.
          </p>

          <p>
            Her operational path unfolds below:
          </p>

          <ul className="space-y-2 font-mono text-sm bg-bg-card/20 p-6 rounded-2xl border border-border-color/20">
            <li className="flex justify-between border-b border-border-color/10 pb-1">
              <span>Gross 1099 Income:</span>
              <span className="text-text-primary font-bold">$85,000</span>
            </li>
            <li className="flex justify-between border-b border-border-color/10 pb-1">
              <span>Schedule C Expenses:</span>
              <span className="text-red">-$12,000</span>
            </li>
            <li className="flex justify-between border-b border-border-color/10 pb-1">
              <span>Net Business Profit:</span>
              <span className="text-text-primary font-bold">$73,000</span>
            </li>
            <li className="flex justify-between border-b border-border-color/10 pb-1">
              <span>Self-Employment Tax (92.35% × 15.3%):</span>
              <span className="text-red">-$10,314</span>
            </li>
            <li className="flex justify-between border-b border-border-color/10 pb-1">
               <span>Adjusted Gross Income Deductible Match (1/2 SE Tax):</span>
               <span className="text-green">-$5,157</span>
            </li>
            <li className="flex justify-between border-b border-border-color/10 pb-1 text-text-primary">
              <span>Standard Filing Deductions:</span>
              <span className="text-red">-$15,000</span>
            </li>
            <li className="flex justify-between border-t border-border-color/30 pt-2 font-black text-text-primary">
              <span>Taxable Business Income Base (Pre-QBI):</span>
              <span>$52,843</span>
            </li>
          </ul>

          <p>
            Sarah's QBI is capped at the lesser of:
          </p>
          <ul className="list-disc list-inside pl-4 text-xs font-mono space-y-1">
             <li>20% of net Schedule C profit ($73,000 × 0.20 = <strong className="text-text-primary">$14,600</strong>)</li>
             <li>20% of her taxable income before QBI ($52,843 × 0.20 = <strong className="text-text-primary">$10,569</strong>)</li>
          </ul>
          <p>
            Consequently, Sarah pockets a clean, non-itemized <strong className="text-text-primary font-mono font-bold">$10,569 deduction</strong> straight off her final return form.
          </p>
        </div>

        {/* SECTION 6: COMPARATIVE TABLE WITH/WITHOUT */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The QBI Difference: Sarah's Tax Bill Comparison
          </h2>
          <p>
            To appreciate the exact significance of Sarah's savings, let us evaluate her results side-by-side. Look at the stark reduction in taxable income below:
          </p>

          {/* TABLE FOR SEC INSIGHTS */}
          <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25">
             <table className="w-full text-left text-sm border-collapse font-mono">
                <thead>
                  <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted font-mono">
                    <th className="p-4">Tax Entry Details</th>
                    <th className="p-4 text-right">Calculation WITHOUT QBI</th>
                    <th className="p-4 text-right">Calculation WITH QBI</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border-color/10">
                   <tr>
                     <td className="p-4 text-text-primary font-sans font-bold">Net Self-Employment Income</td>
                     <td className="p-4 text-right">$73,000</td>
                     <td className="p-4 text-right">$73,000</td>
                   </tr>
                   <tr>
                     <td className="p-4 text-text-muted font-sans">Less: Half SE Tax Deduction</td>
                     <td className="p-4 text-right">-$5,157</td>
                     <td className="p-4 text-right">-$5,157</td>
                   </tr>
                   <tr>
                     <td className="p-4 text-text-muted font-sans">Less: 2025 Standard Deduction</td>
                     <td className="p-4 text-right">-$15,000</td>
                     <td className="p-4 text-right">-$15,000</td>
                   </tr>
                   <tr className="bg-red/5">
                     <td className="p-4 text-red-400 font-sans font-bold">Less: Section 199A QBI Deduction</td>
                     <td className="p-4 text-right font-bold text-red-400">$0</td>
                     <td className="p-4 text-right font-bold text-green-400">-$10,569</td>
                   </tr>
                   <tr className="border-t border-border-color/30">
                     <td className="p-4 text-text-primary font-sans font-bold">Final Net Taxable Income</td>
                     <td className="p-4 text-right text-red-400 font-bold">$52,843</td>
                     <td className="p-4 text-right text-green-400 font-bold">$42,274</td>
                   </tr>
                   <tr className="bg-blue/5">
                     <td className="p-4 text-blue font-sans font-black uppercase">Calculated Federal Income Tax Due</td>
                     <td className="p-4 text-right text-red-500 font-bold">$6,913</td>
                     <td className="p-4 text-right text-blue font-black">$4,591</td>
                   </tr>
                </tbody>
             </table>
          </div>

          <p className="text-sm italic text-text-muted">
            *Sarah records exact cash savings of <strong className="text-text-primary">$2,322</strong> simply because she entered her Section 199A metrics on Form 1040. Formulated over multiple tax periods, this is the difference between working long weekends or reinvesting in her personal enterprise.
          </p>
        </div>

        {/* SECTION 7: 3 METHODS TO EXCEL ELIGIBILITY */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            3 Ways to Maximize Your QBI Eligibility
          </h2>
          <p>
            If your revenue is scaling up, you must act strategically to defend this eligibility block:
          </p>

          <div className="space-y-4">
            
            <div className="p-6 border border-border-color/20 rounded-2xl bg-bg-card/20 space-y-2">
               <h4 className="text-base font-black uppercase text-text-primary">1. Fund a Self-Employed Solo 401(k) or SEP IRA</h4>
               <p className="text-sm">
                  Since the QBI thresholds are determined by your final net taxable income rather than your gross invoicing, placing money in a pre-tax Solo 401(k) lowers your threshold balance. Under 2025 brackets, saving $20,000 inside a corporate structure can pull your taxable income below the $197,300 speed limit, restoring a full 20% QBI deduction that otherwise would have been phased out.
               </p>
            </div>

            <div className="p-6 border border-border-color/20 rounded-2xl bg-bg-card/20 space-y-2">
               <h4 className="text-base font-black uppercase text-text-primary">2. Structure as an S-Corporation Strategically</h4>
               <p className="text-sm">
                  If your 1099 revenues exceed $100,000, filing an S-Corp election can reduce self-employment tax. However, warning: Only the "S-Corp distributions" qualify as Qualified Business Income, whereas your statutory "W2 salary" does not. You must consult with a certified tax accountant to model how an S-Corp election coordinates with your QBI benefit.
               </p>
            </div>

            <div className="p-6 border border-border-color/20 rounded-2xl bg-bg-card/20 space-y-2">
               <h4 className="text-base font-black uppercase text-text-primary">3. Isolate Your Specified Services (SSTB separation)</h4>
               <p className="text-sm">
                  If you run a combined business, such as consulting (SSTB) and software licensing (non-SSTB), split these lines. Keeping clean billings, separate invoices, and discrete LLC structures ensures your software royalty margins are defended by full QBI approvals, even as your high-net consulting margins are capped or phased out.
               </p>
            </div>

          </div>
        </div>

        {/* SECTION 8: W2 EMPLES ARE EXCLUDED */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            W2 Employees: Left Behind in the Rain
          </h2>
          <p>
            It is critical to note that <strong className="text-text-primary">standard W2 employees have zero legal access to the QBI deduction</strong>. Regardless of whether they work identical hours, operate on the identical desks, or support the identical code streams, their revenues are treated solely as salary income. 
          </p>
          <p>
            If you are deciding between a high-paying corporate W2 paycheck or a structured 1099 independent contract offering, this 20% tax buffer is the decisive factor that can skew the net cash comparisons in favor of self-employment.
          </p>
        </div>

        {/* INTERAL LINK AND INTERACTIVE BUTTON */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/30 my-10">
          <h3 className="text-2xl font-black text-text-primary">Model Your Estimated QBI Savings Automatically</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
            Avoid paper calculations. Our responsive 2026 tax model incorporates standard deductions, self-employment caps, state-specific adjustments, and QBI deduction rules automatically.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO CALCULATOR]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Simulate QBI Returns <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* SECTION 10: FAQ */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Is the QBI deduction an itemized deduction?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. The Qualified Business Income deduction is "above-the-line" in terms of how it does not compete with your standard deduction. You can claim the flat standard deduction ($15,000 for single filers in 2025) and still receive the full QBI advantage.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can I claim QBI if my business has a net loss?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. If your Schedule C displays a net business loss, you have no qualified business income to deduct. Additionally, that net loss is carried forward to your next tax year, where it must be subtracted from future business profits before you can calculate your next QBI benefit.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Does the QBI deduction expire in the future?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes. Section 199A contains a built-in "sunset clause." Unless Congress acts to extend the rules, the Qualified Business Income deduction is scheduled to expire on December 31, 2025. Proactive tax advisors closely monitor congressional sessions to track potential future adjustments.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Educational content only. This guide represents professional estimates for tax modeling purposes. Always discuss your personal situation with a certified tax professional.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default QbiDeductionPage;
