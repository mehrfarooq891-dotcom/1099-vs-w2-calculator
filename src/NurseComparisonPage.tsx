import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, Compass, DollarSign, Table, Heart, FileText, Clipboard } from 'lucide-react';

interface NurseComparisonPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse') => void;
}

const NurseComparisonPage: React.FC<NurseComparisonPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="nurse-post"
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
          <span className="text-blue">Healthcare Compensations</span>
          <span>/</span>
          <span className="text-text-muted select-none">Nurse 1099 vs W2 Guide</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            1099 vs W2 for Nurses and Travel Nurses in 2025: The Complete Tax Guide
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Heart size={14} className="text-red shrink-0" />
               <span>CLINICAL TAX RECONCILIATION & ADMINISTRATIVE GUIDANCE</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA & MEDICAL EXPATRIATE ADVISOR</span>
            </div>
            <div>
              <span>LAST UPDATED: </span>
              <span className="text-text-primary font-bold">JUNE 2026</span>
            </div>
            <div>
              <span>WORD COUNT: </span>
              <span className="text-blue font-bold">1,350 WORDS</span>
            </div>
          </div>
        </div>

        {/* TOP COMPREHENSIVE TEXT SECTION */}
        <div className="space-y-6 animate-fade-in">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Clinical professionals in 2025 are facing a transformed employment marketplace. From staff nurses moving to registry per-diem work to nurse practitioners evaluating clinic partnerships, the choice between traditional W2 classification and 1099 independent status has huge financial stakes.
          </p>

          <p>
            Operating as an independent clinical professional changes your financial relationship with healthcare facilities. Under a W2 staff structure, a hospital operates as your legal employer. They assume liability, fund half of your payroll taxes, provide workers' compensation coverage, and manage payroll withholdings. 
          </p>

          <p>
            Transitioning to a 1099 independent structure—frequently facilitated by digital nursing registries, on-demand staffing platforms, or private clinical services contracts—means you operate as a distinct business entity. While this model grants you control over when and where you work, it strips away standard corporate protections and exposes you to the double-edged sword of self-employment taxation.
          </p>

          <p>
            When evaluating these choices, medical professionals often look only at the hourly rate. An $85 per hour rate looks vastly superior to a steady $110,000 W2 base salary. However, failing to translate tax burdens, professional overhead, private malpractice insurance premiums, continuing education expenses, licensing fees, and the lucrative structure of W2 travel stipends into raw cash-equivalents can lead to severe financial setbacks. This guide breaks down the clinical tax structures and provides the exact calculations you need to compare W2 and 1099 offers.
          </p>
        </div>

        {/* SECTION 1 - 1099 NURSE VS AGENCY W2 NURSE */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            1099 Independent Contractor vs. Agency W2 Nurse
          </h2>
          <p>
            It is critical to distinguish between W2 agency staffing and true 1099 clinical operations:
          </p>

          <div className="space-y-4">
            
            {/* W2 Agency Staffing */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-blue">
                 <ShieldCheck size={20} className="text-blue shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">W2 Agency Staffing</h4>
              </div>
              <p className="text-sm text-text-muted font-sans">
                Many travel nurses and per-diem "contractors" actually work as **W2 employees of a medical staffing agency**. The agency manages placement, handles federal and state withholdings, issues standard W2s, and offers base group health plans and 401(k) retirement schemes. You are covered under the agency's workers' compensation and professional general liability blanket policies.
              </p>
            </div>

            {/* 1099 Independent */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} className="text-red shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">True 1099 Independent Nursing</h4>
              </div>
              <p className="text-sm text-text-muted font-sans">
                As a true 1099 professional, you negotiate your bill rate directly with facilities, schools, clinics, or private registries. You receive a gross, un-withheld payment. You are solely responsible for paying quarterly federal and state estimated income taxes, the full **15.3% self-employment FICA tax (SECA)**, and providing your own complex commercial malpractice and workers' compensation coverage.
              </p>
            </div>

          </div>
        </div>

        {/* SECTION 2 - THE TRAVEL NURSING STIPEND EXTRAVAGANZA */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Travel Nursing Stipend Structure: The Power of Tax-Free Cash
          </h2>
          <p>
            For travel nurses, the comparison is shaped by a unique tax mechanism: **tax-free stipends**. This structure represents one of the largest lawful tax shelters accessible to individual workers in the United States, but it comes with strict IRS regulatory requirements.
          </p>

          <p>
            W2 travel nursing agencies split compensation into a taxable hourly base wage (often set deliberately low, such as $25 to $35 to manage payroll tax liabilities) and **tax-free stipends** for lodging, meals, and incidentals. These stipends correspond to standard GSA (General Services Administration) business travel thresholds.
          </p>

          <p>
            For example, a travel nurse might receive a base taxable wage of $1,200 per week, alongside a tax-free stipend of $2,300 per week to cover temporary housing and meals in a high-cost medical market. Since the $2,300 is completely exempt from federal income, state income, and FICA payroll taxes, **the take-home cash value of this W2 stipend-heavy package is massive**. A W2 travel nurse receiving $3,500 total weekly compensation can easily lock in higher net take-home take than a 1099 contractor billing a flat, fully taxable $100 per hour ($3,600 gross weekly).
          </p>

          <div className="p-6 bg-red/5 border border-red/20 rounded-2xl space-y-4">
            <h3 className="text-lg font-black text-white uppercase tracking-tight flex items-center gap-2">
              <AlertCircle size={20} className="text-red shrink-0" /> The Legal Requirement: Maintaining a Verified "Tax Home"
            </h3>
            <p className="text-sm text-text-muted">
              To legally receive tax-free stipends under IRS rules, **you must maintain a dual-expense tax home**. A tax home is your principal place of business or permanent residence where you incur ongoing, duplicated maintenance costs (such as a mortgage or market-rate rent) while working temporarily on location.
            </p>
            <p className="text-sm text-text-muted font-sans">
              If you abandon your permanent residence, sleep in your camper van without paying duplicate commercial lodging, or work in a single travel location for more than 12 consecutive months, the IRS considers your placement "permanent." Under auditing rules, all previously non-taxable housing and meal stipends are reclassified as taxable physical compensation. This makes you retroactively liable for thousands in federal income, state income, and FICA taxes, plus heavy penalties.
            </p>
          </div>
        </div>

        {/* SECTION 3 - MALPRACTICE INDEPENDENT LIABILITY & ADMINISTRATIVE BURDEN */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Hidden Gaps: Private Malpractice and Professional Overhead
          </h2>
          <p>
            When operating as an independent 1099 clinic doctor, clinician, or nurse, you face administrative and commercial liabilities that W2 staffers rarely encounter:
          </p>

          <div className="space-y-4">
            {/* Malpractice Details */}
            <div className="p-6 border border-border-color/10 rounded-2xl bg-bg-card/25 space-y-3">
               <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                  <Clipboard size={18} className="text-blue shrink-0" /> Professional Malpractice Insurance Burden
               </h3>
               <p className="text-xs text-text-muted">
                  W2 staff are covered under the facility's broad corporate clinical malpractice insurance. As a 1099 contractor, you must purchase and maintain your own policy. 
               </p>
               <p className="text-xs text-text-muted">
                  For a registered nurse (RN) or specialized surgical assistant, an individual professional policy runs approximately **$300 to $600** annually. However, for advanced practice nurses, such as a **Nurse Practitioner (NP) or Certified Registered Nurse Anesthetist (CRNA)**, malpractice premiums skyrocket. An NP practicing in a high-risk setting (such as emergency medicine or aesthetics) can easily pay **$2,500 to $6,500** annually for a standard $1M/$3M occurrence-based liability policy.
               </p>
            </div>

            {/* Credentials, Licensing & Board Fees */}
            <div className="p-6 border border-border-color/10 rounded-2xl bg-bg-card/25 space-y-3">
               <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                  <FileText size={18} className="text-blue shrink-0" /> State Licensing, Certifications, and CEUs
               </h3>
               <p className="text-xs text-text-muted">
                  Maintaining active clinical practice requires paying ongoing state board fees, drug enforcement administration (DEA) authorizations, nurse licensure compact (NLC) upgrades, and mandatory continuing education (CEU) completions. 
               </p>
               <p className="text-xs text-text-muted font-sans">
                  While hospitals routinely pay for staff licensing, certifications (ACLS, BLS, PALS), and educational programs, 1099 medical professionals must pay for this overhead themselves out-of-pocket, using pre-tax business revenue.
               </p>
            </div>
          </div>
        </div>

        {/* SECTION 4 - CASE STUDY METRICS: $110K W2 VS $85/HR 1099 */}
        <div className="space-y-6 pt-4 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Nurse Practitioner Ledger: $110,000 W2 vs. $85/Hour 1099
          </h2>
          <p>
            Let us evaluate a realistic clinical scenario. Sarah is a Family Nurse Practitioner (FNP) in Georgia looking at two competing offers:
          </p>
          <ul className="list-disc list-inside pl-4 text-sm space-y-1">
             <li>A salaried W2 position at a local medical clinic paying <strong className="text-text-primary">$110,000</strong> a year. Benefits include fully covered malpractice, 15 days of paid vacation (PTO), $600/month corporate healthcare plan contributions, and a 4% match on a 403(b) retirement account.</li>
             <li>An independent 1099 contract at a retail wellness clinic paying <strong className="text-text-primary">$85/hour</strong>. Sarah estimates billing exactly **1,840 hours** in a year (this allows for 15 unpaid vacation/sick days and 10 national holidays), generating **$156,400** in gross revenue.</li>
          </ul>
          
          <p>
            Sarah's 1099 business write-offs are estimated at **$6,000** for state board renewals, NLC multi-state licenses, travel, malpractice premium, CEU courses, and clinical clothes—leaving a net profit of **$150,400**.
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Clinical Compensation Ledger: side-by-side transaction audit
            </h4>

            {/* LEDGER COMPARISON TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Clinical Compensation Split</th>
                        <th className="p-4 text-right">W2 Position ($110,000)</th>
                        <th className="p-4 text-right">1099 Contract ($85/hr - $156.4k)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Gross Contractual Cash / Salary</td>
                        <td className="p-4 text-right font-bold">$110,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$156,400</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">Business Travel & License Write-offs</td>
                        <td className="p-4 text-right">-$0</td>
                        <td className="p-4 text-right text-red font-bold">-$6,000</td>
                     </tr>
                     <tr className="bg-bg-input/20 font-bold">
                        <td className="p-4 text-text-primary font-sans">Adjusted Net Pre-Tax Income</td>
                        <td className="p-4 text-right">$110,000</td>
                        <td className="p-4 text-right text-text-primary">$150,400</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">Federal Income Tax (Estimated)</td>
                        <td className="p-4 text-right">-$15,100</td>
                        <td className="p-4 text-right text-red">-$17,450 <span className="text-[10px] block opacity-70">(Reflects 20% Section 199A QBI Shelter)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans">Federal FICA / Self-Employment Tax (SECA)</td>
                        <td className="p-4 text-right">-$8,415 <span className="text-[10px] block opacity-70">(Half covered by hospital)</span></td>
                        <td className="p-4 text-right text-red">-$21,250 <span className="text-[10px] block opacity-70 font-bold">(Paid fully at self-employed rate)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans font-sans">State Income Tax (Assumed 4.5% flat)</td>
                        <td className="p-4 text-right">-$4,950</td>
                        <td className="p-4 text-right text-red">-$5,418 <span className="text-[10px] block opacity-70">(Reflects state-conforming deductions)</span></td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Liquid Take-Home Cash Flow</td>
                        <td className="p-4 text-right text-green font-black text-base">$81,535</td>
                        <td className="p-4 text-right text-blue font-black text-base">$106,282</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted">
              *The raw cash flow calculation shows Sarah taking home **$24,747** more net cash on the 1099 contract.
            </p>
          </div>

          <p>
            However, we must evaluate the hidden benefits gaps that Sarah must cover as an independent operator out-of-pocket:
          </p>

          <div className="p-6 bg-bg-card/30 border border-dashed border-border-color/30 rounded-2xl">
             <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-text-primary mb-3">Sarah's adjusted compensation comparison:</h4>
             <ul className="space-y-2 text-sm">
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Initial 1099 Cash Advantage:</span>
                   <span className="text-green font-mono font-bold">+$24,747</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Private Silver Health Plan (Replaces clinic-subsidized policy):</span>
                   <span className="text-red font-mono">- $7,200</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Forfeited 4% clinic 403(b) retirement match ($110k salary):</span>
                   <span className="text-red">- $4,400</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Estimated private clinical Malpractice policy premium ($1M/$3M occurrence):</span>
                   <span className="text-red">- $2,500</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Unpaid vacation overhead (15 Days equivalent value):</span>
                   <span className="text-red">- $6,346</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Out-of-pocket CEUs, DEA registration fees, licensing boards:</span>
                   <span className="text-red">- $2,300</span>
                </li>
                <li className="flex justify-between pt-1 font-black text-white bg-green/10 px-2 py-1 rounded">
                   <span>Sarah's True Adjusted Bottom Line Profit:</span>
                   <span className="text-green font-mono">+$2,001 (1099 Contract Wins by $2k)</span>
                </li>
             </ul>
          </div>

          <p>
            After adjusting for private health plans, 403(b) matching, paid time off, and clinical malpractice, Sarah's $85/hour 1099 contract maintains a small **$2,001 yearly advantage**. 
          </p>
          <p>
            This small advantage highlights that Sarah is operating on a very thin line. Any unexpected illness, a gap in placement between contracts, or scheduling cuts at the clinic will turn the 1099 choice into a net loss. This confirms that to justify the risk of operating independently, Sarah should target a minimum billing rate of **$95/hour**.
          </p>
        </div>

        {/* BRIGHT CTA COMPONENT */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Calculate Your True Clinical Hourly Profit Floor</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Enter your direct W2 healthcare offers, regional stipends, multi-state license expenses, and malpractice classes into our specialized nurse tax comparative framework. Set your negotiation baseline.
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
              Analyze Nursing Offers <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* MEDICAL REGISTER EXPATRIATE FAQ SECTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Clinical Self-Employment FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can a travel nurse write off travel expenses if they run as a 1099 contractor?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Only if they maintain a verified "tax home" and meet all IRS statutory business travel guidelines. If the IRS finds that you do not maintain a permanent residence or duplicate living expenses, your travel write-offs will be denied. Additionally, unlike W2 travel stipends, 1099 independent contractors cannot be paid "tax-free stipends" directly. Instead, you must report all contract earnings as taxable revenue and deduct actual, receipt-documented travel expenses on Schedule C.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Who covers worker's compensation and professional liability for a 1099 independent nurse?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                You do. W2 nurses are automatically covered under their employing hospital's or staffing agency's legal liability insurance and workers' compensation policies. As a 1099 contractor, you must purchase and maintain your own professional malpractice coverage and obtain an individual workers' compensation policy if a facility requires it.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                What is a 'tax home', and why is it critical for travel nurses to maintain one?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Under IRC Section 162, a tax home is your main place of physical business or permanent residence. For travel nurses to lawfully receive tax-free travel and housing stipends, they must maintain a tax home. This requires paying duplicated housing costs (such as mortgage, taxes, or market-standard rent) while working temporarily on regional contracts away from their primary residence.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Clinical disclosure statement: This comparative medical tax framework is designed for educational references only. Healthcare occupational rules, GSA schedules, and regional state licensing conditions fluctuate. Always consult with a licensed, qualified healthcare tax CPA before executing independent contracts or establishing clinical sole proprietorships.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default NurseComparisonPage;
