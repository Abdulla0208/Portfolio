import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowDown, ArrowUpRight, Terminal, Layers, Code2, Compass } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CursorState } from '../types';

interface HeroProps {
  setCursorState: (state: CursorState) => void;
  onExploreClick: () => void;
  onContactClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ setCursorState, onExploreClick, onContactClick }) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY, currentTarget } = e;
    const rect = currentTarget.getBoundingClientRect();
    const x = (clientX - rect.left) / rect.width - 0.5;
    const y = (clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section
      id="hero"
      onMouseMove={handleMouseMove}
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-16 overflow-hidden border-b border-white/[0.06]"
    >
      {/* Subtle ambient light gradient following mouse subtly */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full blur-[140px] opacity-15 transition-transform duration-700 ease-out"
        style={{
          background: 'radial-gradient(circle, #C8FF00 0%, rgba(200, 255, 0, 0.05) 50%, transparent 70%)',
          transform: `translate(calc(-50% + ${mousePos.x * 50}px), ${mousePos.y * 50}px)`,
        }}
      />

      {/* Grid background subtle guide */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 w-full relative z-10 flex flex-col justify-between">
        
        {/* Top Meta Line: Role & Availability */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-12"
        >
          <div className="flex items-center gap-3">
            <span className="text-[11px] sm:text-[12px] font-mono tracking-widest text-[#C8FF00] uppercase font-semibold">
              [ 00 / IDENTITY ]
            </span>
            <span className="text-white/20">•</span>
            <span className="text-[11px] sm:text-[12px] font-mono tracking-wider text-[#9E9EA7] uppercase">
              {PERSONAL_INFO.heroSecondary}
            </span>
          </div>

          <div className="flex items-center gap-2 text-[11px] font-mono text-white/70 bg-white/[0.04] px-3 py-1 rounded-md border border-white/[0.08]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
            <span>2026 GRADUATE · IMMEDIATE HIRE</span>
          </div>
        </motion.div>

        {/* Hero Editorial Headline */}
        <div className="max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-display font-extrabold tracking-[-0.035em] leading-[1.04] text-[#F5F5F5] uppercase mb-8"
          >
            I DESIGN DIGITAL PRODUCTS{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F5F5F5] via-white to-white/70">
              THAT FEEL AS GOOD
            </span>{' '}
            <span className="text-[#C8FF00] inline-block hover:scale-[1.01] transition-transform duration-300">
              AS THEY WORK.
            </span>
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pt-4 border-t border-white/[0.08]"
          >
            {/* Supporting statement */}
            <p className="md:col-span-7 text-base sm:text-lg text-[#9E9EA7] leading-relaxed font-normal">
              {PERSONAL_INFO.heroSupport}
            </p>

            {/* CTAs */}
            <div className="md:col-span-5 flex flex-wrap items-center gap-4 md:justify-end">
              <button
                onClick={onExploreClick}
                onMouseEnter={() => setCursorState({ type: 'link' })}
                onMouseLeave={() => setCursorState({ type: 'default' })}
                className="group px-6 py-3.5 bg-[#C8FF00] text-[#080808] font-mono text-xs font-bold tracking-wider uppercase rounded-md flex items-center gap-2 hover:bg-[#D7FF33] transition-all duration-200 active:scale-95 shadow-[0_0_20px_rgba(200,255,0,0.2)]"
              >
                <span>EXPLORE MY WORK</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                onClick={onContactClick}
                onMouseEnter={() => setCursorState({ type: 'link' })}
                onMouseLeave={() => setCursorState({ type: 'default' })}
                className="group px-6 py-3.5 bg-white/[0.05] hover:bg-white/[0.09] text-[#F5F5F5] font-mono text-xs font-medium tracking-wider uppercase rounded-md border border-white/[0.12] hover:border-white/20 flex items-center gap-2 transition-all duration-200 active:scale-95"
              >
                <span>LET'S TALK</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform text-[#C8FF00]" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Technical Glances: Proving the intersection */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="mt-16 sm:mt-24 pt-6 border-t border-white/[0.06] grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center gap-1.5">
              <Compass className="w-3 h-3 text-[#C8FF00]" />
              FOUNDATION
            </span>
            <span className="text-xs sm:text-sm font-mono text-[#F5F5F5]">B.Tech Computer Science</span>
            <span className="text-[11px] text-white/40">Engineering Rigor</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center gap-1.5">
              <Layers className="w-3 h-3 text-[#C8FF00]" />
              CORE CRAFT
            </span>
            <span className="text-xs sm:text-sm font-mono text-[#F5F5F5]">UX & Systems Design</span>
            <span className="text-[11px] text-white/40">Figma, Flows, Ergonomics</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center gap-1.5">
              <Code2 className="w-3 h-3 text-[#C8FF00]" />
              FRONTEND STACK
            </span>
            <span className="text-xs sm:text-sm font-mono text-[#F5F5F5]">React 19, Next.js, TS</span>
            <span className="text-[11px] text-white/40">Tailwind CSS & Motion</span>
          </div>

          <div className="flex flex-col gap-1">
            <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest flex items-center gap-1.5">
              <Terminal className="w-3 h-3 text-[#C8FF00]" />
              PROMISE
            </span>
            <span className="text-xs sm:text-sm font-mono text-[#C8FF00]">Curiosity + Execution</span>
            <span className="text-[11px] text-white/40">Zero Artificial Fluff</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};
