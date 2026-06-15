import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, DollarSign, Table, Calendar, Percent, FileText, TrendingUp, Info } from 'lucide-react';

interface QuarterlyEstimatedTaxesPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse' | 'realestate' | 'truck' | 'therapist' | 'consultant' | 'mixed' | 'estimated') => void;
}

const QuarterlyEstimatedTaxesPage: React.FC<QuarterlyEstimatedTaxesPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="estimated-post"
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
          <span className="text-blue">Estimated Payments Vault</span>
          <span>/</span>
          <span className="text-text-muted select-none">Quarterly Estimated Taxes 1099 How to Calculate</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            Quarterly Estimated Taxes for 1099 Workers: Exactly How Much to Pay (2025 Dates + Formula)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Calendar size={14} className="text-blue shrink-0" />
               <span>ESTIMATED TAXES 1099 COMPLIANCE & CALCULATION</span>
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
              <span className="text-blue font-bold">1,390 WORDS</span>
            </div>
          </div>
        </div>

        {/* EXECUTIVE SUMMARY BOX */}
        <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue font-mono">Core Payments Framework</h3>
          <ul className="text-xs text-text-muted space-y-2 list-none pl-0 font-mono">
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>The $1,000 Milestone</strong>: If you expect to owe $1,000 or more in federal taxes after subtracting W2 withholdings, quarterly filings are legally required.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>The Safe Harbor Shelter</strong>: Cover 100% of last year’s tax liability (or 110% if your AGI was above $150,000) to secure complete protection from underpayment penalties.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>Step-By-Step Mechanics</strong>: We outline the exact formula for applying self-employment tax (15.3% on 92.35% of profit), adding progressive income taxes, and structuring payments.</span>
             </li>
          </ul>
        </div>

        {/* INTRODUCTION */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Unlike salaried employees who see their tax liabilities automatically withheld from every paycheck, independent contractors and sole proprietors must manage their own tax schedules. Navigating your billing cycles requires a clear understanding of the tax code to avoid costly mistakes.
          </p>

          <p>
            The IRS expects you to pay taxes on your income as you earn it. When you operate as an independent contractor, freelance specialist, or single-member LLC, you become responsible for both income taxes and self-employment taxes. These combined obligations must be paid throughout the year in four distinct installments.
          </p>

          <p>
            Failing to make these periodic payments can lead to unexpected tax bills and interest-based penalties. For freelancers, mastering <strong className="text-text-primary">quarterly estimated taxes 1099 how to calculate</strong> is essential to maintaining financial stability.
          </p>

          <p>
            This guide breaks down every step of the calculation process. We will look at who is required to pay, outline the safe harbor protections, walk through the exact payment deadlines, analyze the underpayment penalty structure, and detail a real-world calculation using actual figures.
          </p>
        </div>

        {/* SECTION 1 - 2025 DUE DATES */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Timeline: 2025 Exact Quarterly Due Dates
          </h2>
          <p>
            The IRS schedules estimated tax payments across four specific deadlines. These installments are not spaced in perfect three-month intervals, which can catch unprepared business owners off guard.
          </p>

          <p>
            For the 2025 tax period, here are the exact federal deadlines you must hit to avoid underpayment penalties:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-2">
            <div className="p-4 border border-border-color/20 bg-bg-card/20 rounded-xl space-y-2 text-center">
              <span className="text-blue text-[10px] font-mono uppercase font-black tracking-widest block">Quarter 1</span>
              <p className="text-text-primary font-mono font-black text-lg">April 15, 2025</p>
              <p className="text-[11px] text-text-muted">Covers income earned Jan 1 to March 31.</p>
            </div>
            <div className="p-4 border border-border-color/20 bg-bg-card/20 rounded-xl space-y-2 text-center">
              <span className="text-blue text-[10px] font-mono uppercase font-black tracking-widest block">Quarter 2</span>
              <p className="text-text-primary font-mono font-black text-lg">June 16, 2025</p>
              <p className="text-[11px] text-text-muted">Covers income earned April 1 to May 31.</p>
            </div>
            <div className="p-4 border border-border-color/20 bg-bg-card/20 rounded-xl space-y-2 text-center">
              <span className="text-blue text-[10px] font-mono uppercase font-black tracking-widest block">Quarter 3</span>
              <p className="text-text-primary font-mono font-black text-lg">Sept 15, 2025</p>
              <p className="text-[11px] text-text-muted">Covers income earned June 1 to Aug 31.</p>
            </div>
            <div className="p-4 border border-border-color/20 bg-bg-card/20 rounded-xl space-y-2 text-center">
              <span className="text-blue text-[10px] font-mono uppercase font-black tracking-widest block">Quarter 4</span>
              <p className="text-text-primary font-mono font-black text-lg">Jan 15, 2026</p>
              <p className="text-[11px] text-text-muted">Covers income earned Sept 1 to Dec 31.</p>
            </div>
          </div>

          <p className="text-sm italic text-text-muted">
            *Note: If a deadline falls on a weekend or federal holiday, the due date is automatically extended to the next business day. For example, because June 15, 2025, is a Sunday, the Q2 deadline is shifted to Monday, June 16, 2025.
          </p>
        </div>

        {/* SECTION 2 - WHO MUST PAY: THE $1,000 THRESHOLD RULE */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Who Must Pay? The $1,000 Tax Liability Threshold
          </h2>
          <p>
            The requirement to pay quarterly estimated taxes is determined by your total unpaid tax liability. Sole proprietors, partners, S-Corporation shareholders, and independent contractors must comply with specific IRS guidelines:
          </p>

          <div className="p-6 bg-bg-card/45 border border-border-color/20 rounded-2xl space-y-4">
             <h3 className="text-base font-black text-text-primary uppercase flex items-center gap-2">
                <AlertCircle size={18} className="text-blue" /> The $1,000 Federal Due Standard
             </h3>
             <p className="text-sm text-text-muted leading-relaxed">
                You are legally required to make quarterly estimated tax payments if you expect to owe **$1,000 or more in federal taxes** (including both self-employment and income taxes) for the year, after subtracting any W2 withholdings or refundable tax credits.
             </p>
             <p className="text-xs text-text-muted pl-4 border-l-2 border-blue">
                If your 1099 side hustle is a minor source of income, and your day job's W2 tax withholdings are high enough to reduce your remaining year-end tax liability below $1,000, you are exempt from making separate quarterly payments.
             </p>
          </div>
        </div>

        {/* SECTION 3 - THE SAFE HARBOR METHOD */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Safe Harbor Shield: Penalty Protection Strategies
          </h2>
          <p>
             Because business cash flows can fluctuate, calculating your exact tax liability each quarter can be a challenge. To help self-employed individuals manage this, the IRS provides a safe harbor mechanism to shield you from underpayment penalties.
          </p>

          <p>
             Under these rules, you will not face penalties even if your actual year-end tax bill is much higher than expected, as long as your timely payments meet these specific thresholds:
          </p>

          <div className="space-y-4">
             <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">Standard Safe Harbor (100% rule)</span>
                <p className="text-sm text-text-muted">
                   If your Adjusted Gross Income (AGI) on your prior tax return was **$150,000 or less** (or $75,000 or less if married filing separately), you must pay at least **100% of the total tax liability** reported on that prior return. Divid this total by four to determine your required quarterly payment.
                </p>
             </div>
             
             <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">High-Earner Safe Harbor (110% rule)</span>
                <p className="text-sm text-text-muted">
                   If your AGI on your prior tax return was **greater than $150,000** (or $75,000 if married filing separately), you must pay at least **110% of the total tax liability** shown on that prior return. Divide this adjusted total by four to set your quarterly payments.
                </p>
             </div>
          </div>
        </div>

        {/* SECTION 4 - STEP-BY-STEP CALCULATION WORKTHROUGH */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Operational Formula: Step-by-Step Calculation Walkthrough
          </h2>
          <p>
            If you do not use the safe harbor strategy and prefer to base your payments on your actual year-to-date earnings, you can calculate your required payments using this structured formula.
          </p>

          <div className="space-y-4">
             <div className="p-6 bg-bg-card/45 border border-border-color/10 rounded-2xl space-y-3 font-sans">
                <h3 className="text-base font-black text-text-primary flex items-center gap-2">
                   <TrendingUp size={18} className="text-blue" /> Stage A: Calculate Your Net Self-Employment Profit
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                   Determine your gross 1099 revenues for the quarter. Subtract your legitimate business deductions (such as home office costs, technology, travel, and professional insurance) to find your **net self-employment profit** (Schedule C).
                </p>
             </div>

             <div className="p-6 bg-bg-card/45 border border-border-color/10 rounded-2xl space-y-3 font-sans">
                <h3 className="text-base font-black text-text-primary flex items-center gap-2">
                   <Percent size={18} className="text-blue" /> Stage B: Apply the Self-Employment Tax (SECA)
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                   The self-employment tax is 15.3% of your net profits. However, only **92.35% of your net self-employment income** is subject to this tax.
                </p>
                <div className="bg-bg-input/30 p-3 rounded-lg font-mono text-xs text-text-primary select-all text-center">
                   Net 1099 Profit × 0.9235 × 15.3% = Estimated Annual Self-Employment Tax
                </div>
             </div>

             <div className="p-6 bg-bg-card/45 border border-border-color/10 rounded-2xl space-y-3 font-sans">
                <h3 className="text-base font-black text-text-primary flex items-center gap-2">
                   <FileText size={18} className="text-blue" /> Stage C: Estimate Federal Progressive Income Tax
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                   Deduct half of your self-employment tax from your income. Next, apply your standard deduction (or itemized deductions) and any eligible business tax shelters (such as the 20% Qualified Business Income deduction). Apply your remaining income to the progressive federal tax brackets to find your estimated income tax liability.
                </p>
             </div>

             <div className="p-6 bg-bg-card/45 border border-border-color/10 rounded-2xl space-y-3 font-sans">
                <h3 className="text-base font-black text-text-primary flex items-center gap-2">
                   <Calculator size={18} className="text-blue" /> Stage D: Divide and Adjust
                </h3>
                <p className="text-xs text-text-muted leading-relaxed">
                   Add your estimated self-employment tax and income tax liabilities together. Divide this total by four to find your quarterly federal payment. You can adjust this baseline if you have separate W2 withholdings that cover a portion of the tax.
                </p>
             </div>
          </div>
        </div>

        {/* SECTION 5 - FORM 1040-ES EXPLANATION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Filing the Paperwork: Understanding Form 1040-ES
          </h2>
          <p>
            The primary document used to calculate and submit quarterly payments is **IRS Form 1040-ES (Estimated Tax for Individuals)**. This form includes a detailed worksheet to help you estimate your tax liability and calculate your required installments.
          </p>

          <p>
            Form 1040-ES also includes four paper payment vouchers. If you prefer to pay by check, you must mail a voucher along with your payment to the appropriate IRS processing center.
          </p>

          <p>
            However, the fastest way to handle estimated payments is online. You can skip the paper vouchers and submit payments directly through the **IRS Direct Pay** system or the Electronic Federal Tax Payment System (EFTPS). These digital portals provide instant confirmation of your payments, helping you keep clean records for your business.
          </p>
        </div>

        {/* SECTION 6 - THE CONSEQUENCE: UNDERPAYMENT PENALTIES */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Consequence: What Happens If You Do Not Pay?
          </h2>
          <p>
            Failing to make your quarterly payments on time can result in IRS underpayment penalties. The IRS calculates these penalties using **Form 2210**.
          </p>

          <p>
            The underpayment penalty is not a flat fee. It functions as an interest charge on the amount you underpaid, calculated from the date the payment was due to the date it was actually paid. The interest rate is tied to the federal short-term rate and is adjusted quarterly.
          </p>

          <div className="p-4 bg-red/5 border border-red/20 rounded-xl space-y-2">
             <p className="text-xs text-text-muted leading-relaxed">
                **Example:** If your required payment for Q1 was $2,000, and you did not submit it until the Q3 deadline on September 15th, the IRS will assess penalty interest on that $2,000 underpayment for exactly 153 days. You can avoid these interest penalties by making smaller, timely payments rather than one large payment at the end of the year.
             </p>
          </div>
        </div>

        {/* SECTION 7 - REAL EXAMPLE WITH NUMBERS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Real-World Math: A Custom $95,000 1099 Side-Hustle Audit
          </h2>
          <p>
            Let’s walk through a realistic scenario to see how this math works in practice. Mark is an independent software specialist who expects to earn **$95,000** in net 1099 income (gross billings minus business deductions) for the year.
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Asset Ledger: Step-by-Step Quarterly Estimated Tax Allocation
            </h4>

            {/* LEDGER COMPARISON TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Calculation Stage</th>
                        <th className="p-4 text-right">Estimated Annual Figure ($)</th>
                        <th className="p-4 text-right">Individual Quarterly Allocation ($)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Planned Net Freelance Revenue</td>
                        <td className="p-4 text-right font-bold">$95,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$23,750</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Acknowledge tax base (Adjust to 92.35%)</td>
                        <td className="p-4 text-right">-$87,732</td>
                        <td className="p-4 text-right font-bold">-$21,933</td>
                     </tr>
                     <tr className="bg-bg-input/10">
                        <td className="p-4 text-text-primary font-sans">Self-Employment Tax Liability (15.3% SECA)</td>
                        <td className="p-4 text-right font-bold">$13,423</td>
                        <td className="p-4 text-right text-text-primary font-bold">$3,356</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Taxable Income Base (Adjusted for deductions)</td>
                        <td className="p-4 text-right">-$61,430 <span className="text-[10px] block opacity-70">(Includes standard deduction & QBI shift)</span></td>
                        <td className="p-4 text-right font-bold">-$15,357</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Estimated Progressive Federal Income Tax</td>
                        <td className="p-4 text-right">$8,610 <span className="text-[10px] block opacity-70">(Calculated using federal progressive tax brackets)</span></td>
                        <td className="p-4 text-right text-text-primary font-bold">$2,153</td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Combined Estimated Federal Liability</td>
                        <td className="p-4 text-right text-blue font-black text-base font-mono">$22,033</td>
                        <td className="p-4 text-right text-blue font-black text-base font-mono">$5,508</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted font-sans">
              *The final reconciliation: To cover his self-employment and income taxes on $95,000 of net freelance profits, Mark must submit quarterly federal payments of **$5,508** to the IRS.
            </p>
          </div>
        </div>

        {/* BRIGHT CTA COMPONENT */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Calculate Your Estimated Quarterly Payments</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Enter your 1099 projections, business write-offs, state tax rates, and prior year's tax liabilities to calculate your safe harbor targets and required quarterly installments.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO LIVE COMPARISON ENGINE]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Run Your Calculation Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ESTIMATED TAXES FAQ */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Quarterly Estimated Taxes Compliance FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                What happens if I miss an estimated tax deadline?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                If you miss a quarterly deadline, you should submit your payment as soon as possible. The underpayment penalty is calculated on a daily basis from the date the payment was due to the date it was received. Submitting your payment late is always more cost-effective than waiting until the end of the tax year.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Are state and local 1099 taxes also paid on a quarterly schedule?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes. If your state levies an income tax, you will likely need to make quarterly estimated payments directly to your state’s department of revenue, in addition to your federal payments. The deadlines for state payments typically match the federal schedule, though you should confirm the exact rules for your state of residence.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                How do I report my quarterly payments on my annual tax return?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                When you file your annual tax return (Form 1040 layout), you will list your total quarterly payments on Schedule 3. These payments function as tax credits, reducing your outstanding tax balance dollar-for-dollar. Keeping accurate records of your payment confirmation numbers ensures you receive full credit for your payments.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Regulatory tax disclosure: This estimated tax guide is provided purely for educational reference. IRS codes, payroll regulations, and state franchise taxation guidelines change consistently. Always seek guidance from a certified financial advisor or tax professional before making changes.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default QuarterlyEstimatedTaxesPage;
