import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, DollarSign, Table, Briefcase, Award, FileText, CheckCircle } from 'lucide-react';

interface ConsultantComparisonPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse' | 'realestate' | 'truck' | 'therapist' | 'consultant') => void;
}

const ConsultantComparisonPage: React.FC<ConsultantComparisonPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="consultant-post"
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
          <span className="text-blue">Corporate Advisory Strategy</span>
          <span>/</span>
          <span className="text-text-muted select-none">1099 vs W2 Consultant</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            Consultant 1099 vs W2: When to Incorporate, When to Stay Solo, and How to Not Overpay Taxes
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Briefcase size={14} className="text-blue shrink-0" />
               <span>CORPORATE ADVISORY taxation & business structuring</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA_</span>
            </div>
            <div>
              <span>LAST UPDATED: </span>
              <span className="text-text-primary font-bold">JUNE 2026</span>
            </div>
            <div>
              <span>WORD COUNT: </span>
              <span className="text-blue font-bold">1,380 WORDS</span>
            </div>
          </div>
        </div>

        {/* KEY HIGHLIGHTS BOX */}
        <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-3">
          <h3 className="text-sm font-bold uppercase tracking-wider text-blue font-mono">Executive Summary</h3>
          <ul className="text-xs text-text-muted space-y-2 list-none pl-0 font-mono">
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">✔️</span>
                <span><strong>The Employee Trap</strong>: A $130,000 consulting salary includes unseen corporate payroll and benefits subsidies worth over $22,000.</span>
             </li>
             <li className="flex items-start gap-2">
                <span><strong>The $80k Trigger</strong>: At $80,000+ net 1099 profit, electing S-Corp status becomes mathematically mandatory to avoid self-employment tax.</span>
             </li>
             <li className="flex items-start gap-2">
                <span><strong>Audit Protection</strong>: Use strict "Reasonable Salary" guidelines to split your earnings and defend S-Corp distributions from IRS flags.</span>
             </li>
          </ul>
        </div>

        {/* INTRODUCTION */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            For senior business advisors, system integrators, and management specialists, compensation structure determines wealth retention. When choosing your professional path, comparing a corporate W2 salary directly to an independent 1099 billable rate is the first financial threshold you must cross.
          </p>

          <p>
            The financial landscape is full of misdirection. Recruitment desks regularly post independent consulting contracts at <strong className="text-text-primary">$100 to $135 per hour</strong>. These contracts often compete directly with senior W2 roles at major firms like Deloitte, PwC, or EY that pay <strong className="text-text-primary">$130,000 to $150,000</strong> with standard corporate benefits.
          </p>

          <p>
            Choosing between these paths is not simply a matter of dividing your billing rate by 2,000 hours. The structural divide between W2 and 1099 consulting dictates your personal legal liability, your tax compliance duties, and your overall income retention.
          </p>

          <p>
            To evaluate a <span className="text-text-primary font-bold">1099 vs W2 consultant</span> offer properly, you must analyze several key factors. You must look at unseen corporate benefits subsidies, calculate self-employment taxes (SECA), set up strict LLC and S-Corporation tax structures, and maximize eligible business write-offs. This guide breaks down the exact mechanics of both tracks, using real-world numbers and a detailed side-by-side ledger.
          </p>
        </div>

        {/* SECTION 1 - BIG 4 EMPLOYEE VS INDEPENDENT */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Structural Tradeoff: Big 4 Employee vs. Independent Consultant
          </h2>
          <p>
            A traditional W2 senior consultant role at a Big 4 firm or a boutique agency provides a secure, predictable financial foundation. The firm manages your sales pipeline, covers your corporate travel logistics, funds your professional liability insurance, and provides comprehensive benefits. 
          </p>

          <p>
            These benefits represent significant value. In addition to paying half of your FICA taxes (7.65% up to threshold caps), your employer provides group health insurance policies, covers disability plans, and offers matching contributions to your 401(k).
          </p>

          <p>
            Transitioning to a 1099 structure changes your business model. You exit the corporate employment shield and become an independent professional service firm. 
          </p>

          <p>
            On a 1099 contract, you operate without a corporate safety net. You must manage your own business pipeline, handle your own accounting, and purchase professional insurance. You are also hits with the full 15.3% self-employment tax burden on your net business earnings. 
          </p>
          
          <p>
            However, this shift also grants you significant autonomy. As an independent operator, you can negotiate higher project fees, manage your own schedule, work with multiple clients, and utilize business write-offs to reduce your taxable income.
          </p>
        </div>

        {/* SECTION 2 - WHEN TO LLC VS S-CORP */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Entity Strategy: When to Form an LLC vs. an S-Corporation
          </h2>
          <p>
            Many independent consultants start out as sole proprietors. However, as your client base expands, choosing a more formal business structure becomes essential for liability protection and tax efficiency.
          </p>

          <h3 className="text-xl font-bold text-text-primary">The Sole Proprietor and Single-Member LLC</h3>
          <p>
            A single-member LLC acts as a "disregarded entity" for tax purposes. Your business income and expenses are reported on Schedule C of your personal Form 1040 layout. While this structure shields your personal assets from business liabilities, it offers no federal self-employment tax advantages. Your entire net business profit is subject to the 15.3% self-employment tax.
          </p>

          <h3 className="text-xl font-bold text-text-primary">The S-Corporation Tax Election</h3>
          <p>
            To optimize your tax strategy as an independent consultant, you should target a specific financial milestone: **$80,000 in net business profits**.
          </p>

          <p>
            Once your consulting practice consistently generates more than $80,000 in net profit, you should file **IRS Form 2553** to elect S-Corporation status for your LLC. This structure allows you to split your business income into two distinct categories:
          </p>

          <ul className="list-disc list-inside pl-4 text-sm space-y-2">
             <li><strong className="text-text-primary">W2 Salary:</strong> You pay yourself a competitive, market-rate salary through standard payroll, which is subject to FICA and self-employment taxes.</li>
             <li><strong className="text-text-primary">Shareholder Distributions:</strong> The remaining business profits are paid out as equity distributions. Crucially, **distributions are entirely exempt from the 15.3% self-employment tax**.</li>
          </ul>

          <div className="p-6 bg-bg-card/45 border border-border-color/20 rounded-2xl space-y-3">
             <h4 className="text-base font-black text-text-primary uppercase flex items-center gap-2">
                <CheckCircle size={18} className="text-green" /> The "Reasonable Salary" Rule
             </h4>
             <p className="text-sm text-text-muted">
                The IRS monitors S-Corporation salaries closely to prevent tax evasion. You cannot pay yourself a $10,000 salary and take $150,000 in tax-free distributions. Your salary must reflect "reasonable compensation" for your role—typically **40% to 60% of your net business revenues**, based on market rates for your specific location and industry.
             </p>
          </div>
        </div>

        {/* SECTION 3 - CONSULTANT SPECIFIC WRITE-OFFS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Consultant's Business Deduction Engine
          </h2>
          <p>
            As an independent contractor, you only pay taxes on your **net business profit**, not your gross billings. Claiming your eligible business deductions is the most effective way to lower your tax liability:
          </p>

          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">1. Dedicated Home Office Deduction</span>
                <p className="text-text-muted text-xs">
                  If you operate from a dedicated space used exclusively for client calls and deliverables, you can claim the Home Office Deduction. You can write off a proportional share of your rent, mortgage interest, utilities, property taxes, and high-speed internet.
                </p>
              </div>
              <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">2. Travel and Meal Deductions</span>
                <p className="text-text-muted text-xs">
                  While client entertainment expenses are no longer deductible, business meals with clients, partners, or prospects remain **50% deductible**—provided you discuss business during the meal. All business-related travel, flights, lodging, and logistics are fully deductible.
                </p>
              </div>
              <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">3. Technology and Subscriptions</span>
                <p className="text-text-muted text-xs">
                  Laptops, monitors, smartphones, server hosting, and specialized software licenses (such as Salesforce, Slack, ERP platforms, or Microsoft 365) are fully deductible. You can also write off professional training, certifications, books, and industry association fees.
                </p>
              </div>
              <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">4. Professional Liability & Health Premiums</span>
                <p className="text-text-muted text-xs">
                  Professional liability policies (Errors & Omissions) are a critical necessity for independent consultants, and the premiums are fully deductible. Additionally, you can deduct 100% of your personal, spouse, and dependent health insurance premiums as an above-the-line deduction.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 4 - LEDGER COMPARISON: $130k W2 vs. $180k 1099 */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Financial Case Study: $130,000 W2 vs. $180,000 1099 Independent
          </h2>
          <p>
            Let's evaluate a realistic scenario comparing two therapeutic advisory structures. Marcus is a senior systems integration architect deciding between two options:
          </p>
          <ul className="list-disc list-inside pl-4 text-sm space-y-1">
             <li><strong className="text-text-primary">Option A (W2 Salaried Employee - Deloitte):</strong> Marcus receives a base salary of <strong className="text-text-primary font-mono">$130,000</strong>. Deloitte provides health insurance (subsidized by $6,500), matches 4% of his 401(k) ($5,200), and provides safe corporate computer gear and liability coverage.</li>
             <li><strong className="text-text-primary">Option B (1099 Independent Consultant):</strong> Marcus bills a steady rate of $90/hour, yielding a gross annual billing of <strong className="text-text-primary font-mono">$180,000</strong>. He operates as an S-Corp, paying himself a reasonable W2 salary of **$72,000** and taking **$98,000** in shareholder distributions. His business expenses (home office, laptop, travel, insurance) total **$10,000**.</li>
          </ul>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Asset Ledger Audit: Deloitte Employee vs. S-Corp Independent Advisor
            </h4>

            {/* LEDGER COMPARISON TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Tax & Expense Allocations</th>
                        <th className="p-4 text-right">W2 Senior Consultant ($130,000)</th>
                        <th className="p-4 text-right">1099 Independent S-Corp ($180,000)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Gross Income / Total Billings</td>
                        <td className="p-4 text-right font-bold">$130,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$180,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">Business Deductions (Office, Tech, Travel)</td>
                        <td className="p-4 text-right text-text-muted">-$0 <span className="text-[10px] block opacity-70">(Paid by employer)</span></td>
                        <td className="p-4 text-right text-red font-bold">-$10,000</td>
                     </tr>
                     <tr className="bg-bg-input/10">
                        <td className="p-4 text-text-primary font-sans font-sans">Corporate Taxable Net Base</td>
                        <td className="p-4 text-right">$130,000</td>
                        <td className="p-4 text-right text-text-primary">$170,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Federal Income Tax (Estimated)</td>
                        <td className="p-4 text-right text-red">-$20,250</td>
                        <td className="p-4 text-right text-red">-$23,400 <span className="text-[10px] block opacity-70 font-mono">(Includes QBI write-off shelter)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">W2 payroll FICA / Self-Employment Tax</td>
                        <td className="p-4 text-right text-red">-$9,945 <span className="text-[10px] block opacity-70">(Employer pays matching portion)</span></td>
                        <td className="p-4 text-right text-red">-$11,016 <span className="text-[10px] block opacity-70 font-bold">(Paid on W2 salary only; distributions exempt)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">Unsubsidized health plan, PTO & retirement match costs</td>
                        <td className="p-4 text-right text-green">+$11,700 <span className="text-[10px] block opacity-70">(Employer contribution value)</span></td>
                        <td className="p-4 text-right text-red">-$15,800 <span className="text-[10px] block opacity-70">(Out-of-pocket health, base 401(k), & unpaid PTO)</span></td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">True Net Cash Advantage</td>
                        <td className="p-4 text-right text-green font-black text-base font-mono">$111,505</td>
                        <td className="p-4 text-right text-blue font-black text-base font-mono">$109,784</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted">
              *The final reconciliation: Despite Marcus billing an extra $50,000 top-line on his 1099 contract, his out-of-pocket health plans, retirement contributions, and self-employment taxes leave him with a **$1,721 disadvantage** compared to his stable W2 Deloitte employee salary.
            </p>
          </div>

          <p>
            This comparison highlights why you must evaluate the complete compensation package. To match the overall value of his stable $130,000 W2 salary and benefits, Marcus would need to target a minimum gross 1099 contract of <strong className="text-text-primary font-mono">$188,000</strong> annually, or about $94 per hour.
          </p>
        </div>

        {/* BRIGHT CTA COMPONENT */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Calculate Your True Advisory Settlement Target</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Enter your gross consultant rates, home office configurations, travel expenses, training programs, and personal medical plans into our specialized tax engine. Establish your hourly baseline now.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO SYSTEM CALCULATOR]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Analyze Your Contract Offer <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* OCCUPATIONAL FAQ SECTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Consultant Tax & Incorporation FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Is an S-Corp election beneficial for a consultant billing less than $80,000?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. Setting up and maintaining an S-Corporation introduces significant administrative overhead. You must run corporate payroll (W2), file quarterly payroll tax returns (Forms 940 and 941), prepare a corporate tax return (Form 1120S), and pay state-level franchise taxes (e.g., California's $800 minimum franchise tax). If your net business profits are below $80,000, these compliance costs will outweigh your potential self-employment tax savings.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                How does the 20% QBI deduction apply to independent consultants?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Under Section 199A, consultants qualify for the 20% Qualified Business Income (QBI) deduction, but they face strict income thresholds. If the IRS classifies your consulting practice as a Specified Service Trade or Business (SSTB), your deduction begins to phase out once your taxable income exceeds **$191,950** (for single filers) or **$383,900** (for joint filers) in 2025. Above these limits, the write-off is completely phased out.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can I write off client entertainment and business meals as an independent contractor?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Under tax law, direct entertainment expenses (such as concert tickets, sporting event tickets, or golf fees) are completely non-deductible. However, **business meals remain 50% deductible** if you or an employee is present, and the food or beverage is not lavish or extravagant. Always keep detailed logs listing who attended the meeting and the specific business topics discussed.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Financial advisory disclosure: This consulting tax and business structure overview is created for educational purposes only. IRS codes, payroll regulations, and state franchise taxation guidelines change consistently. Always employ a certified corporate business CPA before selecting S-Corporation tax flags or drafting corporate payroll.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default ConsultantComparisonPage;
