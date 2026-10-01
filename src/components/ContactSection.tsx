// src/components/ContactSection.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const [gmailUrl, setGmailUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Portfolio enquiry from ${formData.name}`;
    const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`;
    // Opens Gmail's compose window with everything pre-filled
    const url =
      `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent('brkha9838@gmail.com')}` +
      `&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setGmailUrl(url);
    const win = window.open(url, '_blank', 'noopener,noreferrer');
    // If the browser blocked the new tab, open Gmail in this tab instead
    if (!win) window.location.href = url;
    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-[#F5F4F1] text-[#1F1A16] font-sans selection:bg-[#cbb59d] selection:text-black pt-16 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              {/* Eyebrow Header */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex items-center space-x-4 mb-5"
              >
                <span
                  className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#85630F]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  06 / CONTACT
                </span>
                <div className="w-16 h-[1px] bg-gradient-to-r from-[#85630F]/80 via-[#8C6D4F]/40 to-transparent" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#1F1A16] via-[#3B312A] to-[#5E5247]">
                    LET'S CREATE
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#946E14] via-[#85630F] to-[#5A4208]">
                    SOMETHING GREAT.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#54483E] leading-relaxed max-w-md"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Have an event, exhibition stand or interior project in mind? Send a message below, or reach out directly.
              </p>

              <div
                className="mt-8 space-y-3 text-[12px] tracking-[0.12em] text-[#54483E]"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                <a href="mailto:brkha9838@gmail.com" className="block hover:text-[#85630F] transition-colors">
                  <span className="text-[#8C6D4F] font-mono text-[10px] tracking-[0.2em] mr-3">EMAIL</span>
                  brkha9838@gmail.com
                </a>
                <a href="tel:+917800425364" className="block hover:text-[#85630F] transition-colors">
                  <span className="text-[#8C6D4F] font-mono text-[10px] tracking-[0.2em] mr-3">PHONE</span>
                  +91 78004 25364
                </a>
                <span className="block">
                  <span className="text-[#8C6D4F] font-mono text-[10px] tracking-[0.2em] mr-3">BASE</span>
                  Bangalore, India
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Monolith Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#8C6D4F]/40 bg-[#FFFFFF] p-8 sm:p-10 shadow-[0_18px_50px_rgba(60,45,30,0.12)] overflow-hidden"
          >
            {/* Top Gold Horizon Edge */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#85630F]/70 to-transparent" />
            
            {/* Precision Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#85630F]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#85630F]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#85630F]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#85630F]/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-[#85630F] text-[#85630F] text-sm">
                  ✓
                </div>
                <h3 className="text-3xl text-[#1F1A16] font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  MESSAGE READY
                </h3>
                <p className="text-xs text-[#54483E] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Gmail should have opened with your message filled in. Just press send in Gmail.
                </p>
                <a
                  href={gmailUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-[11px] tracking-[0.2em] uppercase text-[#85630F] border-b border-[#85630F]/50 pb-0.5 hover:text-[#946E14]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  Didn&apos;t open? Open Gmail again
                </a>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // NAME
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter name"
                      className="w-full bg-[#FFFFFF] border border-[#8C6D4F]/30 focus:border-[#85630F] text-xs text-[#1F1A16] placeholder-[#7A6A5C] px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                      // EMAIL
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter email"
                      className="w-full bg-[#FFFFFF] border border-[#8C6D4F]/30 focus:border-[#85630F] text-xs text-[#1F1A16] placeholder-[#7A6A5C] px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#8C6D4F] mb-2">
                    // MESSAGE
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project..."
                    className="w-full bg-[#FFFFFF] border border-[#8C6D4F]/30 focus:border-[#85630F] text-xs text-[#1F1A16] placeholder-[#7A6A5C] p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 border border-[#8C6D4F]/50 bg-[#FFFFFF] hover:border-[#85630F] hover:bg-[#EFEBE4] text-[#1F1A16] hover:text-[#946E14] text-xs font-medium tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_18px_50px_rgba(60,45,30,0.12)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  SEND MESSAGE ↗
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* System Footer Line */}
        <div className="pt-16 mt-16 border-t border-[#8C6D4F]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#8C6D4F] uppercase">
            BARKHA YADAV // INTERIOR & CAD DESIGNER
          </span>
          <span className="text-[10px] font-mono text-[#8C6D4F]">
            © {new Date().getFullYear()} • BANGALORE, INDIA
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;