import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, DollarSign, Table, HeartPulse, Percent, Activity, FileText } from 'lucide-react';

interface HealthInsuranceDeductionPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse' | 'realestate' | 'truck' | 'therapist' | 'consultant' | 'mixed' | 'estimated' | 'homeoffice' | 'healthins') => void;
}

const HealthInsuranceDeductionPage: React.FC<HealthInsuranceDeductionPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="healthins-post"
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
          <span className="text-text-muted select-none">1099 Health Insurance Deduction Self Employed</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            Self-Employed Health Insurance Deduction: The 1099 Tax Break Worth Thousands (2025 Guide)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <HeartPulse size={14} className="text-blue shrink-0" />
               <span>HEALTH INSURANCE DEDUCTION & ACA SUBSIDIES</span>
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
              <span className="text-blue font-bold">1,425 WORDS</span>
            </div>
          </div>
        </div>

        {/* EXECUTIVE SUMMARY BOX */}
        <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-3 font-sans">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue font-mono">Deduction Foundations</h3>
          <ul className="text-xs text-text-muted space-y-2 list-none pl-0 font-mono">
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>Above-The-Line Standard</strong>: Deduct 100% of qualified premiums directly on Form 1040 Schedule 1 without hitting the strict 7.5% AGI threshold of Schedule A.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>Strict Eligibility Barriers</strong>: You are completely disqualified for any month you or your spouse are eligible for an employer-sponsored health plan.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>Compounding AGI Savings</strong>: Lowering your Adjusted Gross Income (AGI) has a cascading benefit, protecting your qualifying status for critical deductions like QBI and childcare credits.</span>
             </li>
          </ul>
        </div>

        {/* INTRODUCTION */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            For self-employed professionals, independent contractors, and sole proprietors, purchasing private health insurance is one of the largest operating expenses you will face. Without an employer to subsidize your premiums, carrying comprehensive healthcare coverage represents a significant financial headwind.
          </p>

          <p>
            Fortunately, the tax code provides a powerful mechanism specifically designed to ease this burden. Unlike standard W2 employees, who must hit high itemized thresholds on Schedule A to write off medical costs, independent workers can utilize a dedicated above-the-line deduction.
          </p>

          <p>
            Understanding how to claim the <strong className="text-text-primary">1099 health insurance deduction self employed</strong> can save you thousands of dollars annually. When optimized correctly, this tax write-off reduces both your progressive income tax liability and your Adjusted Gross Income (AGI), which has a cascading benefit on other deductions.
          </p>

          <p>
            This guide breaks down every aspect of the self-employed health insurance deduction. We will examine the above-the-line deduction mechanics, outline strict eligibility rules, compare tax savings at different income levels, analyze ACA marketplace Premium Tax Credit interactions, and walk through a step-by-step example.
          </p>
        </div>

        {/* SECTION 1 - ABOVE THE LINE ADVANTAGE */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Structural Advantage: Above-the-Line vs. Schedule A Itemization
          </h2>
          <p>
            Traditional tax write-offs for medical expenses are notoriously difficult to claim. Under standard rules, you must report medical costs on **Schedule A (Itemized Deductions)**, and you can only deduct the portion of your expenses that exceeds **7.5% of your Adjusted Gross Income (AGI)**.
          </p>

          <p>
            For a professional with an AGI of $100,000, that means the first $7,500 of medical expenses are completely non-deductible. Additionally, you only benefit from this write-off if your total itemized deductions exceed the standard deduction threshold.
          </p>

          <p>
            The self-employed health insurance deduction completely bypasses these barriers. It operates as an **above-the-line adjustment to income**, reported directly on **Form 1040, Schedule 1**:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
             <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">No Threshold Limits</span>
                <p className="text-sm text-text-muted leading-relaxed">
                   You do not need to hit a percentage of your income to claim your write-off. You can deduct **100% of your qualified premiums**, starting from your very first dollar of expense, regardless of whether your total medical costs exceed 7.5% of your AGI.
                </p>
             </div>

             <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">Combined Standard Deduction</span>
                <p className="text-sm text-text-muted leading-relaxed">
                   Because the deduction is processed before you reach your standard deduction, you can claim the full value of your health premiums on Schedule 1, while still taking the complete, unreduced standard deduction on your primary Form 1040 layout.
                </p>
             </div>
          </div>
        </div>

        {/* SECTION 2 - THE COMPANION BENEFIT */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Cascading Value of Lowering Your AGI
          </h2>
          <p>
            As an above-the-line deduction, writing off your health insurance premiums directly reduces your **Adjusted Gross Income (AGI)**. This represents a compounding benefit that extends across your entire tax return.
          </p>

          <p>
            Many critical federal tax incentives, credits, and deductions are tied to your AGI. Lowering this figure can protect your eligibility for:
          </p>

          <ul className="list-disc list-inside text-sm text-text-muted space-y-2 pl-2">
             <li><strong className="text-text-primary">Child and Dependent Care Credits:</strong> These credits begin to phase out as your AGI rises above specific thresholds.</li>
             <li><strong className="text-text-primary">Traditional IRA Deductions:</strong> The ability to deduct pre-tax IRA contributions is restricted once your AGI crosses progressive limits.</li>
             <li><strong className="text-text-primary">The 20% QBI Deduction:</strong> Under Section 199A, your Qualified Business Income deduction begins to phase out or is capped based on your overall taxable income threshold.</li>
          </ul>

          <div className="p-6 bg-red/5 border border-red/14 rounded-2xl space-y-2">
             <h4 className="text-xs font-mono font-bold text-red uppercase tracking-widest flex items-center gap-2">
                <AlertCircle size={16} /> Important Caveat: No Self-Employment Tax Reduction
             </h4>
             <p className="text-xs text-text-muted leading-relaxed">
                While lowering your AGI reduces your progressive federal and state income tax liabilities, **it does not lower your self-employment tax**. Self-employment tax (15.3%) is calculated based on your net business profits on **Schedule C**, prior to any above-the-line adjustments being applied on Schedule 1.
             </p>
          </div>
        </div>

        {/* SECTION 3 - WHO QUALIFIES */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Eligibility Check: Who Qualifies for the Deduction?
          </h2>
          <p>
            The IRS enforces strict rules regarding who can claim the self-employed health insurance deduction. To qualify, you must meet three core conditions:
          </p>

          <h3 className="text-xl font-bold text-text-primary">1. Self-Employment Status with Net Profit</h3>
          <p>
             You must have a net profit from your business activity reported on **Schedule C**, **Schedule F**, or through partnership distributions on **Schedule K-1**. Crucially, **your deduction is capped at your net business profit**. 
          </p>
          <p className="text-sm italic">
             *If your business operates at a net loss of $2,000 for the year, you cannot claim the health insurance deduction on Schedule 1, even if you paid $8,000 in premiums.
          </p>

          <h3 className="text-xl font-bold text-text-primary">2. The Employer-Plan Disqualification Barrier</h3>
          <p>
             You cannot claim the self-employed health insurance deduction for any month in which you are eligible to participate in an **employer-sponsored health plan**—even if that plan is offered through your spouse’s job.
          </p>

          <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
             <span className="text-blue font-bold uppercase font-mono text-xs block">The Monthly Compatibility Rule</span>
             <p className="text-sm text-text-muted">
                This rule is applied on a monthly basis. For example, if you operate your business from January to June and have no access to other coverage, you can deduct your premiums for those months. If your spouse gets a job in July that offers group health plans, you are **immediately barred** from claiming the self-employed deduction for the remainder of the year.
             </p>
          </div>

          <h3 className="text-xl font-bold text-text-primary">3. The Policy Setup Standard</h3>
          <p>
             The insurance policy must be established directly under your business name or in your personal name as a sole proprietor.
          </p>
        </div>

        {/* SECTION 4 - WHAT EXPENSES COUNT */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Eligible Expenses: What Premiums Count?
          </h2>
          <p>
            The 1099 health insurance deduction covers more than just standard medical plans. You can write off premiums for several types of healthcare policies, provided they cover yourself, your spouse, and your dependents (including children under age 27):
          </p>

          <div className="space-y-4">
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
                <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                   <span className="text-blue font-bold uppercase font-mono text-xs block">Medical and Dental Plans</span>
                   <p className="text-text-muted text-xs">
                      All premium payments for standard medical and dental insurance plans are fully deductible, whether purchased through private brokers, trade associations, or state healthcare marketplaces.
                   </p>
                </div>
                <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                   <span className="text-blue font-bold uppercase font-mono text-xs block">Vision Policies</span>
                   <p className="text-text-muted text-xs">
                      Comprehensive vision insurance premiums can be added to your write-off. This includes separate, specialized vision policies purchased for yourself or family members.
                   </p>
                </div>
                <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                   <span className="text-blue font-bold uppercase font-mono text-xs block">Long-Term Care Coverage</span>
                   <p className="text-text-muted text-xs">
                      You can deduct premiums paid for qualified long-term care insurance. However, these deductions are subject to strict annual age-based limits set by the IRS.
                   </p>
                </div>
                <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                   <span className="text-blue font-bold uppercase font-mono text-xs block">COBRA and Marketplace Plans</span>
                   <p className="text-text-muted text-xs">
                      If you recently transitioned to independent work, you can deduct COBRA premiums. You can also write off premiums for plans purchased through the **ACA Health Insurance Marketplace**.
                   </p>
                </div>
             </div>
          </div>
        </div>

        {/* SECTION 5 - ACA MARKETPLACE SUBSIDY INTERACTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Tax Shield Loop: ACA Marketplace and Premium Subsidy Interaction
          </h2>
          <p>
            If you purchase insurance through the ACA Marketplace and receive the **Premium Tax Credit (PTC)** or advanced payments of the credit (APTC), calculating your deduction requires careful attention.
          </p>

          <p>
            You can only deduct the **net premium** you actually pay out of pocket, not the gross cost of the policy. For example, if your gross monthly premium is $1,200, but an APTC subsidy covers $800, your deduction is limited to the remaining $400 you pay on your monthly bills.
          </p>

          <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-4">
             <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-text-primary">The Circular Calculation Challenge:</h4>
             <p className="text-xs text-text-muted leading-relaxed font-sans">
                This process creates a circular calculation of tax liabilities. Your Marketplace subsidy (Premium Tax Credit) is based on your Adjusted Gross Income (AGI). However, your above-the-line health insurance deduction reduces your AGI, which in turn can increase your eligible Premium Tax Credit. 
             </p>
             <p className="text-xs text-text-muted leading-relaxed font-sans">
                To resolve this circular relationship, the IRS provides two safe calculation methods in **Revenue Procedure 2014-41**. Utilizing specialized tax software or working with an experienced accountant is recommended to handle this calculation correctly.
             </p>
          </div>
        </div>

        {/* SECTION 6 - REAL WORLD LEDGER COMPARISON */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Financial Output: Health Insurance Tax Savings by Income Level
          </h2>
          <p>
            Let's analyze a realistic scenario. Sarah is a freelance user-experience designer choosing a comprehensive family health and dental plan. Her total annual premium payments equal **$9,600** ($800 per month). 
          </p>
          <p>
             Let's compare her tax savings across three distinct business net profit tiers, assuming she is single and taking the standard deduction:
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Premium Benefit Matrix: Sarah’s $9,600 Health Insurance Tax Shield
            </h4>

            {/* LEDGER COMPARISON TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm font-mono">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Deduction Metrics</th>
                        <th className="p-4 text-right">Tier 1: $45,000 Net Profit</th>
                        <th className="p-4 text-right">Tier 2: $85,000 Net Profit</th>
                        <th className="p-4 text-right">Tier 3: $140,000 Net Profit</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Sarah’s Net Profit (Schedule C)</td>
                        <td className="p-4 text-right">$45,000</td>
                        <td className="p-4 text-right">$85,000</td>
                        <td className="p-4 text-right">$140,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Total Out-of-Pocket Insurance Premiums</td>
                        <td className="p-4 text-right">$9,600</td>
                        <td className="p-4 text-right">$9,600</td>
                        <td className="p-4 text-right">$9,600</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Schedule 1 Above-the-Line Deduction</td>
                        <td className="p-4 text-right text-green font-bold">-$9,600 <span className="text-[10px] block opacity-70">(Fully deductible; profit exceeds premiums)</span></td>
                        <td className="p-4 text-right text-green font-bold">-$9,600</td>
                        <td className="p-4 text-right text-green font-bold">-$9,600</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs font-sans">Sarah’s Highest Income Tax Bracket (2025/2026)</td>
                        <td className="p-4 text-right">12%</td>
                        <td className="p-4 text-right">22%</td>
                        <td className="p-4 text-right">24%</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Estimated State Tax Bracket (Typical average)</td>
                        <td className="p-4 text-right">4.0%</td>
                        <td className="p-4 text-right">5.5%</td>
                        <td className="p-4 text-right">6.5%</td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Net Cash Income Tax Saved</td>
                        <td className="p-4 text-right text-blue font-black text-base font-mono">$1,536 <span className="text-[10px] block opacity-70 font-sans font-normal text-xs font-mono">(16% combined savings)</span></td>
                        <td className="p-4 text-right text-green font-black text-base font-mono">$2,640 <span className="text-[10px] block opacity-70 font-sans font-normal text-xs font-mono">(27.5% combined savings)</span></td>
                        <td className="p-4 text-right text-green font-black text-base font-mono">$2,928 <span className="text-[10px] block opacity-70 font-sans font-normal text-xs font-mono">(30.5% combined savings)</span></td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted font-sans">
              *The final reconciliation: By utilizing the 100% above-the-line deduction, Sarah's health insurance premium provides a direct tax subsidy of up to **$2,928** in federal and state income tax savings depending on her progressive bracket.
            </p>
          </div>
        </div>

        {/* BRIGHT CTA COMPONENT */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Evalue Your Health Insurance Tax Shield</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Enter your 1099 profit projections, gross medical and dental premium rates, state brackets, and spouse coverage opportunities to calculate your exact above-the-line deduction value.
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
              Analyze Your Health Deduction <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* MEDICAL PREMIUMS FAQ */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Self-Employed Health Insurance Compliance FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can I deduct health insurance premium payments under an S-Corporation structure?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes, but you must follow specific IRS administrative protocols. The S-Corporation must pay or land the premiums under the company name, and the total premium payments must be listed on your W2 form as taxable wages (Box 1, 3, and 5). You then claim the 100% above-the-line health deduction on Schedule 1, neutralizing the added taxable wages without incurring self-employment tax.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Are Health Savings Account (HSA) contributions covered under this deduction?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. HSA contributions are reported and deducted separately as their own distinct above-the-line adjustment to income on Form 1040 Schedule 1 (Part II, Line 13). You can claim both the 100% self-employed health insurance premium deduction AND deduct your qualified, pre-tax HSA contributions for the year, provided you maintain an HSA-qualified High Deductible Health Plan (HDHP).
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                What happens if my business has net self-employment earnings below my premium cost?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                If your business's net self-employment earnings (after subtracting Schedule C business deductions and Schedule SE payroll tax deductions) are less than your total health premiums, your Schedule 1 deduction is **strictly limited to that net profit amount**. The remaining, unused portion of your premiums can be reported on Schedule A under itemized medical expenses, subject to the standard 7.5% AGI threshold of that form.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Regulatory tax disclosure: This health insurance benefit overview is created for educational purposes only. IRS codes, progressive health plan thresholds, and individual ACA state marketplace structures change consistently. Always employ a certified corporate business CPA or tax professional before finalizing your tax returns.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default HealthInsuranceDeductionPage;
