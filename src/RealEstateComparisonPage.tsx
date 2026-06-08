import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, Compass, DollarSign, Table, Home, Key, Landmark, Clipboard } from 'lucide-react';

interface RealEstateComparisonPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse' | 'realestate') => void;
}

const RealEstateComparisonPage: React.FC<RealEstateComparisonPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="realestate-post"
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
          <span className="text-blue">Real Estate Compensation</span>
          <span>/</span>
          <span className="text-text-muted select-none">1099 vs W2 Real Estate Agent</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance animate-fade-in">
            1099 vs W2 for Real Estate Agents: Why Almost All Agents Are 1099 (And the Tax Implications)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Home size={14} className="text-blue shrink-0" />
               <span>REAL ESTATE ECONOMICS & TAXATION BLUEPRINTS</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA & REAL ESTATE WEALTH ADVISOR</span>
            </div>
            <div>
              <span>LAST UPDATED: </span>
              <span className="text-text-primary font-bold">JUNE 2026</span>
            </div>
            <div>
              <span>WORD COUNT: </span>
              <span className="text-blue font-bold">1,340 WORDS</span>
            </div>
          </div>
        </div>

        {/* INTRODUCTION */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Walk into any residential real estate brokerage in the United States and you will encounter a room full of business owners, not employees. Despite working under a prominent national brand and taking direction from a managing broker, nearly 90% of active real estate agents are classified as independent contractors. 
          </p>

          <p>
            This 1099 default is not an accident of history. It is a highly structured, legally protected classification model supported by the Internal Revenue Code and heavily defended by the National Association of Realtors (NAR). For a newly licensed agent or an experienced top producer assessing a salaried corporate brokerage model, understanding the tax mechanics of the <span className="text-text-primary font-bold">1099 vs W2 real estate agent</span> debate is critical.
          </p>

          <p>
            When you enter the real estate industry, you must choose your business structure. Most choose the raw freedom of commission-based 1099 positions. However, a growing number of commercial brokerages, digital platforms, and showing assistant networks are introducing salaried, W2 hybrid options.
          </p>

          <p>
            Understanding this layout requires looking beyond gross commission splits. You must examine the legal mandates of the IRC, analyze agent-specific deductions (MLS dues, advertising campaigns, and vehicle mileage), compare broker splits, and review the S-Corporation tax shelters available to high-volume agents. Let’s explore the exact tax and legal frameworks governing real estate compensation.
          </p>
        </div>

        {/* SECTION 1 - STATE, IRS & NAR STATUTORY AGENT COMPLIANCE */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Legal Statutory Framework: Why Real Estate Agents Are 1099 by Default
          </h2>
          <p>
            In most industries, the IRS uses a strict "Common Law" control test to determine employee status. Under that test, if a business controls when, where, and how you work, you are an employee. By those standards, many real estate agents—who must attend office meetings, use brokerage-approved documents, and work under a designated broker's license—would be classified as W2 employees.
          </p>

          <p>
            To prevent massive disruption to the residential housing market, the National Association of Realtors (NAR) fought for a specific legal carve-out. This carve-out is codified in <strong className="text-text-primary">Internal Revenue Code Section 3508</strong>. 
          </p>

          <p>
            Under IRC Section 3508, real estate agents are classified as **"Statutory Non-Employees"** for federal tax purposes if they meet three strict criteria:
          </p>

          <div className="space-y-4">
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <span className="text-xs font-mono font-bold text-blue uppercase tracking-widest block">Statutory Non-Employee Requirements (IRC § 3508):</span>
              <ul className="list-decimal list-inside text-sm text-text-muted space-y-2 pl-2">
                <li><strong className="text-text-primary">Active License:</strong> The individual must be a licensed real estate professional.</li>
                <li><strong className="text-text-primary">No Hourly Pay:</strong> Substantially all compensation for services must be directly related to sales volume or other physical output, rather than the number of hours worked (meaning, purely commission-based).</li>
                <li><strong className="text-text-primary">Written Agreement:</strong> The services must be performed under a written contract stating that the individual will not be treated as an employee for federal tax purposes.</li>
              </ul>
            </div>
          </div>

          <p>
            If these three requirements are met, the managing broker is legally absolved from withholding federal income or FICA payroll taxes. This status places the entire tax burden—as well as the operational business overhead—directly on the agent's shoulders.
          </p>
        </div>

        {/* SECTION 2 - COMMISSIONS VS SALARY */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Commissions vs. Salary: The Brokerage Business Split
          </h2>
          <p>
            The fundamental economic divide between a 1099 and a W2 real estate agent lies in how cash is earned and distributed:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
            <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-3">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                 <DollarSign size={18} className="text-green shrink-0" /> Commission Splits (1099)
              </h3>
              <p className="text-xs text-text-muted">
                An independent agent earns a gross commission on closed sales transactions. This commission is split with their supervising brokerage (such as a 70/30, 80/20, or 100% split with a monthly desk fee). If you don't close transactions, you don't earn income. However, high-volume years can generate unlimited income.
              </p>
            </div>

            <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-3">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                 <Clipboard size={18} className="text-blue shrink-0" /> Salaried Roles & Hybrids (W2)
              </h3>
              <p className="text-xs text-text-muted">
                Some modern brokerages employ "showing assistants," "leasing coordinators," or corporate relocation specialists as salaried, hourly W2 staff. You receive regular, predictable paychecks, often paired with dental/medical coverage and a small commission bonus per closing. While this offers stability, your earning potential is strictly capped.
              </p>
            </div>
          </div>
        </div>

        {/* SECTION 3 - THE REAL ESTATE AGENT WRITE-OFF CHECKLIST */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Agent Deductions Engine: Funding Your Sales Pipeline
          </h2>
          <p>
            Operating as a 1099 business operator means you pay taxes only on your **net business profit** on Schedule C, not your gross commissions. Writing off legitimate business expenses is your primary defense against a high tax bill.
          </p>
          
          <p>
            W2 real estate employees are strictly barred from writing off home offices, vehicle miles, or marketing costs. 1099 agents, however, can deduct a wide range of specialized business operational expenses:
          </p>

          <div className="space-y-4">
             <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-xs font-mono">
                <div className="p-5 border border-border-color/15 rounded-xl bg-bg-card/20 space-y-2">
                   <span className="text-blue font-black uppercase block">Marketing & Staging</span>
                   <p className="text-[11px] text-text-muted leading-relaxed font-sans">
                      Deduct physical signs, professional listing photography, drone videos, digital ads (Facebook, Zillow), and professional home staging expenses ($1,500 - $4,500/listing).
                   </p>
                </div>
                <div className="p-5 border border-border-color/15 rounded-xl bg-bg-card/20 space-y-2">
                   <span className="text-blue font-black uppercase block">State & Association Fees</span>
                   <p className="text-[11px] text-text-muted leading-relaxed font-sans">
                      Deduct local MLS subscription dues, state licensing renewal fees, Supra eKEY access fees, NAR dues, and continuing education programs.
                   </p>
                </div>
                <div className="p-5 border border-border-color/15 rounded-xl bg-bg-card/20 space-y-2">
                   <span className="text-blue font-black uppercase block">Vehicle Write-offs & Travel</span>
                   <p className="text-[11px] text-text-muted leading-relaxed font-sans">
                      For agents driving thousands of miles annually to show listings, choosing between the Standard Mileage Rate (67 cents/mile in 2024; similar for 2025/2026) and actual expenses can save thousands of dollars on taxes.
                   </p>
                </div>
             </div>
          </div>
        </div>

        {/* SECTION 4 - CASE STUDY: TOP PRODUCER VS SALARIED AGENT */}
        <div className="space-y-6 pt-4 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Real Estate Case Study: Top Producer (1099) vs. Salaried Agent (W2)
          </h2>
          <p>
            Let's look at a realistic scenario. Consider two agents, Sophia and Michael, working in a metropolitan housing market:
          </p>
          <ul className="list-disc list-inside pl-4 text-sm space-y-1">
             <li><strong className="text-text-primary">Sophia (1099 Independent Agent):</strong> Sophia works on an 80/20 brokerage split. She closes $6 million in sales volume, generating **$150,000** in gross commission income. She spends **$20,000** on vehicle mileage, professional photography, MLS dues, staging, and self-pay marketing.</li>
             <li><strong className="text-text-primary">Michael (W2 Salaried Service Agent):</strong> Michael works for a digital home-buying platform. He receives a steady **$85,000 W2 salary**, plus small transaction bonuses totaling **$10,000** (giving him a gross income of **$95,000**). The brokerage fully covers his licensing, gas, and marketing costs, and provides group medical benefits.</li>
          </ul>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Brokerage Reconciliation: 1099 Top Producer vs. W2 Fixed Salary
            </h4>

            {/* RECONCILIATION TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Reconciliation Item</th>
                        <th className="p-4 text-right">Michael (W2 Salaried)</th>
                        <th className="p-4 text-right">Sophia (1099 Independent)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Gross Wages / Commision Split</td>
                        <td className="p-4 text-right font-bold">$95,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$150,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans font-sans">Business Travel & MLS Deductions (Schedule C)</td>
                        <td className="p-4 text-right">-$0 <span className="text-[10px] block opacity-70">(Fully covered by brokerage)</span></td>
                        <td className="p-4 text-right text-red font-bold">-$20,000</td>
                     </tr>
                     <tr className="bg-bg-input/20 font-bold">
                        <td className="p-4 text-text-primary font-sans">Net Pre-Tax Profit Base</td>
                        <td className="p-4 text-right">$95,000</td>
                        <td className="p-4 text-right text-text-primary">$130,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Federal Income Tax (Estimated)</td>
                        <td className="p-4 text-right">-$12,240</td>
                        <td className="p-4 text-right text-red">-$13,440 <span className="text-[10px] block opacity-70">(Reflects 20% Section 199A QBI Shelter)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Federal FICA / Self-Employment Tax (SECA)</td>
                        <td className="p-4 text-right">-$7,268 <span className="text-[10px] block opacity-70">(Half-covered by employer)</span></td>
                        <td className="p-4 text-right text-red">-$18,368 <span className="text-[10px] block opacity-70 font-bold">(Paid fully at self-employed rate)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">Subsidized Benefits & Healthcare Values</td>
                        <td className="p-4 text-right text-green">+$6,000 <span className="text-[10px] block opacity-70 font-bold">(Subsidized health + PTO value)</span></td>
                        <td className="p-4 text-right">-$6,000 <span className="text-[10px] block opacity-70">(Out-of-pocket private policy)</span></td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Net Capital Adjusted Yield</td>
                        <td className="p-4 text-right text-green font-black text-base">$81,492</td>
                        <td className="p-4 text-right text-blue font-black text-base">$92,192</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted">
              *The final numbers: Even after factoring in $20,000 in heavy business expenses, Sophia's high commission income delivers a **$10,700 advantage** in adjusted net take-home take.
            </p>
          </div>
        </div>

        {/* SECTION 5 - CORPORATE WORKFLOW: THE S-CORP INITIATION FOR TOP PRODUCERS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The S-Corporation Playbook: Shielding High Real Estate Income
          </h2>
          <p>
            When a 1099 real estate agent's net income consistently exceeds **$80,000 to $100,000**, the flat 15.3% self-employment tax becomes a significant burden. This is when top-producing agents should look into establishing an S-Corporation.
          </p>

          <p>
            By establishing a single-member LLC or Professional Corporation (depending on state-specific real estate commission laws) and electing S-Corp status with the IRS, you can restructure how you receive commission payments:
          </p>

          <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-4">
             <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-text-primary">How the S-Corp Saves Taxes:</h4>
             <ul className="list-disc list-inside text-xs text-text-muted space-y-2 font-sans pl-2">
                <li><strong className="text-text-primary">Split Your Earnings:</strong> You pay yourself a competitive, market-standard W2 salary from your entity (e.g., $50,000). You pay the remaining business profits (e.g., $40,000) as equity distributions.</li>
                <li><strong className="text-text-primary font-mono">FICA Tax Exemption:</strong> Unlike your W2 salary, S-Corp distributions are **exempt from the 15.3% self-employment FICA tax**. In this scenario, you avoid self-employment tax on that $40,000, saving a direct **$6,120** in taxes, minus corporate administrative costs.</li>
                <li><strong className="text-text-primary font-mono">Verify Brokerage Policies:</strong> Before choosing an S-Corp, check your state licensing board rules and your brokerage's policies. Some states allow commissions to be paid to corporations, while others require commissions to go directly to licensed individuals.</li>
             </ul>
          </div>
        </div>

        {/* CALL TO ACTION LINK TO SYSTEM CALCULATOR */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Calculate Your Real Estate Split Tax Liability</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Stop guessing your bottom line. Enter your gross closed sales volumes, broker splits, MLS dues, and vehicle miles into our tax calculator to compare 1099 commission structures with hybrid W2 salaries.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO SYSTEM CALCULATOR ENGINE]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Analyze Agent Splits Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* COMMERICAL AGENT REAL ESTATE FAQ */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Real Estate Tax & Classification FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Why are almost all residential real estate agents classified as 1099 independent contractors?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Residential real estate agents are typically 1099 independent contractors due to IRC Section 3508. This section allows agents to be treated as "Statutory Non-Employees" if they are licensed, compensated strictly on sales volume rather than hours worked, and operate under a written contract stating they are independent for federal tax purposes.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can a salaried corporate W2 showing assistant write off vehicle expenses?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. Current federal tax codes fully bar W2 employees from deducting unreimbursed employee expenses, including vehicle mileage, home office costs, and licensing fees. If you are a W2 employee, you must negotiate directly with your employing brokerage to receive direct expense reimbursements.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                How does an S-Corp help top-producing real estate agents save on taxes?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                An S-Corp allows top-producing agents to split their business income into a market-competitive W2 salary and corporate distributions. Since S-Corp distributions are exempt from the 15.3% self-employment FICA tax, this structure can generate massive tax savings for high-earning agents. This strategy requires establishing an LLC and verifying that your state's licensing board permit commissions to be paid to a corporate entity.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               State statutory announcement: This brokerage tax analysis is created for educational references only. Local state commission rules, NAR standards, and IRS guidelines change consistently. Always employ a certified commercial CPA and a real estate defense attorney before setting up corporate entities or signing contracts.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default RealEstateComparisonPage;
