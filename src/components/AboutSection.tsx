import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { CursorState } from '../types';
import { Compass, Sparkles, Terminal, ArrowUpRight, GraduationCap, MapPin } from 'lucide-react';

interface AboutSectionProps {
  onOpenResume: () => void;
  setCursorState: (state: CursorState) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onOpenResume, setCursorState }) => {
  return (
    <section id="about" className="py-24 sm:py-36 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] font-mono tracking-widest text-[#C8FF00] uppercase font-semibold">
            [ 08 / ABOUT ME ]
          </span>
          <span className="text-white/20">•</span>
          <span className="text-[11px] font-mono tracking-wider text-white/40 uppercase">
            BACKGROUND & MINDSET
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Editorial Portrait & Technical Artifact (5 columns) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl bg-[#111116] border border-white/[0.08] p-6 sm:p-8 overflow-hidden shadow-2xl">
              
              {/* Architectural grid overlay */}
              <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

              {/* Portrait Framing */}
              <div className="relative z-10 space-y-6">
                
                {/* Visual Avatar / Identity Badge */}
                <div className="aspect-square w-full rounded-xl bg-gradient-to-br from-[#181820] to-[#0A0A0D] border border-white/[0.08] p-8 flex flex-col justify-between relative overflow-hidden group">
                  <div className="flex justify-between items-start">
                    <span className="text-xs font-mono text-[#C8FF00] font-bold">
                      [ SHAIK ABDULLA ]
                    </span>
                    <span className="text-[10px] font-mono text-white/40">
                      2026 // INDIA
                    </span>
                  </div>

                  {/* Graphic Glyph: The Intersection of Vector Curve & Code Node */}
                  <div className="my-auto flex flex-col items-center justify-center">
                    <div className="w-24 h-24 rounded-2xl bg-[#C8FF00]/10 border border-[#C8FF00]/30 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
                      <svg className="w-14 h-14 text-[#C8FF00]" viewBox="0 0 48 48" fill="none">
                        <circle cx="12" cy="36" r="4" stroke="currentColor" strokeWidth="2.5" />
                        <circle cx="36" cy="12" r="4" stroke="currentColor" strokeWidth="2.5" />
                        <circle cx="24" cy="24" r="3" fill="currentColor" />
                        <path d="M14 33C14 20 34 28 34 15" stroke="currentColor" strokeWidth="2.5" strokeDasharray="3 3" />
                      </svg>
                      <span className="absolute -bottom-2 px-2 py-0.5 rounded bg-[#080808] border border-[#C8FF00]/40 text-[9px] font-mono text-[#C8FF00]">
                        UX × CODE
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <div className="text-sm font-display font-bold text-white uppercase tracking-wider">
                      Shaik Abdulla
                    </div>
                    <div className="text-xs font-mono text-white/50">
                      Computer Science & Engineering
                    </div>
                  </div>
                </div>

                {/* Quick Info Badges */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded bg-white/[0.03] border border-white/[0.06] text-xs font-mono">
                    <span className="text-white/40 block text-[10px] flex items-center gap-1">
                      <GraduationCap className="w-3 h-3 text-[#C8FF00]" /> DEGREE
                    </span>
                    <span className="text-white font-medium">B.Tech CSE</span>
                  </div>
                  <div className="p-3 rounded bg-white/[0.03] border border-white/[0.06] text-xs font-mono">
                    <span className="text-white/40 block text-[10px] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#C8FF00]" /> LOCATION
                    </span>
                    <span className="text-white font-medium">India (Open Remote)</span>
                  </div>
                </div>

              </div>
            </div>

            {/* Resume CTA */}
            <button
              onClick={onOpenResume}
              onMouseEnter={() => setCursorState({ type: 'link' })}
              onMouseLeave={() => setCursorState({ type: 'default' })}
              className="w-full py-3.5 px-6 rounded-lg bg-white/[0.05] hover:bg-[#C8FF00] text-white hover:text-[#080808] border border-white/[0.1] hover:border-[#C8FF00] font-mono text-xs font-bold tracking-wider uppercase transition-all duration-200 flex items-center justify-center gap-2"
            >
              <span>INSPECT FORMAL RESUME & CREDENTIALS</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          {/* Right: Narrative (7 columns) */}
          <div className="lg:col-span-7 space-y-8">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold text-[#F5F5F5] uppercase tracking-tight leading-tight">
              BUILDING AT THE FRONTIER WHERE INTERFACES MEET CODE.
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-[#9E9EA7] leading-relaxed font-sans">
              <p>
                I am a Computer Science graduate who fell in love with digital products not by reading theory, but by discovering the friction in everyday software.
              </p>
              
              <p>
                Early on, I realized most products fail in the hand-off between designers and engineers: designers create beautiful mockups with unrealistic states, while engineers build rigid functional backends that ignore micro-interactions and human comfort.
              </p>

              <p>
                I chose to bridge both worlds. I study why users hesitate before clicking a button, how information hierarchy prevents cognitive fatigue, and how to turn Figma design systems into strict, high-performance TypeScript components.
              </p>

              <p className="text-[#F5F5F5] font-medium border-l-2 border-[#C8FF00] pl-4 italic">
                "I don't pretend to have ten years of corporate badges. What I have is obsessive craftsmanship, raw technical aptitude, and the hunger to make every pixel and API request matter."
              </p>
            </div>

            {/* Core Values */}
            <div className="pt-6 border-t border-white/[0.08] grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-lg bg-[#0E0E12] border border-white/[0.04] space-y-1">
                <span className="text-xs font-mono font-bold text-[#C8FF00] uppercase block">
                  CURIOSITY OVER DOGMA
                </span>
                <p className="text-xs text-white/70">
                  Willing to dismantle assumptions and learn new frameworks quickly without ego.
                </p>
              </div>

              <div className="p-4 rounded-lg bg-[#0E0E12] border border-white/[0.04] space-y-1">
                <span className="text-xs font-mono font-bold text-[#C8FF00] uppercase block">
                  SPEED WITH TACTILE PRECISION
                </span>
                <p className="text-xs text-white/70">
                  Shipping code quickly without sacrificing keyboard focus, accessibility, or type safety.
                </p>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
