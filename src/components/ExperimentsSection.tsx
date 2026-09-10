import React, { useState, useRef } from 'react';
import { motion } from 'motion/react';
import { CursorState } from '../types';
import { Sparkles, Sliders, ShieldCheck, Check } from 'lucide-react';

interface ExperimentsSectionProps {
  setCursorState: (state: CursorState) => void;
}

export const ExperimentsSection: React.FC<ExperimentsSectionProps> = ({ setCursorState }) => {
  // Experiment 1: Magnetic Physics
  const [btnOffset, setBtnOffset] = useState({ x: 0, y: 0 });
  const magneticRef = useRef<HTMLDivElement>(null);

  const handleMagneticMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!magneticRef.current) return;
    const rect = magneticRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const deltaX = (e.clientX - centerX) * 0.35;
    const deltaY = (e.clientY - centerY) * 0.35;
    setBtnOffset({ x: deltaX, y: deltaY });
  };

  const handleMagneticLeave = () => {
    setBtnOffset({ x: 0, y: 0 });
  };

  // Experiment 2: Kinetic Tracking
  const [trackingValue, setTrackingValue] = useState<number>(0.05);

  // Experiment 3: Token Contrast Tester
  const [selectedTokenHex, setSelectedTokenHex] = useState<string>('#C8FF00');
  const tokens = [
    { name: 'Acid Lime', hex: '#C8FF00', contrast: '18.1 : 1', rating: 'AAA' },
    { name: 'Pure White', hex: '#F5F5F5', contrast: '19.4 : 1', rating: 'AAA' },
    { name: 'Muted Zinc', hex: '#9E9EA7', contrast: '8.2 : 1', rating: 'AA' },
    { name: 'Graphite Subtle', hex: '#6B6B76', contrast: '4.8 : 1', rating: 'AA' },
  ];

  const currentToken = tokens.find(t => t.hex === selectedTokenHex) || tokens[0];

  return (
    <section id="experiments" className="py-24 sm:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-mono tracking-widest text-[#C8FF00] uppercase font-semibold">
                [ 07 / EXPERIMENTAL LAB ]
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[11px] font-mono tracking-wider text-white/40 uppercase">
                MICRO-INTERACTIONS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-[-0.035em] text-[#F5F5F5] uppercase">
              UI EXPERIMENTS
            </h2>
          </div>
          <p className="text-sm text-[#9E9EA7] max-w-md">
            Interactive micro-prototypes exploring pointer math, kinetic typography, and mathematical design systems. Test them live below.
          </p>
        </div>

        {/* 3 Interactive Experiment Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Experiment 01: Magnetic Spring */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#101014] border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-2">
                <span className="text-[#C8FF00]">EXP 01 // PHYSICS</span>
                <span>POINTER SPRING</span>
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Magnetic Cursor Attraction
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-sans">
                Dynamic button displacement calculating distance vectors and snapping back with damped spring mechanics.
              </p>
            </div>

            {/* Interactive Stage */}
            <div
              ref={magneticRef}
              onMouseMove={handleMagneticMove}
              onMouseLeave={handleMagneticLeave}
              className="h-44 rounded-lg bg-[#0A0A0D] border border-white/[0.04] flex flex-col items-center justify-center p-4 relative overflow-hidden"
            >
              <span className="text-[10px] font-mono text-white/30 absolute top-3 left-3">
                HOVER NEAR BUTTON
              </span>

              <motion.button
                animate={{ x: btnOffset.x, y: btnOffset.y }}
                transition={{ type: 'spring', damping: 15, stiffness: 200, mass: 0.2 }}
                className="px-6 py-3 rounded-full bg-[#C8FF00] text-[#080808] font-mono text-xs font-bold shadow-[0_0_25px_rgba(200,255,0,0.25)] flex items-center gap-2"
              >
                <span>MAGNETIC</span>
                <span className="text-[10px] opacity-70">
                  x:{Math.round(btnOffset.x)} y:{Math.round(btnOffset.y)}
                </span>
              </motion.button>
            </div>

            <div className="text-[10px] font-mono text-white/40 flex justify-between">
              <span>TECH: MOTION SPRING</span>
              <span className="text-[#C8FF00]">INTERACTIVE</span>
            </div>
          </div>

          {/* Experiment 02: Kinetic Typography */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#101014] border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-2">
                <span className="text-[#C8FF00]">EXP 02 // TYPOGRAPHY</span>
                <span>VARIABLE TRACKING</span>
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Fluid Kinetic Kerning
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-sans">
                Responsive character tracking manipulation modeling optical font-weight balance on modern display headings.
              </p>
            </div>

            {/* Interactive Stage */}
            <div className="h-44 rounded-lg bg-[#0A0A0D] border border-white/[0.04] flex flex-col justify-center px-4 space-y-4">
              <div
                className="text-center font-display font-extrabold text-white text-xl sm:text-2xl uppercase transition-all duration-100 select-none overflow-hidden"
                style={{ letterSpacing: `${trackingValue}em` }}
              >
                EDITORIAL
              </div>

              <div className="space-y-1">
                <div className="flex justify-between text-[10px] font-mono text-white/40">
                  <span>TIGHT (-0.02em)</span>
                  <span className="text-[#C8FF00] font-bold">{trackingValue.toFixed(2)}em</span>
                  <span>AIR (+0.30em)</span>
                </div>
                <input
                  type="range"
                  min="-0.02"
                  max="0.30"
                  step="0.01"
                  value={trackingValue}
                  onChange={(e) => setTrackingValue(parseFloat(e.target.value))}
                  className="w-full accent-[#C8FF00] cursor-pointer"
                />
              </div>
            </div>

            <div className="text-[10px] font-mono text-white/40 flex justify-between">
              <span>TECH: CSS TRACKING HOOK</span>
              <span className="text-[#C8FF00]">SLIDER DRIVEN</span>
            </div>
          </div>

          {/* Experiment 03: Token Contrast Analyzer */}
          <div className="p-6 sm:p-8 rounded-xl bg-[#101014] border border-white/[0.08] flex flex-col justify-between space-y-6">
            <div>
              <div className="flex items-center justify-between text-xs font-mono text-white/50 mb-2">
                <span className="text-[#C8FF00]">EXP 03 // SYSTEM</span>
                <span>ACCESSIBILITY MATH</span>
              </div>
              <h3 className="text-lg font-display font-bold text-white mb-2">
                Design Token Contrast
              </h3>
              <p className="text-xs text-white/60 leading-relaxed font-sans">
                Verifying WCAG 2.1 AA/AAA luminescent contrast ratios directly against the #080808 graphite canvas.
              </p>
            </div>

            {/* Interactive Stage */}
            <div className="h-44 rounded-lg bg-[#0A0A0D] border border-white/[0.04] p-4 flex flex-col justify-between">
              <div className="flex gap-2 justify-center">
                {tokens.map((t) => (
                  <button
                    key={t.name}
                    type="button"
                    onClick={() => setSelectedTokenHex(t.hex)}
                    className={`w-8 h-8 rounded-full border-2 transition-all flex items-center justify-center ${
                      selectedTokenHex === t.hex ? 'border-white scale-110' : 'border-transparent opacity-60'
                    }`}
                    style={{ backgroundColor: t.hex }}
                  >
                    {selectedTokenHex === t.hex && (
                      <Check className="w-4 h-4 text-black font-bold" />
                    )}
                  </button>
                ))}
              </div>

              <div className="p-3 bg-[#131318] rounded flex items-center justify-between">
                <div>
                  <span className="text-[10px] font-mono text-white/40 block">TOKEN</span>
                  <span className="text-xs font-mono text-white font-bold">{currentToken.name}</span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] font-mono text-white/40 block">WCAG RATIO</span>
                  <span className="text-xs font-mono text-[#C8FF00] font-bold">
                    {currentToken.contrast} ({currentToken.rating})
                  </span>
                </div>
              </div>
            </div>

            <div className="text-[10px] font-mono text-white/40 flex justify-between">
              <span>TECH: LUMINANCE RATIOS</span>
              <span className="text-[#C8FF00]">ACCESSIBLE</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
