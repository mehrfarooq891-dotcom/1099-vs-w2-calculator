import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, Compass, DollarSign, Table, Trees } from 'lucide-react';

interface ColoradoComparisonPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado') => void;
}

const ColoradoComparisonPage: React.FC<ColoradoComparisonPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="colorado-post"
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
          <span className="text-blue">State Tax Strategy</span>
          <span>/</span>
          <span className="text-text-muted select-none">Colorado 1099 vs W2</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            1099 vs W2 in Colorado 2025: Denver's Contractor Market and the 4.4% Flat Tax
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Compass size={14} />
               <span>COLORADO TAX SYSTEMS & LIFESTYLE ECONOMICS</span>
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
              <span className="text-blue font-bold">1,240 WORDS</span>
            </div>
          </div>
        </div>

        {/* DIRECT LEAD & STRATEGIC CONTEXT */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Deciding between a salaried W2 position and a 1099 independent contract in Colorado involves a distinctive combination of flat tax accounting, localized payroll mandates, and expensive lifestyle-benefits equations.
          </p>

          <p>
            Colorado’s tax architecture is highly uniform, defined by a flat state income tax rate of <strong className="text-text-primary">4.4%</strong>. This predictability makes calculating state tax liabilities straightforward, but it places extreme pressure on how you manage federal self-employment taxes and out-of-pocket business overhead.
          </p>

          <p>
            The Denver-Hines, Boulder, and Colorado Springs corridors have grown into premier tech and engineering nerve centers. From cloud security consultants in LoDo to aerospace contractors in Boulder, independent professionals often command premium bill rates. However, transitioning to a 1099 structure exposes you to the double-edged sword of independence.
          </p>

          <p>
            You are no longer just a worker; you are a service enterprise. In Colorado, this status carries specific regulatory duties. These include paying into state-mandated payroll funds like the FAMLI program, managing sales taxes on certain software services, and bearing the full burden of private health insurance on the state's Exchange.
          </p>

          <p>
            Additionally, Colorado contractors face a steep "lifestyle subsidy gap." In a state where top talent values extreme flexibility, ski PTO, and private recreation packages, W2 employers weaponize wellness programs, dental coverages, and HSA matches to retain employees. When negotiating a 1099 billing premium, you must price these lifestyle assets directly into your pricing baseline.
          </p>
        </div>

        {/* SECTION 2 — THE COLORADO TAX BLUEPRINT & THE FAMLI OVERLAY */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Colorado State Tax Code: The 4.4% Baseline and Payroll Surcharges
          </h2>
          <p>
            Before running comparative calculations, you must understand the state-level tax mechanisms that apply to remote and on-site workers in Colorado:
          </p>

          <div className="space-y-4">
            
            {/* 1. Flat Income Tax */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-blue">
                 <ShieldCheck size={20} className="text-blue shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">1. The Stable 4.4% Flat Income Tax</h4>
              </div>
              <p className="text-sm text-text-muted">
                Colorado is a constitutionally flat-rate state. For the 2025 tax year, taxable income is subject to a flat <strong className="text-text-primary">4.4%</strong> rate. Unlike states with progressive tiers, every dollar of your net profit is assessed at the exact same percentage. 
              </p>
              <p className="text-sm text-text-muted">
                This rate may experience minor temporary reductions in future cycles due to TABOR (Taxpayer’s Bill of Rights) surplus revenue refund caps, but 4.4% represents your default planning baseline.
              </p>
            </div>

            {/* 2. Colorado FAMLI Program */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} className="text-red shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">2. The FAMLI Payroll Surcharge (0.9% Impact)</h4>
              </div>
              <p className="text-sm text-text-muted">
                Colorado's Family and Medical Leave Insurance (FAMLI) program introduces specific payroll mechanics. For W2 employees, the premium is <strong className="text-text-primary">0.9% of wages</strong>. By statute, the cost is split 50/50 between the employer (0.45%) and the employee (0.45%), with businesses harboring fewer than 10 employees exempt from the employer’s share.
              </p>
              <p className="text-sm text-text-muted">
                As a 1099 contractor, <strong className="text-text-primary">participation is entirely optional</strong>. If you choose to opt in, you pay only the individual employee share of 0.45% of your self-employed earnings. However, opting in locks you into a multi-year coverage commitment.
              </p>
            </div>

            {/* 3. Local Sales & Lodging Surcharges */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-blue">
                 <DollarSign size={20} className="text-blue shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">3. Denver's Local Occupational & Business Taxes</h4>
              </div>
              <p className="text-sm text-text-muted">
                While Denver does not levy a municipal progressive personal income tax on remote professionals, it does enforce the <strong className="text-text-primary">Denver Occupational Privilege Tax</strong> (often called the head tax).
              </p>
              <p className="text-sm text-text-muted">
                For W2 workers earning over $500 monthly, the city levies $4.00 per month from the employee and $1.50 per month from the employer. For self-employed individuals running structured sole proprietorships or single-member LLCs within Denver city limits, you are subject to the same $4.00 monthly tax rate.
              </p>
            </div>

          </div>
        </div>

        {/* DETAIL COMPARISON EXAMPLE — $100K W2 VS $128K 1099 */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Rocky Mountain Case Study: $100,000 W2 vs. $128,000 1099
          </h2>
          <p>
            To evaluate the math of this choice, let's look at a realistic scenario. Liam is a senior systems engineer based in Boulder. He is evaluating two competing offers:
          </p>
          <ul className="list-disc list-inside pl-4 text-sm space-y-1">
             <li>A salaried W2 position paying <strong className="text-text-primary">$100,000</strong> with a standard medical plan and paid vacation.</li>
             <li>An independent 1099 contract with a Denver fintech startup billing <strong className="text-text-primary">$128,000</strong>. Liam estimates write-offs at $8,000 for server hosting, home-office space, and equipment (leaving a net Schedule C profit of $120,000).</li>
          </ul>
          
          <p>
            The $28,000 top-line premium represents a 28% markup. Let us examine the exact federal and state tax reconciliation for a single filer claiming standard deductions in the tax year 2025:
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Colorado Compensation Split: Detailed Tax Reconciliation
            </h4>

            {/* TAX LEDGER TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Tax / Withholding Category</th>
                        <th className="p-4 text-right">W2 Position ($100,000)</th>
                        <th className="p-4 text-right">1099 Contract ($128,000)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Gross Billing / Base Wages</td>
                        <td className="p-4 text-right font-bold">$100,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$128,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">Business Overhead / Deductions (Schedule C)</td>
                        <td className="p-4 text-right">-$0</td>
                        <td className="p-4 text-right text-red">-$8,000</td>
                     </tr>
                     <tr className="bg-bg-input/20 font-bold">
                        <td className="p-4 text-text-primary font-sans">Taxable Schedule C Net Profit</td>
                        <td className="p-4 text-right">$100,000</td>
                        <td className="p-4 text-right text-text-primary">$120,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">Federal Income Tax (Estimated)</td>
                        <td className="p-4 text-right">-$13,376</td>
                        <td className="p-4 text-right text-red">-$11,004 <span className="text-[10px] block opacity-70">(Reflects 20% Section 199A QBI Shelter)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Federal FICA / Self-Employment Tax (SECA)</td>
                        <td className="p-4 text-right">-$7,650 <span className="text-[10px] block opacity-70">(Half-covered by employer)</span></td>
                        <td className="p-4 text-right text-red">-$16,955 <span className="text-[10px] block opacity-70 font-bold">(Evaluated at full 15.3% SE burden)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">Colorado State Income Tax (Flat 4.4%)</td>
                        <td className="p-4 text-right">-$4,228 <span className="text-[10px] block opacity-70">(Standard single state allowance)</span></td>
                        <td className="p-4 text-right text-red">-$5,081 <span className="text-[10px] block opacity-70">(Includes state-conforming QBI benefit)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">CO FAMLI / Local Head Taxes</td>
                        <td className="p-4 text-right">-$498 <span className="text-[10px] block opacity-70">(Mandatory Employee FAMLI + Denver Head Tax)</span></td>
                        <td className="p-4 text-right">-$48 <span className="text-[10px] block opacity-70">(Excludes optional FAMLI; Head Tax only)</span></td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Net Liquid Take-Home Cash</td>
                        <td className="p-4 text-right text-green font-black text-base">$74,248</td>
                        <td className="p-4 text-right text-blue font-black text-base">$86,912</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted">
              *The raw cash delta: Liam gets $12,664 more in annual cash-in-hand by going the independent route.
            </p>
          </div>

          <p>
            At first, the raw tax calculations favor 1099, showing an advantage of <strong className="text-green font-bold font-mono">+$12,664</strong>. However, the raw cash delta does not tell the whole story. To compare them fairly, we must evaluate Colorado's healthcare marketplace and the specific outdoor/lifestyle benefits typical of the state.
          </p>
        </div>

        {/* SECTION 4 — OUTDOOR/LIFESTYLE BENEFIT GAPS & HEALTH REGULATION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Colorado Lifestyle & Health Marketplace Reality
          </h2>
          <p>
            If you work in Colorado's mountain communities or metropolitan technology centers, your "benefits" equation includes more than just dental insurance and 401(k) matches. It directly impacts your lifestyle and recreation budget:
          </p>

          <div className="space-y-4">
             <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                <Trees size={22} className="text-green shrink-0" />
                The Rocky Mountain Lifestyle Premium: What's Missing?
             </h3>
             <p className="text-sm text-text-muted">
                Colorado consistently ranks at the top of national wellness and outdoor activity surveys. Under typical W2 tech employer packages in Denver/Boulder, companies weaponize specialized local perks to attract elite developers. Missing out on these corporate wellness subsidies means you must fund them yourself:
             </p>

             <ul className="list-disc list-inside pl-4 text-sm space-y-2 text-text-muted">
                <li><strong className="text-text-primary text-xs font-mono">Wellness & Outdoor Allowances:</strong> Many Colorado employers subsidize high-cost seasonal recreation purchases, such as Epic Pass or Ikon Pass packages (typically <strong className="text-text-primary font-bold font-mono">$900–$1,300</strong> annually) or climbing gym memberships ($120/month).</li>
                <li><strong className="text-text-primary text-xs font-mono">The Self-Funded Ski Day Loss:</strong> A W2 engineer who wants to chase fresh powder can take a standard paid PTO day without losing base compensation. For a 1099 contractor billing hourly, taking a single Friday off to head to Breckenridge or Vail means forfeiting an entire day's billable wages. Five "powder days" a year can cost an hourly professional thousands of dollars in lost billing potential.</li>
                <li><strong className="text-text-primary text-xs font-mono">HSA Matches:</strong> Standard Colorado corporate setups provide High Deductible Health Plans (HDHPs) paired with automatic employer cash deposits of <strong className="text-text-primary font-bold font-mono">$500 to $1,000</strong> directly into an employee HSA.</li>
             </ul>
          </div>

          {/* HEALTH INSURANCE METRIC IN COLORADO: CONNECT FOR HEALTH COLORADO */}
          <div className="space-y-4 mt-6">
             <h3 className="text-xl font-bold text-text-primary">Connect for Health Colorado Prices</h3>
             <p className="text-sm text-text-muted">
                Colorado manages its own exclusive health insurance exchange: <strong className="text-text-primary">Connect for Health Colorado</strong>. This state-run marketplace connects self-employed professionals with HSA-compliant plans.
             </p>
             <p className="text-sm text-text-muted">
                Because Liam's 1099 net income exceeds federal subsidy boundaries, he must purchase a plan at retail marketplace prices. For a single professional in their mid-succeeding 30s in the Denver area, 2025 monthly costs average:
             </p>

             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-mono text-xs">
                <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                   <span className="text-text-muted font-bold block uppercase mb-1">Bronze HSA Plans</span>
                   <span className="text-lg font-black text-text-primary">$340 - $410 / month</span>
                   <p className="text-[10px] text-text-muted mt-2">Deductibles exceed $7,500; allows pre-tax HSA contributions</p>
                </div>
                <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                   <span className="text-text-muted font-bold block uppercase mb-1">Silver Plans</span>
                   <span className="text-lg font-black text-text-primary">$430 - $530 / month</span>
                   <p className="text-[10px] text-text-muted mt-2">Balanced deductibles, copay frameworks, standard medical access</p>
                </div>
                <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                   <span className="text-text-muted font-bold block uppercase mb-1">Gold & Platinum</span>
                   <span className="text-lg font-black text-text-primary">$540 - $690 / month</span>
                   <p className="text-[10px] text-text-muted mt-2">Lowest deductibles, lowest copays, very expensive premiums</p>
                </div>
             </div>
          </div>

          <p>
            To secure a standard Silver plan and basic dental/vision coverage on Connect for Health Colorado, Liam must spend approximately <strong className="text-text-primary">$490 per month</strong>, or <strong className="text-text-primary">$5,880 annually</strong> out of pocket.
          </p>

          <p>
            Now, let's complete the financial reconciliation by subtracting his health premium, matching 401(k) benefits, and lifestyle overhead from his initial 1099 cash advantage:
          </p>

          <div className="p-6 bg-bg-card/30 border border-dashed border-border-color/30 rounded-2xl">
             <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-text-primary mb-3">Liam's Valuation Balance Sheet:</h4>
             <ul className="space-y-2 text-sm">
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Initial 1099 Cash Advantage:</span>
                   <span className="text-green font-mono font-bold">+$12,664</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Private Silver Coverage & HSA Plan (Connect for Health CO):</span>
                   <span className="text-red font-mono">- $5,880</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Forfeited 4% W2 401(k) Matching Contribution ($100k salary):</span>
                   <span className="text-red">- $4,000</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Value of 15 Days Promised Paid Vacation (PTO):</span>
                   <span className="text-red">- $5,769</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Lost Epic Ski Pass & Wellness Corporate Subsidies:</span>
                   <span className="text-red">- $1,100</span>
                </li>
                <li className="flex justify-between pt-1 font-black text-white bg-red/10 px-2 py-1 rounded">
                   <span>Liam's True Adjusted Bottom Line Profit:</span>
                   <span className="text-red font-mono">-$4,085 (W2 Wins in Value)</span>
                </li>
             </ul>
          </div>

          <p>
            When adding health coverage, corporate matching, paid leave, and lifestyle perks into the comparison, Liam's independent 1099 contract actually results in a <strong className="text-red font-bold font-mono">$4,085 loss</strong> in total economic value compared to his W2 baseline.
          </p>
          <p>
            To achieve true financial parity and fully offset the risks of running an independent business, Liam's contractor billing rate floor needs to be at least <strong className="text-text-primary font-mono">$135,000</strong>—representing a 35% premium over his $100,000 W2 salary.
          </p>
        </div>

        {/* CALL TO ACTION BOARD */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Calculate Your Custom Colorado Compensation Floor</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Stop guessing your bottom line with generic calculators. Use our state-tuned tax engine to input your Colorado numbers and instantly visualize your true net take-home cash gap.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO COLORADO SYSTEM]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Analyze Colorado Rates <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* STATE SPECIFIC FAQ SECTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Colorado Self-Employment FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Are 1099 contractors in Colorado required to pay into the FAMLI program?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. Participation in Colorado's Family and Medical Leave Insurance (FAMLI) program is entirely optional for self-employed individuals and 1099 contractors. If you choose to participate, you must pay 0.45% of your self-employed net income into the state fund, and you must commit to maintaining coverage for at least three years.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Does Colorado conform to the federal Qualified Business Income (QBI) deduction?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes. Colorado state taxable income is based on your federal taxable income, which means the federal Section 199A QBI deduction naturally flows through to reduce your Colorado state tax liability. This contrasts with non-conforming states like Illinois, where QBI deductions must be added back on the state return.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                What is Connect for Health Colorado, and does it support HSA-eligible plans?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Connect for Health Colorado is Colorado's official state health insurance exchange. It features an extensive selection of HSA-eligible bronze and silver plans, allowing self-employed professionals to make pre-tax health savings contributions to shelter their earnings from federal and state taxes.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               State disclosure notice: This structural tax analysis is designed exclusively for educational references. Under state and federal tax statutes, individual business filings and personal corporate circumstances fluctuate. Always consult with a licensed Colorado personal CPA before reorganizing corporate entity layouts or signing final work contracts.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default ColoradoComparisonPage;
