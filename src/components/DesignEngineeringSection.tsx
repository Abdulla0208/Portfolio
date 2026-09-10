import React, { useState } from 'react';
import { motion } from 'motion/react';
import { DUAL_MAPPING } from '../data/portfolioData';
import { CursorState } from '../types';
import { Eye, Cpu, Zap, ArrowLeftRight, Check } from 'lucide-react';

interface DesignEngineeringSectionProps {
  setCursorState: (state: CursorState) => void;
}

export const DesignEngineeringSection: React.FC<DesignEngineeringSectionProps> = ({ setCursorState }) => {
  const [selectedBridgeIndex, setSelectedBridgeIndex] = useState<number>(0);

  const designSkills = [
    'UX Research & Flows',
    'Wireframing',
    'Interactive Prototyping',
    'Interaction Design',
    'Visual Systems',
    'Responsive Ergonomics',
    'Design Tokens & Systems',
  ];

  const engineeringSkills = [
    'React 19 & Next.js',
    'TypeScript Architecture',
    'Tailwind CSS v4',
    'Motion & Spring Physics',
    'Node.js & Express APIs',
    'MongoDB & Data Modeling',
    'Git & Production CI',
  ];

  const currentBridge = DUAL_MAPPING[selectedBridgeIndex] || DUAL_MAPPING[0];

  return (
    <section id="intersection" className="py-24 sm:py-36 border-b border-white/[0.06] relative overflow-hidden bg-[#0A0A0D]">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-[#C8FF00]/5 blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-24">
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white/[0.04] border border-white/[0.08] mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
            <span className="text-[11px] font-mono tracking-widest text-[#C8FF00] uppercase font-semibold">
              [ 04 / THE DUAL ADVANTAGE ]
            </span>
          </div>

          <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-[-0.035em] text-[#F5F5F5] uppercase leading-[1.04]">
            DESIGNER'S EYE.{' '}
            <span className="text-[#C8FF00] block mt-1">
              ENGINEER'S MIND.
            </span>
          </h2>
          <p className="text-sm sm:text-base text-[#9E9EA7] mt-6 leading-relaxed">
            I don't design things that cannot be engineered cleanly, and I don't build software that ignores human ergonomics. 
            I sit squarely in the middle.
          </p>
        </div>

        {/* The Signature Dual Section */}
        <div className="relative grid grid-cols-1 lg:grid-cols-11 gap-6 items-center">
          
          {/* Left: DESIGN (5 columns) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#101014] border border-white/[0.08] relative">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-white/[0.05] text-[#C8FF00]">
                  <Eye className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-display font-bold text-white tracking-wider">
                  DESIGN
                </h3>
              </div>
              <span className="text-[11px] font-mono text-white/40 uppercase">EMPATHY & FORM</span>
            </div>

            <div className="space-y-2.5">
              {designSkills.map((skill, i) => (
                <div
                  key={skill}
                  className="p-3 rounded-lg bg-[#14141A] border border-white/[0.04] text-xs sm:text-sm font-mono text-white/80 flex items-center justify-between hover:border-[#C8FF00]/40 transition-colors"
                >
                  <span>{skill}</span>
                  <span className="text-[10px] text-white/30 font-mono">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Center Connection Bridge (1 column on desktop) */}
          <div className="lg:col-span-1 flex flex-col items-center justify-center my-2 lg:my-0">
            <div className="relative flex flex-col items-center">
              {/* Vertical connector line */}
              <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-[#C8FF00] to-transparent hidden lg:block" />
              
              {/* Center Shaik Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-[#C8FF00] text-[#080808] flex flex-col items-center justify-center shadow-[0_0_40px_rgba(200,255,0,0.3)] border-2 border-[#D7FF33] z-20 cursor-default"
                onMouseEnter={() => setCursorState({ type: 'explore' })}
                onMouseLeave={() => setCursorState({ type: 'default' })}
              >
                <span className="text-[9px] font-mono tracking-widest uppercase font-bold text-black/60">
                  NEXUS
                </span>
                <span className="text-sm sm:text-base font-display font-extrabold tracking-wider">
                  SHAIK
                </span>
              </motion.div>

              <div className="w-[1px] h-8 bg-gradient-to-b from-transparent via-[#C8FF00] to-transparent hidden lg:block" />
            </div>
          </div>

          {/* Right: ENGINEERING (5 columns) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-[#101014] border border-white/[0.08] relative">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded bg-white/[0.05] text-[#C8FF00]">
                  <Cpu className="w-4 h-4" />
                </div>
                <h3 className="text-lg font-display font-bold text-white tracking-wider">
                  ENGINEERING
                </h3>
              </div>
              <span className="text-[11px] font-mono text-white/40 uppercase">LOGIC & RUNTIME</span>
            </div>

            <div className="space-y-2.5">
              {engineeringSkills.map((skill, i) => (
                <div
                  key={skill}
                  className="p-3 rounded-lg bg-[#14141A] border border-white/[0.04] text-xs sm:text-sm font-mono text-white/80 flex items-center justify-between hover:border-[#C8FF00]/40 transition-colors"
                >
                  <span>{skill}</span>
                  <span className="text-[10px] text-white/30 font-mono">0{i + 1}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Interactive Bridge Case-Study Selector */}
        <div className="mt-12 p-6 sm:p-8 rounded-xl bg-[#121217] border border-white/[0.1]">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 pb-4 border-b border-white/[0.06]">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-[#C8FF00]" />
              <span className="text-xs font-mono font-bold text-white uppercase tracking-wider">
                HOW I TRANSLATE DESIGN PRINCIPLES TO CODE
              </span>
            </div>
            <div className="flex gap-2">
              {DUAL_MAPPING.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedBridgeIndex(idx)}
                  className={`w-7 h-7 rounded text-xs font-mono transition-all ${
                    selectedBridgeIndex === idx
                      ? 'bg-[#C8FF00] text-black font-bold'
                      : 'bg-white/[0.05] text-white/60 hover:text-white'
                  }`}
                >
                  {idx + 1}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-4 p-4 rounded-lg bg-[#0E0E12] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">DESIGN SIDE</span>
              <span className="text-xs sm:text-sm font-mono text-[#C8FF00] font-semibold block">
                {currentBridge.design}
              </span>
            </div>

            <div className="md:col-span-1 flex justify-center text-white/40">
              <ArrowLeftRight className="w-4 h-4 text-[#C8FF00]" />
            </div>

            <div className="md:col-span-4 p-4 rounded-lg bg-[#0E0E12] border border-white/[0.06]">
              <span className="text-[10px] font-mono text-white/40 uppercase block mb-1">ENGINEERING SIDE</span>
              <span className="text-xs sm:text-sm font-mono text-white font-semibold block">
                {currentBridge.engineering}
              </span>
            </div>

            <div className="md:col-span-3 text-xs text-[#9E9EA7] leading-relaxed border-t md:border-t-0 md:border-l border-white/[0.08] pt-4 md:pt-0 md:pl-6">
              {currentBridge.bridge}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
