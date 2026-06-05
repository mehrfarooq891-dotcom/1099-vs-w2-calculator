import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, Compass, DollarSign, Table, Shield } from 'lucide-react';

interface WashingtonComparisonPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado') => void;
}

const WashingtonComparisonPage: React.FC<WashingtonComparisonPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="washington-post"
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
          <span className="text-blue">State Tax Strategy</span>
          <span>/</span>
          <span className="text-text-muted select-none">Washington 1099 vs W2</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            1099 vs W2 in Washington State 2025: No Income Tax — But Watch Out for This
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Compass size={14} />
               <span>WASHINGTON TAX LAW & TECH INDUSTRY COMPENSATION</span>
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
              <span>WORD COUNT: </span>
              <span className="text-blue font-bold">1,380 WORDS</span>
            </div>
          </div>
        </div>

        {/* DIRECT LEAD & STRATEGIC CONTEXT */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Washington State imposes no personal income tax on salaries or contract income. While this makes Seattle and Bellevue massive magnets for elite tech and corporate talent, it leads many to believe that the independent contractor route is a default financial victory. 
          </p>

          <p>
            For software developers, aerospace consultants, and creative professionals operating across Puget Sound, comparing a W2 salary with a 1099 independent contractor proposal seems simple of late. Many think they just need to deduct the standard federal liabilities, adjust for self-employment taxes, and celebrate their boosted earnings.
          </p>

          <p>
            This oversimplified logic is a critical financial error.
          </p>

          <p>
            While Washington does not tax your personal income, the state levies several unique, hidden payroll taxes and gross business assessments that standard nationwide tax models completely ignore. On top of those, the highly robust local corporate benefits programs handed out by regional giants like Amazon, Microsoft, and Boeing place an exceedingly high structural price on independence.
          </p>

          <p>
            If you do not negotiate your hourly rate with precise mathematical backing, the transition to 1099 can result in a surprising step backward in your net wealth production. Let's break down Washington's statutory surcharges, model a detailed software engineer scenario, and trace the direct mathematical bottom line.
          </p>
        </div>

        {/* THE WASHINGTON REGULATORY MATRIX */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Washington Framework: Critical Nuances Beyond No Income Tax
          </h2>
          <p>
            To understand how Washington's tax regulatory structure impacts your career path, you must trace these state legislative details:
          </p>

          <div className="space-y-4">
            
            {/* 1. The WA Cares Long-Term Care Tax */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} className="text-red shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">1. WA Cares Fund: The 0.58% Long-Term Care Surcharge</h4>
              </div>
              <p className="text-sm">
                Washington is the first state in the nation to run a state-managed long-term care insurance program. Funded entirely by employee payroll deductions, the <strong className="text-text-primary">WA Cares Fund</strong> claims a flat <strong className="text-text-primary">0.58%</strong> of gross wages for every W2 worker.
              </p>
              <p className="text-sm">
                Importantly, this payroll tax is mandatory for W2 employees without a certified private long-term care policy exemption. However, <strong className="text-text-primary">independent 1099 contractors are opted out by default</strong>. While 1099 workers can choose to self-elect into the fund, most opt out, immediately shielding their contract revenue from this state-level withholding.
              </p>
            </div>

            {/* 2. Business and Occupation (B&O) Tax Trap */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} className="text-red shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">2. The WA State B&O Tax: A Tax on Gross Receipts</h4>
              </div>
              <p className="text-sm">
                This is Washington's most overlooked tax trap for freelancers. Because Washington does not levy a corporate or personal income tax, the state funds its infrastructure through a unique <strong className="text-text-primary">Business and Occupation (B&O) Gross Receipts Tax</strong>. 
              </p>
              <p className="text-sm">
                As a 1099 independent contractor, you are chemically a business entity in the eyes of Olympia. Most professional service consultants fall into the "Service and Other Activities" classification, which carries a tax rate of <strong className="text-text-primary">1.5% of your total gross revenue</strong>. Unlike federal taxes where you only pay on net profits, Washington assesses B&O tax on every dollar of gross billings before business expenses are deducted. While a Small Business Tax Credit (SBTC) provides relief for low-earning companies, high-earning professional contractors must catalog this 1.5% gross payout directly.
              </p>
            </div>

            {/* 3. Paid Family and Medical Leave (PFML) */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-blue">
                 <ShieldCheck size={20} className="text-blue shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">3. Paid Family and Medical Leave (PFML) Dynamic</h4>
              </div>
              <p className="text-sm">
                Like California and New York, Washington operates a Paid Family and Medical Leave (PFML) program. W2 employees are fully covered, funding this account through structural payroll deductions of about <strong className="text-text-primary">0.74% to 0.92%</strong> depending on annual adjustments.
              </p>
              <p className="text-sm">
                1099 contractors do not contribute SUTA/PFML taxes by default. While this saves some upfront withholding and increases immediate take-home pay, it means you have no safety net if you need to take parental leave or deal with a serious personal illness. If you want this coverage, you must register as a self-employed individual and pay the employee share of the premiums to the state yourself.
              </p>
            </div>

          </div>
        </div>

        {/* COMPREHENSIVE SEATTLE CASE STUDY: $150K W2 VS $190K 1099 */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Seattle Tech Audit: W2 Engineer vs. Independent Contractor
          </h2>
          <p>
            Let us evaluate a typical transition. Charles is a senior software engineer living in Seattle. He is evaluating two competitive offers in the regional tech hub:
          </p>
          <ul className="list-disc list-inside pl-4 text-sm space-y-1">
             <li>A full-time W2 position offering a base salary of <strong className="text-text-primary">$150,000</strong> with a standard tech benefits package.</li>
             <li>An independent 1099 engineering consulting contract billing <strong className="text-text-primary">$190,000</strong> gross, where he plans to write off $10,000 in qualifying business expenses (resulting in $180,000 in net business income).</li>
          </ul>
          
          <p>
            Let us draft a granular, line-by-line tax audit based on the 2026 tax brackets for a single filer claiming standard deductions in Seattle:
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Washington Compensation Ledger: Single Filer
            </h4>

            {/* COMPARATIVE LEDGER TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Tax / Withholding Category</th>
                        <th className="p-4 text-right">W2 Position ($150,000)</th>
                        <th className="p-4 text-right">1099 Contract ($190,000)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Gross Earnings / Billings Base</td>
                        <td className="p-4 text-right font-bold">$150,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$190,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">Business Expenses (Schedule C Deductions)</td>
                        <td className="p-4 text-right">-$0</td>
                        <td className="p-4 text-right text-red">-$10,000</td>
                     </tr>
                     <tr className="bg-bg-input/20 font-bold">
                        <td className="p-4 text-text-primary font-sans">Filing Net Taxable Business Base</td>
                        <td className="p-4 text-right">$150,000</td>
                        <td className="p-4 text-right text-text-primary">$180,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Federal Income Tax (Estimated)</td>
                        <td className="p-4 text-right">-$24,944</td>
                        <td className="p-4 text-right text-red">-$21,062 <span className="text-[10px] block opacity-70">(Includes 20% Section 199A QBI Shelter)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">FICA Payroll / Self-Employment Tax</td>
                        <td className="p-4 text-right">-$11,475 <span className="text-[10px] block opacity-70">(Employer covers matching 7.65%)</span></td>
                        <td className="p-4 text-right text-red">-$25,433 <span className="text-[10px] block opacity-70">(Assessed at full 15.3% SE burden)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">WA State Income Tax</td>
                        <td className="p-4 text-right text-green">-$0</td>
                        <td className="p-4 text-right text-green">-$0</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">WA Long-Term Care Tax (WA Cares Fund)</td>
                        <td className="p-4 text-right text-red">-$870 <span className="text-[10px] block opacity-70">(0.58% compulsory deduction)</span></td>
                        <td className="p-4 text-right text-green">-$0 <span className="text-[10px] block opacity-70">(exempt by default as contractor)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">WA Business & Occupation (B&O) Tax</td>
                        <td className="p-4 text-right text-green">-$0</td>
                        <td className="p-4 text-right text-red">-$2,850 <span className="text-[10px] block opacity-70">(1.5% flat service tax classification)</span></td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base animate-pulse">Net Cash Take-Home Pay</td>
                        <td className="p-4 text-right text-green-400 font-black text-base">$112,711</td>
                        <td className="p-4 text-right text-blue font-black text-base">$130,655</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted">
              *The direct spreadsheet difference: Charles's net cash take-home as a contractor is $17,944 higher than his W2 base. Let's look closely at the corporate benefit outlays.
            </p>
          </div>

          <p>
            At first glance, Charles earns <strong className="text-green-400 font-mono">+$17,944 more cash</strong> by taking the 1099 contract. But this is exactly where the corporate benefit structure of regional employers (Amazon, Microsoft, Expedia) creates a massive premium.
          </p>
          <p>
            To evaluate his true alternative cost, Charles must buy back his full corporate safety net through Washington's local marketplace, and calculate the true value of lost retirement and vacation accounts.
          </p>
        </div>

        {/* HEALTH INSURANCE EXCHANGE IN WA STATE */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Washington Health Insurance Landscape: Washington Healthplanfinder
          </h2>
          <p>
            Washington runs its own highly regarded state health marketplace: <strong className="text-text-primary">Washington Healthplanfinder</strong>. Because the state regulates its insurance closely, health carriers cannot deny coverage or adjust premiums based on pre-existing conditions or medical history. 
          </p>
          <p>
            While this ensures excellent and equitable consumer coverage, it keeps individual premiums high for sole business operators who do not qualify for federal subsidies (typically true for high-earning tech contractors). For an individual contractor in King, Snohomish, or Pierce County, mid-tier private plans represent these financial benchmarks:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-mono text-xs">
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Bronze Tier</span>
                <span className="text-lg font-black text-text-primary">$400 - $480 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Deductibles exceed $7,000; focused on catastrophic care</p>
             </div>
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Silver Tier (Standard)</span>
                <span className="text-lg font-black text-text-primary">$500 - $620 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Moderate deductibles, standard health copays, highly popular</p>
             </div>
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Gold & Platinum</span>
                <span className="text-lg font-black text-text-primary">$680 - $850 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Minimal deductibles, direct healthcare access, expensive premiums</p>
             </div>
          </div>

          <p>
            For a high-quality private health, vision, and dental program, Charles must budget roughly <strong className="text-text-primary">$6,500 annually</strong> out of pocket. 
          </p>
          <p>
            Now, let's complete our evaluation by tracing the value of his corporate retirement matching and standard time-off perks:
          </p>

          <div className="p-6 bg-bg-card/30 border border-dashed border-border-color/30 rounded-2xl">
             <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-text-primary mb-3">Charles's Adjusted Bottom Line Reconciliation:</h4>
             <ul className="space-y-2 text-sm">
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Initial 1099 Cash Advantage:</span>
                   <span className="text-green font-mono font-bold">+$17,944</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Private Seattle Silver Health Plan:</span>
                   <span className="text-red font-mono">- $6,500</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Forfeited 4% W2 401(k) Employer Match ($150k base):</span>
                   <span className="text-red">- $6,000</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Cost-Equivalent of 25 Days PTO & Holidays:</span>
                   <span className="text-red">- $14,425</span>
                </li>
                <li className="flex justify-between pt-1 font-black text-text-primary">
                   <span>Charles's True Adjusted Bottom Line:</span>
                   <span className="text-red font-mono">-$8,981 (W2 Wins in Value)</span>
                </li>
             </ul>
          </div>

          <p>
            Once health coordinates, lost corporate matching contributions, and paid vacation days are integrated into the worksheet, Charles's 1099 contract is actually <strong className="text-red font-bold font-mono">$8,981 LESS</strong> in adjusted asset value than his $150k W2 role. 
          </p>
          <p>
            To offset these losses and achieve true wealth parity, his contractor billing rate floor would need to be at least $215,000, which represents a 43% premium over the corporate W2 salary.
          </p>
        </div>

        {/* WASHINGTON INDUSTRIES */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Emerald Economy: Where 1099 Thrives in Washington
          </h2>
          <p>
            Even with these strict calculations, operating as an independent contractor is a highly sought-after structure throughout Washington because of the region's dynamic, enterprise-focused economy:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-sm tracking-tight flex items-center gap-2">
                   <Shield size={16} className="text-blue shrink-0" /> Seattle / Bellevue Tech
                </h4>
                <p className="text-xs text-text-muted">
                   E-commerce, cloud computing, and AI sectors drive incredible demand for expert contract engineers, cloud architects, and product managers. These projects easily command $100 - $160 per hour.
                </p>
             </div>
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-sm tracking-tight flex items-center gap-2">
                   <Shield size={16} className="text-blue shrink-0" /> Aerospace & Avionics
                </h4>
                <p className="text-xs text-text-muted">
                   Renton and Everett’s sprawling aviation pipelines utilize highly specialized engineering contractors, quality assurance specialists, and logistics consultants.
                </p>
             </div>
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-sm tracking-tight flex items-center gap-2">
                   <Shield size={16} className="text-blue shrink-0" /> Healthcare & Life Sciences
                </h4>
                <p className="text-xs text-text-muted">
                   Western WA’s expanding health systems rely heavily on locum doctors, contract medical coders, and senior healthcare administrators who operate on billing rates.
                </p>
             </div>
          </div>
        </div>

        {/* CALL TO ACTION LINK TO CALCULATOR */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10">
          <h3 className="text-2xl font-black text-text-primary">Calculate Your Washington Take-Home Pay</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Don't count on generic national calculators. Use our highly precise, state-tuned tax comparison motor to input your Washington state offers and see the exact net take-home difference instantly.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO WASHINGTON CALCULATOR]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Start Free Comparison <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* STATE SPECIFIC FAQ SECTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Washington Self-Employment FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                What is the WA Cares Fund and how does it impact 1099 contractors?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                The WA Cares Fund is Washington State's mandatory long-term care insurance program funded by a 0.58% payroll tax on gross W2 wages. Independent 1099 contractors are excluded by default from this tax liability, but they may choose to opt-in during specific election windows if they wish to receive state care benefits down the road.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Are 1099 independent contractors required to pay Washington State B&O tax?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes. Since Washington does not impose a personal income tax, it levies a Business and Occupation (B&O) tax on the gross receipts of all businesses operating in the state, including individual 1099 contractors. If your gross receipts qualify you for the professional "Service and Other Activities" classification, your tax liability is calculated at 1.5% of gross revenue, though a Small Business Tax Credit (SBTC) can fully offset or reduce this bill for contractors earning under certain revenue limits.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can Washington independent contractors claim Paid Family and Medical Leave (PFML)?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                While W2 workers are enrolled and taxed automatically, 1099 independent contractors do not receive PFML coverage by default. However, contractors can voluntarily participate by registering with the WA Department of Employment Security (ESD) and contributing the employee-share portion of the premiums based on their net business profits.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               State disclosure parameters: This analytical comparison is designed exclusively for educational references. Under state and federal tax statutes, individual business filings and personal corporate circumstances fluctuate. Always consult with a licensed Washington State CPA before reorganizing corporate entity layers or signing final work contracts.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default WashingtonComparisonPage;
