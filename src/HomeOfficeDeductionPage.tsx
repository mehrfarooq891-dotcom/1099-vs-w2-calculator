import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, DollarSign, Table, Home, Split, Percent, ArrowUpRight } from 'lucide-react';

interface HomeOfficeDeductionPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse' | 'realestate' | 'truck' | 'therapist' | 'consultant' | 'mixed' | 'estimated' | 'homeoffice') => void;
}

const HomeOfficeDeductionPage: React.FC<HomeOfficeDeductionPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="homeoffice-post"
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
          <span className="text-blue">Operating Deduction Vault</span>
          <span>/</span>
          <span className="text-text-muted select-none">1099 Home Office Deduction How to Calculate</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            Home Office Deduction for 1099 Workers in 2025: Simplified vs Regular Method (With Real Examples)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Home size={14} className="text-blue shrink-0" />
               <span>COMPLIANT OPERATION WRITE-OFFS</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA & BUSINESS STRUCTURE EXPERT</span>
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

        {/* EXECUTIVE SUMMARY BOX */}
        <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue font-mono">Deduction Foundations</h3>
          <ul className="text-xs text-text-muted space-y-2 list-none pl-0 font-mono">
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>The Hard Mandate</strong>: Under IRS rules, your working workspace must meet strict "exclusive and regular use" standards to qualify for write-offs.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>The Simplified Method</strong>: Claim $5 per square foot for up to 300 square feet, securing a hassle-free maximum write-off of $1,500.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>The Regular Method</strong>: Calculate your office's square footage percentage to deduct that portion of rent, utilities, internet, repairs, and insurance. This method usually yields significantly higher tax savings.</span>
             </li>
          </ul>
        </div>

        {/* INTRODUCTION */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            For self-employed professionals and independent contractors, the home office represents more than just a place to work. It acts as your primary business location and serves as a powerful tool for reducing your overall tax liability. 
          </p>

          <p>
            When you transition from a structured corporate office to independent 1099 work, managing your operating overhead becomes essential. Unlike W2 employees, who are completely barred from writing off home workspace expenses, independent contractors can claim substantial deductions under IRS guidelines.
          </p>

          <p>
            However, these tax benefits come with strict compliance requirements. The IRS monitors workspace write-offs closely, representing an audit risk for those who do not document their expenses properly. For freelancers, mastering the <strong className="text-text-primary">1099 home office deduction how to calculate</strong> is critical to securing your maximum legal tax savings.
          </p>

          <p>
            This guide breaks down the entire calculation process. We will examine the core IRS "exclusive and regular use" rules, explain the differences between the Simplified and Regular methods, compare renter and homeowner rules, and walk through a detailed side-by-side comparison of a 200 square foot office in a $2,000/month apartment.
          </p>
        </div>

        {/* SECTION 1 - EXCLUSIVE AND REGULAR USE EXPLAINED */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Golden Rule: IRS "Exclusive and Regular Use" Standard
          </h2>
          <p>
            Before calculating your deduction, you must verify that your workspace meets the foundational IRS standards. The tax code requires your home office to satisfy two conditions under Section 280A:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
             <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-blue">
                   <ShieldCheck size={20} className="text-blue shrink-0" />
                   <h4 className="text-base font-black tracking-tight uppercase text-text-primary">1. The Exclusive Use Rule</h4>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                   Your workspace must be used *solely* for carrying out your business operations. If you work from a spare bedroom, that entire space must be dedicated to your clinical practice or business tasks. If your child plays in the room, or if the space hosts guests on weekends, the area immediately fails the exclusive use standard.
                </p>
             </div>

             <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
                <div className="flex items-center gap-2 text-blue">
                   <ShieldCheck size={20} className="text-blue shrink-0" />
                   <h4 className="text-base font-black tracking-tight uppercase text-text-primary">2. The Regular Use Rule</h4>
                </div>
                <p className="text-sm text-text-muted leading-relaxed">
                   You must use the space on a continuous, systematized schedule to conduct your business operations. Occasional or incidental business tasks performed in a corner of your home do not qualify. You must use the office regularly as your principal place of business or to meet with clients and patients.
                </p>
             </div>
          </div>

          <h3 className="text-xl font-bold text-text-primary">What Counts as a Home Office?</h3>
          <p>
             Your office does not have to be an entire separate room. A dedicated alcove, a separate desk in a larger space, or a cordoned corner can qualify—provided that specific area is used exclusively for business operations. You must measure that exact working space to calculate your deduction accurately.
          </p>
        </div>

        {/* SECTION 2 - SIMPLIFIED METHOD DETAILS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Method A: The Simplified Home Office Write-Off
          </h2>
          <p>
             To simplify tax preparation for small businesses, the IRS introduced the Simplified Method. This approach replaces complex calculation worksheets and receipt tracking with a flat rate write-off.
          </p>

          <p>
             Under the Simplified Method, you deduct a flat **$5 per square foot** for the space dedicated to your home office, up to a maximum threshold of **300 square feet**.
          </p>

          <div className="p-6 bg-bg-card/45 border border-dashed border-border-color/30 rounded-2xl font-mono text-sm max-w-2xl mx-auto space-y-2 text-center">
             <span className="text-[10px] text-blue font-bold uppercase tracking-widest block">Simplified Formula Limit:</span>
             <div className="text-xl font-black text-text-primary">
                Square Footage (Max 300) × $5 = Total Deduction
             </div>
             <p className="text-xs text-text-muted">
                If your office is exactly 300 square feet, your deduction is capped at exactly **$1,500**.
             </p>
          </div>

          <p>
             While the Simplified Method requires no actual expense tracking or record retention, it limits your potential write-off. If you operate in a high-cost real estate market, this approach can leave substantial tax savings on the table.
          </p>
        </div>

        {/* SECTION 3 - REGULAR METHOD DETAILS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Method B: The Regular Method (Actual Expenses)
          </h2>
          <p>
             To maximize your tax benefits, particularly in regions with high rents or utilities, you should utilize the Regular Method. This approach calculates your deduction based on the actual expenses you incur to run your home.
          </p>

          <p>
             To use the Regular Method, you must first calculate your **Office-to-Home Ratio**:
          </p>

          <div className="bg-bg-input/30 p-4 rounded-xl font-mono text-sm text-text-primary text-center max-w-2xl mx-auto space-y-2">
             <div>Office Square Footage ÷ Total Home Square Footage = Office Write-Off %</div>
             <p className="text-xs text-text-muted">
                For example, if your office is **200 square feet** and your complete apartment is **1,000 square feet**, your office percentage is exactly **20%**.
             </p>
          </div>

          <p>
             Under the Regular Method, home office expenses are divided into two categories:
          </p>

          <div className="space-y-4">
             <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">Direct Workspace Expenses</span>
                <p className="text-sm text-text-muted leading-relaxed">
                   These expenses apply solely to your business workspace. Painting your office, purchasing a dedicated desk lamp, or repairing a window in the space are classified as direct expenses. These costs are **100% deductible** on Schedule C.
                </p>
             </div>
             <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">Indirect Household Expenses</span>
                <p className="text-sm text-text-muted leading-relaxed">
                   These expenses cover the operation of your entire household. Rent, home mortgage interest, property taxes, utilities, trash removal, pest control, and household maintenance are categorized as indirect expenses. You deduct your **calculated office percentage** of these total annual costs.
                </p>
             </div>
          </div>
        </div>

        {/* SECTION 4 - RENTER VS HOMEOWNER */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Important Distinctions: Renter vs. Homeowner Rules
          </h2>
          <p>
            Your status as a renter or a homeowner changes how you calculate and report your home office deductions under the Regular Method:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-xs tracking-tight">
                   The Renter Process:
                </h4>
                <p className="text-xs text-text-muted text-justify">
                   If you rent your home or apartment, the Regular Method is simple. You deduct your determined office percentage of your total monthly rent payments, alongside utilities and internet. This deduction requires no capitalization and introduces no tax complications at year-end.
                </p>
             </div>
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-xs tracking-tight">
                   The Homeowner Process:
                </h4>
                <p className="text-xs text-text-muted text-justify">
                   If you own your home, the calculation is more complex. You deduct your office percentage of mortgage interest and property taxes. Crucially, you must also claim your office percentage of your home's **depreciation** over a standard IRS 39-year commercial schedule.
                </p>
                <p className="text-[10px] text-red leading-relaxed italic opacity-85">
                   **Warning:** Claiming depreciation creates a tax liability known as **Depreciation Recapture** when you sell your home, which can expose a portion of your capital gains to taxation.
                </p>
             </div>
          </div>
        </div>

        {/* SECTION 5 - LEDGER CASE STUDY */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Side-by-Side Comparison: 200 Sq Ft Office in a $2,000/Month Apartment
          </h2>
          <p>
             Let’s evaluate a realistic scenario comparing the tax benefits of both methods. Jessica is a freelance translator renting a 1,000 square foot apartment for **$2,000 per month**. 
          </p>
          <p>
             Jessica calculates her household expenses as follows:
          </p>
          <ul className="list-disc list-inside pl-4 text-sm space-y-1">
             <li>Rent: $24,000 annually ($2,000/month)</li>
             <li>Electricity & Utilities: $3,000 annually ($250/month)</li>
             <li>Broadband Internet: $1,200 annually ($100/month)</li>
             <li>Dedicated workspace in the apartment: **200 square feet (20% of the total area)**</li>
          </ul>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Deduction Audit: Simplified vs. Regular Method Comparison
            </h4>

            {/* LEDGER COMPARISON TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm font-mono">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Deduction Component</th>
                        <th className="p-4 text-right">Simplified Method ($)</th>
                        <th className="p-4 text-right">Regular Method (Actual 20%) ($)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Workspace Square Footage</td>
                        <td className="p-4 text-right">200 sq ft</td>
                        <td className="p-4 text-right text-text-primary">200 sq ft <span className="text-[10px] block opacity-70">(20% of total)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Primary Rent Deduction</td>
                        <td className="p-4 text-right">$0 <span className="text-[10px] block opacity-70">(Not tracked)</span></td>
                        <td className="p-4 text-right text-green font-bold">+$4,800 <span className="text-[10px] block opacity-70">($24k annual rent × 20%)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Electricity & Utilities Share</td>
                        <td className="p-4 text-right">$0</td>
                        <td className="p-4 text-right text-green">+$600 <span className="text-[10px] block opacity-70">($3k annual utilities × 20%)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs font-sans">Broadband Internet Write-Off</td>
                        <td className="p-4 text-right">$0</td>
                        <td className="p-4 text-right text-green">+$240 <span className="text-[10px] block opacity-70">($1.2k annual internet × 20%)</span></td>
                     </tr>
                     <tr className="bg-bg-input/20 font-black">
                        <td className="p-4 text-text-primary font-sans">Total Eligible Tax Write-Off</td>
                        <td className="p-4 text-right text-blue font-bold">$1,000 <span className="text-[10px] block opacity-70 font-mono font-normal">($5/sq ft × 200)</span></td>
                        <td className="p-4 text-right text-green font-bold">$5,640 <span className="text-[10px] block opacity-70 font-mono font-normal">(20% of total household costs)</span></td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Direct Tax Savings Benefit</td>
                        <td className="p-4 text-right text-blue font-black text-base font-mono">$330 <span className="text-[10px] block opacity-70 font-sans font-normal font-mono text-xs">(33% combined rate)</span></td>
                        <td className="p-4 text-right text-green font-black text-base font-mono">$1,861 <span className="text-[10px] block opacity-70 font-sans font-normal font-mono text-xs">(33% combined tax shield)</span></td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted font-sans">
              *The final reconciliation: By choosing the Regular Method, Jessica increases her total deduction to **$5,640**, securing an extra **$1,531 in net tax savings** compared to the Simplified Method.
            </p>
          </div>
        </div>

        {/* BRIGHT CTA COMPONENT */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Evaluate Your Home Office Deductions</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Enter your home's total area, your dedicated office square footage, monthly rent, utilities, and internet costs to compare your deductions and maximize your tax savings.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO LIVE COMPARISON DATABASE]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Analyze Your Office Write-Off Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* HOME OFFICE FAQ */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Home Office Write-Off Compliance FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Does claiming the home office deduction increase my audit risk?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Historically, the home office deduction was flagged by the IRS. Today, as remote and independent work has expanded, claiming this deduction is standard practice. If you maintain accurate records, measure your workspace precisely, and ensure your office meets the "exclusive and regular use" standards, you can claim this deduction with confidence.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can I deduct both co-working space fees and a home office?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes, provided they meet separate IRS rules. You can deduct your co-working subscription fees as a standard business operating expense. However, you can still claim the home office deduction if your home workspace serves as your principal place of business and meets the regular and exclusive use requirements.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can I switch between the Simplified and Regular methods each year?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes. You can choose whichever method saves you more money on your tax return each year. If your household utility or rent costs increase, choosing the Regular Method can yield higher tax benefits. If you prefer to simplify your record keeping, you can switch back to the Simplified Method on your next Form 1040 Schedule C.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Regulatory tax disclosure: This home office deduction analysis is provided purely for educational reference. IRS codes, payroll regulations, and state franchise taxation guidelines change consistently. Always seek guidance from a certified financial advisor or tax professional before making changes.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default HomeOfficeDeductionPage;
