import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PRINCIPLES } from '../data/portfolioData';
import { CursorState } from '../types';
import { Lightbulb, Palette, Terminal, ArrowRight } from 'lucide-react';

interface IntroductionProps {
  setCursorState: (state: CursorState) => void;
}

export const Introduction: React.FC<IntroductionProps> = ({ setCursorState }) => {
  const [activePrinciple, setActivePrinciple] = useState<string>('01');

  const icons = {
    '01': Lightbulb,
    '02': Palette,
    '03': Terminal,
  };

  return (
    <section id="about-intro" className="py-24 sm:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Label */}
        <div className="flex items-center gap-3 mb-10">
          <span className="text-[11px] font-mono tracking-widest text-[#C8FF00] uppercase font-semibold">
            [ 01 / PHILOSOPHY ]
          </span>
          <span className="text-white/20">•</span>
          <span className="text-[11px] font-mono tracking-wider text-white/40 uppercase">
            WHY I BUILD
          </span>
        </div>

        {/* Huge Statement */}
        <div className="max-w-4xl mb-16 sm:mb-20">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-[-0.03em] leading-[1.08] text-[#F5F5F5] uppercase mb-8">
            I DON'T JUST WRITE CODE.{' '}
            <span className="text-white/40 block mt-2">
              I THINK ABOUT WHY IT SHOULD EXIST.
            </span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 pt-6 border-t border-white/[0.08]">
            <p className="md:col-span-8 text-base sm:text-lg text-[#9E9EA7] leading-relaxed">
              I enjoy working at the intersection of user experience, interface design, and frontend engineering. 
              My goal is simple: <strong className="text-[#F5F5F5] font-medium">understand the problem</strong>,{' '}
              <strong className="text-[#F5F5F5] font-medium">simplify the experience</strong>,{' '}
              <strong className="text-[#F5F5F5] font-medium">design the interface</strong>, and{' '}
              <strong className="text-[#C8FF00] font-medium">build the solution</strong>.
            </p>
            <div className="md:col-span-4 flex flex-col justify-end text-xs font-mono text-white/50 border-l border-white/[0.06] pl-6">
              <span>ZERO FLUFF</span>
              <span className="text-[#C8FF00] mt-1">HUMAN-FIRST UTILITY</span>
            </div>
          </div>
        </div>

        {/* Three Interactive Principles */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {PRINCIPLES.map((principle) => {
            const Icon = icons[principle.number as keyof typeof icons] || Lightbulb;
            const isActive = activePrinciple === principle.number;

            return (
              <motion.div
                key={principle.number}
                onMouseEnter={() => {
                  setActivePrinciple(principle.number);
                  setCursorState({ type: 'explore' });
                }}
                onMouseLeave={() => setCursorState({ type: 'default' })}
                onClick={() => setActivePrinciple(principle.number)}
                className={`relative p-8 rounded-lg transition-all duration-300 cursor-pointer border ${
                  isActive
                    ? 'bg-[#131316] border-[#C8FF00]/40 shadow-[0_10px_30px_rgba(0,0,0,0.5)]'
                    : 'bg-[#0E0E11] border-white/[0.06] hover:border-white/15'
                }`}
              >
                {/* Accent indicator line */}
                <div
                  className={`absolute top-0 left-8 right-8 h-[2px] transition-all duration-300 ${
                    isActive ? 'bg-[#C8FF00]' : 'bg-transparent'
                  }`}
                />

                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-3">
                    <span className={`text-xs font-mono font-bold tracking-wider ${
                      isActive ? 'text-[#C8FF00]' : 'text-white/40'
                    }`}>
                      {principle.number}
                    </span>
                    <h3 className="text-xl font-display font-bold tracking-tight text-[#F5F5F5]">
                      {principle.title}
                    </h3>
                  </div>

                  <div className={`p-2 rounded-md ${
                    isActive ? 'bg-[#C8FF00]/10 text-[#C8FF00]' : 'bg-white/[0.04] text-white/40'
                  }`}>
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-sm font-semibold text-white/90">
                    {principle.headline}
                  </p>
                  <p className="text-xs sm:text-sm text-[#9E9EA7] leading-relaxed">
                    {principle.description}
                  </p>
                </div>

                <div className="mt-8 pt-6 border-t border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
                  <span className="text-white/40 uppercase">OUTCOME</span>
                  <span className={`flex items-center gap-1.5 transition-colors ${
                    isActive ? 'text-[#C8FF00]' : 'text-white/60'
                  }`}>
                    {principle.deliverable.split(',')[0]}
                    <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
