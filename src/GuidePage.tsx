import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, BookOpen, Info, HelpCircle, FileText, CheckCircle2, XCircle } from 'lucide-react';

interface GuidePageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide') => void;
}

const GuidePage: React.FC<GuidePageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="guide-post"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex-grow scroll-smooth"
    >
      <article className="py-20 px-6 max-w-4xl mx-auto space-y-12 bg-bg-main">
        
        {/* Breadcrumb & Meta */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-text-muted">
          <button 
            onClick={() => handleNavClick('home')}
            className="hover:text-blue transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-blue">Guides</span>
          <span>/</span>
          <span className="text-text-muted select-none">1099 vs W2 Taxes Explained</span>
        </div>

        {/* TITLE SECTION */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none">
            1099 vs W2 Taxes Explained: A Plain-English Guide for 2025
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <BookOpen size={14} />
               <span>COMPREHENSIVE TAX COMPARISON</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA</span>
            </div>
            <div>
              <span>LAST UPDATED: </span>
              <span className="text-text-primary font-bold">MAY 2026</span>
            </div>
          </div>
        </div>

        {/* INTRODUCTION BLOCK */}
        <div className="space-y-8 text-text-muted leading-relaxed text-base md:text-lg">
          <p>
            The moment you receive your first 1099 form or a contract offer with a significantly higher hourly rate than your current salary, a common mistake occurs. You look at the gross number, multiply it by 2,080 hours, and assume you’ve just secured a massive raise.
          </p>

          <p>
            The reality is more complex. Transitioning from a W2 employee to a 1099 independent contractor shifts the entire fiscal burden from an organization's payroll department directly onto your shoulders. For the uninitiated, this shift doesn't just change how you get paid—it changes what you owe, when you owe it, and how much paperwork you'll be doing on a Sunday afternoon. This guide explains <strong className="text-text-primary">1099 vs W2 taxes explained</strong> in plain English, specifically for the 2025 tax environment.
          </p>

          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            The Fundamental Difference: Withholding vs. Owing
          </h2>

          <p>
            When you are a W2 employee, your employer acts as your fiscal proxy. Every two weeks, they slice off a portion of your earnings for federal income tax, state tax, Social Security, and Medicare. By the time the money hits your bank account, your “tax work” is largely done. You only file at the end of the year to settle any small differences.
          </p>

          <p>
            As a 1099 worker, you are the employer. No one is withholding a single cent for you. If you bill a client $10,000, they send you $10,000. It is your legal responsibility to realize that at least $3,000 of that doesn't actually belong to you. It belongs to the Department of Treasury. If you spend the whole $10,000, you are effectively taking out a high-interest loan from the IRS that will come due with penalties.
          </p>

          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            4 Taxes W2 Workers Pay vs. 5 Taxes 1099 Workers Pay
          </h2>

          <p>
            To understand the math, we have to look at the line items. While both types of workers pay income tax, the "hidden" payroll taxes change drastically.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
            <div className="space-y-4">
              <h4 className="text-sm font-black text-blue uppercase tracking-widest font-mono flex items-center gap-2">
                <CheckCircle2 size={16} /> W2 Payroll Taxes
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between p-3 bg-bg-card/30 rounded-lg border border-border-color/20">
                  <span>Federal Income Tax</span>
                  <span className="font-bold text-text-primary">Variable (10-37%)</span>
                </li>
                <li className="flex justify-between p-3 bg-bg-card/30 rounded-lg border border-border-color/20">
                  <span>Social Security</span>
                  <span className="font-bold text-text-primary">6.2%</span>
                </li>
                <li className="flex justify-between p-3 bg-bg-card/30 rounded-lg border border-border-color/20">
                  <span>Medicare</span>
                  <span className="font-bold text-text-primary">1.45%</span>
                </li>
                <li className="flex justify-between p-3 bg-bg-card/30 rounded-lg border border-border-color/20 text-text-muted italic">
                  <span>Employer Match (Social Security)</span>
                  <span className="font-bold text-blue">PAID BY COMPANY (6.2%)</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-sm font-black text-red uppercase tracking-widest font-mono flex items-center gap-2">
                <AlertCircle size={16} /> 1099 Self-Employed Taxes
              </h4>
              <ul className="space-y-3 text-sm">
                <li className="flex justify-between p-3 bg-red/5 rounded-lg border border-red/20 text-red-400">
                  <span>Federal Income Tax</span>
                  <span className="font-bold text-text-primary">Variable (10-37%)</span>
                </li>
                <li className="flex justify-between p-3 bg-red/5 rounded-lg border border-red/20 text-red-400">
                  <span>Social Security (Employee)</span>
                  <span className="font-bold text-text-primary">6.2%</span>
                </li>
                <li className="flex justify-between p-3 bg-red/5 rounded-lg border border-red/20 text-red-400">
                  <span>Social Security (Employer)</span>
                  <span className="font-bold text-text-primary">6.2%</span>
                </li>
                <li className="flex justify-between p-3 bg-red/5 rounded-lg border border-red/20 text-red-400">
                  <span>Medicare (Employee)</span>
                  <span className="font-bold text-text-primary">1.45%</span>
                </li>
                <li className="flex justify-between p-3 bg-red/5 rounded-lg border border-red/20 text-red-400">
                  <span>Medicare (Employer)</span>
                  <span className="font-bold text-text-primary">1.45%</span>
                </li>
              </ul>
            </div>
          </div>

          <p>
            As a 1099 worker, you pay the full <strong className="text-text-primary">15.3%</strong> Self-Employment (SE) tax rate. You are both the "boss" and the "worker," meaning you pay both halves of the Social Security and Medicare taxes.
          </p>

          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            The Quarterly Tax Requirement: Pay As You Go
          </h2>

          <p>
            The US tax system is "pay-as-you-go." Because no one is withholding your taxes, the IRS requires you to make estimated tax payments four times a year. 
          </p>

          <div className="p-8 bg-bg-card/40 border border-border-color/30 rounded-2xl space-y-6">
            <h4 className="text-lg font-black text-text-primary">2025 Quarterly Deadlines</h4>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="p-4 border border-border-color/20 rounded-xl text-center">
                <p className="text-[10px] font-mono text-text-muted">Q1</p>
                <p className="text-sm font-bold text-text-primary">April 15</p>
              </div>
              <div className="p-4 border border-border-color/20 rounded-xl text-center">
                <p className="text-[10px] font-mono text-text-muted">Q2</p>
                <p className="text-sm font-bold text-text-primary">June 16</p>
              </div>
              <div className="p-4 border border-border-color/20 rounded-xl text-center">
                <p className="text-[10px] font-mono text-text-muted">Q3</p>
                <p className="text-sm font-bold text-text-primary">Sept 15</p>
              </div>
              <div className="p-4 border border-border-color/20 rounded-xl text-center">
                <p className="text-[10px] font-mono text-text-muted">Q4</p>
                <p className="text-sm font-bold text-text-primary">Jan 15 (2026)</p>
              </div>
            </div>
            <p className="text-sm text-text-muted italic">
              <strong>What happens if you don't pay?</strong> If you owe more than $1,000 at the end of the year and didn't pay your quarterlies, the IRS will hit you with an "underpayment penalty." This is an interest charge based on the amount you owed and how long you kept it. In a high-interest environment, these penalties add up quickly.
            </p>
          </div>

          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            The Standard Deduction Misconception
          </h2>

          <p>
            Many people believe that 1099 workers lose the right to the standard deduction. This is false. Both W2 and 1099 workers receive the standard deduction ($15,000 for single filers in 2025). 
          </p>

          <p>
            However, 1099 workers get <em className="text-text-primary italic">another</em> set of deductions that W2 workers do not: <strong className="text-text-primary">Business Expenses</strong>. You deduct these <em className="italic">before</em> the standard deduction is even applied. If you bills $100k but spend $20k on software, travel, and a home office, your "taxable income" starts at $80k. Then you subtract the standard deduction from that $80k.
          </p>

          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            QBI Deduction: The 1099 Secret Weapon
          </h2>

          <p>
            The Qualified Business Income (QBI) deduction is one of the biggest tax advantages for 1099 workers. It allows you to deduct <strong className="text-text-primary">20% of your qualified business income</strong> directly from your taxable income. 
          </p>

          <p>
            If you have $100,000 in net profit, you can potentially deduct $20,000 off your tax return before you even calculate your federal income tax. W2 employees, regardless of how hard they work, are entitled to zero QBI. This deduction often bridges the gap created by the 15.3% SE tax.
          </p>

          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            Real Example: Maria, Nurse Practitioner ($90,000 Comparison)
          </h2>

          <p>
            Maria has two choices: A W2 hospital staff role for $90,000 or a 1099 clinic contract for $90,000. Let's look at the actual tax bill for a single filer (Texas, no state tax).
          </p>

          <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/30 my-8">
            <table className="w-full text-left text-sm border-collapse font-mono">
              <thead>
                <tr className="bg-bg-input/30 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                  <th className="p-4">Tax Type</th>
                  <th className="p-4 text-right">W2 Role ($90k)</th>
                  <th className="p-4 text-right">1099 Role ($90k)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-color/10">
                <tr>
                  <td className="p-4 text-text-primary font-sans font-bold">Gross Income</td>
                  <td className="p-4 text-right">$90,000</td>
                  <td className="p-4 text-right">$90,000</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-muted font-sans">Business Deductions (Estimated)</td>
                  <td className="p-4 text-right">$0</td>
                  <td className="p-4 text-right">-$5,000</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-primary font-sans">FICA / SE Tax</td>
                  <td className="p-4 text-right text-red-400">-$6,885 (7.65%)</td>
                  <td className="p-4 text-right text-red-400">-$12,021 (14.13% effective)</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-primary font-sans">Federal Income Tax</td>
                  <td className="p-4 text-right text-red-400">-$9,880</td>
                  <td className="p-4 text-right text-red-400">-$6,120 (Lowered by QBI)</td>
                </tr>
                <tr className="bg-blue/5">
                  <td className="p-4 text-blue font-sans font-black uppercase">Net Take-Home (Tax Only)</td>
                  <td className="p-4 text-right text-blue font-black font-mono">$73,235</td>
                  <td className="p-4 text-right text-blue font-black font-mono">$66,859</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p className="text-sm italic text-text-muted">
            *Note: W2 is $6,376 "richer" just based on taxes. This is why 1099 rates MUST be higher than W2 rates to be comparable (usually 25-40% higher).
          </p>

          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            "What Forms Do I Need?"
          </h2>

          <p>
            W2 workers get a simple W2 form in January. 1099 workers need to manage these key documents:
          </p>

          <ul className="space-y-4">
            <li className="flex gap-4 p-4 border border-border-color/20 rounded-xl">
              <div className="h-10 w-10 bg-blue/10 flex items-center justify-center rounded-lg text-blue shrink-0">
                 <FileText size={20} />
              </div>
              <div>
                <p className="font-bold text-text-primary">Schedule C (Form 1040)</p>
                <p className="text-xs text-text-muted">Where you report your business income and subtract your business expenses.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 border border-border-color/20 rounded-xl">
              <div className="h-10 w-10 bg-blue/10 flex items-center justify-center rounded-lg text-blue shrink-0">
                 <FileText size={20} />
              </div>
              <div>
                <p className="font-bold text-text-primary">Schedule SE</p>
                <p className="text-xs text-text-muted">Where you calculate that 15.3% self-employment tax.</p>
              </div>
            </li>
            <li className="flex gap-4 p-4 border border-border-color/20 rounded-xl">
               <div className="h-10 w-10 bg-blue/10 flex items-center justify-center rounded-lg text-blue shrink-0">
                  <FileText size={20} />
               </div>
               <div>
                 <p className="font-bold text-text-primary">Form 1040-ES</p>
                 <p className="text-xs text-text-muted">The booklet used to calculate and pay your quarterly estimated taxes.</p>
               </div>
            </li>
          </ul>

          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            5 Common Mistakes New 1099 Workers Make
          </h2>

          <ol className="list-decimal list-inside space-y-4">
            <li><strong className="text-text-primary">Forgetting Quarterly Payments:</strong> Thinking you can just pay in April. The penalties are avoidable wastage.</li>
            <li><strong className="text-text-primary">Mixing Bank Accounts:</strong> Spending tax money because it's sitting in your personal checking account. Open a dedicated "Business Savings" and move 30% of every check there immediately.</li>
            <li><strong className="text-text-primary">Not Tracking Receipts:</strong> If it's for work, it's a deduction. Losing the receipt means losing a 20-30% discount on that purchase.</li>
            <li><strong className="text-text-primary">Not Adjusting for Benefits:</strong> Failing to realize that $100k 1099 is the same as roughly $75k W2 once you buy your own insurance and fund your own retirement match.</li>
            <li><strong className="text-text-primary">Doing it All Alone:</strong> Professional tax prep pays for itself. A good CPA will find enough deductions to cover their own fee twice over.</li>
          </ol>

          {/* CTA BLOCK */}
          <div className="my-10 p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6">
            <h3 className="text-2xl font-black text-text-primary">Still confused about your take-home pay?</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              Don't guess with your finances. Our 2026 calculator handles the QBI math, the self-employment discount, and state-specific tax rates automatically. 
            </p>
            
            <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
              <Calculator size={14} className="text-blue" />
              <strong className="text-blue font-mono">[LINK TO CALCULATOR]</strong>
            </div>

            <div>
              <button 
                onClick={() => handleNavClick('home')}
                className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
              >
                Launch Tax Comparison Tool <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* FAQ SECTION */}
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Who has to pay self-employment tax?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                If you have net earnings of $400 or more from self-employment, you must pay SE tax. This applies to freelancers, gig workers, sole proprietors, and independent contractors.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Is 1099 better than W2 for high earners?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Often, yes. High earners can use S-Corp elections to save thousands in SE tax, and they can deduct massive retirement contributions (SEP-IRA/Solo 401k) that W2 workers cannot.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Do I pay state tax on 1099 income?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes, in most states. You pay state income tax on your net business profit. Some states, like Texas or Florida, have no state income tax, making 1099 income much more attractive there.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Provided for informational purposes only. Consult with a professional tax advisor for your personal situation.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default GuidePage;
