import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, Heart, PiggyBank, Clock, LifeBuoy, FileText, HelpCircle, Briefcase, Award } from 'lucide-react';

interface BenefitsComparisonPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits') => void;
}

const BenefitsComparisonPage: React.FC<BenefitsComparisonPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="benefits-post"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex-grow scroll-smooth"
    >
      <article className="py-20 px-6 max-w-4xl mx-auto space-y-12 bg-bg-main text-text-muted leading-relaxed text-base md:text-lg">
        
        {/* Breadcrumb Navigation & Metadata */}
        <div className="flex flex-wrap items-center gap-2 text-[10px] font-mono font-bold uppercase tracking-widest text-text-muted">
          <button 
            onClick={() => handleNavClick('home')}
            className="hover:text-blue transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-blue">Financial Comparison</span>
          <span>/</span>
          <span className="text-text-muted select-none">Total Compensation</span>
        </div>

        {/* HERO HEADER */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none">
            1099 vs W2 Benefits: The Complete Dollar-for-Dollar Comparison Nobody Talks About
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Briefcase size={14} />
               <span>COMPENSATION STRATEGY</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA</span>
            </div>
            <div>
              <span>LAST UPDATED: </span>
              <span className="text-text-primary font-bold">MAY 2026</span>
            </div>
            <div>
              <span>WORD COUNT: </span>
              <span className="text-blue font-bold">1,410 WORDS</span>
            </div>
          </div>
        </div>

        {/* INTRODUCTION & DIRECT LEAD */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Your salary number is not your compensation. Here's what you're actually getting (or giving up).
          </p>

          <p>
            When engineers, developers, and designers weigh a staff position offering $100,000 against a contract offering $65 an hour, the math seems simple. They multiply $65 by 2,000 billable hours, see $130,000, and assume the contract represents a substantial 30% raises. 
          </p>

          <p>
            This linear tracking is a dangerous trap. It isolates cash flow from the broader corporate benefits ecosystem. In the United States, an employer-sponsored benefits package is a heavily subsidized suite of products designed to insulate individuals from market-rate healthcare, retirement funding gaps, and basic income drops. 
          </p>

          <p>
            When you transition to a 1099 arrangement, you exit this protective circle. Every single buffer—from health insurance plans and retirement matching to paid vacation weeks—must be priced, managed, and funded out of your gross invoices.
          </p>

          <p>
            Understanding the real economic gap in <strong className="text-text-primary">1099 contractor benefits vs W2 employee benefits</strong> requires moving beyond raw salaries and modeling exact monetary equivalents. This guide provides a detailed, granular look at the eight core benefits W2 employees get that contractors must self-fund, alongside the hidden payroll tax subsidies most people miss.
          </p>
        </div>

        {/* THE HIDDEN W2 ADVANTAGE: THE 7.65% FICA CONTRIBUTION */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Hidden W2 Advantage: The Employer's 7.65% FICA Match
          </h2>
          <p>
            Before exploring corporate perks, let’s identify the standard payroll tax mechanism. Under a traditional W2 job, the Federal Insurance Contributions Act (FICA) assesses a flat 15.3% tax on your wages to fund Social Security and Medicare.
          </p>
          <p>
            You only see exactly half of this—7.65% (6.2% for Social Security and 1.45% for Medicare)—deducted from your paycheck. The employer is legally required to cover the remaining <strong className="text-text-primary">7.65%</strong> out of their corporate funds. This employer match is entirely tax-deductible to the company but remains completely invisible on your annual wage statements.
          </p>
          <p>
            For a W2 professional making $100,000, the employer writes a check for <strong className="text-text-primary font-mono">$7,650</strong> straight to the IRS on their behalf. As a 1099 contractor, this subsidy vanishes. You are both components of the labor puzzle, meaning you write the check for the full 15.3%. That shift represents an immediate $7,650 tax clawback that you must replace through your basic billing.
          </p>
        </div>

        {/* 8 BENEFITS W2 EMPLOYEES GET THAT 1099 CONTRACTORS MUST SELF-FUND */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The 8 Core Benefits 1099 Contractors Must Self-Fund
          </h2>
          <p>
            Beyond federal taxes, standard benefits have immediate cash values. If you are negotiating a 1099 contract, these are the eight lines you must budget for:
          </p>

          <div className="space-y-6">
            
            {/* 1. Health Insurance */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-3">
              <div className="flex items-center gap-3 text-blue">
                 <Heart size={20} className="shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">1. Premium Health Insurance</h4>
              </div>
              <p className="text-sm">
                Corporate group plans heavily absorb the true cost of healthcare. According to recent data, the average employer subsidy for single employee medical coverage is approximately <strong className="text-text-primary">$7,200 annually</strong>. If you purchase equivalent high-quality coverage independently through the individual marketplace, you will pay between $500 and $700 per month in premiums, combined with high out-of-pocket deductibles.
              </p>
            </div>

            {/* 2. 401k Match */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-3">
              <div className="flex items-center gap-3 text-blue">
                 <PiggyBank size={20} className="shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">2. 401(k) Retirement Matching</h4>
              </div>
              <p className="text-sm">
                Bureau of Labor Statistics (BLS) data indicates that the average corporate retirement contribution is approximately <strong className="text-text-primary">4.7%</strong> of an employee's salary. On a $100,000 salary, this represents <strong className="text-text-primary font-mono">$4,700 in free, pre-tax money</strong> that climbs in value over time via compound interest. 
              </p>
            </div>

            {/* 3. Paid Vacation */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-3">
              <div className="flex items-center gap-3 text-blue">
                 <Clock size={20} className="shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">3. Paid Vacation Time (PTO)</h4>
              </div>
              <p className="text-sm">
                A standard professional job provides an average of 15 paid vacation days per year. Because W2 workers continue to receive their normal salary while on break, this represents roughly <strong className="text-text-primary">5.8% of their base compensation value</strong>. If you take 3 weeks off as a 1099 contractor, your revenue is exactly zero during those hours. You must build that reserve straight into your daily rate.
              </p>
            </div>

            {/* 4. Paid Sick Leave */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-3">
              <div className="flex items-center gap-3 text-blue">
                 <LifeBuoy size={20} className="shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">4. Paid Sick Leave</h4>
              </div>
              <p className="text-sm">
                If you get sick, standard workplace benefits provide an average of 8 paid days off annually. If an illness sidelines an independent contractor, their business stops generating revenue. To replace this safety margin, you must establish an emergency cash reserve indicating roughly 3% of your income.
              </p>
            </div>

            {/* 5. Life / Disability */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-3">
              <div className="flex items-center gap-3 text-blue">
                 <ShieldCheck size={20} className="shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">5. Short-Term & Long-Term Disability</h4>
              </div>
              <p className="text-sm">
                Should you face an injury or serious illness, employer-sponsored disability plans replace up to 60% of your earnings. Securing an independent, private long-term disability policy as a self-employed contractor requires paying high institutional premiums, adding between <strong className="text-text-primary font-mono">$1,000 and $2,000 annually</strong> in overhead.
              </p>
            </div>

            {/* 6. Workers Comp */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-3">
              <div className="flex items-center gap-3 text-blue">
                 <Award size={20} className="shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">6. Workers' Compensation Insurance</h4>
              </div>
              <p className="text-sm">
                If an employee is hurt on the job, workers' compensation covers all medical expenses and lost wages during recovery. Contractors are entirely excluded from this program and must purchase their own business liability and disability lines to insulate against structural hazards.
              </p>
            </div>

            {/* 7. Unemployment */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-3">
              <div className="flex items-center gap-3 text-blue">
                 <Briefcase size={20} className="shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">7. Unemployment Insurance Eligibility</h4>
              </div>
              <p className="text-sm">
                Employers pay state and federal unemployment taxes (FUTA/SUTA) behind the scenes. If a W2 employee is laid off, they can claim weekly state benefits to bridge their transition. 1099 contractors do not contribute into state unemployment funds and are entirely ineligible for payouts if a client cancels a contract.
              </p>
            </div>

            {/* 8. Training / HW Budget */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-3">
              <div className="flex items-center gap-3 text-blue">
                 <FileText size={20} className="shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">8. Hardware and Professional Development Budgets</h4>
              </div>
              <p className="text-sm">
                A corporate workplace supplies your laptop, monitor, software licenses, testing devices, and often provides an annual training budget of $1,500 for courses and conferences. Contractors must buy, maintain, and upgrade all their own physical and digital infrastructure.
              </p>
            </div>

          </div>
        </div>

        {/* HOW 1099 CONTRACTORS CAN OFFSET EACH */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Contractor Defenses: HSAs, Solo 401(k)s, and Write-Offs
          </h2>
          <p>
            While the list of absorbed values seems intimidating, the tax code balances the playing field through professional-tier optimization vehicles:
          </p>

          <div className="space-y-4 text-sm md:text-base">
            <p>
              <strong>Retirement Defenses:</strong> W2 employees are capped at a $23,500 contribution limit (for 2025/2026) in their 401(k). However, as a 1099 contractor, you can open a <strong className="text-text-primary">Solo 401(k) or SEP-IRA</strong>. This allows you to contribute up to <strong className="text-text-primary">$70,000+ per year</strong> as both the employee and employer, allowing you to shield massive amounts of pre-tax income that would otherwise face high bracket rates.
            </p>
            <p>
              <strong>Healthcare Defenses:</strong> If you use a High Deductible Health Plan (HDHP), you can fund a <strong className="text-text-primary">Health Savings Account (HSA)</strong>. HSAs offer a unique triple-tax advantage: contributions are tax-deductible, funds grow completely tax-free, and distributions are tax-free when used for medical expenses. Additionally, self-employed individuals can deduct 100% of their private health insurance premiums straight on Form 1040, bypassing standard itemization requirements.
            </p>
            <p>
              <strong>Business Write-offs:</strong> Your home office space, internet, cellular bills, software subscriptions, travel expenditures, and hardware are fully tax-deductible under Schedule C. These write-offs directly reduce the net business income representing the target for both federal income and self-employment taxes.
            </p>
          </div>
        </div>

        {/* GRANULAR TOTAL VALUE TABLE - $100K CASE STUDY */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Granular Comparison: W2 $100k Job with Average Benefits
          </h2>
          <p>
            To understand how these numbers compound, let us calculate the total compensation equivalent of an average <strong className="text-text-primary">$100,000 W2 salary</strong>. This represents the absolute baseline package that a W2 worker actually receives:
          </p>

          {/* TABLE FOR TOTAL COMP */}
          <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 my-6">
            <table className="w-full text-left text-sm border-collapse font-mono">
              <thead>
                <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                  <th className="p-4">Compensation Category</th>
                  <th className="p-4 text-right">W2 Annual Value</th>
                  <th className="p-4 text-right">1099 Replacement Burden</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-color/10">
                <tr>
                  <td className="p-4 text-text-primary font-sans font-bold">Base Take-Home Pay</td>
                  <td className="p-4 text-right">$100,000</td>
                  <td className="p-4 text-right font-bold text-text-primary">$100,000</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-muted font-sans">Employer FICA Tax Match (7.65%)</td>
                  <td className="p-4 text-right text-green-400">$7,650</td>
                  <td className="p-4 text-right text-red-400">Paid by Contractor ($7,650)</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-muted font-sans">Health, Dental & Vision Subsidy</td>
                  <td className="p-4 text-right text-green-400">$7,200</td>
                  <td className="p-4 text-right text-red-400">Self-Funded Marketplace ($7,200)</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-muted font-sans font-mono font-bold">Employer 401(k) Match (4.7% avg)</td>
                  <td className="p-4 text-right text-green-400">$4,700</td>
                  <td className="p-4 text-right text-red-400">Self-Funded Solo 401(k) ($4,700)</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-muted font-sans">Paid Time Off Reserve (15 days)</td>
                  <td className="p-4 text-right text-green-400">$5,769</td>
                  <td className="p-4 text-right text-red-400">Non-billable reserve ($5,769)</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-muted font-sans">Paid Sick Leave Reserve (8 days)</td>
                  <td className="p-4 text-right text-green-400">$3,077</td>
                  <td className="p-4 text-right text-red-400">Non-billable reserve ($3,077)</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-muted font-sans">Disability & Life Insurances</td>
                  <td className="p-4 text-right text-green-400 font-mono">$1,500</td>
                  <td className="p-4 text-right text-red-400">Private Policy premiums ($1,500)</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-muted font-sans">Hardware, Software & Training Allowance</td>
                  <td className="p-4 text-right text-green-400 font-mono font-mono">$2,500</td>
                  <td className="p-4 text-right text-red-400">Enterprise write-offs ($2,500)</td>
                </tr>
                <tr className="bg-blue/5">
                  <td className="p-4 text-blue font-sans font-black uppercase text-base">Real Value Total Compensation</td>
                  <td className="p-4 text-right text-green-400 font-black text-base">$132,396</td>
                  <td className="p-4 text-right text-blue font-black text-base">$132,396</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p>
            The final mathematical truth is stark: A W2 salary of $100,000 represents exactly <strong className="text-text-primary font-mono font-bold">$132,396 in real economic value</strong>. 
          </p>
          <p>
            If you accept a flat 1099 contract at $110,000 (which feels like a premium on paper), you have taken an effective <strong className="text-red font-bold font-mono">$22,396 pay cut</strong> in terms of your net lifestyle and long-term asset accumulation. To truly break even and fund your operations, your floor 1099 contract must represent at least <strong className="text-text-primary font-mono font-bold">$132,400 per year</strong>, translating to roughly <strong className="text-text-primary font-mono font-bold">$66.00 an hour</strong>.
          </p>
        </div>

        {/* INTERNAL LINK / REVERSE CALCULATOR PROMOTION */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/30 my-10">
          <h3 className="text-2xl font-black text-text-primary">Calculate Your True Total Comp Equivalent</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
            Avoid guessing with your bottom line. Use our dynamic, state-aware comparison tool to calculate custom FICA matches, target healthcare budgets, and state-specific deductions automatically.
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
              Examine My Offers Side by Side <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* FAQ - SNIPPET READY */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Are 1099 contractors eligible for PTO or paid holidays?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No. Because 1099 independent contractors are classified as individual vendors rather than employees, clients are only billed for actual hours worked or outlined deliverables. Contractors must establish their own PTO financial reserves to cover periods of leisure or illness.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can standard 1099 independent contractors claim unemployment?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No, under normal economic conditions, independent contractors are ineligible for state unemployment insurance. Since contractors are self-employed, they do not pay into state-level unemployment trust funds (FUTA/SUTA), leaving them with no statutory bridge payouts between contracts.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                How much extra should a 1099 contractor charge to replace W2 benefits?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                As a strict mathematical baseline, professional advisors recommend charging between 30% and 50% more than an equivalent W2 hourly rate. This premium is required to pay for health insurance premiums, replace 401(k) matching, fund non-working vacation days, and absorb self-employment tax.
              </p>
            </div>
          </div>

          {/* DISCLAIMER statement */}
          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Educational guidance only. Values presented here represent broad averages base on industry statistics. Please consult with a licensed CPA or tax attorney for formal business advisory.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default BenefitsComparisonPage;
