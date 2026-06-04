import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, Compass, DollarSign, Table, Palmtree } from 'lucide-react';

interface FloridaComparisonPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia') => void;
}

const FloridaComparisonPage: React.FC<FloridaComparisonPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="florida-post"
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
          <span className="text-text-muted select-none">Florida 1099 vs W2</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none">
            1099 vs W2 in Florida 2025: No State Tax, But Here's What Changes
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Compass size={14} />
               <span>FLORIDA TAX CODE & COMPENSATION STRATEGY</span>
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
              <span className="text-blue font-bold">1,215 WORDS</span>
            </div>
          </div>
        </div>

        {/* DIRECT LEAD & STRATEGIC CONTEXT */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Florida has zero state-level personal income tax. While this is an immediate financial win, it makes evaluating a 1099 contract versus a W2 salary down in the Sunshine State completely different from higher-tax jurisdictions.
          </p>

          <p>
            With the rapid expansion of South Florida's tech movement, the flourishing healthcare corridors of Tampa and Orlando, and the state's dominant tourism sector, skilled professionals are constantly presented with employment choices. Many of these candidates evaluate 1099 versus W2 compensation structures with a critical blind spot: they assume that a zero-tax state means they can skip the math entirely.
          </p>

          <p>
            That is a dangerous assumption.
          </p>

          <p>
            When state income taxes are omitted from the equation, you lose the ability to offset self-employment tax liabilities with state-level business deductions. Consequently, the relative financial impact of federal self-employment taxes (the FICA match), individual benefits procurement, and legislative write-off choices becomes even more pronounced.
          </p>

          <p>
            In Florida, securing an independent contractor structure only works to your advantage if you negotiate a distinct, mathematically sound contract rate premium. Let us review the unique localized factors of Florida's labor regulations, analyze of a real-world case study in Miami, and lay out the exact milestones required to keep more of your hard-earned revenue.
          </p>
        </div>

        {/* THE FLORIDA LANDSCAPE: HOW NO STATE TAX ALTERS THE CHOICE */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Florida Paradox: The Zero-Tax Environment
          </h2>
          <p>
            Florida's Constitution strictly bars the implementation of any state personal income tax. This lack of state taxation alters the W2 vs. 1099 paradigm in several important ways:
          </p>

          <div className="space-y-4">
            
            {/* 1. Absolute Federal Focus */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-blue">
                 <ShieldCheck size={20} className="text-blue shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">1. Your Strategy Is 100% Federal</h4>
              </div>
              <p className="text-sm">
                In most other states, you must model complex interactions between federal and state tax adjustments. In Florida, your tax bracket strategy is determined entirely by federal rules. 
              </p>
              <p className="text-sm">
                This means your ability to optimize your net take-home pay depends strictly on how effectively you leverage federal tools like the <strong className="text-text-primary">Section 199A QBI Deduction</strong> and specialized retirement vehicles (such as Solo 401(k) plans). There are no state-level adjustments or corporate add-backs to worry about.
              </p>
            </div>

            {/* 2. Self-Employment Tax Shock */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} className="text-red shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">2. The Unmitigated Self-Employment Payroll Burden</h4>
              </div>
              <p className="text-sm">
                Since Florida does not have its own income tax to worry about, the federal <strong className="text-text-primary">15.3% Self-Employment (SE) tax</strong> stands out as your single largest payroll liability. 
              </p>
              <p className="text-sm">
                For W2 employees, the employer covers exactly 50% of this FICA burden (paying 6.2% for Social Security and 1.45% for Medicare). Independent 1099 operators must fund both halves of this tax, representing a full 15.3% of their net business profits up to federal limits ($176,100 for Social Security in 2026). Without a state income tax to cushion the blow, this double tax represents a major financial penalty if your billing rate is too low.
              </p>
            </div>

            {/* 3. Fully Aligned QBI Shelter */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-blue">
                 <ShieldCheck size={20} className="text-blue shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">3. The 20% QBI Deduction Operates at Maximum Power</h4>
              </div>
              <p className="text-sm">
                Under IRC Section 199A, qualifying independent 1099 contractors can deduct up to <strong className="text-text-primary">20%</strong> of their net business profit before federal income taxes are calculated.
              </p>
              <p className="text-sm">
                Because Florida has zero state tax, you do not face the state-level QBI non-conformance penalties common in high-tax states like California and New York. This standard federal tax deduction flows to your bottom line with maximum efficiency, making the 1099 route highly attractive for eligible consultants whose business income fits within the phase-out limit thresholds.
              </p>
            </div>

          </div>
        </div>

        {/* SECTION 3 — THE MIAMI CASE-STUDY: $95K W2 VS $120K 1099 */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Miami Case Study: $95,000 W2 vs. $120,000 1099
          </h2>
          <p>
            Let us analyze a realistic scenario. Gabriela is a senior marketing strategist living and working in Miami, Florida. She is comparing:
          </p>
          <ul className="list-disc list-inside pl-4 text-sm space-y-1">
             <li>A W2 agency role offering <strong className="text-text-primary">$95,000</strong> in salary, carrying moderate health insurance coverage.</li>
             <li>An independent 1099 corporate contracting offer billing <strong className="text-text-primary">$120,000</strong>. Gabriela estimates $10,000 in qualifying home office and travel expense deductions (resulting in a net business profit of $110,000 on Schedule C).</li>
          </ul>
          
          <p>
            On paper, the 1099 route represents a seemingly healthy $25,000 increase. Let us look at the granular, line-by-line tax breakdown for a single filer taking the standard deduction in Florida for 2025:
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Florida Tax Ledger: Gabriela's Comp Audit
            </h4>

            {/* CASE STUDY COMPARE TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Tax / Expense Category</th>
                        <th className="p-4 text-right">W2 Position ($95,000)</th>
                        <th className="p-4 text-right">1099 Contract ($120,000)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Gross Income / Billings</td>
                        <td className="p-4 text-right font-bold">$95,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$120,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Business Write-Offs (Schedule C deductions)</td>
                        <td className="p-4 text-right">-$0</td>
                        <td className="p-4 text-right text-red">-$10,000</td>
                     </tr>
                     <tr className="bg-bg-input/20">
                        <td className="p-4 text-text-primary font-sans font-bold">Net Legitimate Profit Base</td>
                        <td className="p-4 text-right font-bold">$95,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$110,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Federal Income Tax (Estimated)</td>
                        <td className="p-4 text-right">-$12,180</td>
                        <td className="p-4 text-right text-red">-$11,215 <span className="text-[10px] block opacity-70">(Includes 20% QBI Shelter & Half-SE Deduction)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Federal FICA Taxes (Social Security + Medicare)</td>
                        <td className="p-4 text-right">-$7,268 <span className="text-[10px] block opacity-70">(Employer covered 7.65% match)</span></td>
                        <td className="p-4 text-right text-red">-$15,542 <span className="text-[10px] block opacity-70">(Assessed at full 15.3% SE burden)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">Florida State Income Tax</td>
                        <td className="p-4 text-right text-green">-$0</td>
                        <td className="p-4 text-right text-green">-$0</td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Net Liquid Take-Home Pay</td>
                        <td className="p-4 text-right text-green-400 font-black text-base">$75,552</td>
                        <td className="p-4 text-right text-blue font-black text-base">$83,243</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted">
              *The direct spreadsheet difference: Gabriela cash take-home is $7,691 higher on the 1099 contract before purchasing health insurance or adjusting for lost benefits.
            </p>
          </div>

          <p>
            Her 1099 cash advantage is <strong className="text-green-400 font-bold font-mono">+$7,691</strong>. While this looks like a win, we must now account for Florida's benefits and healthcare environment.
          </p>
        </div>

        {/* HEALTH INSURANCE ENVIRONMENT: NO STATE EXCHANGE IN FLORIDA */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Florida Health Insurance Reality: Managing Healthcare.gov
          </h2>
          <p>
            Unlike states with robust local health exchanges (like Covered California or NY State of Health), Florida does not operate its own state insurance marketplace. Instead, independent contractors must secure coverage through the federal portal at <strong className="text-text-primary">Healthcare.gov</strong>.
          </p>
          <p>
            Because Florida has not expanded Medicaid, plans in the individual market can carry unique premium constraints. While options in major metro areas like Miami-Dade, Broward, or Orange County are highly competitive, the full financial cost is borne by the contractor. For an individual in their 30s, purchasing individual coverage in Florida typically matches to these benchmarks in 2025:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-mono text-xs">
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Bronze Tier Plans</span>
                <span className="text-lg font-black text-text-primary">$350 - $430 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Deductibles exceed $7,500; emergency focus only</p>
             </div>
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Silver Plans</span>
                <span className="text-lg font-black text-text-primary">$440 - $530 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Balanced options, standard deductible structures</p>
             </div>
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Gold & Platinum</span>
                <span className="text-lg font-black text-text-primary">$550 - $680 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Low copays, zero deductibles, high premium costs</p>
             </div>
          </div>

          <p>
            Purchasing a mid-tier Silver plan in Miami costs roughly <strong className="text-text-primary">$5,500 annually</strong> in out-of-pocket premium costs. 
          </p>
          <p>
            Now, let's complete Gabriela's strategic comparison by modeling the remaining lost corporate W2 benefits:
          </p>

          <div className="p-6 bg-bg-card/30 border border-dashed border-border-color/30 rounded-2xl">
             <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-text-primary mb-3">Gabriela's Adjusted Net Reconciliation:</h4>
             <ul className="space-y-2 text-sm">
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Initial 1099 Cash Advantage:</span>
                   <span className="text-green font-mono font-bold">+$7,691</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Cost of Private Florida Health Coverage:</span>
                   <span className="text-red font-mono">- $5,500</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Forfeited 4% Employer 401(k) Match ($95k Salary):</span>
                   <span className="text-red">- $3,800</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Value of 10 Days Paid Time Off (PTO):</span>
                   <span className="text-red">- $3,653</span>
                </li>
                <li className="flex justify-between pt-1 font-black text-text-primary">
                   <span>Gabriela's True Adjusted Bottom Line:</span>
                   <span className="text-red font-mono">-$5,262 (W2 Wins in Value)</span>
                </li>
             </ul>
          </div>

          <p>
            Once health insurance premium commitments, lost 401(k) employer matching, and paid time off (PTO) are subtracted from her cash advantage, the $120,000 contractor offer is actually <strong className="text-red font-bold font-mono">$5,262 LOWER</strong> in overall value than her $95k W2 position. 
          </p>
          <p>
            To make the 1099 contract truly competitive, Gabriela would need a billing rate of at least $135,000 (roughly a 42% premium over the W2 salary floor).
          </p>
        </div>

        {/* FLORIDA SPECIFIC INDUSTRIES */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Sunshine Sectors: Key Industries for 1099 in Florida
          </h2>
          <p>
            Despite the required contract premium, operating as an independent builder is highly popular across Florida, particularly in several key industries:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-sm tracking-tight flex items-center gap-2">
                   <Palmtree size={16} className="text-blue shrink-0" /> Miami Tech & Creative
                </h4>
                <p className="text-xs text-text-muted">
                   South Florida's emerging tech ecosystem relies heavily on specialized software developers, UI/UX designers, and growth marketers. High-rate 1099 positions easily command $80 to $120 per hour.
                </p>
             </div>
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-sm tracking-tight flex items-center gap-2">
                   <Palmtree size={16} className="text-blue shrink-0" /> Healthcare & Medical
                </h4>
                <p className="text-xs text-text-muted">
                   Florida's massive retiree population drives massive demand for medical talent. Travel nurses, health compliance consultants, and physical therapists commonly leverage 1099 structures for maximum flexibility.
                </p>
             </div>
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-sm tracking-tight flex items-center gap-2">
                   <Palmtree size={16} className="text-blue shrink-0" /> Hospitality & Real Estate
                </h4>
                <p className="text-xs text-text-muted">
                   Tourism, commercial development, and residential sales dominate Florida's economic landscape. Independent project managers and brokers routinely negotiate large independent commission payouts.
                </p>
             </div>
          </div>
        </div>

        {/* CALL TO ACTION FOR THE REVERSE CALCULATOR */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10">
          <h3 className="text-2xl font-black text-text-primary">Calculate Your Florida Bottom Line</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Don't count on generic national averages. Use our responsive state-adjusted tax engine to input your Florida W2 salary offers and determine the exact 1099 independent contractor billing rate you need to remain profitable.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO FLORIDA CALCULATOR]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Analyze Florida Rates <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* STATE SPECIFIC FAQ SECTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Florida Self-Employment FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Does Florida levy a state corporate income tax on single-member LLCs?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. Florida does levy a 5.5% state corporate income tax, but this applies strictly to traditional C-Corporations. If you operate as a sole proprietor, a single-member LLC, or a multi-member LLC filing as a partnership or S-Corporation, your business income is treated as "pass-through" revenue. These profits are taxed exclusively under personal tax codes, meaning you pay exactly 0% in state income tax.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Are Florida 1099 contractors eligible for state-backed unemployment insurance?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. Standard 1099 independent contractors are fully exempt from Florida's state unemployment taxes, which means they are not eligible to receive standard state unemployment benefits if their contracts are terminated. W2 workers are covered under Florida's Reemployment Assistance program.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                How does the Florida healthcare market handle 1099 requirements?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Because Florida does not run its own state insurance portal, you must purchase a private plan through Healthcare.gov during the annual open enrollment periods. Premium rates are determined by your age, tobacco usage, and geographical county, but you do not receive the state-level subsidies common in jurisdictions like California or New York.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               State disclosure statement: This financial guide is designed purely for reference and educational purposes. Under state and federal tax statutes, individual business filings and personal corporate circumstances fluctuate. Always consult with a licensed Florida CPA before reorganizing corporate entity layouts or signing final employment contracts.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default FloridaComparisonPage;
