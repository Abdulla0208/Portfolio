import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Project, CursorState } from '../types';
import { AlFarahMockup, StudySyncMockup } from './ProjectMockups';
import { 
  X, 
  ArrowUpRight, 
  Check, 
  AlertCircle, 
  Layers, 
  Cpu, 
  Database, 
  User, 
  Compass, 
  Code2, 
  Lightbulb, 
  ExternalLink 
} from 'lucide-react';

interface CaseStudyModalProps {
  project: Project | null;
  onClose: () => void;
  setCursorState: (state: CursorState) => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({ project, onClose, setCursorState }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  const isAlFarah = project.id === 'al-farah';
  const study = project.caseStudy;

  const sections = isAlFarah
    ? [
        { id: '01', title: 'THE PROBLEM' },
        { id: '02', title: 'THE USER' },
        { id: '03', title: 'USER FLOW' },
        { id: '04', title: 'WIREFRAMES' },
        { id: '05', title: 'VISUAL DESIGN' },
        { id: '06', title: 'DEVELOPMENT' },
        { id: '07', title: 'CHALLENGES' },
        { id: '08', title: 'FINAL PRODUCT' },
        { id: '09', title: 'WHAT I LEARNED' },
      ]
    : [
        { id: '01', title: 'THE PROBLEM' },
        { id: '02', title: 'THE IDEA' },
        { id: '03', title: 'USER EXPERIENCE' },
        { id: '04', title: 'AI INTERACTION' },
        { id: '05', title: 'INTERFACE DESIGN' },
        { id: '06', title: 'DEVELOPMENT' },
        { id: '07', title: 'CHALLENGES' },
        { id: '08', title: 'FINAL PRODUCT' },
        { id: '09', title: 'LESSONS' },
      ];

  const scrollToSection = (index: number) => {
    setActiveTab(index);
    const element = document.getElementById(`section-${index}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm overflow-hidden">
        
        {/* Backdrop click to close */}
        <div className="absolute inset-0" onClick={onClose} />

        {/* Slide-in Container */}
        <motion.div
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          exit={{ x: '100%' }}
          transition={{ type: 'spring', damping: 30, stiffness: 250 }}
          className="relative z-10 w-full max-w-5xl bg-[#080808] border-l border-white/[0.1] h-full flex flex-col shadow-2xl text-[#F5F5F5]"
        >
          {/* Top Bar */}
          <div className="px-6 sm:px-10 py-5 bg-[#0C0C0E]/90 border-b border-white/[0.08] backdrop-blur-md flex items-center justify-between sticky top-0 z-20">
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-[#C8FF00] bg-[#C8FF00]/10 px-2 py-0.5 rounded">
                CASE STUDY /{project.number}
              </span>
              <span className="text-sm font-display font-bold tracking-tight text-white hidden sm:inline-block">
                {project.title}
              </span>
              <span className="text-xs font-mono text-white/40 hidden md:inline-block">
                · {project.subtitle}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                onMouseEnter={() => setCursorState({ type: 'link' })}
                onMouseLeave={() => setCursorState({ type: 'default' })}
                className="p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors focus:outline-none"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Quick Jump Section Tabs */}
          <div className="px-6 sm:px-10 py-3 bg-[#080808] border-b border-white/[0.06] overflow-x-auto flex gap-2 no-scrollbar">
            {sections.map((sec, idx) => (
              <button
                key={sec.id}
                onClick={() => scrollToSection(idx)}
                className={`text-[11px] font-mono px-3 py-1.5 rounded whitespace-nowrap transition-all ${
                  activeTab === idx
                    ? 'bg-[#C8FF00] text-[#080808] font-bold'
                    : 'bg-white/[0.03] text-white/60 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {sec.id} {sec.title}
              </button>
            ))}
          </div>

          {/* Main Scrollable Case Study Body */}
          <div className="flex-1 overflow-y-auto px-6 sm:px-12 py-10 space-y-16">
            
            {/* Case Study Header Banner */}
            <div className="space-y-4 border-b border-white/[0.08] pb-10">
              <div className="flex flex-wrap gap-2 mb-2">
                {project.categories.map((c) => (
                  <span key={c} className="text-[10px] font-mono px-2 py-0.5 bg-white/[0.05] rounded text-white/70">
                    {c}
                  </span>
                ))}
              </div>
              <h1 className="text-3xl sm:text-5xl font-display font-extrabold text-[#F5F5F5] uppercase">
                {project.title}
              </h1>
              <p className="text-lg text-[#C8FF00] font-mono">
                {project.subtitle}
              </p>
              <p className="text-base sm:text-lg text-white/70 max-w-3xl leading-relaxed">
                {project.tagline}
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-xs font-mono">
                <div>
                  <span className="text-white/40 block">ROLE</span>
                  <span className="text-white font-medium">{project.role}</span>
                </div>
                <div>
                  <span className="text-white/40 block">TIMELINE</span>
                  <span className="text-white font-medium">{project.timeline}</span>
                </div>
                <div className="sm:col-span-2">
                  <span className="text-white/40 block">TECHNOLOGY</span>
                  <span className="text-white font-medium">{project.technologies.join(', ')}</span>
                </div>
              </div>
            </div>

            {/* 01: THE PROBLEM */}
            <section id="section-0" className="space-y-6 pt-4">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF00]">
                <span>01</span>
                <span>/</span>
                <span>THE PROBLEM</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-display font-bold">
                {study.problem.statement}
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {study.problem.frictionPoints.map((point, idx) => (
                  <div key={idx} className="p-4 rounded-lg bg-[#111115] border border-white/[0.06] flex items-start gap-3">
                    <AlertCircle className="w-4 h-4 text-[#C8FF00] shrink-0 mt-0.5" />
                    <p className="text-xs sm:text-sm text-white/80 leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>

              <div className="p-5 rounded-lg bg-[#141419] border-l-2 border-[#C8FF00] space-y-1">
                <span className="text-[10px] font-mono text-[#C8FF00] uppercase font-bold">CORE UX INSIGHT</span>
                <p className="text-sm text-white/90 italic">"{study.problem.insight}"</p>
              </div>
            </section>

            {/* 02: THE USER / THE IDEA */}
            <section id="section-1" className="space-y-6 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF00]">
                <span>02</span>
                <span>/</span>
                <span>{isAlFarah ? 'THE USER' : 'THE IDEA'}</span>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h3 className="text-base font-mono uppercase text-white/60">Target Audience</h3>
                  <ul className="space-y-2">
                    {study.user.targetAudience.map((aud, i) => (
                      <li key={i} className="text-xs sm:text-sm text-white/80 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
                        {aud}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-5 rounded-lg bg-[#121216] border border-white/[0.08] space-y-3">
                  <div className="flex items-center gap-2 text-xs font-mono text-white/50">
                    <User className="w-3.5 h-3.5 text-[#C8FF00]" />
                    <span>USER VOICE · {study.user.corePersona.name} ({study.user.corePersona.role})</span>
                  </div>
                  <p className="text-xs sm:text-sm text-white/90 italic leading-relaxed">
                    "{study.user.corePersona.quote}"
                  </p>
                </div>
              </div>
            </section>

            {/* 03: USER FLOW / USER EXPERIENCE */}
            <section id="section-2" className="space-y-6 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF00]">
                <span>03</span>
                <span>/</span>
                <span>{isAlFarah ? 'USER FLOW' : 'USER EXPERIENCE'}</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {study.userFlow.steps.map((step) => (
                  <div key={step.stepNumber} className="p-4 rounded-lg bg-[#101014] border border-white/[0.06] space-y-2">
                    <span className="text-xs font-mono font-bold text-[#C8FF00]">
                      {step.stepNumber}
                    </span>
                    <h4 className="text-sm font-semibold text-white">{step.title}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>

              {/* Flow Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-[#141010] border border-red-500/20 space-y-2">
                  <span className="text-[11px] font-mono text-red-400 font-bold uppercase block">
                    TRADITIONAL FRAGMENTED FLOW
                  </span>
                  <ul className="space-y-1.5 text-xs text-white/70">
                    {study.userFlow.comparison.traditional.map((t, idx) => (
                      <li key={idx}>✕ {t}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-lg bg-[#101410] border border-[#C8FF00]/30 space-y-2">
                  <span className="text-[11px] font-mono text-[#C8FF00] font-bold uppercase block">
                    STREAMLINED DIGITAL FLOW
                  </span>
                  <ul className="space-y-1.5 text-xs text-white/90">
                    {study.userFlow.comparison.streamlined.map((s, idx) => (
                      <li key={idx} className="flex items-center gap-1.5">
                        <Check className="w-3.5 h-3.5 text-[#C8FF00]" /> {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </section>

            {/* 04: WIREFRAMES / AI INTERACTION */}
            <section id="section-3" className="space-y-6 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF00]">
                <span>04</span>
                <span>/</span>
                <span>{isAlFarah ? 'WIREFRAMES & UX DECISIONS' : 'AI INTERACTION'}</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                {study.wireframes.rationale}
              </p>
              <div className="space-y-3">
                {study.wireframes.keyDecisions.map((dec, i) => (
                  <div key={i} className="p-3.5 rounded bg-[#101014] border border-white/[0.06] flex items-start gap-3">
                    <span className="text-xs font-mono text-[#C8FF00] mt-0.5">[{i + 1}]</span>
                    <p className="text-xs sm:text-sm text-white/80">{dec}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* 05: VISUAL DESIGN / INTERFACE DESIGN */}
            <section id="section-4" className="space-y-6 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF00]">
                <span>05</span>
                <span>/</span>
                <span>{isAlFarah ? 'VISUAL DESIGN' : 'INTERFACE DESIGN'}</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                {study.visualDesign.designSystem}
              </p>

              {/* Color System */}
              <div className="space-y-2">
                <span className="text-xs font-mono text-white/40 uppercase">Design Tokens / Palette</span>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
                  {study.visualDesign.palette.map((p) => (
                    <div key={p.name} className="p-2.5 rounded bg-[#121216] border border-white/[0.08] space-y-2">
                      <div className="h-6 rounded" style={{ backgroundColor: p.hex }} />
                      <div className="text-[10px] font-mono text-white/90">{p.name}</div>
                      <div className="text-[9px] font-mono text-white/40">{p.hex}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                {study.visualDesign.keyHighlights.map((h, i) => (
                  <div key={i} className="p-3 rounded bg-[#101014] border border-white/[0.04] text-xs text-white/70">
                    ✦ {h}
                  </div>
                ))}
              </div>
            </section>

            {/* 06: DEVELOPMENT & ARCHITECTURE */}
            <section id="section-5" className="space-y-6 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF00]">
                <span>06</span>
                <span>/</span>
                <span>DEVELOPMENT & ARCHITECTURE</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                {study.development.architectureDescription}
              </p>

              {/* Architecture Nodes */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {study.development.architectureNodes.map((node) => (
                  <div key={node.layer} className="p-4 rounded-lg bg-[#111115] border border-white/[0.08] space-y-2">
                    <span className="text-[10px] font-mono text-[#C8FF00] uppercase font-bold">{node.layer}</span>
                    <h4 className="text-sm font-mono text-white font-semibold">{node.tech}</h4>
                    <p className="text-xs text-white/60 leading-relaxed">{node.role}</p>
                  </div>
                ))}
              </div>

              {/* Functionality Checklist */}
              <div className="space-y-2 pt-2">
                <span className="text-xs font-mono text-white/40 uppercase">Key Capabilities Engineered</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {study.development.featuresImplemented.map((feat, i) => (
                    <div key={i} className="text-xs text-white/80 flex items-center gap-2">
                      <Check className="w-3.5 h-3.5 text-[#C8FF00] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* 07: CHALLENGES */}
            <section id="section-6" className="space-y-6 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF00]">
                <span>07</span>
                <span>/</span>
                <span>CHALLENGES & SOLUTIONS</span>
              </div>
              <div className="p-5 rounded-lg bg-[#141418] border border-white/[0.08] space-y-4">
                <div>
                  <span className="text-[10px] font-mono text-red-400 uppercase font-bold block mb-1">
                    THE TECHNICAL / UX CHALLENGE
                  </span>
                  <p className="text-sm text-white/90 leading-relaxed">
                    {study.challenges.challenge}
                  </p>
                </div>
                <div className="pt-3 border-t border-white/[0.06]">
                  <span className="text-[10px] font-mono text-[#C8FF00] uppercase font-bold block mb-1">
                    THE ARCHITECTURAL SOLUTION
                  </span>
                  <p className="text-sm text-white/80 leading-relaxed">
                    {study.challenges.solution}
                  </p>
                </div>
              </div>
            </section>

            {/* 08: FINAL PRODUCT (INTERACTIVE DEMO) */}
            <section id="section-7" className="space-y-6 pt-6 border-t border-white/[0.06]">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF00]">
                  <span>08</span>
                  <span>/</span>
                  <span>FINAL PRODUCT & INTERACTIVE PREVIEW</span>
                </div>
                <span className="text-[10px] font-mono text-white/40">TEST DRIVE DIRECTLY BELOW</span>
              </div>
              <p className="text-sm text-white/80 leading-relaxed">
                {study.finalProduct.description}
              </p>

              {/* Interactive Mockup Embed */}
              <div className="h-[440px] sm:h-[480px] w-full rounded-xl overflow-hidden border border-[#C8FF00]/30 shadow-2xl">
                {isAlFarah ? (
                  <AlFarahMockup interactive={true} />
                ) : (
                  <StudySyncMockup interactive={true} />
                )}
              </div>
            </section>

            {/* 09: WHAT I LEARNED / LESSONS */}
            <section id="section-8" className="space-y-6 pt-6 border-t border-white/[0.06] pb-12">
              <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF00]">
                <span>09</span>
                <span>/</span>
                <span>{isAlFarah ? 'WHAT I LEARNED' : 'LESSONS'}</span>
              </div>
              <div className="space-y-3">
                {study.whatILearned.map((lesson, idx) => (
                  <div key={idx} className="p-4 rounded bg-[#101014] border border-white/[0.06] flex items-start gap-3">
                    <span className="text-xs font-mono text-[#C8FF00] font-bold">0{idx + 1}</span>
                    <p className="text-xs sm:text-sm text-white/90 leading-relaxed">{lesson}</p>
                  </div>
                ))}
              </div>

              {/* Footer navigation */}
              <div className="pt-8 border-t border-white/[0.08] flex items-center justify-between">
                <button
                  onClick={onClose}
                  className="px-6 py-3 rounded bg-white/[0.06] hover:bg-white/[0.12] text-xs font-mono text-white tracking-wider uppercase transition-colors"
                >
                  ← BACK TO PORTFOLIO
                </button>
                <div className="text-xs font-mono text-white/40">
                  SHAIK ABDULLA · {project.title}
                </div>
              </div>
            </section>

          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};
