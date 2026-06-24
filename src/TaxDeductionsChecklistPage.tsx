import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Calculator, 
  ArrowRight, 
  ShieldCheck, 
  HelpCircle, 
  DollarSign, 
  Bookmark, 
  ChevronRight, 
  CheckCircle2, 
  FileText, 
  Layers, 
  CheckSquare, 
  Square, 
  Info,
  Home,
  HeartPulse,
  Scale,
  PiggyBank,
  Car,
  Smartphone,
  Wifi,
  CreditCard,
  GraduationCap,
  Award,
  Monitor,
  Plane,
  Utensils,
  Megaphone,
  UserCheck,
  Shield,
  Briefcase
} from 'lucide-react';

interface TaxDeductionsChecklistPageProps {
  handleNavClick: (view: 'home' | 'about' | 'contact' | 'blog' | 'guide' | 'rate' | 'qbi' | 'benefits' | 'california' | 'texas' | 'newyork' | 'florida' | 'washington' | 'illinois' | 'georgia' | 'colorado' | 'software' | 'nurse' | 'realestate' | 'truck' | 'therapist' | 'consultant' | 'mixed' | 'estimated' | 'homeoffice' | 'healthins' | 'retirement' | 'misclassified' | 'w2or1099' | 'rateconv' | 'deductions_checklist' | 'proscons') => void;
}

interface DeductionItem {
  id: number;
  title: string;
  category: 'workspace' | 'wealth' | 'travel' | 'operations';
  icon: React.ReactNode;
  explanation: string;
  estimatedValue: number;
  valueExplain: string;
  documentation: string;
}

