import React from 'react';
import { motion } from 'motion/react';
import { Calculator, AlertCircle, ArrowRight, ShieldCheck, HelpCircle, DollarSign, Table, Activity, Briefcase, FileText, Heart } from 'lucide-react';

interface TherapistComparisonPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse' | 'realestate' | 'truck' | 'therapist') => void;
}

const TherapistComparisonPage: React.FC<TherapistComparisonPageProps> = ({ handleNavClick }) => {
  return (
    <motion.div
      key="therapist-post"
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
          <span className="text-blue">Behavioral Health Analysis</span>
          <span>/</span>
          <span className="text-text-muted select-none">1099 vs W2 Therapist & Counselor</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            1099 vs W2 for Therapists and Counselors in 2025: Private Practice vs Agency Employment
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <Activity size={14} className="text-blue shrink-0" />
               <span>CLINICAL PRACTICE STRUCTURES & TAXATION ENGINE</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA & BEHAVIORAL HEALTH ADVISOR</span>
            </div>
            <div>
              <span>LAST UPDATED: </span>
              <span className="text-text-primary font-bold">JUNE 2026</span>
            </div>
            <div>
              <span>WORD COUNT: </span>
              <span className="text-blue font-bold">1,385 WORDS</span>
            </div>
          </div>
        </div>

        {/* DIRECT LEAD & CONTEXT */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
            Mental health professionals in 2025 are navigating an unprecedented shift in clinical career structures. Licensed therapists and counselors—including LCSWs, LMFTs, LPCs, and Clinical Psychologists—are increasingly choosing between traditional community agency roles, structured group practice W2 jobs, and independent 1099 telehealth or private practice operations.
          </p>

          <p>
            The financial delta between these structures is wider than ever. A mental health agency or community clinic recruiting a W2 staff therapist might propose a base salary of <strong className="text-text-primary">$72,000</strong> accompanied by group health coverage and supervised clinical hours. Meanwhile, a commercial digital telehealth network or specialized group practice might advertise contract rates translating to a gross potential income of <strong className="text-text-primary">$95,000</strong> to <strong className="text-text-primary font-mono">$115,000</strong>.
          </p>

          <p>
            To evaluate these offers properly, you must look beyond the initial numbers. Traditional W2 positions insulate you from the direct administrative overhead of running a clinical enterprise. When you transition to a 1099 contract role, you are not just changing your tax withholding structure. You are launching a professional medical service business.
          </p>

          <p>
            Being an independent operator means you are personally responsible for the entire financial back-end: self-employment taxes, private professional malpractice insurance, HIPAA-compliant electronic health record (EHR) platforms, telehealth security suites, continuing education (CEU) completions, state licensing board fees, and the physical expenses of running a compliant home office.
          </p>
        </div>

        {/* SECTION 1 - GROUP PRACTICE W2 VS PRIVATE PRACTICE 1099 */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Structural Realities: Group Practice W2 vs. Private Practice 1099
          </h2>
          <p>
            Understanding your career pathways requires evaluating the core legal and financial structures of therapist placement:
          </p>

          <div className="space-y-4">
            
            {/* W2 Agency/Group Practice */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-blue">
                 <ShieldCheck size={20} className="text-blue shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">W2 Agency and Group Practice Employment</h4>
              </div>
              <p className="text-sm text-text-muted">
                You are a direct employee. The facility controls your clinical schedule, sets caseload thresholds, structures patient intake, handles commercial billing, and processes insurance credentialing. Under a W2 structure, your employer covers half of your FICA tax burden (the 6.2% Social Security and 1.45% Medicare taxes). You also gain access to paid time off (PTO), subsidized health insurance, and matching retirement accounts (such as a 401k or 403b).
              </p>
            </div>

            {/* 1099 Independent Contractor */}
            <div className="p-6 bg-bg-card/40 border border-border-color/20 rounded-2xl space-y-2">
              <div className="flex items-center gap-3 text-red">
                 <AlertCircle size={20} className="text-red shrink-0" />
                 <h4 className="text-base font-black uppercase text-text-primary tracking-tight">1099 Independent Contractor & Solo Practice</h4>
              </div>
              <p className="text-sm text-text-muted">
                You are a distinct business entity. Whether contracting with an established group practice on a split-fee model (e.g., a 60/40 or 50/50 fee split) or providing telehealth on a digital staffing platform, you receive a gross check with zero taxes withheld. At tax time, you must pay the full 15.3% federal self-employment tax (SECA) on top of federal and state income taxes. You must also fund your own healthcare, handle billing operations, manage insurance credentialing, and cover clinical overhead.
              </p>
            </div>

          </div>
        </div>

        {/* SECTION 2 - BURNOUT, CASELOAD AND CLINICAL CONSIDERATIONS */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Clinical Realities: Caseload Limits and Burnout Risk
          </h2>
          <p>
            Therapeutic practice is physically and emotionally demanding. To evaluate a compensation structure properly, you must analyze how rates translate into active clinical hours and administrative burdens.
          </p>

          <p>
            W2 agencies often require high caseloads to maintain financial stability. It is not uncommon for community agencies or clinics to expect **25 to 30 billable clinical hours** weekly. When you factor in mandatory treatment plans, progress notes, peer reviews, and crisis management, a 30-hour clinical load can easily become a 45-hour workweek. This high administrative and clinical burden is a primary driver of industry burnout.
          </p>

          <p>
            A 1099 contract structure offers greater flexibility. If you contract with a digital registry or run a private practice, you can set your own caseload limits. For example, you can limit your active caseload to **18 to 22 client hours** weekly. 
          </p>
          <p>
            However, this flexibility comes with a tradeoff. If you work less, your income drops. In a 1099 independent model, **unfilled slots, client cancellations, and administrative hours are completely unpaid**. Under a W2 staff salary, your paycheck remains stable even during weeks with high cancellation rates.
          </p>
        </div>

        {/* SECTION 3 - THE COMPREHENSIVE BUSINESS WRITE-OFFS CHECKLIST */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Therapist's Business Deduction Engine
          </h2>
          <p>
            Operating as a 1099 independent contractor allows you block a portion of your income from taxation using business write-offs. Since independent therapists report business profits on Schedule C, writing off eligible expenses directly reduces both your income tax and the 15.3% self-employment tax.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-xs tracking-tight flex items-center gap-2">
                   <Briefcase size={16} className="text-blue shrink-0" /> EHR Software & HIPAA Tools
                </h4>
                <p className="text-xs text-text-muted">
                   EHR platforms represent a mandatory operating cost. Software like SimplePractice, TherapyNotes, or Theranest costs **$600 to $1,200** annually. Additionally, secure HIPAA-compliant telehealth servers, digital signature hosts (like DocuSign), and intake forms are fully deductible.
                </p>
             </div>
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-xs tracking-tight flex items-center gap-2">
                   <FileText size={16} className="text-blue shrink-0" /> Malpractice & Liability
                </h4>
                <p className="text-xs text-text-muted">
                   While W2 staff are covered under the agency's policy, 1099 therapists must buy their own. Individual professional clinical liability insurance (covering standard $1M/$3M limits) through providers like CPH Insurance or NASW Assurance runs **$350 to $750** annually.
                </p>
             </div>
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-xs tracking-tight flex items-center gap-2">
                   <Activity size={16} className="text-blue shrink-0" /> State Licensing & CEUs
                </h4>
                <p className="text-xs text-text-muted">
                   Therapists must pay active fees to maintain license status (typically **$150 to $400** per registration cycle), alongside DEA certifications, multi-state applications, and specialized therapeutic continuing education courses (CEUs) ($500 - $1,500/year).
                </p>
             </div>
             <div className="p-6 border border-border-color/15 rounded-2xl bg-bg-card/25 space-y-2">
                <h4 className="font-bold text-text-primary uppercase text-xs tracking-tight flex items-center gap-2">
                   <Heart size={16} className="text-blue shrink-0" /> Telehealth Home Office
                </h4>
                <p className="text-xs text-text-muted">
                   If you practice telehealth exclusively from a dedicated space in your household, you can claim the **Home Office Deduction**. This deduction allows you to write off a portion of your rent, mortgage interest, property taxes, utilities, and high-speed internet.
                </p>
             </div>
          </div>
        </div>

        {/* SECTION 4 - LEDGER ANALYSIS AND CASE STUDY */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The Financial Reconciliation: $72,000 W2 vs. $95,000 1099
          </h2>
          <p>
            Let's evaluate a realistic scenario comparing two therapeutic career tracks. Emily is an LMFT analyzing two competing opportunities:
          </p>
          <ul className="list-disc list-inside pl-4 text-sm space-y-1">
             <li>A salaried W2 staff position at a youth counseling agency paying <strong className="text-text-primary">$72,000</strong> a year. Benefits include agency-sponsored malpractice coverage, 15 days of paid vacation (PTO), and a healthcare contribution of $550/month.</li>
             <li>An independent 1099 telehealth therapist role at a modern group registry paying a flat hourly rate. Based on billing exactly **22 hours** per week for **48 weeks** (allowing for 4 weeks of unpaid time off), Emily anticipates generating **$95,000** in gross contract revenues.</li>
          </ul>
          
          <p>
            Emily estimates her business expenses at **$5,000** for a dedicated telehealth room, EHR software, liability insurance, multi-state boards, and specialized training—leaving a net profit of **$90,000**.
          </p>

          <div className="space-y-4">
            <h4 className="text-xs font-mono font-bold text-blue uppercase tracking-widest flex items-center gap-2">
               <Table size={16} /> Clinical Compensation Audit: Therapist Side-by-Side Transaction Ledger
            </h4>

            {/* LEDGER COMPARISON TABLE */}
            <div className="overflow-x-auto border border-border-color/30 rounded-2xl bg-bg-card/25 text-sm">
               <table className="w-full text-left border-collapse font-mono">
                  <thead>
                     <tr className="bg-bg-input/40 border-b border-border-color/30 text-[10px] uppercase font-black tracking-widest text-text-muted">
                        <th className="p-4">Clinical Compensation Split</th>
                        <th className="p-4 text-right">W2 Agency Position ($72,000 Salary)</th>
                        <th className="p-4 text-right">1099 Private Practice ($95,000 Gross)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-border-color/10">
                     <tr>
                        <td className="p-4 text-text-primary font-sans font-bold">Gross Contractual Cash / Salary</td>
                        <td className="p-4 text-right font-bold">$72,000</td>
                        <td className="p-4 text-right font-bold text-text-primary">$95,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">EHR Software, Rent & Malpractice Write-offs</td>
                        <td className="p-4 text-right">-$0 <span className="text-[10px] block opacity-70">(Covered by agency)</span></td>
                        <td className="p-4 text-right text-red font-bold">-$5,000</td>
                     </tr>
                     <tr className="bg-bg-input/20 font-bold">
                        <td className="p-4 text-text-primary font-sans">Effective Taxable Net Profit</td>
                        <td className="p-4 text-right">$72,000</td>
                        <td className="p-4 text-right text-text-primary">$90,000</td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">Federal Income Tax (Estimated)</td>
                        <td className="p-4 text-right">-$7,430</td>
                        <td className="p-4 text-right text-red">-$8,850 <span className="text-[10px] block opacity-70">(Reflects 20% Section 199A QBI Shelter)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">FICA / Self-Employment Tax (SECA)</td>
                        <td className="p-4 text-right">-$5,508 <span className="text-[10px] block opacity-70">(Employer covers matching half)</span></td>
                        <td className="p-4 text-right text-red">-$12,716 <span className="text-[10px] block opacity-70 font-bold">(Paid fully at self-employed rate)</span></td>
                     </tr>
                     <tr>
                        <td className="p-4 text-text-muted font-sans text-xs">State Income Tax (Assumed 5.0% flat flat example)</td>
                        <td className="p-4 text-right">-$3,600</td>
                        <td className="p-4 text-right text-red">-$4,250</td>
                     </tr>
                     <tr className="bg-blue/5">
                        <td className="p-4 text-blue font-sans font-black uppercase text-base">Net Liquid Cash Take-Home</td>
                        <td className="p-4 text-right text-green font-black text-base">$55,462</td>
                        <td className="p-4 text-right text-blue font-black text-base">$64,184</td>
                     </tr>
                  </tbody>
               </table>
            </div>

            <p className="text-sm italic text-text-muted">
              *The raw cash spreadsheet comparison shows Emily taking home **$8,722** more net cash on the 1099 contract.
            </p>
          </div>

          <p>
            However, we must evaluate the hidden benefits gaps that Emily must cover as an independent telehealth therapist out-of-pocket:
          </p>

          <div className="p-6 bg-bg-card/30 border border-dashed border-border-color/30 rounded-2xl">
             <h4 className="text-sm font-mono font-bold uppercase tracking-widest text-text-primary mb-3">Emily's Adjusted Balance Sheet:</h4>
             <ul className="space-y-2 text-sm font-sans">
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Initial 1099 Cash Advantage:</span>
                   <span className="text-green font-mono font-bold">+$8,722</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1">
                   <span>Private Health Policy (Replaces $550 pre-tax group plan):</span>
                   <span className="text-red font-mono">- $6,600</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Forfeited W2 Paid Vacation & Sick Leave (15 Days equivalent value):</span>
                   <span className="text-red">- $4,154</span>
                </li>
                <li className="flex justify-between border-b border-border-color/10 pb-1 font-mono">
                   <span>Private supervisor consultation & administrative support fees:</span>
                   <span className="text-red">- $1,200</span>
                </li>
                <li className="flex justify-between pt-1 font-black text-white bg-red/10 px-2 py-1 rounded">
                   <span>Emily's True Adjusted Bottom Line Profit:</span>
                   <span className="text-red font-mono">-$3,232 (W2 Wins in Total Value)</span>
                </li>
             </ul>
          </div>

          <p>
            When factoring in a private health plan, unpaid vacation, and administrative support, the $95,000 contract actually represents a <strong className="text-red font-bold font-mono">$3,232 loss</strong> in overall value compared to the $72,000 salaried role.
          </p>
          <p>
            To achieve true equity parity, Emily's minimum 1099 contract rate needs to be at least <strong className="text-text-primary font-mono">$103,500</strong> annually, or about $98 per billable clinical hour.
          </p>
        </div>

        {/* BRIGHT CTA COMPONENT */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Calculate Your True Counseling Billable Rate Floor</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Enter your desired diagnostic hours, EHR expenses, malpractice classes, and private health plans into our specialized therapeutic tax framework. Set your negotiation baseline.
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
              Analyze Therapist Offer <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* THERAPEUTIC FAQ SECTION */}
        <div className="space-y-6 pt-4 animate-fade-in">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            Therapist Tax & Classification FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Am I eligible for the 20% QBI deduction as an independent 1099 therapist?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes, but your earnings must fall below specific phase-out thresholds. The IRS classifies therapy and counseling as a **Specified Service Trade or Business (SSTB)**. In 2025, if your taxable income is below **$191,950** (for single filers) or **$383,900** (for joint filers), you can deduct exactly 20% of your net clinical business income under Section 199A. If your income exceeds those thresholds, the deduction is phased out.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Can telehealth therapists write off a dedicated home office and high-speed internet?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                Yes. If you operate as a 1099 contractor and practice telehealth from a dedicated room used *exclusively* and *regularly* for therapeutic sessions, you qualify for the Home Office Deduction. You can deduct a proportional share of your rent, mortgage interest, property taxes, utilities, and internet. W2 employees, however, are fully barred from claiming these home-office write-offs.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                How do I choose between an LLC and a Sole Proprietorship for my therapist contract work?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7">
                A Sole Proprietorship requires no state registration, but it offers zero liability protection. Registering a single-member LLC (or a Professional LLC/PC, depending on state medical licensing rules) provides a legal shield separating your personal assets from business liabilities. At the same time, it allows you to write off business expenses and utilize the S-Corporation tax designation.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Clinical advisory warning: This comparative behavioral healthcare tax outline is presented purely for instructional purposes. State board rules, HIPAA privacy mandates, and federal tax regulations fluctuate regularly. Always seek guidance from a certified health-industry CPA and qualified legal counsel before restructuring your practice.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default TherapistComparisonPage;
