import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CursorState } from '../types';
import { Mail, Copy, Check, ArrowUpRight, Github, Linkedin, FileText, Send } from 'lucide-react';

interface ContactSectionProps {
  onOpenResume: () => void;
  setCursorState: (state: CursorState) => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenResume, setCursorState }) => {
  const [copied, setCopied] = useState(false);
  const [formSent, setFormSent] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate instant sending with mailto fallback
    setFormSent(true);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} (${formData.email})`);
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 sm:py-36 border-b border-white/[0.06] relative bg-[#09090C] overflow-hidden">
      
      {/* Subtle ambient lighting */}
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[300px] bg-[#C8FF00]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] font-mono tracking-widest text-[#C8FF00] uppercase font-semibold">
            [ 09 / CONTACT ]
          </span>
          <span className="text-white/20">•</span>
          <span className="text-[11px] font-mono tracking-wider text-white/40 uppercase">
            GET IN TOUCH
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Big Statement & Direct Links (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-[-0.035em] text-[#F5F5F5] uppercase leading-[1.04]">
              HAVE AN IDEA?{' '}
              <span className="text-[#C8FF00] block mt-1">
                LET'S BUILD IT.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#9E9EA7] max-w-xl leading-relaxed">
              I am actively looking for full-time opportunities in Product/UX Design and Frontend Engineering. 
              Whether you are hiring for an early-career role or discussing a project, my inbox is open.
            </p>

            {/* Email Prominent Card */}
            <div className="p-6 sm:p-8 rounded-2xl bg-[#121217] border border-white/[0.1] hover:border-[#C8FF00]/50 transition-all duration-300 space-y-4 shadow-xl">
              <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest block">
                PRIMARY DIRECT CONTACT
              </span>
              
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  onMouseEnter={() => setCursorState({ type: 'link' })}
                  onMouseLeave={() => setCursorState({ type: 'default' })}
                  className="text-lg sm:text-2xl font-mono font-bold text-white hover:text-[#C8FF00] transition-colors break-all"
                >
                  {PERSONAL_INFO.email}
                </a>

                <button
                  onClick={handleCopyEmail}
                  onMouseEnter={() => setCursorState({ type: 'explore' })}
                  onMouseLeave={() => setCursorState({ type: 'default' })}
                  className="px-4 py-2.5 rounded-lg bg-white/[0.05] hover:bg-[#C8FF00] text-white hover:text-[#080808] border border-white/[0.1] text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200 flex items-center gap-2 self-start sm:self-auto shrink-0"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-[#080808]" />
                      <span>COPIED TO CLIPBOARD</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>COPY EMAIL</span>
                    </>
                  )}
                </button>
              </div>
            </div>

            {/* Social & Resume Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursorState({ type: 'link' })}
                onMouseLeave={() => setCursorState({ type: 'default' })}
                className="p-4 rounded-xl bg-[#101014] border border-white/[0.06] hover:border-[#C8FF00]/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Github className="w-4 h-4 text-[#C8FF00]" />
                  <span className="text-xs font-mono text-white font-medium">GitHub</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#C8FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                onMouseEnter={() => setCursorState({ type: 'link' })}
                onMouseLeave={() => setCursorState({ type: 'default' })}
                className="p-4 rounded-xl bg-[#101014] border border-white/[0.06] hover:border-[#C8FF00]/40 flex items-center justify-between group transition-all"
              >
                <div className="flex items-center gap-2.5">
                  <Linkedin className="w-4 h-4 text-[#C8FF00]" />
                  <span className="text-xs font-mono text-white font-medium">LinkedIn</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#C8FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <button
                onClick={onOpenResume}
                onMouseEnter={() => setCursorState({ type: 'link' })}
                onMouseLeave={() => setCursorState({ type: 'default' })}
                className="p-4 rounded-xl bg-[#101014] border border-white/[0.06] hover:border-[#C8FF00]/40 flex items-center justify-between group transition-all text-left"
              >
                <div className="flex items-center gap-2.5">
                  <FileText className="w-4 h-4 text-[#C8FF00]" />
                  <span className="text-xs font-mono text-white font-medium">Resume</span>
                </div>
                <ArrowUpRight className="w-4 h-4 text-white/40 group-hover:text-[#C8FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>

          </div>

          {/* Right: Quick Direct Note Form (5 columns) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#121217] border border-white/[0.08] shadow-2xl">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                SEND A DIRECT NOTE
              </span>
              <span className="text-[10px] font-mono text-[#C8FF00]">
                QUICK DISPATCH
              </span>
            </div>

            {formSent ? (
              <div className="p-6 rounded-xl bg-[#16161D] border border-[#C8FF00]/30 text-center space-y-3">
                <Check className="w-8 h-8 text-[#C8FF00] mx-auto" />
                <h4 className="text-base font-display font-bold text-white">Opening Mail Client</h4>
                <p className="text-xs text-white/60">
                  Your mail client has been launched with your message pre-filled. You can also write directly to {PERSONAL_INFO.email}.
                </p>
                <button
                  onClick={() => setFormSent(false)}
                  className="text-xs font-mono text-[#C8FF00] underline mt-2"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div>
                  <label className="text-[11px] font-mono text-white/60 uppercase block mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Alex Morgan"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0E0E12] border border-white/[0.08] focus:border-[#C8FF00] text-xs font-mono text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-white/60 uppercase block mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0E0E12] border border-white/[0.08] focus:border-[#C8FF00] text-xs font-mono text-white focus:outline-none transition-colors"
                  />
                </div>

                <div>
                  <label className="text-[11px] font-mono text-white/60 uppercase block mb-1.5">
                    Project / Role Details
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell me about the role, project, or what you're thinking..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-[#0E0E12] border border-white/[0.08] focus:border-[#C8FF00] text-xs font-mono text-white focus:outline-none transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  onMouseEnter={() => setCursorState({ type: 'link' })}
                  onMouseLeave={() => setCursorState({ type: 'default' })}
                  className="w-full py-3.5 px-6 rounded-lg bg-[#C8FF00] text-[#080808] font-mono text-xs font-bold tracking-wider uppercase flex items-center justify-center gap-2 hover:bg-[#D7FF33] transition-all duration-200 active:scale-95"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>TRANSMIT MESSAGE</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
