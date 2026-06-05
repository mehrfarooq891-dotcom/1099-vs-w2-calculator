import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, Compass, DollarSign, Table, Landmark } from 'lucide-react';

interface IllinoisComparisonPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado') => void;
}

const IllinoisComparisonPage: React.FC<IllinoisComparisonPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="illinois-post"
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
          <span className="text-text-muted select-none">Illinois 1099 vs W2</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none">
            1099 vs W2 in Illinois 2025: The Flat Tax State Explained
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Compass size={14} />
               <span>ILLINOIS COMPENSATION STRATEGICS & TAX CODES</span>
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
              <span className="text-blue font-bold">1,180 WORDS</span>
            </div>
          </div>
        </div>

        {/* DIRECT LEAD & STRATEGIC CONTEXT */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Evaluating a 1099 contractor rate against a salaried W2 offer in Illinois demands a precise understanding of the state's flat tax system. Do not let the simplicity of a universal tax rate blindside you into accepting a subpar contract.
          </p>

          <p>
            Illinois tax policy is defined by a constitutional mandate for flat-rate taxation. For the 2025 tax year, every individual wage earner, LLC proprietor, and high-flying partner pays a flat <strong className="text-text-primary">4.95%</strong> state income tax to Springfield. There are no progressive tiers, no luxury brackets, and no carve-outs for low-income brackets. This flat tax landscape simplifies your state budgeting, but it sets a rigid floor for your financial comparisons. 
          </p>

          <p>
            When migrating from a W2 salary to a 1099 corporate contract inside the Land of Lincoln, most independent professionals encounter a painful surprise: they underestimate the compounding costs of payroll matching, localized commercial taxes, and private benefits administration in the state. 
          </p>

          <p>
            In Illinois, a flat rate does not imply a level playing field. It shifts the burden of tax optimization directly onto your shoulders. Without standard progressive brackets to compress tax liabilities, you must rely entirely on federal tax shelters. This guide analyzes how Illinois' 4.95% rate interacts with self-employment taxes, dissects a real-world Chicago case study, and details the structural math of healthcare exchanges in Illinois.
          </p>
        </div>

        {/* THE ILLINOIS FLAT TAX & THE STATE-LEVEL QBI NON-CONFORMITY */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Illinois State Tax Playbook: What You Must Know
          </h2>
          <p>
            To successfully evaluate your compensation options, you must master the specific rules of Illinois state tax conformity and payroll mechanics.
          </p>

          <div className="space-y-4">
            
            {/* 1. Flat Tax Structure */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-blue">
                 <ShieldCheck size={20} className="text-blue shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">1. The Constant 4.95% Rate Constraint</h4>
              </div>
              <p className="text-sm text-text-muted">
                Illinois does not use progressive brackets like neighboring Wiscoonsin or Iowa. Whether you make $50,000 or $5,000,000, your base state rate is exactly <strong className="text-text-primary">4.95%</strong> of your Illinois net income. 
              </p>
              <p className="text-sm text-text-muted">
                Since there are no bracket fluctuations, the tax-delay benefits of progressive structures do not exist. To reduce your state liability, you are restricted to decreasing your absolute net income baseline.
              </p>
            </div>

            {/* 2. State-Level QBI Non-Conformity */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} className="text-red shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">2. No State-Level QBI Deduction (Critical Non-Conformity)</h4>
              </div>
              <p className="text-sm text-text-muted">
                At the federal level, independent 1099 contractors can claim the <strong className="text-text-primary">Section 199A Qualified Business Income (QBI) deduction</strong>, which shields up to 20% of net profits from income taxes.
              </p>
              <p className="text-sm text-text-muted">
                However, <strong className="text-text-primary">Illinois does not conform to the federal QBI deduction</strong> for personal tax returns. When you file Form IL-1040, you must add back any federal QBI deductions back into your Illinois taxable income. You pay the full, unmitigated 4.95% flat state tax on 100% of your business net profit (minus basic personal exemptions of approximately $2,770). This major statutory variance penalizes 1099 contractors compared to federal baselines.
              </p>
            </div>

            {/* 3. Local Business Taxes (Chicago Context) */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-blue">
                 <Landmark size={20} className="text-blue shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">3. The Chicago Context: Expense Densities & Sales Taxes</h4>
              </div>
              <p className="text-sm text-text-muted">
                If you operate out of Chicago, you do not face a local municipal wage tax (like NYC's 3.876% top rate). This is a welcome relief. 
              </p>
              <p className="text-sm text-text-muted">
                However, Cook County and the City of Chicago levy some of the highest combined sales taxes in the nation, peaking at <strong className="text-text-primary">10.25%</strong>. Additionally, the cost of living index in metropolitan Chicago sits roughly 15-20% higher than downstate Illinois. Because your consumer purchasing power is compressed by local levies, any nominal contractor premium must be sized defensively to maintain a comparable standard of living.
              </p>
            </div>

          </div>
        </div>

        {/* SECTION 3 — THE COOK COUNTY COMPARISON: $100K W2 VS $130K 1099 */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Chicago Case Study: $100,000 W2 vs. $130,000 1099
          </h2>
          <p>
            Let us stress-test these rules using a realistic corporate offer sequence. Nicholas is a digital project manager living in Chicago's Lakeview neighborhood. He is evaluating two competing proposals:
          </p>
          <ul className="list-disc list-inside pl-4 text-sm space-y-1">
             <li>A full-time W2 agency role offering <strong className="text-text-primary">$100,000</strong> in annual salary, providing a solid standard benefits package.</li>
             <li>An independent 1099 contract with a technology corporation billing <strong className="text-text-primary">$130,000</strong>. Nicholas expects $10,000 in legitimate professional business write-offs (retaining a net profit of $120,000 on Schedule C).</li>
          </ul>
          
          <p>
            At first glance, a $30,000 corporate top-line premium represents a substantial 30% jump. Let us analyze the exact line-by-line financial audit for a single filer taking standard exemptions in Illinois for 2025:
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Illinois Tax Ledger: Nicholas' Complete Comp Reconciliation
            </h4>

            {/* CASE STUDY COMPARE TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Tax / Expense Category</th>
                        <th className="p-4 text-right">W2 Salary ($100,000)</th>
                        <th className="p-4 text-right">1099 Contract ($130,000)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Gross Earnings / Revenue</td>
                        <td className="p-4 text-right font-bold">$100,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$130,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Legitimate write-offs (Schedule C expenses)</td>
                        <td className="p-4 text-right">-$0</td>
                        <td className="p-4 text-right text-red">-$10,000</td>
                     </tr>
                     <tr className="bg-bg-input/20">
                        <td className="p-4 text-text-primary font-sans font-bold">Net Schedule C Profit Base</td>
                        <td className="p-4 text-right font-bold">$100,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$120,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">Federal Income Tax (Estimated)</td>
                        <td className="p-4 text-right">-$13,376</td>
                        <td className="p-4 text-right text-red">-$11,004 <span className="text-[10px] block opacity-70">(Includes 20% QBI Shelter & Half-SE Deduction)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Self-Employment Payroll Tax (SECA FICA Match)</td>
                        <td className="p-4 text-right">-$7,650 <span className="text-[10px] block opacity-70">(Employer covered 7.65% match)</span></td>
                        <td className="p-4 text-right text-red">-$16,955 <span className="text-[10px] block opacity-70">(Assessed at full 15.3% SE burden)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">Illinois State Tax (Flat 4.95%)</td>
                        <td className="p-4 text-right">-$4,813 <span className="text-[10px] block opacity-70">(W2 Exemption applied)</span></td>
                        <td className="p-4 text-right text-red">-$5,803 <span className="text-[10px] block opacity-70">(QBI Add-Back enforced)</span></td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Net Liquid Take-Home Cash</td>
                        <td className="p-4 text-right text-green font-black text-base">$74,161</td>
                        <td className="p-4 text-right text-blue font-black text-base">$86,238</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted">
              *The raw cash delta: Nicholas receives $12,077 more in annual disposable cash via the 1099 structure before dealing with individual health marketplaces, pensions, or PTO accounts.
            </p>
          </div>

          <p>
            Nicholas' gross 1099 advantage is initially <strong className="text-green font-bold font-mono">+$12,077</strong>. While this appears to be a clear win, we must now address Illinois' specific private insurance and occupational framework.
          </p>
        </div>

        {/* HEALTH INSURANCE EXCHANGE IN ILLINOIS: GET COVERED ILLINOIS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Illinois Healthcare Factor: Navigating the State Marketplace
          </h2>
          <p>
            Unlike Florida or Texas, Illinois operates its own regulatory health infrastructure known as <strong className="text-text-primary">Get Covered Illinois</strong>. Get Covered Illinois serves as the central administrative hub for state-specific insurance access, leveraging federal subsidy matrices on a localized platform.
          </p>
          <p>
            As a 1099 contractor, you must purchase individual insurance plans directly on this marketplace. While the system is robust and competitive, the full cost of plan premiums falls on your business. For an individual in their 30s living in Chicago, typical monthly premium baselines in 2025 match these tiers:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-mono text-xs">
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Bronze Coverage</span>
                <span className="text-lg font-black text-text-primary">$380 - $450 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Deductibles exceed $7,800; emergency protection focus</p>
             </div>
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Silver Coverage</span>
                <span className="text-lg font-black text-text-primary">$460 - $570 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Balanced premiums, moderate out-of-pocket limits</p>
             </div>
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Gold & Platinum</span>
                <span className="text-lg font-black text-text-primary font-mono">$580 - $720 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Low deductibles, zero co-insurance, expensive premiums</p>
             </div>
          </div>

          <p>
            Securing a standard Silver level plan inside Chicago will average approximately <strong className="text-text-primary">$500 per month</strong>, or <strong className="text-text-primary">$6,000 annually</strong> in raw premium cash outflows. 
          </p>
          <p>
            Now, let's complete the financial reconciliation by subtracting this cost along with the other benefits a W2 arrangement provides:
          </p>

          <div className="p-6 bg-bg-card/30 border border-dashed border-border-color/30 rounded-2xl">
             <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-text-primary mb-3">Nicholas' True Bottom-Line Value Reconciliation:</h4>
             <ul className="space-y-2 text-sm">
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Initial 1099 Cash Advantage:</span>
                   <span className="text-green font-mono font-bold">+$12,077</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Private Get Covered Illinois Silver Plan:</span>
                   <span className="text-red font-mono">- $6,000</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Forfeited 4% W2 Retirement Match ($100k Salary Base):</span>
                   <span className="text-red">- $4,000</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Value of 15 Days Promised Paid Time Off (PTO):</span>
                   <span className="text-red">- $5,769</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Lost Supplemental Disability, Dental & Vision Coverages:</span>
                   <span className="text-red">- $1,200</span>
                </li>
                <li className="flex justify-between pt-1 font-black text-white bg-red/10 px-2 py-1 rounded">
                   <span>Nicholas' Adjusted True Value Shift:</span>
                   <span className="text-red font-mono">-$4,892 (W2 Wins in Economic Value)</span>
                </li>
             </ul>
          </div>

          <p>
            Even with a $30,000 gross markup, Nicholas' independent 1099 contract actually represents a <strong className="text-red font-bold font-mono">$4,892 loss</strong> in actual economic value compared to his W2 base position. 
          </p>
          <p>
            Because the flat Illinois state tax does not allow a QBI deduction, Nicholas owes an extra $495 in state taxes than he would in a conforming state. Combined with self-employment FICA taxes and the full burden of health coverage, Nicholas would need to secure a 1099 contract of at least <strong className="text-text-primary font-mono">$138,000</strong> to break even on an equal-value basis.
          </p>
        </div>

        {/* REVERSE CALC ACTION BOARD */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 animate-fade-in">
          <h3 className="text-2xl font-black text-text-primary">Calculate Your True Illinois Net Value</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Stop guessing your bottom line. Use our free web comparison tax engine to input your Illinois salary numbers, match self-employment write-offs, and discover the exact billing premium you need to remain highly profitable.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO HOME ESTIMATES TOOL]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Analyze Illinois Rates <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ILLINOIS SPECIFIC WORKPLACE SECTORS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Illinois Contractor Sectors: Where 1099 Flourishes
          </h2>
          <p>
            Despite the required premium, operating as an independent entity remains highly popular and lucrative across several Illinois focal industries:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-sm tracking-tight flex items-center gap-2">
                   <Landmark size={16} className="text-blue shrink-0" /> Chicago Financial & Fintech
                </h4>
                <p className="text-xs text-text-muted">
                   As a global financial derivative hub, Chicago's Loop and Fulton Market hosts massive options, trading, and fintech centers that depend heavily on independent quantitative developers, system engineers, and risk strategists commanding premium rates.
                 </p>
             </div>
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-sm tracking-tight flex items-center gap-2">
                   <Landmark size={16} className="text-blue shrink-0" /> Healthcare & Bio-tech
                </h4>
                <p className="text-xs text-text-muted">
                   From medical equipment operations to clinical trial consulting around Lake County and Chicago, bio-science experts routinely deploy high-premium 1099 entities to consult across medical corporations.
                </p>
             </div>
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-sm tracking-tight flex items-center gap-2">
                   <Landmark size={16} className="text-blue shrink-0" /> Professional Logistics
                </h4>
                <p className="text-xs text-text-muted">
                   Illinois serves as a core shipping, inland port, and logistical hub of America. Independent enterprise system designers and supply-chain consultants leverage 1099 contracts to design intermodal freight platforms.
                </p>
             </div>
          </div>
        </div>

        {/* STATE SPECIFIC FAQ SECTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Illinois Self-Employment FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Does Illinois claim a state-level Qualified Business Income (QBI) deduction?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. Illinois is one of several states that do not conform to the federal Qualified Business Income (QBI) deduction under Section 199A. While you can claim a 20% federal write-off on your federal return, you must add that amount back onto your Illinois state return (Form IL-1040), paying the full flat 4.95% rate on your entire business profit.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Does Illinois levy a personal property replacement tax (PPRT) on 1099 workers?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes, potentially. If you operate as a partnership or an S-Corporation in Illinois, you are subject to the Illinois Personal Property Replacement Tax (PPRT). For partnerships and S-Corps, this is an additional tax on net income (1.5% and 2.5% respectively) filed on Form IL-1065 or IL-1120-ST. Sole proprietors filing standard Schedule C forms are exempt from this replacement tax.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Where can Illinois independent workers purchase private health insurance?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Contractors in Illinois secure health insurance through the official state marketplace agency, Get Covered Illinois. This portal connects directly with healthcare.gov, allowing eligible self-employed individuals to compare private HSA-eligible bronze, silver, and gold ACA plans.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               State disclosure statement: This financial guide is designed purely for reference and educational purposes. Under state and federal tax statutes, individual business filings and personal corporate circumstances fluctuate. Always consult with a licensed Illinois CPA before reorganizing corporate entity layouts or signing final employment contracts.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default IllinoisComparisonPage;
