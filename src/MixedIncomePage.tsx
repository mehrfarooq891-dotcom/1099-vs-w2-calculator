import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, DollarSign, Table, Percent, FileText, ArrowUpRight, TrendingUp } from 'lucide-react';

interface MixedIncomePageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse' | 'realestate' | 'truck' | 'therapist' | 'consultant' | 'mixed') => void;
}

const MixedIncomePage: React.FC<MixedIncomePageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="mixed-post"
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
          <span className="text-blue">Hybrid Earners Guide</span>
          <span>/</span>
          <span className="text-text-muted select-none">W2 and 1099 in Same Year Taxes</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance animate-fade-in">
            Got Both W2 and a 1099 This Year? Here's Exactly How Your Taxes Work
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Percent size={14} className="text-blue shrink-0" />
               <span>TAX BRACKETS & SECA STACKING BLUEPRINTS</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA & PRINCIPAL TAX STRATEGIST</span>
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

        {/* EXECTUTIVE BOX */}
        <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-blue font-mono">The Dual-Income Tax Rules</h3>
          <ul className="text-xs text-text-muted space-y-2 list-none pl-0 font-mono">
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>Income Stacking</strong>: Your 1099 contract income is stacked on top of your W2 earnings, taxable entirely at your highest marginal rate.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>Double Self-Employment Tax</strong>: FICA/Medicaid payroll taxes on your W2 job do not excuse your 1099 profit. 15.3% SE tax applies immediately on the net contract profit.</span>
             </li>
             <li className="flex items-start gap-2">
                <span className="text-blue font-bold">●</span>
                <span><strong>Quarterly Adjustments</strong>: You can completely skip manual quarterly checks if you adjust your W2 Form W-4 to withhold enough to cover the 1099 liabilities instead.</span>
             </li>
          </ul>
        </div>

        {/* INTRODUCTION */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Receiving both a W2 and a 1099 in the same tax year is one of the most common ways professionals overpay taxes. Whether you are a corporate worker keeping a active side-hustle, a tech specialist taking intermittent contract projects, or a nurse supplementing wages through independent registry shifts, you occupy a unique tax space. 
          </p>

          <p>
            The mistake most dual earners make is treating their W2 income and 1099 profits as isolated financial silos. They assume that if their employer is withholding taxes from their paycheck, their tax responsibilities are covered.
          </p>

          <p>
            This assumption leads to a high tax bill and penalties on April 15th. In the eyes of the IRS, your independent earnings do not exist in a vacuum. Under standard guidelines for <strong className="text-text-primary">W2 and 1099 in same year taxes</strong>, your independent income is layered on top of your salary. This means every dollar of side-hustle profit is taxed starting at your highest marginal tax bracket. 
          </p>

          <p>
            Understanding the math behind this stacking effect is essential for preserving your earnings. Let’s examine the exact mechanics of marginal bracket stacking, analyze self-employment tax (SECA) liabilities, dissect estimated payment thresholds, walk through a realistic $65k W2 + $30k 1099 scenario, and build a system to calculate what to set aside from each check.
          </p>
        </div>

        {/* SECTION 1 - HOW 1099 COMBINES WITH W2 */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Stacking Effect: How 1099 Income Stacks on Top of Your W2
          </h2>
          <p>
            When you work a W2 job, your taxable income is reduced by your standard deduction (or itemized deductions) starting at the lowest federal bracket (10%). Your employer calculates your progressive tax withholding based on that salary figure.
          </p>

          <p>
            However, when you earn 1099 income, those lowest tax brackets are already filled by your W2 salary. 
          </p>

          <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl relative overflow-hidden">
             <div className="absolute top-0 right-0 p-4 opacity-5 pointer-events-none">
                <ArrowUpRight size={120} className="text-blue" />
             </div>
             <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest block mb-2">The Tax-Bracket Stack Architecture:</h4>
             <p className="text-sm text-text-muted leading-relaxed">
                Imagine your annual income as a tower. Your W2 salary fills the foundation—occupying the 10%, 12%, and 22% brackets. When you earn 1099 side-income, those funds do not start over at the 10% rate. Instead, they are placed directly **on top** of the W2 foundation, meaning every dollar of your net contract profit is taxed starting at your highest marginal rate (e.g., 22% or 24%).
             </p>
          </div>

          <p>
            Consequently, if your salary pushes you to the brink of a higher tax bracket, even a modest side-hustle can push your 1099 profits into that elevated tier. This dynamic explains why a side-hustle generating $15,000 can result in a federal tax liability of over $4,500.
          </p>
        </div>

        {/* SECTION 2 - SELF EMPLOYMENT TAX EXPLAINED */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Double Tax Burden: Self-Employment Tax Always Applies
          </h2>
          <p>
            Many hybrid workers believe that if they are already paying maximum FICA taxes through their day job, their contract income is exempt. This is a misunderstanding.
          </p>

          <p>
            Your W2 employer pays exactly 7.65% of your wages to cover Social Security and Medicare taxes, and your paycheck is withheld for the other 7.65%. 
          </p>

          <p>
            When you earn 1099 income, you act as both employee and employer. Consequently, the IRS demands the full **15.3% Self-Employment Tax** (comprising 12.4% Social Security and 2.9% Medicare) on exactly **92.35% of your net business profit** (Schedule C).
          </p>

          <div className="space-y-3">
             <h4 className="text-sm font-bold text-text-primary uppercase font-mono tracking-tight flex items-center gap-2">
                <AlertCircle size={16} className="text-red" /> The Social Security Wage Base Limit Check
             </h4>
             <p className="text-sm text-text-muted">
                There is one valuable exception: the Social Security wage cap limit. For the 2025/2026 tax periods, the maximum wages subject to the 12.4% Social Security portion reaches specific caps (for example, $176,100 in 2025). If your W2 salary already exceeds this cap, your 1099 income is **completely exempt from the 12.4% Social Security portion** of the self-employment tax. However, the 2.9% Medicare tax will still apply to every dollar of your net contract profit.
             </p>
          </div>
        </div>

        {/* SECTION 3 - ESTIMATED TAXES AND THE $1,000 SAFE HARBOR RULES */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Estimated Quarterly Payments and Safe Harbor Rules
          </h2>
          <p>
            The US tax system is built on a "pay-as-you-go" framework. If you expect to owe more than **$1,000 in self-employment taxes** after subtracting your W2 withholdings, you are legally required to make quarterly estimated tax payments using **IRS Form 1040-ES**.
          </p>

          <p>
            Failure to make these payments quarterly results in IRS underpayment penalties, even if you pay your entire bill in full by April 15th.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm pt-2">
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-3">
                <h3 className="text-[15px] font-black text-text-primary flex items-center gap-2">
                   <ShieldCheck size={18} className="text-green shrink-0" /> Safe Harbor Rules
                </h3>
                <p className="text-xs text-text-muted font-sans leading-relaxed">
                   You can completely avoid underpayment penalties if your total tax withholdings and timely estimated payments equal at least:
                </p>
                <ul className="list-disc list-inside text-[11px] font-mono text-text-muted space-y-1">
                   <li>**90%** of the current tax period's total liability.</li>
                   <li>**100%** of your prior year's tax liability (or 110% if your prior year's Adjusted Gross Income exceeded $150,000).</li>
                </ul>
             </div>

             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-3">
                <h3 className="text-[15px] font-black text-text-primary flex items-center gap-2">
                   <Calculator size={18} className="text-blue shrink-0" /> The W4 Withholding Hack
                </h3>
                <p className="text-xs text-text-muted font-sans leading-relaxed">
                   The easiest way to manage your 1099 liabilities without filing quarterly estimated payments is to leverage your W2 job. You can file a new **Form W-4** with your employer, specifying an additional withholding amount on Line 4(c) of the form.
                </p>
                <p className="text-[11px] font-mono text-text-muted">
                   Because W2 withholdings are treated as paid evenly throughout the year, this strategy simplifies your payments and shields you from underpayment penalties.
                </p>
             </div>
          </div>
        </div>

        {/* SECTION 4 - CASE STUDY METRICS */}
        <div className="space-y-6 pt-4 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Hybrid Math: $65,000 W2 + $30,000 1099 Side-Hustle
          </h2>
          <p>
             Let’s walk through a complete, step-by-step tax calculation for Lisa, a graphics editor with a steady job and a thriving freelance business:
          </p>
          <ul className="list-disc list-inside pl-4 text-sm space-y-1">
             <li><strong className="text-text-primary">Lisa’s Salary (W2):</strong> Lisa earns **$65,000** in W2 wages. Her employer automatically withholds federal income taxes and covers their half of FICA.</li>
             <li><strong className="text-text-primary">Lisa’s Side Hustle (1099):</strong> Lisa generates **$30,000** in gross freelance billings. She incurs **$5,000** in business expenses (EHR portals, hardware, travel), leaving a net freelance profit of **$25,000** on Schedule C.</li>
          </ul>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Financial Ledger: Comprehensive Dual W2 & 1099 Tax Allocation
            </h4>

            {/* LEDGER COMPARISON TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Tax & Expense Allocations</th>
                        <th className="p-4 text-right">W2 Salary Only ($65,000)</th>
                        <th className="p-4 text-right">Combined W2 + 1099 ($95,000 Total)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Total Gross Earnings</td>
                        <td className="p-4 text-right font-bold">$65,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$95,000 <span className="text-[10px] block opacity-70">($65k wages + $30k gross contracts)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Schedule C Operating Deductions</td>
                        <td className="p-4 text-right">-$0</td>
                        <td className="p-4 text-right text-red font-bold">-$5,000 <span className="text-[10px] block opacity-70">(Home office, hardware, software)</span></td>
                     </tr>
                     <tr className="bg-bg-input/10 font-bold">
                        <td className="p-4 text-text-primary font-sans">Effective Combined Business Base</td>
                        <td className="p-4 text-right">$65,000</td>
                        <td className="p-4 text-right text-text-primary">$90,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">W2 FICA Payroll Tax (Withheld from salary)</td>
                        <td className="p-4 text-right text-red">-$4,973</td>
                        <td className="p-4 text-right text-red">-$4,973</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">1099 Self-Employment Tax (SECA)</td>
                        <td className="p-4 text-right">-$0</td>
                        <td className="p-4 text-right text-red">-$3,532 <span className="text-[10px] block opacity-70 font-bold">($25k net profit × 92.35% × 15.3%)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Section 199A QBI Tax Shield</td>
                        <td className="p-4 text-right">-$0</td>
                        <td className="p-4 text-right text-green font-bold">+$5,000 <span className="text-[10px] block opacity-70 font-mono">(Lisa deducts 20% of her net 1099 profit)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Federal Bracketed Income Tax Base</td>
                        <td className="p-4 text-right text-text-muted">-$4,930 <span className="text-[10px] block opacity-70">(Reflects standard deduction)</span></td>
                        <td className="p-4 text-right text-red font-bold">-$9,330 <span className="text-[10px] block opacity-70 font-bold">(Stacks 1099 net income into her 22% bracket)</span></td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Net Liquid Take-Home Pay</td>
                        <td className="p-4 text-right text-green font-black text-base font-mono">$55,097</td>
                        <td className="p-4 text-right text-blue font-black text-base font-mono">$72,165</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted font-sans">
              *The final reconciliation: Generating an extra $30,000 on the side yields Lisa an additional **$17,068** in net take-home cash after paying $4,400 in federal income taxes and $3,532 in self-employment taxes, offset by her $5,000 in business deductions and her QBI shield.
            </p>
          </div>
        </div>

        {/* SECTION 5 - HOW TO CALCULATE WHAT TO SET ASIDE */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Set-Aside Rule: What to Reserve From Each 1099 Check
          </h2>
          <p>
            To avoid an unexpected tax bill, you should set aside a fixed percentage of every freelance payment you receive. 
          </p>

          <p>
            For most hybrid earners, reserving a flat **30% to 35% of your gross billing** is a safe and reliable baseline. This reserve accounts for:
          </p>

          <div className="p-6 bg-blue/5 border border-blue/20 rounded-2xl space-y-4">
             <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-text-primary">The 1099 Paycheck Formula:</h4>
             <ul className="list-disc list-inside text-xs text-text-muted space-y-2 font-sans pl-2">
                <li><strong className="text-text-primary">Self-Employment Tax (SECA):</strong> Set aside **15.3%** of your net invoice value to cover FICA payroll liabilities.</li>
                <li><strong className="text-text-primary">Marginal Income Tax:</strong> Set aside **12% to 22%** based on your highest W2 salary bracket.</li>
                <li><strong className="text-text-primary">State and Local Taxes:</strong> Set aside **3% to 7%** depending on your state's tax rates.</li>
                <li><strong className="text-text-primary font-mono">Example:</strong> If you receive a **$1,000 invoice payment**, setting aside exactly **$330** in a separate interest-bearing tax account ensures your dual-income taxes are fully covered.</li>
             </ul>
          </div>
        </div>

        {/* BRIGHT CTA COMPONENT */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Analyze Your Dual-Income Tax Strategy</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Enter your W2 salary, side-hustle gross billings, business deductions, and filing state details to calculate your blended tax liability and safe-harbor options.
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
              Analyze Combined Income Now <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* DUAL EARNERS FAQ */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            W2 & 1099 Combined Tax FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Do I have to pay estimated taxes quarterly if my W2 withholding is high?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No, provided your W2 withholding covers your total tax liability within the IRS safe harbor limits. If your employer's withholdings equal at least **100% of your prior year's tax liability** or **90% of your current year's total liability**, you will not face underpayment penalties—even if you owe more than $1,000 on your 1099 side-income at tax time.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can I claim the standard deduction if I also write off 1099 business expenses?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes. This is one of the most significant advantages of earning side income. Your W2 salary and general earnings benefit from the standard deduction (or itemized deductions) on Form 1040 layout. Separately, you deduct your legitimate 1099 business expenses directly on **Schedule C** to calculate your net business profit. These two deductions are completely independent.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                How do I calculate what portion of my 1099 income is eligible for the QBI deduction?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Under Section 199A, your 20% Qualified Business Income (QBI) deduction is calculated based on your **net business profit** (gross billings minus business deductions on Schedule C), not your gross revenue. It is also limited to exactly 20% of your total **taxable income** minus any net capital gains. Keeping clean business records ensures your QBI deduction is fully protected.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Regulatory tax disclosure: This combined tax analysis is provided purely for educational reference. Individual tax liabilities depend heavily on filing status, state brackets, credits, and deductible deductions. Always seek guidance from a certified financial advisor or tax professional before making changes.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default MixedIncomePage;
