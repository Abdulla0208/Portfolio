import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { X, Download, Printer, ExternalLink, GraduationCap, Briefcase, Code, Layers, Mail } from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          className="w-full max-w-3xl bg-[#0F0F13] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col my-auto text-[#F5F5F5] max-h-[90vh]"
        >
          {/* Header Bar */}
          <div className="px-6 py-4 bg-[#14141A] border-b border-white/[0.08] flex items-center justify-between sticky top-0 z-10">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#C8FF00]" />
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-white">
                RESUME // SHAIK ABDULLA
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={handlePrint}
                className="px-3 py-1.5 rounded-lg bg-white/[0.05] hover:bg-white/[0.1] text-xs font-mono text-white flex items-center gap-1.5 transition-colors"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>PRINT / SAVE PDF</span>
              </button>
              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                aria-label="Close Resume"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Printable Resume Content */}
          <div className="p-6 sm:p-10 overflow-y-auto space-y-8 print:p-0 print:text-black">
            
            {/* Header */}
            <div className="border-b border-white/[0.08] pb-6 space-y-2">
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2">
                <h1 className="text-2xl sm:text-3xl font-display font-bold text-white">
                  SHAIK ABDULLA
                </h1>
                <span className="text-xs font-mono text-[#C8FF00]">
                  UX / Product Designer + Frontend Developer
                </span>
              </div>
              <p className="text-xs font-mono text-white/60">
                {PERSONAL_INFO.email} · India (Open to Remote Worldwide & Relocation)
              </p>
              <p className="text-xs sm:text-sm text-white/80 pt-2 leading-relaxed">
                Computer Science graduate with strong product thinking, UX intuition, and frontend engineering execution. Dedicated to creating high-fidelity digital products that eliminate user friction through deliberate interface design and clean TypeScript/React architecture.
              </p>
            </div>

            {/* Education */}
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF00] uppercase font-bold">
                <GraduationCap className="w-4 h-4" />
                <span>EDUCATION</span>
              </div>
              <div className="p-4 rounded-lg bg-[#141419] border border-white/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    Bachelor of Technology (B.Tech) in Computer Science & Engineering
                  </h3>
                  <span className="text-xs text-white/60">
                    Graduation: 2026 · Strong foundation in Data Structures, Algorithms, Software Engineering & HCI
                  </span>
                </div>
                <span className="text-xs font-mono text-[#C8FF00] bg-[#C8FF00]/10 px-2 py-1 rounded self-start sm:self-auto">
                  2026 GRADUATE
                </span>
              </div>
            </div>

            {/* Featured Production Projects */}
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF00] uppercase font-bold">
                <Briefcase className="w-4 h-4" />
                <span>FEATURED PRODUCT ENGINEERING</span>
              </div>

              {/* Project 1 */}
              <div className="p-4 rounded-lg bg-[#141419] border border-white/[0.06] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-sm font-bold text-white">
                    AL FARAH — Mobile Car Wash Booking Platform
                  </h4>
                  <span className="text-[11px] font-mono text-white/50">Next.js · React · Node.js · MongoDB · Tailwind</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  • Designed and built a full-stack on-demand mobile service booking platform replacing manual phone/WhatsApp scheduling.<br />
                  • Implemented dynamic vehicle-tier pricing (Sedan/SUV), real-time slot conflict prevention with atomic hold locks, and live dispatch tracking.<br />
                  • Crafted responsive mobile-first UX with 4-step progressive disclosure, reducing booking time to under 90 seconds.
                </p>
              </div>

              {/* Project 2 */}
              <div className="p-4 rounded-lg bg-[#141419] border border-white/[0.06] space-y-2">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1">
                  <h4 className="text-sm font-bold text-white">
                    STUDYSYNC — AI-Powered Learning Platform
                  </h4>
                  <span className="text-[11px] font-mono text-white/50">Next.js · TypeScript · MongoDB · AI Pedagogy</span>
                </div>
                <p className="text-xs text-white/70 leading-relaxed">
                  • Architected a distraction-free learning workspace uniting markdown note-taking, Socratic AI tutoring, and spaced-repetition active recall.<br />
                  • Engineered split-pane UI rendering streaming markdown with real-time code highlighting without layout thrashing.<br />
                  • Built 1-click active recall flashcard generation utilizing spaced repetition intervals.
                </p>
              </div>
            </div>

            {/* Skills & Tools Breakdown */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#141419] border border-white/[0.06] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#C8FF00] font-bold uppercase">
                  <Layers className="w-3.5 h-3.5" />
                  <span>DESIGN & UX TOOLKIT</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-mono">
                  Figma (Auto Layout, Design Systems, Tokens, Prototyping), Wireframing, User Flow Mapping, Ergonomics, Information Architecture, Usability Testing.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#141419] border border-white/[0.06] space-y-2">
                <div className="flex items-center gap-1.5 text-xs font-mono text-[#C8FF00] font-bold uppercase">
                  <Code className="w-3.5 h-3.5" />
                  <span>FRONTEND & ENGINEERING</span>
                </div>
                <p className="text-xs text-white/80 leading-relaxed font-mono">
                  React 19, Next.js (App Router), TypeScript, JavaScript (ESNext), Tailwind CSS (v4), Motion / Framer Motion, Node.js, Express, MongoDB, Git.
                </p>
              </div>
            </div>

            {/* Contact Callout */}
            <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between text-xs font-mono">
              <span className="text-white/50">Available for Immediate Hire / Early-Career Roles</span>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-[#C8FF00] hover:underline flex items-center gap-1">
                <Mail className="w-3.5 h-3.5" />
                {PERSONAL_INFO.email}
              </a>
            </div>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
