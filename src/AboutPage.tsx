import React from 'react';
import { motion } from 'motion/react';
import { Shield, Lock, Globe } from 'lucide-react';

const AboutPage = () => {
  return (
    <motion.div
      key="about-new"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex-grow"
    >
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto space-y-20">
          {/* Section 1 — Hero */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-text-primary">About COMPS ENGINE</h1>
            <p className="text-xl text-blue font-bold uppercase tracking-widest">Free. Instant. No signup required.</p>
          </div>

          {/* Section 2 — What We Do */}
          <div className="p-10 border border-border-color/30 rounded-3xl bg-bg-card/50 space-y-6">
            <h2 className="text-3xl font-black text-text-primary">What We Do</h2>
            <p className="text-lg text-text-muted leading-relaxed">
              COMPS ENGINE is a professional-grade fiscal comparison tool designed to help US professionals navigate the complex choice between W2 salary and 1099 contract income. We provide instant, high-accuracy tax estimates across all 50 states to ensure you know your true take-home pay before you sign any offer.
            </p>
            <p className="text-lg text-text-muted leading-relaxed">
              Our tool is completely free to use and requires no personal information, making financial transparency accessible to everyone.
            </p>
          </div>

          {/* Section 3 — Why We Built This */}
          <div className="space-y-6 text-center">
            <h2 className="text-3xl font-black text-text-primary">Why We Built This</h2>
            <p className="text-lg text-text-muted leading-relaxed max-w-2xl mx-auto">
              Most financial tools are locked behind paywalls or require creating an account just to see a number. We believe useful tools should be free and instant for everyone.
            </p>
          </div>

          {/* Section 4 — Three value cards side by side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 border border-border-color/20 rounded-2xl bg-bg-input/10 space-y-4 text-center">
              <Shield size={32} className="text-blue mx-auto" />
              <h3 className="text-xl font-bold text-text-primary">100% Free</h3>
              <p className="text-sm text-text-muted">No hidden fees, no subscriptions, ever.</p>
            </div>
            <div className="p-8 border border-border-color/20 rounded-2xl bg-bg-input/10 space-y-4 text-center">
              <Lock size={32} className="text-blue mx-auto" />
              <h3 className="text-xl font-bold text-text-primary">No Signup</h3>
              <p className="text-sm text-text-muted">No account needed. Your data stays private.</p>
            </div>
            <div className="p-8 border border-border-color/20 rounded-2xl bg-bg-input/10 space-y-4 text-center">
              <Globe size={32} className="text-blue mx-auto" />
              <h3 className="text-xl font-bold text-text-primary">Built Local</h3>
              <p className="text-sm text-text-muted">Designed for real conditions, local currency, and local laws of the USA.</p>
            </div>
          </div>

          {/* Section 5 — Small SEO text */}
          <div className="pt-12 border-t border-border-color/30 text-center">
            <p className="text-xs text-text-muted font-mono uppercase tracking-widest">
              COMPS ENGINE is a free online US W2 vs 1099 tax calculator for USA. Use it anytime with no registration required.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;
