import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, Compass, DollarSign, Table, Film } from 'lucide-react';

interface GeorgiaComparisonPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado') => void;
}

const GeorgiaComparisonPage: React.FC<GeorgiaComparisonPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="georgia-post"
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
          <span className="text-text-muted select-none">Georgia 1099 vs W2</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            1099 vs W2 in Georgia 2025: New Flat Tax Rate and What It Means for Contractors
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Compass size={14} />
               <span>GEORGIA TAX LAW & CORNERSTONE INDUSTRIES</span>
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
              <span className="text-blue font-bold">1,210 WORDS</span>
            </div>
          </div>
        </div>

        {/* DIRECT LEAD & STRATEGIC CONTEXT */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Georgia is executing one of the most aggressive tax overhauls in its modern history. Out is the historic, progressive multi-tiered tax bracket system. In is a simplified, unified flat state income tax rate of 5.49%—with legislative pathways targeting further reductions.
          </p>

          <p>
            For independent software developers, film production professionals, and commercial consultants in Atlanta, Savannah, and Alpharetta, the landscape of choice between W2 employment and 1099 contracting has shifted completely. This new structures changes how you calculate net cash flow and how you evaluate top-line contract premiums.
          </p>

          <p>
            When Georgia operated under progressive state brackets, higher earners faced a rapid step up to the state's top 5.75% bracket. The transition to a flat <strong className="text-text-primary">5.49%</strong> flat tax caps the state-level tax erosion, providing a distinct windfall for high-earning independent business entities.
          </p>

          <p>
            But do not let the excitement of state-level tax cuts distract you from the full compensation comparison.
          </p>

          <p>
            While a flat 5.49% rate makes estimating state tax liability simple, independent business operators in Georgia still face significant federal self-employment taxes (15.3% FICA), the cost of private healthcare administration on the Georgia Access marketplace, and the lost valuation of corporate benefits. If you do not charge a sufficient contractor markup over a standard W2 salary, you will end up subsidizing your own client's payroll savings. 
          </p>

          <p>
            Let's dissect Georgia's statutory tax codes, analyze a relative Atlanta film and tech case study, and trace the math of Georgia's health insurance landscape.
          </p>
        </div>

        {/* THE GEORGIA TAX MATRIX & LEGISLATIVE FLAT TAX OVERHAUL */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Georgia Flat Tax Strategy: Key 2025 Pillars
          </h2>
          <p>
            Navigating the Peach State's professional marketplace requires understanding three key state-level financial pillars:
          </p>

          <div className="space-y-4">
            
            {/* 1. Flat Tax Structure */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-blue">
                 <ShieldCheck size={20} className="text-blue shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">1. The 5.49% Consolidated Flat State Tax</h4>
              </div>
              <p className="text-sm text-text-muted">
                Effective for the 2024–2025 tax window, Georgia eliminated its six-bracket graduated system (which topped out at 5.75% on incomes over $7,000 for single filers) and instituted a flat <strong className="text-text-primary font-mono">5.49%</strong> rate. 
              </p>
              <p className="text-sm text-text-muted">
                This flat structure benefits individuals earning above the old bracket ceilings. For high-earning professional contractors, it represents a permanent tax freeze. If state revenues maintain specific fiscal targets, statutory guidelines authorize this rate to continuously drop by 0.1% annually until it hits a target of 4.99%.
              </p>
            </div>

            {/* 2. Georgia standard Deductions Policy */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-blue">
                 <DollarSign size={20} className="text-blue shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">2. Increased State Standard Deductions</h4>
              </div>
              <p className="text-sm text-text-muted">
                As part of the flat-rate transition, Georgia significantly increased its basic standard deduction to <strong className="text-text-primary">$12,000</strong> for single filers (and $24,000 for married couples filing jointly).
              </p>
              <p className="text-sm text-text-muted">
                This matches the increased federal standard deduction more closely, helping lower and middle-income W2 and 1099 workers shield a greater portion of their baseline earnings from state tax scrutiny.
              </p>
            </div>

            {/* 3. The Atlanta Epicenter Context */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
               <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} className="text-red shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">3. Regional Business Expenses & The S-Corp Play</h4>
              </div>
              <p className="text-sm text-text-muted">
                Unlike some Midwest jurisdictions, Georgia conforms to the federal Qualified Business Income (QBI) deduction parameters, but it regulates independent business entities closely. 
              </p>
              <p className="text-sm text-text-muted">
                High-rate consultants in Atlanta's technology circles or the film industry (Pinewood/Trilith Studios) frequently transition from sole proprietorships to S-Corporation structures. By utilizing an S-Corp, contractors can split their net revenues into a market-standard W2 salary and an equity distribution. This structure shields a portion of their earnings from the heavy 15.3% self-employment tax burden—making the 1099 path highly attractive.
              </p>
            </div>

          </div>
        </div>

        {/* METROPOLITAN CASE STUDY: $100K W2 VS $130K 1099 */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Atlanta Tech Case Study: W2 Project Manager vs. 1099 Contractor
          </h2>
          <p>
            Let us model a financial comparison matching the local professional job marketplace. Sarah is a senior UX strategist in Atlanta. She has been offered two options at a growing tech agency:
          </p>
          <ul className="list-disc list-inside pl-4 text-sm space-y-1">
             <li>A salaried W2 position paying <strong className="text-text-primary">$100,000</strong> with standard corporate benefits.</li>
             <li>An independent 1099 consulting agreement billing <strong className="text-text-primary">$130,000</strong> gross, where she estimates $10,000 in qualifying business expenses (resulting in $120,000 in net business profit).</li>
          </ul>
          
          <p>
            Is the $30,000 top-line premium enough to justify independence? Let us analyze the exact tax ledger for a single filer claiming standard deductions in Fulton County for the 2025/2026 tax window:
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Georgia Compensation Ledger: Full Financial Audit
            </h4>

            {/* LEDGER COMPARISON TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Tax / Withholding Category</th>
                        <th className="p-4 text-right">W2 Position ($100,000)</th>
                        <th className="p-4 text-right">1099 Contract ($130,000)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Gross Billing / Salary Base</td>
                        <td className="p-4 text-right font-bold">$100,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$130,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">Eligible Business Write-offs (Schedule C)</td>
                        <td className="p-4 text-right">-$0</td>
                        <td className="p-4 text-right text-red">-$10,000</td>
                     </tr>
                     <tr className="bg-bg-input/20 font-bold">
                        <td className="p-4 text-text-primary font-sans">Taxable Schedule C Net Profit</td>
                        <td className="p-4 text-right">$100,000</td>
                        <td className="p-4 text-right text-text-primary">$120,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Federal Income Tax (Estimated)</td>
                        <td className="p-4 text-right">-$13,376</td>
                        <td className="p-4 text-right text-red">-$11,004 <span className="text-[10px] block opacity-70">(Includes 20% Section 199A QBI Shelter)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">FICA / Self-Employment Tax (SECA)</td>
                        <td className="p-4 text-right">-$7,650 <span className="text-[10px] block opacity-70">(Employer pays matching 7.65%)</span></td>
                        <td className="p-4 text-right text-red">-$16,955 <span className="text-[10px] block opacity-70 font-bold">(Assessed at full 15.3% SE burden)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Georgia State Income Tax (Flat 5.49%)</td>
                        <td className="p-4 text-right">-$4,831 <span className="text-[10px] block opacity-70">(State single exemption applied)</span></td>
                        <td className="p-4 text-right text-red">-$5,929 <span className="text-[10px] block opacity-70">(Assessed on net corporate profit)</span></td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Net Liquid Take-Home Cash</td>
                        <td className="p-4 text-right text-green font-black text-base">$74,143</td>
                        <td className="p-4 text-right text-blue font-black text-base">$86,112</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted">
              *The raw cash spreadsheet delta: Sarah's net cash take-home as an independent contractor is $11,969 higher than her W2 baseline before factoring in benefits.
            </p>
          </div>

          <p>
            At first glance, Sarah clears <strong className="text-green font-bold font-mono">+$11,969 more in cash</strong> by choosing the independent contract. But this is exactly where the math gets dangerous. W2 employment benefits are not just administrative perks; they have a concrete cash equivalent that must be bought back out-of-pocket on the open market.
          </p>
        </div>

        {/* HEALTH INSURANCE EXCHANGE IN GA: GEORGIA ACCESS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Georgia Health Insurance Equation: Georgia Access
          </h2>
          <p>
            Georgia operates its own state-based health insurance portal: <strong className="text-text-primary">Georgia Access</strong>. Rolled out in late 2024 and fully scaled for 2025, this platform replaced the federal HealthCare.gov infrastructure for Georgia residents. 
          </p>
          <p>
            As a 1099 contractor, you must purchase personal individual plans directly via Georgia Access. Because you are high-earning, you will not qualify for federal ACA subsidies. Therefore, you pay the full retail premium out of pocket. For an individual in their 30s living in Atlanta, standard monthly premium brackets show these baselines:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center font-mono text-xs">
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Bronze Coverage</span>
                <span className="text-lg font-black text-text-primary">$350 - $420 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Deductibles average $7,500; focused on catastrophic situations</p>
             </div>
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Silver Coverage (Most Chosen)</span>
                <span className="text-lg font-black text-text-primary">$440 - $550 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Balanced premiums, standard medical copays, ACA compliant</p>
             </div>
             <div className="p-4 border border-border-color/10 rounded-xl bg-bg-card/20">
                <span className="text-text-muted font-bold block uppercase mb-1">Gold & Platinum</span>
                <span className="text-lg font-black text-text-primary">$580 - $720 / month</span>
                <p className="text-[10px] text-text-muted mt-2">Minimal deductibles, direct specialist care, expensive premiums</p>
             </div>
          </div>

          <p>
            To secure an individual Silver mid-tier health, dental, and vision program, Sarah must budget approximately <strong className="text-text-primary">$5,600 annually</strong> out of pocket.
          </p>
          <p>
            Now, let's complete our evaluation by tracing the value of her corporate retirement matching and standard time-off perks:
          </p>

          <div className="p-6 bg-bg-card/30 border border-dashed border-border-color/30 rounded-2xl">
             <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-text-primary mb-3">Sarah's Adjusted Valuation Balance Sheet:</h4>
             <ul className="space-y-2 text-sm">
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Initial 1099 Cash Advantage:</span>
                   <span className="text-green font-mono font-bold">+$11,969</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Private Silver Plan via Georgia Access:</span>
                   <span className="text-red font-mono">- $5,600</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Forfeited 4% W2 401(k) Company Match ($100k Base):</span>
                   <span className="text-red">- $4,000</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Lapsed Value of 15 Days Paid Time Off (PTO):</span>
                   <span className="text-red">- $5,769</span>
                </li>
                <li className="flex justify-between pt-1 font-black text-white bg-red/10 px-2 py-1 rounded">
                   <span>Sarah's True Adjusted Bottom Line Profit:</span>
                   <span className="text-red font-mono">-$3,400 (W2 Wins in Value)</span>
                </li>
             </ul>
          </div>

          <p>
            When health coordinates, company 401(k) matches, and paid vacation days are integrated into the equation, Sarah's 1099 contract is actually <strong className="text-red font-bold font-mono">$3,400 LESS</strong> in total adjusted value than her $100,000 W2 base position. 
          </p>
          <p>
            To achieve true wealth parity and fully offset the risks of sole business management, Sarah's contractor contract billing floor needs to be at least <strong className="text-text-primary font-mono">$139,000</strong>—representing a 39% premium over the corporate W2 salary.
          </p>
        </div>

        {/* CORNERSTONE INDUSTRIES */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Peach Economy: Where 1099 Corridors Rule in Georgia
          </h2>
          <p>
            Despite these strict calculations, operating as an independent contractor is a highly sought-after structure throughout Georgia because of the region's dynamic focal industries:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-sm tracking-tight flex items-center gap-2">
                   <Film size={16} className="text-blue shrink-0" /> Atlanta's Hollywood South
                </h4>
                <p className="text-xs text-text-muted">
                   Georgia is a global epicentre for cinematic filming. Movie set directors, post-production supervisors, and VFX artists routinely establish Loan-Out S-Corps and 1099 consultancies to maximize high short-term daily rates.
                </p>
             </div>
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-sm tracking-tight flex items-center gap-2">
                   <Calculator size={16} className="text-blue shrink-0" /> Alpharetta FinTech Alley
                </h4>
                <p className="text-xs text-text-muted">
                   Over 70% of all US card payments go through Georgia processors. Alpharetta hosts expert software independent security specialists and transaction pipeline consultants billing premium rates.
                </p>
             </div>
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-sm tracking-tight flex items-center gap-2">
                   <ShieldCheck size={16} className="text-blue shrink-0" /> Multi-Modal Logistics
                </h4>
                <p className="text-xs text-text-muted">
                   Centered around the massive Port of Savannah and Atlanta’s busy airport, supply-chain architects and fleet developers leverage 1099 corporate layouts to structure regional accounts.
                </p>
             </div>
          </div>
        </div>

        {/* CALL TO ACTION LINK TO CALCULATOR */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Calculate Your Georgia Take-Home Value</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Stop guessing your bottom line on national tools. Use our state-tuned tax comparison motor to input your Georgia salary options and visualize the exact net cash difference instantly.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO GEORGIA STRUCTURE]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Compare Georgia Rates <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* STATE SPECIFIC FAQ SECTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Georgia Self-Employment FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                How does Georgia's new 5.49% flat tax impact independent contractors?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Effective for the 2024–2025 tax period forward, Georgia consolidated its graduated rate brackets into a single, predictable flat tax of 5.49% on net taxables. This benefits high earners and professional contractors because any marginal income exceeding historic graduated thresholds is no longer subject to the top 5.75% state tax penalty.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                What is Georgia Access and how do 1099 contractors use it?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Georgia Access is Georgia's state-based health insurance exchange, which officially launched in late 2024 to take over marketplace services from HealthCare.gov. Self-employed 1099 professionals use this portal to select ACA-compliant individual medical, dental, and vision plans directly from private insurance companies.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Do independent contractors in Georgia owe local municipal income taxes?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. Neither Fulton County, DeKalb County, nor the City of Atlanta levy local municipal personal income taxes. State income tax liabilities are capped exclusively at the state-level flat rate of 5.49%. However, cities and counties in Georgia charge high sales taxes and county-specific business license registration fees (PT-50M tax returns or occupational tax certifications).
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               State legal notification: This structural tax analysis is designed exclusively for educational references. Under state and federal tax statutes, individual business filings and personal corporate circumstances fluctuate. Always consult with a licensed Georgia personal CPA before reorganizing corporate entity layers or signing final work contracts.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default GeorgiaComparisonPage;