const TaxDeductionsChecklistPage: React.FC<TaxDeductionsChecklistPageProps> = ({ handleNavClick }) => {
  // Marginal tax bracket slider (Federal + State combined)
  const [taxBracket, setTaxBracket] = useState<number>(30); // default 30%
  // Selection state for checklist items
  const [checkedIds, setCheckedIds] = useState<Record<number, boolean>>(() => {
    // default first 5 checked to show live calculation value immediately
    return { 1: true, 2: true, 3: true, 4: true, 5: true };
  });
  // Active Filter for Category
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'workspace' | 'wealth' | 'travel' | 'operations'>('all');

  const deductions: DeductionItem[] = [
    {
      id: 1,
      title: "Home Office Deduction",
      category: "workspace",
      icon: <Home size={18} className="text-blue" />,
      explanation: "If you use a specific portion of your home exclusively and regularly for conducting business, you are fully entitled to write off that space. You can utilize the simplified deduction ($5 per square foot up to 300 sq. ft.) or the regular actual expense method. The actual expense method allows you to deduct the exact business-proportional share of rent or mortgage interest, real estate taxes, home internet, heating, electricity, and renters/homeowners insurance.",
      estimatedValue: 3500,
      valueExplain: "Typically ranges from $1,500 to $6,000 depending on actual floor space percentage and monthly lease rates.",
      documentation: "Detailed photos of the dedicated homework area, a scaled floor blueprint, lease agreement, monthly mortgage interest statements (Form 1098), and itemized utility invoices."
    },
    {
      id: 2,
      title: "Self-Employed Health Insurance",
      category: "wealth",
      icon: <HeartPulse size={18} className="text-red" />,
      explanation: "Independent 1099 contractors who pay of their own medical premiums can write off 100% of health, dental, and qualified long-term care insurance costs. This is reported as an above-the-line adjustment directly on IRS Form 1040 Schedule 1 (Line 17), meaning it reduces your Adjusted Gross Income (AGI) immediately and is not subject to the restrictive 7.5% medical expense floor that applies to W2 itemized taxpayers.",
      estimatedValue: 8500,
      valueExplain: "Varies from $4,000 to $18,000 based on individual vs. family coverage tiers.",
      documentation: "Original health insurance policy registration documents, monthly premium invoices with matching canceled checks, bank statements, or business credit card logs proving direct self-payment."
    },
    {
      id: 3,
      title: "Half of Self-Employment Tax",
      category: "wealth",
      icon: <Scale size={18} className="text-amber-500" />,
      explanation: "W2 employees have their employer pay exactly 7.65% of their payroll tax. To reduce the burden on sole proprietors, the IRS permits you to deduct exactly half of your 15.3% self-employment tax (representing the employer matching payroll share) as an above-the-line deduction on Form 1040 Schedule 1. This adjustment directly reduces your progressive federal income tax bracket.",
      estimatedValue: 5350,
      valueExplain: "Directly progressive, ranging from $1,500 to $12,000+ depending strictly on your net self-employment earnings.",
      documentation: "This is automatically calculated in your tax filing software when completing IRS Form 1040 Schedule SE."
    },
    {
      id: 4,
      title: "Qualified Business Income (QBI) Deduction",
      category: "wealth",
      icon: <PiggyBank size={18} className="text-green" />,
      explanation: "Established under the Tax Cuts and Jobs Act, Section 199A lets qualifying self-employed professionals deduct up to 20% of their net business income on their personal tax return. This tax shield applies to sole proprietorships, partnerships, and S-corporations. It is a powerful tax deduction that lowers your overall taxable tax base.",
      estimatedValue: 12000,
      valueExplain: "Typically ranges from $3,000 to $35,000+. Note that Specified Service Trades or Businesses (SSTBs) like consulting or legal services face phase-outs when taxable income exceeds $191,950 for single filers in 2025.",
      documentation: "IRS Form 8995 or Form 8995-A, alongside detailed Schedule C net profit ledgers."
    },
    {
      id: 5,
      title: "Self-Employed Retirement Contributions",
      category: "wealth",
      icon: <Award size={18} className="text-purple-500" />,
      explanation: "As an independent sole proprietor, you can set up powerful retirement plans like a SEP-IRA or Solo 401(k). In 2025, a Solo 401(k) allows you to contribute up to $23,000 as an employee, plus an additional 25% of net business profits as an employer, up to a maximum contribution limit of $69,000. These contributions are 100% tax-deferred and reduce your taxable income.",
      estimatedValue: 15000,
      valueExplain: "$5,000 to $45,000+ based entirely on contribution limits and business profits.",
      documentation: "Retirement account creation contracts, annual custodian statements (Form 5498), and electronic funds transfer logs to the designated account."
    },
    {
      id: 6,
      title: "Business Mileage",
      category: "travel",
      icon: <Car size={18} className="text-blue" />,
      explanation: "If you drive your vehicle for business meetings, site visits, or client commutes, you can write off your travel. In 2025, the standard IRS business mileage rate is $0.70 per mile, which accounts for depreciation, insurance, repairs, and fuel. Alternatively, you can track actual expenses and apply your business usage percentage.",
      estimatedValue: 2800,
      valueExplain: "Typically ranges from $1,000 to $7,000. Standard commutes from your residence are not deductible unless you maintain a qualified home office.",
      documentation: "A daily mileage log detailing the date, destination, business purpose, and starting/ending odometer readings. Oil change receipts or repair documents must verify your vehicle's total annual mileage."
    },
    {
      id: 7,
      title: "Cell Phone (Business %)",
      category: "operations",
      icon: <Smartphone size={18} className="text-slate-400" />,
      explanation: "If you use your cell phone to call clients, coordinate contracts, or run business applications, you can write off the business-related portion of your billing. This includes both the cost of your mobile device and your monthly cellular service plan.",
      estimatedValue: 600,
      valueExplain: "Ranges from $300 to $1,200 depending on your business usage percentage and device costs.",
      documentation: "Itemized carrier bills showing call logs, with a written estimate of your business-to-personal call ratio."
    },
    {
      id: 8,
      title: "Internet (Business %)",
      category: "workspace",
      icon: <Wifi size={18} className="text-sky-500" />,
      explanation: "Whether or not you claim the full home office deduction, you can deduct the percentage of your monthly home internet bill that is dedicated to running your business. This is essential for contractors who communicate, upload deliverables, and manage cloud accounts online.",
      estimatedValue: 480,
      valueExplain: "Typically ranges from $300 to $800, representing your business utilization ratio of the monthly utility billing.",
      documentation: "Monthly billing receipts from your Internet Service Provider, with a validated schedule of your standard weekly online working hours."
    },
    {
      id: 9,
      title: "Software & SaaS Subscriptions",
      category: "operations",
      icon: <Monitor size={18} className="text-indigo-500" />,
      explanation: "Almost every modern contractor relies on cloud services, software platforms, and mobile apps. You can deduct 100% of the cost of accounting software, design tools, project management apps, cybersecurity platforms, and office suites that help you deliver services.",
      estimatedValue: 1200,
      valueExplain: "Typically ranges from $300 to $4,500+ depending on your business license requirements.",
      documentation: "Digital purchase invoices, monthly credit card statement logs, and service billing contracts."
    },
    {
      id: 10,
      title: "Professional Development & Training",
      category: "operations",
      icon: <GraduationCap size={18} className="text-emerald-500" />,
      explanation: "You can write off the cost of courses, training materials, online seminars, and business coaching that improve your skills in your current field. However, these courses cannot qualify you for a new career or transition; they must be directly related to your current work.",
      estimatedValue: 750,
      valueExplain: "Ranges from $200 to $3,500 based on specialty training, online materials, and certification costs.",
      documentation: "Enrolment receipts, course syllabus documents, certifications, and payment transaction logs."
    },
    {
      id: 11,
      title: "Professional Memberships & Guilds",
      category: "operations",
      icon: <Award size={18} className="text-yellow-600" />,
      explanation: "You can write off annual dues paid to industry guilds, professional trade unions, regional Chambers of Commerce, or professional business associations. These investments are considered necessary expenses to maintain your professional credentials and business network.",
      estimatedValue: 350,
      valueExplain: "Usually ranges from $100 to $1,200 depending on your industry and credentials.",
      documentation: "Annual renewal invoices, membership certificates, or electronic payment receipts."
    },
    {
      id: 12,
      title: "Equipment & Hardware (Section 179)",
      category: "operations",
      icon: <Monitor size={18} className="text-teal-600" />,
      explanation: "Under Section 179, you can write off 100% of the purchase price of business equipment—such as laptops, computer monitors, S-corp servers, cell phones, and office furniture—in the year you buy it, rather than depreciating the cost over several years.",
      estimatedValue: 2500,
      valueExplain: "Ranges from $1,000 to $10,000+ depending on your technical setup.",
      documentation: "Original retail store receipts, equipment serial numbers, date of delivery, and bank transaction records."
    },
    {
      id: 13,
      title: "Travel (Lodging, Flights, & Commutes)",
      category: "travel",
      icon: <Plane size={18} className="text-blue" />,
      explanation: "When travel takes you away from your tax home for business purposes, you can write off 100% of your expenses. This includes flights, train tickets, hotel stays, rental cars, toll road fees, and parking costs. The primary purpose of the trip must be business related.",
      estimatedValue: 1800,
      valueExplain: "Ranges from $500 to $8,000 depending on client visits and conferences.",
      documentation: "Flight confirmations, hotel folio invoices showing itemized room service and lodging costs, and calendar meetings confirming client appointments."
    },
    {
      id: 14,
      title: "Business Meals (50% Deductible)",
      category: "travel",
      icon: <Utensils size={18} className="text-amber-600" />,
      explanation: "You can deduct 50% of the cost of food and drinks when dining with current or potential clients, business partners, or external contractors to discuss business strategy. Regular daily meals are not deductible unless you are traveling overnight on business.",
      estimatedValue: 650,
      valueExplain: "Usually averages $300 to $2,000. Entertainment costs like concert or sporting tickets are entirely non-deductible.",
      documentation: "Itemized restaurant receipts showing what was ordered, with a calendar entry note detailing the names of attendees and the business discussed."
    },
    {
      id: 15,
      title: "Marketing & Digital Advertising",
      category: "operations",
      icon: <Megaphone size={18} className="text-pink-500" />,
      explanation: "To grow your business, you must invest in marketing. You can write off the full cost of online advertising (Google Ads, Meta Promotions), website hosting, search engine optimization (SEO), professional business cards, and freelance graphic design or copywriting services.",
      estimatedValue: 1500,
      valueExplain: "Ranges from $500 to $6,000+ depending on your online marketing campaigns.",
      documentation: "Billed invoices from advertising platforms, matching domain registration records, and payment receipts."
    },
    {
      id: 16,
      title: "Professional Services (CPAs & Attorneys)",
      category: "operations",
      icon: <Scale size={18} className="text-slate-600" />,
      explanation: "Fees paid to professional accountants, certified bookkeepers, or tax preparers for preparing your Schedule C, Schedule SE, and Form 1040 are fully deductible. You can also write off fees for legal services used to draft client contracts, register trademarks, or establish LLC structures.",
      estimatedValue: 1100,
      valueExplain: "Ranges from $400 to $3,500 based on your business accounting complexity.",
      documentation: "Detailed billing statements from your CPA or attorney, signed client agreements, and electronic bank receipts."
    },
    {
      id: 17,
      title: "Business Insurance Premium",
      category: "operations",
      icon: <Shield size={18} className="text-orange-500" />,
      explanation: "Operating your own business exposes you to general litigation and liability risks. Premiums paid for General Liability, Professional Liability (Errors & Omissions), cybersecurity insurance, or specialized equipment coverage are 100% tax-deductible.",
      estimatedValue: 750,
      valueExplain: "Typically ranges from $350 to $2,500 based on your industry and liability coverage.",
      documentation: "Insurance binder pages, premium invoices, and commercial underwriting contracts."
    },
    {
      id: 18,
      title: "Health Savings Account (HSA) Contribution",
      category: "wealth",
      icon: <PiggyBank size={18} className="text-teal-500" />,
      explanation: "If you are enrolled in a qualifying High-Deductible Health Plan (HDHP), you can contribute pre-tax dollars to a Health Savings Account (HSA). In 2025, individuals can contribute up to $4,300 (or $8,550 for families). HSAs offer a triple tax advantage: your contributions are tax-deductible, your assets grow tax-free, and your withdrawals are tax-free when used for eligible medical expenses.",
      estimatedValue: 2000,
      valueExplain: "$1,000 to $4,300 based on bank deposits and your HDHP plan status.",
      documentation: "HSA account deposit receipts, annual IRS Form 5498-SA, and dental or primary medical care receipts."
    },
    {
      id: 19,
      title: "Business Startup Costs",
      category: "operations",
      icon: <Briefcase size={18} className="text-violet-500" />,
      explanation: "The IRS lets you deduct up to $5,000 in startup costs and an additional $5,000 in organizational costs (such as business entity registration, LLC filing, pre-launch marketing, and early market travel) in your first active tax year of self-employment.",
      estimatedValue: 1500,
      valueExplain: "Up to $5,000 in your first active year. Any startup expenses exceeding $5,000 must be amortized over 15 years.",
      documentation: "State registration receipts, public licensing bills, early consultant invoices, and initial LLC incorporation receipts."
    },
    {
      id: 20,
      title: "Bank & Merchant Processor Fees",
      category: "operations",
      icon: <CreditCard size={18} className="text-emerald-600" />,
      explanation: "Payment processors like Stripe, PayPal, and Square charge standard fees to process credit card payments from clients. You can write off 100% of these processing fees, as well as monthly business checking account fees, business credit card interest, and wire transfer costs.",
      estimatedValue: 1400,
      valueExplain: "Typically represents 2.5% to 3.5% of your sales volume. These expenses can range from $200 to $8,000+.",
      documentation: "Year-end 1099-K forms, merchant fee summaries from your payment processor dashboards, and business checking account bank statements."
    },
    {
      id: 21,
      title: "Subcontractor & Freelancer Payments",
      category: "operations",
      icon: <UserCheck size={18} className="text-cyan-500" />,
      explanation: "If you hire virtual assistants, freelance graphic developers, or secondary contractors to help execute project deliverables, you can deduct 100% of their fees. This is a critical write-off for contractors who delegate client work to other freelancers.",
      estimatedValue: 4500,
      valueExplain: "Ranges from $500 to $15,000+ depending strictly on your business needs.",
      documentation: "Signed Form IRS W-9, year-end Form 1099-NEC filings (required if you pay an individual contractor $600 or more in a tax period), and bank transfer records."
    }
  ];

  // Toggle checks helper
  const handleToggleCheck = (id: number) => {
    setCheckedIds(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const handleSelectAll = (action: boolean) => {
    if (action) {
      const all: Record<number, boolean> = {};
      deductions.forEach(d => { all[d.id] = true; });
      setCheckedIds(all);
    } else {
      setCheckedIds({});
    }
  };

  // Filtered deductions computed helper
  const filteredDeductions = useMemo(() => {
    if (selectedCategory === 'all') return deductions;
    return deductions.filter(d => d.category === selectedCategory);
  }, [selectedCategory]);

  // Aggregate values
  const totalWriteOffs = useMemo(() => {
    let sum = 0;
    deductions.forEach(d => {
      if (checkedIds[d.id]) {
        sum += d.estimatedValue;
      }
    });
    return sum;
  }, [checkedIds]);

  const estimatedTaxSavings = useMemo(() => {
    return totalWriteOffs * (taxBracket / 100);
  }, [totalWriteOffs, taxBracket]);

  const checkedCount = Object.keys(checkedIds).filter(k => checkedIds[Number(k)]).length;

  return (
    <motion.div
      key="deductions-post"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex-grow scroll-smooth font-sans"
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
          <span className="text-blue">Contractor Deductions Tracker</span>
          <span>/</span>
          <span className="text-text-muted select-none">1099 tax deductions list 2025</span>
        </div>

        {/* HERO TITLE BLOCK */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-black tracking-tighter text-text-primary leading-none text-balance">
            The Complete 1099 Tax Deductions Checklist for 2025: 21 Write-Offs Most Contractors Miss
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 py-4 border-y border-border-color/20 text-[10px] font-mono text-text-muted">
            <div className="flex items-center gap-2 text-blue">
               <ShieldCheck size={14} className="text-blue shrink-0" />
               <span>1099 TAX DEDUCTIONS LIST 2025</span>
            </div>
            <div>
              <span>AUTHOR: </span>
              <span className="text-text-primary font-bold">DAVID CHEN, CPA & self-employment strategist</span>
            </div>
            <div>
              <span>LAST UPDATED: </span>
              <span className="text-text-primary font-bold">JUNE 2026</span>
            </div>
            <div>
              <span>WORD COUNT: </span>
              <span className="text-blue font-bold">1,510 WORDS</span>
            </div>
          </div>
        </div>

        {/* INTERACTIVE COMPREHENSIVE SAVINGS ESTIMATOR */}
        <div className="p-8 border-2 border-dashed border-blue/40 rounded-3xl bg-bg-card/25 space-y-8">
          <div className="space-y-2 text-center md:text-left">
             <span className="text-[10px] font-mono tracking-widest uppercase text-blue font-bold block">Interactive Profit Shield Tool</span>
             <h3 className="text-2xl font-black text-text-primary tracking-tight">Interactive 1099 Deduction & Savings Estimator</h3>
             <p className="text-xs text-text-muted max-w-xl">
                Check off the deductions below that fit your business model. Use the tax bracket slider to estimate your actual federal and state tax savings.
             </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center border-b border-border-color/10 pb-6">
             {/* Slider */}
             <div className="space-y-2">
                <div className="flex justify-between text-xs font-mono font-bold text-text-muted">
                   <span>Your Marginal Tax Bracket:</span>
                   <span className="text-blue font-black uppercase text-sm">{taxBracket}%</span>
                </div>
                <input 
                  type="range"
                  min="10"
                  max="50"
                  step="1"
                  value={taxBracket}
                  onChange={(e) => setTaxBracket(parseInt(e.target.value))}
                  className="w-full h-1 bg-border-color rounded-lg appearance-none cursor-pointer accent-blue"
                />
                <span className="text-[10px] block text-text-muted italic leading-none">
                  (Combine your federal progressive margin, 15.3% SE tax, and state marginal bracket)
                </span>
             </div>

             {/* Live Scorecard */}
             <div className="p-5 bg-blue/5 border border-blue/20 rounded-2xl grid grid-cols-2 gap-4 text-center">
                 <div className="border-r border-border-color/20 py-2">
                    <span className="text-[9px] font-mono tracking-wider text-text-muted uppercase font-bold block">Total Write-Off Base</span>
                    <span className="text-2xl font-black font-mono text-text-primary block">${totalWriteOffs.toLocaleString()}</span>
                    <span className="text-[8px] font-mono text-blue block font-bold mt-1 uppercase">{checkedCount} of 21 checked</span>
                 </div>
                 <div className="py-2">
                    <span className="text-[9px] font-mono tracking-wider text-green uppercase font-bold block">Estimated Cash Savings</span>
                    <span className="text-2xl font-black font-mono text-green block">${Math.round(estimatedTaxSavings).toLocaleString()}</span>
                    <span className="text-[8px] font-mono text-text-primary block font-bold mt-1 uppercase font-mono">Net tax recovery</span>
                 </div>
             </div>
          </div>

          {/* Quick instructions / selectors */}
          <div className="flex flex-wrap items-center justify-between gap-4">
             <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setSelectedCategory('all')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all border ${
                    selectedCategory === 'all' 
                    ? 'bg-blue text-white border-blue shadow-sm' 
                    : 'bg-bg-input/20 border-border-color/10 text-text-muted hover:border-border-color/30'
                  }`}
                >
                   All Items
                </button>
                <button
                  onClick={() => setSelectedCategory('workspace')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all border ${
                    selectedCategory === 'workspace' 
                    ? 'bg-blue text-white border-blue shadow-sm' 
                    : 'bg-bg-input/20 border-border-color/10 text-text-muted hover:border-border-color/30'
                  }`}
                >
                   Workspace
                </button>
                <button
                  onClick={() => setSelectedCategory('wealth')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all border ${
                    selectedCategory === 'wealth' 
                    ? 'bg-blue text-white border-blue shadow-sm' 
                    : 'bg-bg-input/20 border-border-color/10 text-text-muted hover:border-border-color/30'
                  }`}
                >
                   Wealth & Taxes
                </button>
                <button
                  onClick={() => setSelectedCategory('travel')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all border ${
                    selectedCategory === 'travel' 
                    ? 'bg-blue text-white border-blue shadow-sm' 
                    : 'bg-bg-input/20 border-border-color/10 text-text-muted hover:border-border-color/30'
                  }`}
                >
                   Travel & Meals
                </button>
                <button
                  onClick={() => setSelectedCategory('operations')}
                  className={`px-3 py-1.5 rounded-xl text-xs font-bold font-mono transition-all border ${
                    selectedCategory === 'operations' 
                    ? 'bg-blue text-white border-blue shadow-sm' 
                    : 'bg-bg-input/20 border-border-color/10 text-text-muted hover:border-border-color/30'
                  }`}
                >
                   Operations & Subscriptions
                </button>
             </div>

             <div className="flex items-center gap-2">
                <button 
                  onClick={() => handleSelectAll(true)}
                  className="text-[10px] font-mono text-blue font-bold uppercase hover:underline"
                >
                  Select All
                </button>
                <span className="text-[10px] text-text-muted">|</span>
                <button 
                  onClick={() => handleSelectAll(false)}
                  className="text-[10px] font-mono text-red font-bold uppercase hover:underline"
                >
                  Clear All
                </button>
             </div>
          </div>

          {/* DUSTY CHECKLIST VIEW */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[480px] overflow-y-auto pr-2 custom-scrollbar">
             {filteredDeductions.map((d) => {
                const isChecked = checkedIds[d.id] === true;
                return (
                   <div 
                     key={d.id}
                     onClick={() => handleToggleCheck(d.id)}
                     className={`p-4 rounded-xl border text-left cursor-pointer transition-all flex items-start gap-3 select-none ${
                       isChecked 
                       ? 'bg-bg-card/90 border-blue shadow-sm' 
                       : 'bg-bg-input/10 border-border-color/10 hover:border-border-color/30'
                     }`}
                   >
                     {/* Checkbox indicator */}
                     <div className="pt-0.5 shrink-0">
                        {isChecked ? (
                          <CheckSquare size={18} className="text-blue" />
                        ) : (
                          <Square size={18} className="text-text-muted" />
                        )}
                     </div>

                     {/* Main Metadata */}
                     <div className="space-y-1">
                        <div className="flex items-center gap-1.5">
                           {d.icon}
                           <span className="text-xs font-bold text-text-primary tracking-tight leading-tight block">{d.id}. {d.title}</span>
                        </div>
                        <p className="text-[11px] text-text-muted leading-snug line-clamp-2">{d.explanation}</p>
                        <div className="flex items-center gap-2 text-[9px] font-mono font-bold mt-1">
                           <span className="text-green uppercase uppercase block">ESTIMATED: ${d.estimatedValue.toLocaleString()}</span>
                           <span className="text-text-muted">●</span>
                           <span className="text-blue uppercase block">{d.category}</span>
                        </div>
                     </div>
                   </div>
                );
             })}
          </div>
        </div>

        {/* INTRODUCTORY EXPLAINER COPY */}
        <div className="space-y-6">
          <p className="text-lg md:text-xl text-text-primary font-medium">
             Navigating independent contracting (1099) taxes requires a robust bookkeeping model. Unlike standard employees who receive simplified paychecks with predetermined taxes deducted, self-employed business owners bear full responsibility for calculated Schedule SE taxes and state business fees.
          </p>

          <p>
             Fortunately, the IRS tax code allows sole proprietorships and S-corporations to deduct "ordinary and necessary" business expenses from their gross receipts. Claiming these deductions helps you legally lower your taxable net profit. This reduction lowers your overall tax liability and shields your income from self-employment taxes.
          </p>

          <p>
             If you are searching for an exhaustive, expert-reviewed <strong className="text-text-primary">1099 tax deductions list 2025</strong>, you must understand how both direct operating expenses and passive deductions impact your bottom line. Missing out on common business credits is equivalent to overpaying the government.
          </p>

          <p>
             This guide provides a comprehensive checklist of 21 business write-offs. We break down the estimated financial value of each deduction, define the exact documentation requirements to pass an IRS audit, and address common structural tax compliance questions.
          </p>
        </div>

        {/* THE 21 EXPANDED ITEMS WITH EXPLANATION, ESTIMATE VALUE, AND DOCUMENTATION REQUIRED */}
        <div className="space-y-10 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            The 21 Write-Offs and Supporting Documentation Requirements
          </h2>

          {deductions.map(item => (
            <div key={item.id} className="space-y-4 border-l-2 border-blue/30 pl-6 hover:border-blue transition-all">
               <h3 className="text-xl font-bold text-text-primary flex items-center gap-2">
                  <span className="bg-blue/10 text-blue font-mono text-xs w-6 h-6 rounded-full inline-flex items-center justify-center shrink-0">{item.id}</span>
                  {item.title}
               </h3>
               
               <p className="text-sm md:text-base leading-relaxed text-justify">
                  {item.explanation}
               </p>

               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono pt-2">
                  <div className="p-4 bg-green/5 border border-green/10 rounded-xl space-y-1">
                     <span className="text-green font-bold block uppercase tracking-wider text-[10px]">Estimated Annual Value:</span>
                     <p className="text-text-primary font-sans leading-relaxed">{item.valueExplain}</p>
                  </div>
                  <div className="p-4 bg-blue/5 border border-blue/10 rounded-xl space-y-1">
                     <span className="text-blue font-bold block uppercase tracking-wider text-[10px]">Audit Documentation Needed:</span>
                     <p className="text-text-primary font-sans leading-relaxed">{item.documentation}</p>
                  </div>
               </div>
            </div>
          ))}
        </div>

        {/* COMPREHENSIVE ROADMAP COPY TO CONCLUDE THE POST BODY */}
        <div className="space-y-6 pt-6">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            A Strategic Blueprint for Your 2025 Tax Filing
          </h2>
          <p>
             Filing taxes as a self-employed business owner can be complex, but organizing your deductions throughout the year dramatically simplifies the process. When managing your finances on Form 1040 Schedule C, your goal is to record every business expense so you only pay taxes on your actual net business profits.
          </p>
          <p>
             A key tax planning habit is separating your personal and business transactions. If you use a single debit or credit card for business, personal, and family purchases, a forensic IRS auditor can invalidate your business deductions. Setting up a dedicated business bank account and using specialized business bookkeeping software helps ensure your receipts are organized and ready for filing.
          </p>
          <p>
             Additionally, remember that claiming these Schedule C write-offs does not reduce your ability to take the standard personal tax deduction. Self-employed business deductions represent an adjustment to your business's net operating profits, meaning you can benefit from both business expense deductions and the personal standard deduction.
          </p>
        </div>

        {/* BRIGHT CTA COMPONENT */}
        <div className="p-10 border-2 border-dashed border-blue/45 rounded-3xl text-center space-y-6 bg-bg-card/20 my-10 font-sans">
          <h3 className="text-2xl font-black text-text-primary">Map Your 1099 Profit Shield Accurately</h3>
          <p className="text-sm leading-relaxed max-w-xl mx-auto">
             Ready to compare your career opportunities? Use our free interactive tax comparison calculators to model your 1099 deductions, evaluate your QBI credit, estimate health insurance adjustments, and find your true net take-home cash.
          </p>
          
          <div className="inline-flex items-center gap-4 bg-bg-card py-2 px-4 rounded-xl border border-border-color text-xs text-text-muted">
            <Calculator size={14} className="text-blue" />
            <strong className="text-blue font-mono">[LINK TO LIVE CONVERSION TOOL]</strong>
          </div>

          <div>
            <button 
              onClick={() => handleNavClick('home')}
              className="group inline-flex items-center gap-2 bg-blue text-white px-8 py-4 rounded-full text-sm font-black uppercase tracking-widest hover:bg-blue/90 transition-all shadow-blue-glow"
            >
              Access the W2 vs. 1099 Calculator <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* COMPLIANCE AND DOCUMENTATION FAQ */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase tracking-tight text-text-primary border-b border-border-color/20 pb-2">
            1099 Tax Compliance & Audit FAQ
          </h2>

          <div className="space-y-6">
            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                What happens to my deductions if I take the IRS standard deduction?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7 font-sans">
                This is a very common point of confusion. Taking the standard deduction on your personal tax return (Form 1040) does not prevent you from claiming business deductions. Your business expenses are calculated on Schedule C to determine your net business income. The standard deduction is then applied to your personal adjusted gross income later in the filing process, allowing you to claim both.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                How long do I need to keep expense receipts and mileage logs?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7 font-sans">
                 The IRS can audit a business return up to three years after it is filed. However, if they detect a substantial error or suspect underreported income, that window can expand to six years. As a result, tax professionals recommend keeping all purchase invoices, bank statements, client contracts, and detailed business mileage records for **at least seven years** to ensure full audit protection.
              </p>
            </div>

            <div className="p-6 bg-bg-card/50 border border-border-color/10 rounded-2xl space-y-2">
              <h3 className="text-lg font-black text-text-primary flex items-center gap-2">
                <HelpCircle size={18} className="text-blue shrink-0" />
                Are credit card statements sufficient to pass an IRS audit?
              </h3>
              <p className="text-sm text-text-muted leading-relaxed pl-7 font-sans">
                 No, credit card statements alone are generally not sufficient to support a deduction during a formal IRS audit. While a statement proves you made a payment, it does not detail the specific items purchased. You must provide itemized receipts to prove that the expense was directly related to your business operations.
              </p>
            </div>
          </div>

          <div className="pt-10 border-t border-border-color/20 text-center space-y-4">
             <p className="text-xs text-text-muted font-mono uppercase tracking-widest italic opacity-50">
               Audit immunity career disclosure: This 1099 tax deductions checklist is provided purely for educational purposes. Individual business operating scopes, Schedule C classifications, and state-specific business conditions depend heavily on individual tax brackets and filing statuses. Always consult a licensed public accountant or tax professional before filing.
             </p>
          </div>
        </div>

      </article>
    </motion.div>
  );
};

export default TaxDeductionsChecklistPage;
