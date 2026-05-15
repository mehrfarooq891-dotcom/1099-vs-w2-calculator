import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, FileText, Landmark, Key, Shield } from 'lucide-react';

interface BlogPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog') => void;
}

const BlogPage: React.FC<BlogPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="blog-post"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex-grow scroll-smooth"
    >
      <article className="py-20 px-6 max-w-4xl mx-auto space-y-12">
        
        {/* Breadcrumb & Meta */}
        <div className="flex flex-wrap items-center gap-2 text-xs font-mono font-bold uppercase tracking-widest text-text-muted">
          <button 
            onClick={() => handleNavClick('home')}
            className="hover:text-blue transition-colors"
          >
            Home
          </button>
          <span>/</span>
          <span className="text-blue">Tax Guides</span>
          <span>/</span>
          <span className="text-text-muted select-none">SE Tax 2025</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none">
            Self-Employment Tax Rate 2025: What 1099 Workers Actually Pay (With Real Examples)
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-xs font-mono text-text-muted">
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA</span>
            </div>
            <div>
              <span>UPDATED: </span>
              <span className="text-text-primary font-bold font-mono">MAY 2026</span>
            </div>
            <div>
              <span>READING TIME: </span>
              <span className="text-blue font-bold">8 MINS</span>
            </div>
          </div>
        </div>

        {/* COMPREHENSIVE HIGH-DENSITY ARTICLE SECTION */}
        <div className="space-y-8 text-text-muted leading-relaxed text-base md:text-lg">
          
          <div className="p-8 border border-red/30 rounded-2xl bg-red/5 space-y-4">
            <div className="flex items-center gap-3">
              <AlertCircle className="text-red shrink-0 animate-pulse" size={24} />
              <h4 className="text-lg font-black uppercase text-text-primary tracking-tight">The $11,304 Reality Check</h4>
            </div>
            <p className="text-sm md:text-base leading-relaxed text-text-primary">
              You just got your first $80,000 freelance year. Congratulations. Now prepare for a $11,304 tax bill you weren't expecting.
            </p>
            <p className="text-xs text-text-muted leading-relaxed">
              When transitioning from W2 to 1099 contract operations, many independent professionals are blind-sided by self-employment tax. This article breaks down the exact math, the statutory deduction mechanics, and 2025 specific benchmarks so you do not get burned.
            </p>
          </div>

          <p>
            Making the leap to self-employment is a major milestone for any skilled professional. Whether you are consulting for corporate clients or building a boutique service firm, the top-line revenue feels liberating. However, that giant monthly invoice payment lands in your business bank account intact, without a single penny deducted for social services or public infrastructure. No Federal Insurance Contributions Act (FICA) line item appears to siphon away contributions.
          </p>

          <p>
            This freedom is temporary. Under the internal revenue code, you are classified as both the employer and the employee. As such, you bear the fiscal weight of both parties. This is the origin of the self-employment tax, technically governed by the Self-Employment Contributions Act (SECA). Recognizing exactly how this rate is assessed is the difference between a highly profitable venture and unexpected financial distress.
          </p>

          {/* H2 BLOCK */}
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            Breaking Down the 15.3% Self-Employment Tax Rate
          </h2>

          <p>
            What is the actual <strong className="text-text-primary">self employment tax rate 2025</strong> requires you to pay? The headline rate is <strong className="text-text-primary">15.3%</strong> of your net self-employment earnings. However, this 15.3% is not a single flat pool of money; it is a composite of two distinct social programs:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-6">
            <div className="p-6 bg-bg-card/40 border border-border-color/30 rounded-xl space-y-3">
              <h4 className="text-sm font-black text-blue uppercase tracking-widest font-mono">1. Social Security (12.4%)</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                This portion funds old-age, survivors, and disability insurance. It is capped at a strict taxable limit every year, representing the bulk of your SE liability.
              </p>
            </div>
            <div className="p-6 bg-bg-card/40 border border-border-color/30 rounded-xl space-y-3">
              <h4 className="text-sm font-black text-blue uppercase tracking-widest font-mono">2. Medicare (2.9%)</h4>
              <p className="text-sm text-text-muted leading-relaxed">
                This funds healthcare services for older and eligible Americans. Unlike Social Security, this tax has no maximum threshold and continues indefinitely on all earnings.
              </p>
            </div>
          </div>

          <p>
            To understand why this is a shock, consider how W2 payrolls are structured. As a salaried employee, you only see half of this rate deducted from your paycheck: <strong className="text-text-primary">6.2%</strong> for Social Security and <strong className="text-text-primary">1.45%</strong> for Medicare, totaling <strong className="text-text-primary">7.65%</strong>. Your employer pays the matching <strong className="text-text-primary">7.65%</strong> on your behalf out of corporate funds, which is tax-deductible to them but completely invisible to you.
          </p>

          <p>
            When you operate under IRC 1099, the corporate buffer disappears. You must pay both sections yourself. That means you are assessed at the full <strong className="text-text-primary">15.3%</strong> rate. You pay the employee half, and you write the check for the employer half.
          </p>

          {/* H2 BLOCK */}
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            The Secret 92.35% Discount Rule
          </h2>

          <p>
            Fortunately, the tax system does not require you to pay this 15.3% on 100% of your raw gross revenue. First, you get to deduct all valid business write-offs—meaning you only pay on net profit. Second, the IRS implements what tax professionals refer to as the "92.35% multiplier rule."
          </p>

          <p>
            Most self-employed individuals do not know this rule exists. Since employees are not taxed on the 7.65% portion of payroll tax that their employer pays, the tax code mimics this treatment for sole proprietors. Before multiplying your net earnings by the 15.3% SE tax rate, the IRS deducts a theoretical 7.65% matching share from your net income first. Mathematically, this is expressed by multiplying your net profit by <strong className="text-text-primary">92.35%</strong> (which is 100% minus 7.65%).
          </p>

          <div className="p-6 bg-bg-input/20 border border-border-color/30 rounded-2xl space-y-3 font-mono">
            <p className="text-xs font-black text-blue uppercase tracking-widest">Calculative Formula:</p>
            <div className="text-sm md:text-base text-text-primary space-y-1">
              <p className="font-bold">Net Earnings subject to SE Tax = Net Business Profit × 92.35%</p>
              <p className="font-bold">SE Tax Liability = Subject Earnings × 15.3%</p>
            </div>
            <p className="text-xs text-text-muted mt-2">
              For $80,000 in net profit, the math behaves like this: $80,000 × 0.9235 = $73,880. This is your subject earnings. Then, $73,880 × 15.3% = $11,303.64. By utilizing this statutory discount, you save $936.36 compared to a straight 15.3% on your gross sales.
            </p>
          </div>

          {/* H2 BLOCK */}
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            The SE Tax Deduction: Offsetting Your Income Tax
          </h2>

          <p>
            To further level the playing field, the IRS provides another above-the-line deduction for the employer portion of your self-employment tax. You are permitted to deduct exactly <strong className="text-text-primary">50% of your calculated self-employment tax</strong> from your Adjusted Gross Income (AGI).
          </p>

          <p>
            This is an "above-the-line" adjustment, meaning you do not need to itemize deductions on Schedule A to claim it. It directly reduces your overall taxable income before federal income tax brackets are applied.
          </p>

          <div className="p-6 border border-blue/20 rounded-xl bg-blue/5 space-y-4">
            <h4 className="text-sm font-black text-blue uppercase tracking-wider font-mono">The Math Chain in Action:</h4>
            <ol className="list-decimal list-inside text-sm text-text-primary space-y-2">
              <li>Your net profit is <strong className="font-bold">$80,000</strong>.</li>
              <li>You calculate your SE tax as <strong className="font-bold font-mono">$11,304</strong>.</li>
              <li>You take half of that (<strong className="font-bold font-mono">$5,652</strong>) and deduct it from your gross income on Form 1040.</li>
              <li>Your income tax is now calculated on <strong className="font-bold font-mono">$74,348</strong> (assuming no other adjustments), rather than the original $80,000.</li>
              <li>If you are in the 22% marginal bracket, this single adjustment saves you <strong className="font-bold font-mono">$1,243.44</strong> on federal income taxes.</li>
            </ol>
          </div>

          {/* H2 BLOCK */}
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            Real Examples: Three Different Contract Incomes
          </h2>

          <p>
            Let's examine how this functions in the real world across three distinct income baselines. In these scenarios, we assume the contractor is filing as <strong className="text-text-primary">Single</strong>, using the standard deduction in <strong className="text-text-primary">Texas</strong> (to avoid state tax compounding), and has zero additional business deductions. 
          </p>

          {/* Comparison Table */}
          <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/30">
            <table className="w-full text-left text-sm border-collapse font-mono">
              <thead>
                <tr className="bg-bg-input/30 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                  <th className="p-4">Line Item Category</th>
                  <th className="p-4 text-right">$50,000 Profit</th>
                  <th className="p-4 text-right">$100,000 Profit</th>
                  <th className="p-4 text-right">$150,000 Profit</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-color/10">
                <tr>
                  <td className="p-4 text-text-primary font-sans font-bold">Gross Contract Revenue</td>
                  <td className="p-4 text-right text-text-primary font-bold">$50,000.00</td>
                  <td className="p-4 text-right text-text-primary font-bold">$100,000.00</td>
                  <td className="p-4 text-right text-text-primary font-bold">$150,000.00</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-muted font-sans">Multiplied by 92.35% multiplier</td>
                  <td className="p-4 text-right text-text-muted">$46,175.00</td>
                  <td className="p-4 text-right text-text-muted">$92,350.00</td>
                  <td className="p-4 text-right text-text-muted">$138,525.00</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-primary font-sans font-medium">Social Security Tax (12.4% rate)</td>
                  <td className="p-4 text-right text-red font-bold">-$5,725.70</td>
                  <td className="p-4 text-right text-red font-bold">-$11,451.40</td>
                  <td className="p-4 text-right text-red font-bold">-$17,177.10</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-primary font-sans font-medium">Medicare Tax (2.9% rate)</td>
                  <td className="p-4 text-right text-red font-bold">-$1,339.08</td>
                  <td className="p-4 text-right text-red font-bold">-$2,678.15</td>
                  <td className="p-4 text-right text-red font-bold">-$4,017.23</td>
                </tr>
                <tr className="bg-bg-input/10">
                  <td className="p-4 text-blue font-sans font-black uppercase tracking-wider">Total SE Tax Owed (15.3%)</td>
                  <td className="p-4 text-right text-blue font-black">$7,064.78</td>
                  <td className="p-4 text-right text-blue font-black">$14,129.55</td>
                  <td className="p-4 text-right text-blue font-black">$21,194.33</td>
                </tr>
                <tr>
                  <td className="p-4 text-text-muted font-sans">AGI Above-The-Line Tax Offset (50%)</td>
                  <td className="p-4 text-right text-green">+$3,532.39</td>
                  <td className="p-4 text-right text-green">+$7,064.78</td>
                  <td className="p-4 text-right text-green">+$10,597.16</td>
                </tr>
                <tr className="bg-bg-input/5">
                  <td className="p-4 text-text-primary font-sans font-bold">Net AGI before standard deductions</td>
                  <td className="p-4 text-right text-text-primary font-medium">$46,467.61</td>
                  <td className="p-4 text-right text-text-primary font-medium">$92,935.22</td>
                  <td className="p-4 text-right text-text-primary font-medium">$139,402.84</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Detailed analysis of cases */}
          <h3 className="text-xl font-bold text-text-primary pt-4 font-sans uppercase tracking-tight">Analysis at 3 levels:</h3>
          
          <div className="space-y-4 text-sm md:text-base">
            <p>
              <strong>The $50,000 Tier:</strong> Notice that even at a modest $50,000 net income level, your self-employment tax is <strong className="text-text-primary font-mono">$7,064.78</strong>. If you expect your standard deductions to clear your income tax entirely, you still owe this seven-thousand dollar bill. SE tax does not care about your standard deduction; it is calculated straight from your net schedule C profit.
            </p>
            <p>
              <strong>The $100,000 Tier:</strong> At the hundred-thousand threshold, SE tax climbs to <strong className="text-text-primary font-mono">$14,129.55</strong>. This is why saving 25-30% of every invoice is a critical standard practice. Failing to send quarterly estimates can trigger underpayment penalties on this volume of tax when tax season arrives.
            </p>
            <p>
              <strong>The $150,000 Tier:</strong> Here, you owe a massive <strong className="text-text-primary font-mono">$21,194.33</strong> in SE tax alone. At this level, corporate entity restructuring—specifically the S-Corp election—starts yielding massive savings by splitting compensation into salary and distributions, sheltering the latter.
            </p>
          </div>

          {/* H2 BLOCK */}
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            High-Earner Limits: Social Security Wages and Surtaxes
          </h2>

          <p>
            As income increases, the statutory framework changes. High-earning 1099 contractors hit two structural boundaries in the tax law:
          </p>

          <div className="space-y-6">
            <div className="border-l-4 border-blue pl-4 space-y-2">
              <h4 className="text-base font-bold text-text-primary uppercase tracking-tight">The Social Security Wage Base Cap ($176,100 in 2025)</h4>
              <p className="text-sm">
                For the 2025 tax year, the Social Security wage cap is capped strictly at <strong className="text-text-primary font-mono">$176,100</strong>. Remember that this is calculated on your subject earnings (Net Profit × 92.35%). Once your subject earnings exceed $176,100, you pay <strong className="text-text-primary">0%</strong> on any additional dollar for the 12.4% Social Security portion. 
              </p>
              <p className="text-xs text-text-muted font-mono bg-bg-card/20 p-2 rounded">
                Example: If your net profit is $200,000, your subject income is $184,700. You pay 12.4% on the first $176,100 ($21,836.40), and $0 on the remaining $8,600.
              </p>
            </div>

            <div className="border-l-4 border-amber pl-4 space-y-2">
              <h4 className="text-base font-bold text-text-primary uppercase tracking-tight">The Additional Medicare Surtax (0.9%)</h4>
              <p className="text-sm">
                Once your actual net income passes <strong className="text-text-primary font-mono">$200,000</strong> for single filers (or <strong className="text-text-primary font-mono">$250,000</strong> for MFJ), you trigger the Additional Medicare Tax of <strong className="text-text-primary">0.9%</strong>. This raises your progressive Medicare tax rate from 2.9% to <strong className="text-text-primary font-mono">3.8%</strong> on every dollar of self-employment income over that threshold limit.
              </p>
            </div>
          </div>

          {/* H2 BLOCK */}
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            5 Ways to Legally Reduce Your Self-Employment Tax Bill
          </h2>

          <p>
            If you are facing a massive tax bill, you do not have to accept defeat. The Internal Revenue Code provides several legal avenues to structure your business entity and operations to minimize your self-employment liability:
          </p>

          <div className="space-y-6">
            <h3 className="text-base font-mono font-black text-blue uppercase tracking-widest">Methods for Optimization:</h3>
            <ul className="space-y-6">
              <li className="p-6 bg-bg-card/30 border border-border-color/20 rounded-2xl space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue bg-blue/10 px-2 py-1 rounded">Method 1</span>
                <h4 className="text-lg font-black text-text-primary">Max Out Every Business Expense Deduction</h4>
                <p className="text-sm">
                  Write down every legitimate operational cost. Software subscriptions, travel miles, web hosting, office supplies, and home internet directly reduce your net profits on Schedule C. Because net profits are the basis for SE tax, every business write-off saves you both income tax AND 15.3% self-employment tax.
                </p>
              </li>
              <li className="p-6 bg-bg-card/30 border border-border-color/20 rounded-2xl space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue bg-blue/10 px-2 py-1 rounded">Method 2</span>
                <h4 className="text-lg font-black text-text-primary">Form an LLC and Elect S-Corporation Treatment</h4>
                <p className="text-sm">
                  For high earners making over $85,000 in net profit, electing S-Corp status is often the single most effective move. As an S-Corp, you split your earnings into a "Reasonable W2 Salary" and "Business Distributions." You pay the 15.3% payroll tax on your salary, but the distributions are exempt from SE tax completely.
                </p>
              </li>
              <li className="p-6 bg-bg-card/30 border border-border-color/20 rounded-2xl space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue bg-blue/10 px-2 py-1 rounded">Method 3</span>
                <h4 className="text-lg font-black text-text-primary">Claim the Self-Employed Health Insurance Deduction</h4>
                <p className="text-sm">
                  If you are self-employed and paying for your own health insurance (or family general coverage), you can deduct 100% of the premiums directly on Form 1040. This reduces your Adjusted Gross income (AGI) and helps offset your cash requirements during tax filing.
                </p>
              </li>
              <li className="p-6 bg-bg-card/30 border border-border-color/20 rounded-2xl space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue bg-blue/10 px-2 py-1 rounded">Method 4</span>
                <h4 className="text-lg font-black text-text-primary">Leverage Qualified Business Income (QBI) Deduction</h4>
                <p className="text-sm">
                  Section 199A allows eligible 1099 workers to deduct up to 20% of their net business profits from their taxable income before federal rates are applied. While it does not reduce the 15.3% SE tax itself, it slashes the federal income tax you owe, rendering more take-home cash back to your pocket.
                </p>
              </li>
              <li className="p-6 bg-bg-card/30 border border-border-color/20 rounded-2xl space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-blue bg-blue/10 px-2 py-1 rounded">Method 5</span>
                <h4 className="text-lg font-black text-text-primary">Fund Pre-Tax Retirement Accounts (Solo 401k / SEP-IRA)</h4>
                <p className="text-sm">
                  Saving for retirement via a Solo 401(k) or SEP-IRA allows you to deduct massive amounts of pre-tax contributions. This directly lowers your federal tax burden while compound interest works on your retirement accounts, accelerating your path to financial independence.
                </p>
              </li>
            </ul>
          </div>

          {/* INTERN LINK PLACEHOLDER */}
          <div className="my-10 p-8 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6">
            <h3 className="text-xl font-bold text-text-primary">Is 1099 or W2 actually better for your wallet?</h3>
            <p className="text-sm text-text-muted">
              Do not rely on rough estimates or guessing. Run your specific numbers through our state-aware calculator to compare gross values, FICA tax, lost workplace benefits, and self-employment adjustments.
            </p>
            
            <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
              <span>Anchor Link Placeholder:</span>
              <strong className="text-blue font-mono">[LINK TO CALCULATOR]</strong>
            </div>

            <div>
              <button 
                onClick={() => handleNavClick('home')}
                className="group inline-flex items-center gap-2 bg-blue text-white px-6 py-3 rounded-full text-sm font-black uppercase tracking-wider hover:scale-105 transition-transform shadow-blue-glow"
              >
                Go to Calculator Tool <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* H2 FAQ BLOCK */}
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary pt-6 border-b border-border-color/20 pb-2">
            Frequently Asked Questions (Google Snippet Optimized)
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Is self-employment tax in 2025 higher than W2 tax?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes. For self-employed individuals, the tax rate is 15.3%, which represents both the employee share and the employer share. For W2 employees, the statutory FICA rate is only 7.65% because the employer covers the other 7.65% behind the scenes.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can I avoid self-employment tax by forming an LLC?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                No, forming a standard multi-member or single-member LLC does not shield you from self-employment taxes. The IRS treats standard LLCs as pass-through entities. However, you can elect S-Corp tax status for your LLC, which allows you to pay yourself a salary (subject to SE tax) and take the rest as distributions (exempt from SE tax).
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                How do I calculate my estimated quarterly taxes for 2025?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                You calculate estimated quarterly payments using IRS Form 1040-ES. This involves estimating your total business profit for the year, computing both self-employment and income tax liabilities, dividing by four, and sending equal vouchers on April 15, June 15, September 15, and January 15.
              </p>
            </div>
          </div>

          {/* SUMMARY STATEMENT */}
          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
            <p className="text-xs text-text-muted font-mono uppercase tracking-widest">
              Disclaimer: Provided for informational purposes only. Do not substitute this article for official tax or CPA consultations.
            </p>
            <div className="flex justify-center gap-6 text-xs font-bold text-blue font-mono">
              <button onClick={() => handleNavClick('home')} className="hover:underline">NAVIGATE TO ESTIMATES TOOL</button>
              <span>•</span>
              <button onClick={() => handleNavClick('about')} className="hover:underline">READ ABOUT OUR CRITERIA</button>
            </div>
          </div>

        </div>

      </article>
    </motion.div>
  );
};

export default BlogPage;
