import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, DollarSign, Table, ShieldAlert, FileText, Landmark, Scale, FileSpreadsheet } from 'lucide-react';

interface MisclassificationPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse' | 'realestate' | 'truck' | 'therapist' | 'consultant' | 'mixed' | 'estimated' | 'homeoffice' | 'healthins' | 'retirement' | 'misclassified') => void;
}

const MisclassificationPage: React.FC<MisclassificationPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="misclassified-post"
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
          <span className="text-blue">Labor Rights & Compliance</span>
          <span>/</span>
          <span className="text-text-muted select-none">Misclassified as Independent Contractor What to Do</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            Misclassified as a 1099 Contractor? Here's What You Can Do and What You're Owed
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <ShieldAlert size={14} className="text-blue shrink-0" />
               <span>LABOR COMPLIANCE & LEGAL REMEDIATION</span>
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
              <span className="text-blue font-bold">1,410 WORDS</span>
            </div>
          </div>
        </div>

        {/* EXECUTIVE SUMMARY BOX */}
        <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-3 font-sans">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue font-mono">Deduction Foundations</h3>
          <ul className="text-xs text-text-muted space-y-2 list-none pl-0 font-mono">
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>The Core Legal Disconnect</strong>: Labeling a worker as a 1099 contractor while demanding employee-like control is illegal federal tax and labor code tax evasion.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>IRS Direct Redress</strong>: File IRS Form SS-8 to request an official agency determination, and employ Form 8919 to pay only your employee-equivalent portion of Social Security and Medicare taxes.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>The Strictest Benchmark</strong>: California's AB5 statutory ABC framework represents the nationwide benchmark for labor enforcement, forcing companies to prove a worker's complete autonomy.</span>
             </li>
          </ul>
        </div>

        {/* INTRODUCTION */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Worker classification is not a choice or a mutual agreement. It is a legal distinction determined strictly by federal and state tax codes. Despite this, companies routinely label standard employees as 1099 independent contractors to shift operating expenses and tax burdens onto individual workers.
          </p>

          <p>
            When a hiring entity misclassifies your role, they avoid key federal obligations. They bypass payroll tax contributions, worker's compensation insurance, unemployment coverage, family leave benefits, and minimum wage protections. While this lowers the employer's costs, it puts a significant financial and tax burden directly on you.
          </p>

          <p>
            If you suspect you have been <strong className="text-text-primary">misclassified as independent contractor what to do</strong> is a question that requires immediate, strategic action. Regaining your lawful status can recover thousands of dollars in overpaid taxes, unpaid overtime wages, and lost employee benefits.
          </p>

          <p>
            This comprehensive guide outlines the exact steps to identify misclassification, file for federal recourse, calculate your financial losses, and determine when to hire an employment attorney.
          </p>
        </div>

        {/* SECTION 1 - IRS 3-FACTOR TEST */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The IRS 3-Factor Test: How Common Law Distinguishes Workers
          </h2>
          <p>
            The IRS uses a common-law control standard to evaluate worker relationships. Simply signing a 1099 contract does not override this standard. The agency group factors into three core categories:
          </p>

          <div className="space-y-6">
             <div className="p-6 bg-bg-card/45 border border-border-color/15 rounded-2xl space-y-2">
                <h3 className="text-base font-black text-text-primary uppercase flex items-center gap-2">
                   <Scale size={18} className="text-blue" /> 1. Behavioral Control
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                   Behavioral control examines whether the hiring entity has the legal right to direct and control *how* you perform your work. If a company dictates your exact working hours, provides mandatory tools or software, requires step-by-step instructions, or mandates proprietary training, you are legally classified as an employee. True independent contractors control their own methods, schedules, and workflows.
                </p>
             </div>

             <div className="p-6 bg-bg-card/45 border border-border-color/15 rounded-2xl space-y-2">
                <h3 className="text-base font-black text-text-primary uppercase flex items-center gap-2">
                   <DollarSign size={18} className="text-blue" /> 2. Financial Control
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                   Financial control looks at the economic realities of your engagement. Independent contractors usually invest significantly in their own business equipment, have unreimbursed operating expenses, market their services to other clients, and can realize a direct profit or loss. If you are paid a flat hourly rate with no financial risk, reimbursed for all expenses, or barred from taking other clients, your relationship points to employee status.
                </p>
             </div>

             <div className="p-6 bg-bg-card/45 border border-border-color/15 rounded-2xl space-y-2">
                <h3 className="text-base font-black text-text-primary uppercase flex items-center gap-2">
                   <ShieldCheck size={18} className="text-blue" /> 3. Type of Relationship
                </h3>
                <p className="text-sm text-text-muted leading-relaxed">
                   This factor examines how the parties perceive their working relationship. Important indicators include written contracts, corporate benefits (such as health insurance, paid time off, or retirement matching), and the permanency of the role. If you perform core business operations on an ongoing, indefinite basis, the relationship is legally structured as an employment contract.
                </p>
             </div>
          </div>
        </div>

        {/* SECTION 2 - FORM SS-8 DETERMINATION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Step 1: Requesting an Official IRS Determination via Form SS-8
          </h2>
          <p>
            If you suspect you are misclassified, you can request an official determination directly from the federal government by filing **IRS Form SS-8 (Determination of Worker Status for Purposes of Federal Employment Taxes and Income Tax Withholding)**.
          </p>

          <p>
            Filing Form SS-8 is free. Once submitted, an IRS tax specialist reviews detailed descriptions of your working relationship, behavioral control, financial terms, and operating agreements. The agency will also contact the hiring company to obtain their perspective.
          </p>

          <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-2">
             <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-blue">The Strategic SS-8 Timeline:</h4>
             <p className="text-xs text-text-muted leading-relaxed font-sans">
                The IRS can take six months or longer to process an SS-8 determination. However, you do not have to wait for their final ruling to adjust your tax filings. You can file Form SS-8 simultaneously with your annual tax return to establish premium protection against retroactive audit penalties.
             </p>
          </div>
        </div>

        {/* SECTION 3 - FORM 8919 FOR SELF-EMPLOYMENT TAX MITIGATION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Step 2: Securing Your Payroll Tax Share with Form 8919
          </h2>
          <p>
            When you file taxes as an independent contractor, you are required to pay the full 15.3% Self-Employment Contribution Act (SECA) tax on Schedule SE. For employees, this liability is split: the worker pays 7.65% via W2 payroll deductions, and the employer pays the matching 7.65%.
          </p>

          <p>
            If you have been misclassified and have filed Form SS-8, you can use **IRS Form 8919 (Uncollected Social Security and Medicare Tax on Wages)**. This form allows you to report your 1099 earnings as wages on your Form 1040, ensuring you pay only your 7.65% share of FICA taxes.
          </p>

          <div className="bg-bg-input/30 p-4 rounded-xl font-mono text-sm text-text-primary text-center max-w-2xl mx-auto space-y-1">
             <div>1099 Earnings Reported on Form 8919 × 7.65% = Your Actual Tax Due</div>
             <p className="text-xs text-text-muted">
                The hiring company becomes responsible for calculating, reporting, and paying the remaining 7.65% share directly to the IRS.
             </p>
          </div>
        </div>

        {/* SECTION 4 - WHAT YOU CAN RECOVER */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Financial Recovery: What Are You Legally Owed?
          </h2>
          <p>
            Correcting your classification can yield significant financial recovery. If you are legally reclassified as an employee, you can recover costs across several areas:
          </p>

          <div className="space-y-4 text-sm">
             <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">1. The Employer's 7.65% FICA Share</span>
                <p className="text-text-muted">
                   You are entitled to recover the employer's half of your Social Security and Medicare taxes. If you paid self-employment tax on $80,000 of profit, reclassification can return **$6,120** directly to your pocket.
                </p>
             </div>

             <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">2. Retroactive Overtime and Minimum Wage Back-pay</span>
                <p className="text-text-muted">
                   Independent contractors are not covered by the Fair Labor Standards Act (FLSA). Once classified as an employee, you are entitled to **time-and-a-half overtime pay** for any hours worked beyond 40 in a single workweek, alongside any state-mandated overtime benefits.
                </p>
             </div>

             <div className="p-5 border border-border-color/10 rounded-xl space-y-2">
                <span className="text-blue font-bold uppercase font-mono text-xs block">3. Reimbursed Business Expenses</span>
                <p className="text-text-muted">
                   Many states (such as California under Labor Code Section 2802) require employers to reimburse employees for all necessary business expenses. You can recover costs for vehicle mileage, home internet, and specialized tools that you were forced to pay out-of-pocket.
                </p>
             </div>
          </div>
        </div>

        {/* SECTION 5 - CALIFORNIA AB5 LAW */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Strictest Standard: California Assembly Bill 5 (AB5) and the ABC Test
          </h2>
          <p>
            While the IRS uses a flexible common-law standard, several states have established much stricter frameworks. The most notable is **California Assembly Bill 5 (AB5)**, which implements the rigorous **ABC Test**.
          </p>

          <p>
            Under the ABC Test, a worker is legally presumed to be an employee *unless* the hiring entity can prove all three of the following conditions:
          </p>

          <div className="space-y-4">
             <div className="p-5 bg-bg-card/20 border border-border-color/10 rounded-xl space-y-1">
                <span className="text-blue font-bold uppercase font-mono text-xs block">A: Independence of Operation</span>
                <p className="text-sm text-text-muted">The worker is completely free from the control and direction of the hiring entity in connection with the performance of the work, both under the contract and in fact.</p>
             </div>
             <div className="p-5 bg-bg-card/20 border border-border-color/10 rounded-xl space-y-1">
                <span className="text-blue font-bold uppercase font-mono text-xs block">B: Work Outside Core Business Operations</span>
                <p className="text-sm text-text-muted">The worker performs work that is completely outside the usual course of the hiring entity's business. For example, a retail store hiring a plumber satisfies this prong, whereas a software company hiring a contract programmer does not.</p>
             </div>
             <div className="p-5 bg-bg-card/20 border border-border-color/10 rounded-xl space-y-1">
                <span className="text-blue font-bold uppercase font-mono text-xs block">C: Custom Trade or Occupation</span>
                <p className="text-sm text-text-muted">The worker is customarily engaged in an independently established trade, occupation, or business of the same nature as that involved in the work performed.</p>
             </div>
          </div>
        </div>

        {/* SECTION 6 - THE STATUTE OF LIMITATIONS AND REAL COST */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Deadlines and Key Timelines: The Statute of Limitations
          </h2>
          <p>
            Your right to recover back-pay and overpaid taxes does not last indefinitely. The statute of limitations varies by agency and claim type:
          </p>

          <ul className="list-disc list-inside text-sm text-text-muted space-y-2 pl-2">
             <li><strong className="text-text-primary">Federal IRS Refund Claims:</strong> Generally limited to **3 years** from the date your tax return was filed or 2 years from the date you paid the tax, whichever is later.</li>
             <li><strong className="text-text-primary">Federal FLSA Wage Claims:</strong> Limited to **2 years** for standard wage violations, extending to **3 years** if you can prove the employer willfully violated labor laws.</li>
             <li><strong className="text-text-primary">State Labor Board Claims:</strong> Varies by state. For example, California and New York generally permit wage claims up to **3 years** (extending further under specific state provisions).</li>
          </ul>
        </div>

        {/* SECTION 7 - LEDGER OF CASE STUDY */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Financial Comparison: The Clear Cost of Worker Misclassification
          </h2>
          <p>
             Let’s look at a realistic scenario. Mark is a graphic designer working for an agency. He earns **$75,000** annually, working 40 hours per week. 
          </p>
          <p>
             Let's compare his financial positions as a misclassified 1099 contractor versus a lawfully classified W2 employee:
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Financial Ledger: The True $75,000 Misclassification Premium Loss
            </h4>

            {/* LEDGER COMPARISON TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm font-mono">
               <table className="w-full text-left border-collapse">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Compensation Metrics</th>
                        <th className="p-4 text-right">Misclassified 1099 Contractor ($)</th>
                        <th className="p-4 text-right">Lawful W2 Employee ($)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Annual Base Compensation</td>
                        <td className="p-4 text-right font-bold">$75,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$75,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">FICA payroll tax share (Social Security & Medicare)</td>
                        <td className="p-4 text-right text-red">-$10,597 <span className="text-[10px] block opacity-70">(15.3% full SECA tax liability)</span></td>
                        <td className="p-4 text-right text-red">-$5,738 <span className="text-[10px] block opacity-70">(7.65% standard share)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs font-sans">Mandatory Employer Benefits Value</td>
                        <td className="p-4 text-right">$0 <span className="text-[10px] block opacity-70">(Not provided under 1099)</span></td>
                        <td className="p-4 text-right text-green">+$4,500 <span className="text-[10px] block opacity-70">(Employer healthcare contribution)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Unemployment & Workers Comp Share</td>
                        <td className="p-4 text-right">$0</td>
                        <td className="p-4 text-right text-green">+$950 <span className="text-[10px] block opacity-70">(Fully covered by employer)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs font-sans">Paid Time Off & Sick Leave Value</td>
                        <td className="p-4 text-right">$0</td>
                        <td className="p-4 text-right text-green">+$2,880 <span className="text-[10px] block opacity-70">(10 days paid time off)</span></td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">True Economic Compensation Value</td>
                        <td className="p-4 text-right text-red font-black text-base font-mono">$64,403</td>
                        <td className="p-4 text-right text-green font-black text-base font-mono">$77,592</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted font-sans">
              *The final reconciliation: By misclassifying Mark as a 1099 contractor, his employer saves **$13,189** annually, completely shifting this cost to Mark in the form of overpaid taxes and unpaid benefits.
            </p>
          </div>
        </div>

        {/* WHEN TO GET AN ATTORNEY SECTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Taking Action: When to Contact a Labor Attorney
          </h2>
          <p>
            You do not always need a lawyer to resolve a misclassification issue. Filing Form SS-8 with the IRS and submitting a wage claim through your state's Department of Labor are simple processes that you can navigate independently.
          </p>

          <p>
            However, you should seek professional legal counsel if your situation involves any of the following factors:
          </p>

          <ul className="list-disc list-inside text-sm text-text-muted space-y-2 pl-2">
             <li><strong className="text-text-primary">Employer Retaliation:</strong> It is illegal for an employer to fire, demote, or retaliate against you for questioning your worker status. If you face retaliation, a labor attorney can help protect your rights and pursue damages.</li>
             <li><strong className="text-text-primary">Substantial Back-Pay and Unpaid Overtime:</strong> If you are owed more than $10,000 in unpaid overtime, unreimbursed business expenses, or lost benefit allocations, an experienced attorney can help ensure you recover the full amount.</li>
             <li><strong className="text-text-primary">Class-Action Contexts:</strong> If a company misclassifies an entire team of contractors under a uniform corporate policy, filing a labor class-action lawsuit can provide leverage.</li>
          </ul>
        </div>

        {/* BRIGHT CTA COMPONENT */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Analyze Your True Employee Equivalent Rate</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Enter your current 1099 hourly fees, equivalent weekly hours, monthly corporate expenses, and state tax brackets to calculate your employee-equivalent rate and map your path to recovery.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO LIVE CONVERSION DATABASE]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Examine Your Wage Classification <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* RETIREMENT FAQ */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Worker Misclassification Compliance FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Will filing Form SS-8 harm my relationship with my employer?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes, it can create tension. Although the IRS does not share your name with the employer, the detailed questionnaire you submit will likely make your identity clear to the business. However, federal and state labor laws explicitly protect workers from retaliation. If an employer demotes or fires you for filing, they can face severe legal liabilities.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                I signed an independent contractor agreement. Did I waive my rights?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. You cannot waive your rights under the tax or labor code simply by signing an agreement. The IRS and Department of Labor determine your worker classification based on the actual facts of your day-to-day engagement, not the label used in your contract.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Are there exceptions to California's strict AB5 worker rules?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes. Under subsequent legislation (such as Assembly Bill 2257), several professional services are exempt from the strict ABC Test. Doctors, attorneys, certified public accountants, and registered therapists are subject to the more flexible common-law control standard instead.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Regulatory tax disclosure: This worker classification overview is created for educational reference only. Federal labor codes, state tax guidelines, and agency standards change consistently. Always seek counsel from a qualified labor attorney before initiating legal actions.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default MisclassificationPage;
