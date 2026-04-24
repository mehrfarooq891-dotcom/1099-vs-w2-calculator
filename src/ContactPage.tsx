import React from 'react';
import { motion } from 'motion/react';
import { Mail, Send } from 'lucide-react';

const ContactPage = () => {
  return (
    <motion.div
      key="contact"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
      className="flex-grow"
    >
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto space-y-16">
          {/* Section 1 — Heading */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-7xl font-black tracking-tighter text-text-primary">Contact Us</h1>
            <p className="text-xl text-text-muted max-w-2xl mx-auto">
              Have a question or suggestion? We would love to hear from you.
            </p>
          </div>

          {/* Section 2 — Contact form */}
          <div className="p-8 md:p-12 border border-border-color/30 rounded-3xl bg-bg-card/50 shadow-2xl">
            <form action="https://formspree.io/f/YOUR_FORMSPREE_ID" method="POST" className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-text-muted">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full bg-bg-input border border-border-color rounded-lg px-4 py-3 text-sm text-text-primary focus:border-blue outline-none transition-all placeholder:text-text-muted/50"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-text-muted">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full bg-bg-input border border-border-color rounded-lg px-4 py-3 text-sm text-text-primary focus:border-blue outline-none transition-all placeholder:text-text-muted/50"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-text-muted">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject" 
                  required 
                  className="w-full bg-bg-input border border-border-color rounded-lg px-4 py-3 text-sm text-text-primary focus:border-blue outline-none transition-all placeholder:text-text-muted/50"
                  placeholder="How can we help?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-text-muted">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  required 
                  rows={4}
                  className="w-full bg-bg-input border border-border-color rounded-lg px-4 py-3 text-sm text-text-primary focus:border-blue outline-none transition-all placeholder:text-text-muted/50 resize-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full group inline-flex items-center justify-center gap-3 px-8 py-4 bg-blue text-white font-black uppercase tracking-widest rounded-full hover:bg-blue/90 transition-all shadow-blue-glow"
              >
                Send Message <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

          {/* Section 3 — Info box */}
          <div className="p-8 border border-border-color/20 rounded-2xl bg-bg-input/10 flex items-center justify-center gap-4 text-center">
            <Mail className="text-blue shrink-0" size={24} />
            <p className="text-lg font-bold text-text-primary">
              Prefer email? Write to us at: <a href="mailto:contact@w2vs1099calculator.com" className="text-blue hover:underline">contact@w2vs1099calculator.com</a>
            </p>
          </div>

          {/* Section 4 — SEO text */}
          <div className="pt-12 border-t border-border-color/30 text-center">
            <p className="text-xs text-text-muted font-mono uppercase tracking-widest">
              Contact the team behind W2 vs 1099 Calculator — a free US W2 vs 1099 tax calculator for USA.
            </p>
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;
