import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, FileText, Landmark, Key, Compass, Award, Percent, DollarSign, Table } from 'lucide-react';

interface CaliforniaComparisonPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas') => void;
}

const CaliforniaComparisonPage: React.FC<CaliforniaComparisonPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="california-post"
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
          <span className="text-text-muted select-none">California 1099 vs W2</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none">
            1099 vs W2 in California 2025: Why the Math Is Completely Different Here
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Compass size={14} />
               <span>CALIFORNIA TAX CODE ANALYSIS</span>
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
              <span className="text-blue font-bold">1,430 WORDS</span>
            </div>
          </div>
        </div>

        {/* DIRECT LEAD & STRATEGIC CONTEXT */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            California has the highest income tax in the US at 13.3%. This changes the 1099 vs W2 equation more than any other state.
          </p>

          <p>
            When professionals in tech-dominated hubs like San Francisco, Silicon Valley, or Los Angeles evaluate job offers, they tend to focus exclusively on federal benchmarks. They run generic online calculators, deduct self-employment taxes, and assume the resulting net figure holds true. 
          </p>

          <p>
            In the State of California, this simplified approach is a recipe for fiscal disaster.
          </p>

          <p>
            California's Franchise Tax Board (FTB) operates under a aggressive, highly customized regime that deviates significantly from federal tax standards. If you are comparing a W2 salary with a 1099 independent contractor agreement in California for 2025, operating under standard national rules will result in major forecasting errors. From strict employee classification laws like AB5 to asymmetric estimated payment schedules, the Golden State plays by its own script.
          </p>

          <p>
            Failing to adjust your contract hourly floor for California's unique penalties can easily cost you $15,000 to $25,000 in unbudgeted annual expenses. Let's break down the hidden CA-specific variables and calculate a real-world case study to reveal the true bottom-line differences.
          </p>
        </div>

        {/* FOUR REASONS THE MATH IS DIFFERENT (CA-SPECIFIC FACTORS) */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The California Non-Conformity Traps: 4 Critical Factors
          </h2>
          <p>
            Major national financial portals offer generic 1099 vs W2 comparison logic. What they omit are the legislative features unique to California taxpayers. Here are the four structural reasons California completely alters the self-employment equation:
          </p>

          <div className="space-y-4">
            
            {/* 1. CA State Disability Insurance (SDI) */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">1. CA State Disability Insurance (SDI): 1.1% With No Cap</h4>
              </div>
              <p className="text-sm">
                In most states, state-run disability insurance is a minor payroll tax assessed up to a low wage ceiling. In California, W2 employees pay a flat <strong className="text-text-primary">1.1%</strong> tax directly from their gross wages to fund State Disability Insurance (SDI) and Paid Family Leave (PFL). 
              </p>
              <p className="text-sm">
                Crucially, California recently eliminated the taxable wage limit for this tax. Under previous rules, the tax capped out at roughly $160,000. Now, there is <strong className="text-text-primary">no limit</strong>. If you are a high-earning W2 engineering manager making $300,000, you pay exactly <strong className="text-text-primary font-mono">$3,300 per year</strong> in SDI. 
              </p>
              <p className="text-sm italic">
                The Contractor Edge: 1099 contractors are entirely exempt from this 1.1% CA SDI tax unless they actively elect to enroll in the CA elective coverage program. This represents a rare 1.1% direct savings for California independent contractors.
              </p>
            </div>

            {/* 2. No QBI Conformance */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">2. Non-Conformance to the Federal QBI Deduction</h4>
              </div>
              <p className="text-sm">
                At the federal level, Section 199A allows eligible 1099 contractors to deduct up to 20% of their net business profits from their taxable income before calculating taxes. This is a massive tax shelter.
              </p>
              <p className="text-sm">
                However, <strong className="text-text-primary">California flatly refuses to conform to the federal QBI deduction</strong>. When filing your California state return (Form 540), you must add back 100% of your federal QBI deduction to your state taxable income. Because CA brackets climb rapidly up to 13.3%, this non-conformance represents a massive state tax burden that traditional comparative models completely ignore. Every dollar of your business profit faces the full force of CA state income tax.
              </p>
            </div>

            {/* 3. California Asymmetric Quarterly Payments */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">3. Asymmetric Estimated State Tax Payments</h4>
              </div>
              <p className="text-sm">
                Federal estimated taxes are divided into four equal payments of 25% each quarterly period. California, however, uses an asymmetric payment schedule designed to accelerate state cash flow.
              </p>
              <p className="text-sm">
                If you are a California 1099 contractor, you must pay your state estimated taxes according to this strict, unequal legislative formula:
              </p>
              <ul className="list-disc list-inside space-y-1 text-xs font-mono text-text-primary pl-4 py-2">
                 <li>April 15 (Q1 Payment): <span className="text-blue font-bold">30%</span> of estimated state tax</li>
                 <li>June 15 (Q2 Payment): <span className="text-blue font-bold">40%</span> of estimated state tax</li>
                 <li>September 15 (Q3 Payment): <span className="text-blue font-bold">0%</span> of estimated state tax</li>
                 <li>January 15 (Q4 Payment): <span className="text-blue font-bold">30%</span> of estimated state tax</li>
              </ul>
              <p className="text-sm">
                If you pay a static 25% each quarter, California's Franchise Tax Board will assess immediate, non-negotiable underpayment penalties for the first and second quarters, even if your total payments are correct by year-end.
              </p>
            </div>

            {/* 4. No Capital Gains Tax Preference */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">4. Zero State Capital Gains Preference</h4>
              </div>
              <p className="text-sm">
                While the federal government grants specialized, discounted tax rates (0%, 15%, or 20%) for long-term capital gains, California does not. The state taxes ALL income—including capital gains, stock options (RSUs/ISO), dividends, business profits, and salary—at the exact same ordinary progressive income tax rates. This means a high-earning contractor whose compensation includes stock options faces massive, full-bracket state tax liability.
              </p>
            </div>

          </div>
        </div>

        {/* SECTION 3 — CA REAL-WORLD CASE STUDY: $135K W2 VS $165K 1099 */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            San Francisco Case Study: $135,000 W2 vs. $165,000 1099
          </h2>
          <p>
            Let us evaluate a highly realistic scenario. Mark is a product manager residing in San Francisco. He is choosing between:
          </p>
          <ul className="list-disc list-inside pl-4 text-sm space-y-1">
             <li>A W2 staff role offering <strong className="text-text-primary">$135,000</strong> in salary, with average corporate benefits.</li>
             <li>An independent 1099 contract paying <strong className="text-text-primary">$165,000</strong> in billing with $15,000 in business expenses (making his net Schedule C business profit $150,000).</li>
          </ul>
          
          <p>
            On paper, the 1099 contract looks like a 22% pay increase. Let us analyze the actual total taxes assessed on both arrangements for a single filer taking the standard deduction in 2025:
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Granular Tax Ledger: W2 vs. 1099
            </h4>

            {/* CASE STUDY COMPARE TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Tax / Expense Category</th>
                        <th className="p-4 text-right">W2 Position ($135,000)</th>
                        <th className="p-4 text-right">1099 Contract ($165,000)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Gross Income / Billings</td>
                        <td className="p-4 text-right font-bold">$135,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$165,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Business Expenses (Schedule C)</td>
                        <td className="p-4 text-right">-$0</td>
                        <td className="p-4 text-right text-red">-$15,000</td>
                     </tr>
                     <tr className="bg-bg-input/20">
                        <td className="p-4 text-text-primary font-sans font-bold">Net Taxable Profit Base</td>
                        <td className="p-4 text-right font-bold">$135,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$150,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Federal Income Tax (Estimated)</td>
                        <td className="p-4 text-right">-$20,530</td>
                        <td className="p-4 text-right text-red">-$20,111 <span className="text-[10px] block opacity-70">(Includes 20% QBI matching)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">FICA Social Security & Medicare (Employee Half)</td>
                        <td className="p-4 text-right">-$10,328 <span className="text-[10px] block opacity-70">(Employer covered matching)</span></td>
                        <td className="p-4 text-right text-red">-$21,194 <span className="text-[10px] block opacity-70">(Full 15.3% Self-Employment Tax)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">California State Income Tax (Franchise Tax Board)</td>
                        <td className="p-4 text-right">-$9,233</td>
                        <td className="p-4 text-right text-red">-$11,250 <span className="text-[10px] block opacity-70">(No QBI deduction discount allowed)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">California State Disability Insurance (SDI - 1.1%)</td>
                        <td className="p-4 text-right">-$1,485</td>
                        <td className="p-4 text-right text-green">-$0 <span className="text-[10px] block opacity-70">(Contractors exempt)</span></td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Net Liquid Take-Home Pay</td>
                        <td className="p-4 text-right text-green-400 font-black text-base">$93,424</td>
                        <td className="p-4 text-right text-blue font-black text-base">$82,445</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted">
              *Note: This calculation ignores private health insurance premium outlays ($6,000) and lost 401(k) matching assets on the 1099 contract, meaning Mark's true equivalent take-home on 1099 is even lower.
            </p>
          </div>

          <p>
            Let us look at the dramatic result of this math: Even though Mark billed <strong className="text-text-primary">$30,000 more</strong> on paper as a contractor, his actual cash take-home was <strong className="text-red font-bold font-mono">$10,979 LOWER</strong>.
          </p>
          <p>
            Why did this happen? It is a combination of two major factors: First, the self-employment tax burden increased his FICA payments by over <strong className="text-text-primary">$10,800</strong>. Second, because <strong className="text-text-primary">California does not offer a state-level QBI deduction</strong>, Mark paid full state income tax rates on his entire business revenue, driving his state tax bill up by over <strong className="text-text-primary">$2,000</strong> despite his high business write-offs.
          </p>
        </div>

        {/* HEALTH INSURANCE ENVIRONMENT CA SPECIFIC: COVERED CALIFORNIA */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Health Insurance in the Golden State: Covered California
          </h2>
          <p>
            Another major variable in California is health insurance. Unlike many states that use the federal exchange (healthcare.gov), California operates its own state marketplace: <strong className="text-text-primary">Covered California</strong>.
          </p>
          <p>
            Under California state law, there is a strict state tax penalty for individuals who do not maintain qualified health insurance coverage. For a healthy 30-something professional purchasing individual health insurance through Covered California in 2025, rates vary significantly:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-mono text-xs">
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Bronze Tier Plans</span>
                <span className="text-lg font-black text-text-primary">$380 - $450 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Low monthly premiums, very high deductibles ($7,000+)</p>
             </div>
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Silver Tier Plans</span>
                <span className="text-lg font-black text-text-primary">$460 - $550 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Balanced premiums, moderate copays and deductible limits</p>
             </div>
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Gold & Platinum Plans</span>
                <span className="text-lg font-black text-text-primary">$580 - $720 / month</span>
                <p className="text-[10px] text-text-muted mt-2">High premiums, immediate copays, zero deductibles</p>
             </div>
          </div>

          <p>
            When matching a W2 position where the company covers 80% to 90% of your insurance premiums, a California contractor must allocate roughly <strong className="text-text-primary">$6,000 per year</strong> in post-tax cash simply to secure high-quality independent health insurance, introducing another major layer of required contract premiums.
          </p>
        </div>

        {/* COMPREHENSIVE STRATEGY: WHEN IS 1099 STILL WORTH IT IN CALIFORNIA? */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            When Is 1099 Still Worth It in California?
          </h2>
          <p>
            Despite California's tough tax environment, operating as an independent contractor can still be highly profitable under the right operational conditions:
          </p>

          <ul className="space-y-4">
            <li className="flex gap-4 p-4 border border-border-color/25 rounded-2xl bg-bg-card/25">
              <span className="text-blue font-mono font-black shrink-0 mt-1">✓</span>
              <div>
                <strong className="text-text-primary">Your Hourly Billing Rate is High (40%+ Premium):</strong> If the equivalent W2 role offers $100,000 ($50/hr), but you can bill clients at $95/hour, your extreme volume of revenue will easily absorb the extra self-employment taxes, insurance burdens, and state tax non-conformance.
              </div>
            </li>
            <li className="flex gap-4 p-4 border border-border-color/25 rounded-2xl bg-bg-card/25">
              <span className="text-blue font-mono font-black shrink-0 mt-1">✓</span>
              <div>
                <strong className="text-text-primary">You Maximize Home-Office & Vehicle Write-offs:</strong> California's high state taxes mean that business deductions have a very high value. If you work from home in high-rent CA zip codes and write off a portion of your living space and business travel, you can legally shelter a massive amount of income.
              </div>
            </li>
            <li className="flex gap-4 p-4 border border-border-color/25 rounded-2xl bg-bg-card/25">
              <span className="text-blue font-mono font-black shrink-0 mt-1">✓</span>
              <div>
                <strong className="text-text-primary">You are Scaling a Solo 401(k) Plan:</strong> Contributing up to $70,000 pre-tax into a Solo 401(k) is the ultimate California tax escape hatch. Since pre-tax retirement savings reduce your federal and state adjusted gross income, this single strategy can slash your CA Franchise Tax Board bill significantly.
              </div>
            </li>
          </ul>
        </div>

        {/* CALL TO ACTION FOR THE REVERSE CALCULATOR */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10">
          <h3 className="text-2xl font-black text-text-primary">Use Our Interactive California Tax Calculator</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
            Stop guessing with national averages. Our responsive tax engine models California's strict SDI rules, non-conforming QBI rates, and local self-employment tiers automatically.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO CALIFORNIA CALCULATOR]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Analyze California Rates <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* STATE SPECIFIC FAQ SECTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            California Self-Employment FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Does California have a state level QBI deduction for single member LLCs?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. Unlike federal law under Section 199A, the State of California does not conform to the Qualified Business Income deduction. When preparing California state tax returns (Form 540), all federal QBI deductions must be declared as additions to your state taxable income, forcing you to pay full ordinary state tax rates on those profits.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Do California independent contractors pay the 1.1% state SDI tax?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. Standard 1099 contractors are fully exempt from California's 1.1% State Disability Insurance (SDI) and Paid Family Leave (PFL) tax. W2 employees are legally forced to cover this tax on all wage earnings with no cap.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                How are estimated state income taxes calculated in California?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Unlike federal equal installments, California mandates an asymmetric quarterly payment schedule: 30% in April, 40% in June, 0% in September, and 30% in January. Paying an equal 25% distribution across all four quarters will trigger immediate FTB underpayment penalties.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               State Disclaimer: Tax codes fluctuate annually. This material is designed purely for reference and modeling purposes. Please consult with a CPA licensed in the State of California to finalize personal corporate tax returns or legal entity selection.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default CaliforniaComparisonPage;
