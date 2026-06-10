import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, DollarSign, Table, Truck, FileText, Settings } from 'lucide-react';

interface TruckDriverComparisonPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse' | 'realestate' | 'truck') => void;
}

const TruckDriverComparisonPage: React.FC<TruckDriverComparisonPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="truck-post"
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
            className="hover:text-blue transition-colors animate-pulse"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-blue">Transportation Logistics Taxation</span>
          <span>/</span>
          <span className="text-text-muted select-none">1099 vs W2 Truck Driver</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            Owner-Operator vs Company Driver: The Full 1099 vs W2 Tax Breakdown for Truck Drivers
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue animate-pulse">
               <Truck size={14} className="text-blue shrink-0" />
               <span>TRANSPORTATION SECTOR REVENUE & ASSET DEPRECIATION STATUS</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA & LOGISTICS ASSET STRATEGIST</span>
            </div>
            <div>
              <span>LAST UPDATED: </span>
              <span className="text-text-primary font-bold">JUNE 2026</span>
            </div>
            <div>
              <span>WORD COUNT: </span>
              <span className="text-blue font-bold">1,390 WORDS</span>
            </div>
          </div>
        </div>

        {/* INTRODUCTORY ANALYSIS */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            The American freight corridor is a high-volume economic pipeline. For CDL holders navigating this landscape, the structural choice between climbing into a company rig as a W2 employee or operating a truck as an independent 1099 owner-operator is the most critical financial checkpoint of their career.
          </p>

          <p>
            This operational choice is rarely presented cleanly. Recruiting boards routinely display top-line contract rates of <strong className="text-text-primary">$140,000 to $180,000</strong> for independent owner-operators, making the classic W2 company pay range of <strong className="text-text-primary">$75,000 to $95,000</strong> look subpar. 
          </p>

          <p>
            However, comparing independent contract pricing with corporate salaries without accounting for operating costs is a critical error. W2 company drivers are insulated from capital liabilities. Their employer provides the rig, covers diesel fuel, pays for high-liability commercial motor carrier insurance, and funds half of their payroll taxes.
          </p>

          <p>
            When you cross over to a 1099 structure, you cease to be a "driver." You become a commercial logistics company. You take on the full capital costs of freight haulage: fuel surcharges, physical damage premiums, multi-state road taxes, dynamic maintenance reserves, and commercial tractor depreciation schedules. Below, we break down the exact mathematics of the <span className="text-text-primary font-bold">1099 vs W2 truck driver</span> decision. We will look at federal rules, review specialized transportation deductions, and examine a detailed, side-by-side transaction ledgers.
          </p>
        </div>

        {/* FMCSA AND OPERATING COMPLIANCE */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Regulatory Shield: FMCSA and the Lease-Purchase Trap
          </h2>
          <p>
            The Federal Motor Carrier Safety Administration (FMCSA) and the IRS view truck driver classifications through two entirely different lenses. The FMCSA maintains strict safety compliance, drug testing consortia, and Hours of Service (HOS) rules that apply regardless of tax withholding codes.
          </p>

          <p>
            However, many logistics companies utilize lease-purchase contracts to bypass traditional W2 employment benefits. If a carrier controls your freight routing, restricts you from hauling for other brokers, dictates your logbook habits, and leases you their own equipment, you may be misclassified as a 1099 operator under the law.
          </p>

          <div className="p-6 bg-red/5 border border-red/20 rounded-2xl space-y-4">
            <h3 className="text-lg font-black text-white uppercase tracking-tight flex items-center gap-2">
              <AlertCircle size={20} className="text-red shrink-0" /> Compliance Warning: The Lease-Purchase Contract Trap
            </h3>
            <p className="text-sm text-text-muted">
              Lease-purchase plans are highly controversial. Carriers lease a truck to a driver with a weekly payment deducted directly from their freight settlements. While marketed as an easy path to becoming an owner-operator, the rates are often inflated.
            </p>
            <p className="text-sm text-text-muted font-sans">
              Drivers under these agreements frequently face high weekly payments, restrictions on operating elsewhere, and limited control. Many end up with weekly negative settlements after deducting fuel, cargo insurance, and maintenance reserves. If you choose the 1099 path, it is far safer to secure your own financing and authority independently of your primary carrier.
            </p>
          </div>
        </div>

        {/* OWNER-OPERATOR MASSIVE DEDUCTIONS: HOW ASSET DEPRECIATION WORKS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Write-off Engine: Capital Deductions for Owner-Operators
          </h2>
          <p>
            As an independent 1099 contract driver, you only pay taxes on your **net business profit** on Schedule C, not your gross revenues. Minimizing your tax bill requires claiming all eligible capital deductions:
          </p>

          <div className="space-y-4">
            <h3 className="text-lg font-bold text-text-primary">Key Operations Write-offs</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
              <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">1. Diesel Fuel & Surcharges</span>
                <p className="text-text-muted text-xs">
                  Diesel is the single largest cost of dry-van or flatbed operations. It routinely accounts for $35,000 to $55,000 in yearly operating costs. On a 1099 structure, every gallon is a tax deduction that directly offsets your gross settlements.
                </p>
              </div>
              <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">2. Section 179 & Bonus Depreciation</span>
                <p className="text-text-muted text-xs">
                  Purchasing a semi-truck allows for massive depreciation claims. Under Section 179, you can write off the entire purchase price of a new or used tractor (up to $1,250,000) in the first year of operation, shielding a huge portion of your income from taxation.
                </p>
              </div>
              <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">3. Heavy Vehicle Use Tax & IFTA</span>
                <p className="text-text-muted text-xs">
                  Your International Fuel Tax Agreement (IFTA) filings, state highway permits, and yearly heavy vehicle use taxes (Federal Form 2290) are fully deductible operating costs. W2 drivers are insulated from these administrative and financial overheads.
                </p>
              </div>
              <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">4. Maintenance, Tires, and Scale Fees</span>
                <p className="text-text-muted text-xs">
                  Semi-truck maintenance is exceptionally expensive. A single set of drive tires can cost $4,000 to $6,500, and major engine work can easily top $15,000. All of these operating overheads, as well as electronic logbook subscriptions, scale fees, and physical damage insurance premiums, are deductible business costs.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* THE SPECIAL TRANSPORTATION MEAL PER DIEM RULES */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Transportation Per Diem: Special IRS Lodging Rules
          </h2>
          <p>
            Truck drivers enjoy a unique advantage in the IRS tax code: the **special standard meal allowance**. This allowance is designed for workers in the transportation industry who are subject to Hours of Service rules away from their tax home.
          </p>

          <p>
            For tax purposes, the IRS standard meal and incidentals per-diem rate for the transportation industry is set at <strong className="text-text-primary font-mono">$69 per day</strong> for travel within the continental United States.
          </p>

          <p>
            The primary advantage of this transportation per-diem comes down to its high deductibility rate. Under **Internal Revenue Code Section 274(n)(3)**, 1099 owner-operators can deduct exactly **80% of their actual per-diem allowance** without showing receipts. 
          </p>
          <p>
            For a driver spending 240 days on the road annually, this yields a tax deduction of:
          </p>
          <div className="p-4 bg-bg-card/40 border border-border-color/10 rounded-xl text-center font-mono">
            <span className="text-text-primary font-bold">240 Days × $69/Day = $16,560 Gross Per Diem Allowance</span>
            <br />
            <span className="text-green text-sm font-black uppercase block mt-1">
              $16,560 × 80% = $13,248 Net Schedule C Tax Deduction (No Receipts Required)
            </span>
          </div>
          <p>
            For a company W2 driver, per-diem is handled differently. Following the Tax Cuts and Jobs Act, W2 drivers can no longer claim unreimbursed employee deductions on their personal tax returns. However, many quality carriers pay a portion of the mileage or hourly rate as tax-free per-diem. If a carrier pays you 10 cents per mile as tax-free per-diem up to the daily limits, that portion of your W2 income is completely exempt from federal income, state income, and FICA taxes.
          </p>
        </div>

        {/* THE GENERAL COMP SECTION: $85K W2 VS $140K Gross 1099/C2C */}
        <div className="space-y-6 pt-4 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Carrier Ledger: $85,000 W2 vs. $140,000 1099 Owner-Operator
          </h2>
          <p>
            Let's evaluate a realistic scenario comparing two truck drivers:
          </p>
          <ul className="list-disc list-inside pl-4 text-sm space-y-1">
             <li><strong className="text-text-primary">Greg (W2 Company Driver):</strong> Greg drives an agency truck for a dry-van fleet. He receives a steady base pay of <strong className="text-text-primary font-mono">$85,000</strong>. His carrier fully covers diesel, highway tolls, scaling fees, and provides health coverage alongside a 401(k) company match.</li>
             <li><strong className="text-text-primary">Tyler (1099 Owner-Operator):</strong> Tyler leases a tractor independently and hauls freight under a multi-state dry-van contract. His gross settlements total <strong className="text-text-primary font-mono">$140,000</strong>. Tyler spends **$55,000** annually on diesel fuel, commercial tractor lease payments, maintenance reserves, physical damage logistics insurance, and scale permits. He claims **$13,248** in special transportation per-diem deductions.</li>
          </ul>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Asset Ledger Audit: Company Driver vs. Truck Owner-Operator
            </h4>

            {/* LEDGER COMPARISON TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Cargo Operations & Tax Splits</th>
                        <th className="p-4 text-right">W2 Company Driver ($85k Base)</th>
                        <th className="p-4 text-right">1099 Owner-Operator ($140k Gross)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Gross Settlement Revenue / Base Pay</td>
                        <td className="p-4 text-right font-bold">$85,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$140,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans-sans font-sans">Operating Expenses (Diesel, Lease, Permits)</td>
                        <td className="p-4 text-right">-$0 <span className="text-[10px] block opacity-70">(Covered by company)</span></td>
                        <td className="p-4 text-right text-red font-bold">-$55,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Transportation Per-Diem Deductions (240 Days)</td>
                        <td className="p-4 text-right">-$0</td>
                        <td className="p-4 text-right text-green font-bold">-$13,248 <span className="text-[10px] block opacity-70 font-mono">(Receipt-free schedule deduction)</span></td>
                     </tr>
                     <tr className="bg-bg-input/20 font-bold">
                        <td className="p-4 text-text-primary font-sans">Net Pre-Tax Profit Base</td>
                        <td className="p-4 text-right">$85,000</td>
                        <td className="p-4 text-right text-text-primary">$71,752</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Federal Income Tax (Estimated)</td>
                        <td className="p-4 text-right">-$9,250</td>
                        <td className="p-4 text-right text-red">-$6,180 <span className="text-[10px] block opacity-70">(Reflects 20% Section 199A QBI Shelter)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Federal FICA / Self-Employment Tax (SECA)</td>
                        <td className="p-4 text-right">-$6,502 <span className="text-[10px] block opacity-70">(Half covered by employer)</span></td>
                        <td className="p-4 text-right text-red">-$11,280 <span className="text-[10px] block opacity-70 font-bold">(Full 15.3% SE burden on net income)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans font-sans">Subsidized Health Insurance & Benefits Value</td>
                        <td className="p-4 text-right text-green">+$4,200 <span className="text-[10px] block opacity-70">(Subsidized medical contribution)</span></td>
                        <td className="p-4 text-right">-$4,200 <span className="text-[10px] block opacity-70">(Purchased out-of-pocket as individual)</span></td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Net Cash-Adjusted Profit</td>
                        <td className="p-4 text-right text-green font-black text-base">$73,448</td>
                        <td className="p-4 text-right text-blue font-black text-base">$50,092</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted">
              *The real financial truth: Despite Tyler generating a much higher top-line revenue ($140,000), heavy operating expenses and self-employment taxes leave him with a **$23,356 disadvantage** compared to Greg's stable $85,000 W2 salary.
            </p>
          </div>

          <p>
            This comparison highlights how high operating expenses can impact an owner-operator's earnings. For Tyler's 1099 contract to deliver true income parity with a stable $85,000 company driver position, his minimum gross contract target would need to be <strong className="text-text-primary font-mono">$172,000</strong> annually.
          </p>
        </div>

        {/* BRIGHT CTA COMPONENT */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Determine Your True Hourly Logistics Fleet Baseline</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Enter your gross settlements, lease costs, diesel payments, state highway permit fees, and road per-diem counts into our logistics tax engine. Establish your commercial settlement baseline now.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO SYSTEM COMPARISON ENGINE]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Analyze Your Trucking Offer <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* OCCUPATIONAL FAQ SECTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Independent Trucker Tax & Compliance FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can a W2 truck driver still deduct per-diem on their tax returns?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. Following the Tax Cuts and Jobs Act, W2 company drivers are fully barred from claiming unreimbursed employee expenses (including road per-diem or safety gloves) on their personal federal tax returns. Only self-employed 1099 owner-operators can deduct fuel, cell phone bills, and the daily $69 transportation per-diem on Schedule C. However, many quality carriers pay a portion of your wages as tax-free per-diem, which is legal and highly beneficial.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Is an S-Corp election beneficial for high-earning 1099 owner-operators?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes. If your net profit peaks above $80,000 after accounting for fuel, truck payments, and maintenance reserves, setting up an S-Corp can save you significant money in taxes. Restructuring your business as an S-Corp allows you to split your earnings into a reasonable W2 salary (which is subject to FICA taxes) and company distributions (which are exempt from the 15.3% self-employment FICA tax).
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                What safety regulations apply to 1099 owner-operators under FMCSA guidance?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Operating as an independent owner-operator with your own DOT number means you must personally manage full DOT regulatory compliance. This includes registering with the FMCSA drug & alcohol clearinghouse, maintaining active electronic logging device (ELD) records, holding cargo and commercial liability coverages, and submitting quarterly roadside safety audit reports.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Transportation sector disclosure: This logistics tax overview is created for educational references only. FMCSA guidelines, lease-purchase contract laws, and IRS per-diem rates change consistently. Always employ a certified commercial transportation CPA before purchasing equipment or signing freight leasing operations.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default TruckDriverComparisonPage;
