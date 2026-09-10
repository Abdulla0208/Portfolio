import React, { useState } from 'react';
import { motion } from 'motion/react';
import { PROCESS_STEPS } from '../data/portfolioData';
import { CursorState } from '../types';
import { HelpCircle, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  setCursorState: (state: CursorState) => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ setCursorState }) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section id="process" className="py-24 sm:py-36 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Tag */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-[11px] font-mono tracking-widest text-[#C8FF00] uppercase font-semibold">
            [ 03 / HOW I THINK ]
          </span>
          <span className="text-white/20">•</span>
          <span className="text-[11px] font-mono tracking-wider text-white/40 uppercase">
            PRODUCT PROCESS
          </span>
        </div>

        {/* Huge Statement */}
        <div className="max-w-4xl mb-16 sm:mb-24">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-[-0.035em] text-[#F5F5F5] uppercase leading-[1.08]">
            GOOD PRODUCTS{' '}
            <span className="text-white/40 block mt-1">START WITH</span>{' '}
            <span className="text-[#C8FF00] block mt-1">GOOD QUESTIONS.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#9E9EA7] mt-6 max-w-2xl leading-relaxed">
            I don't jump into Figma or code prematurely. Every interface decision is grounded in a five-phase disciplined loop that de-risks assumptions and respects the user's attention.
          </p>
        </div>

        {/* Interactive Process Flow */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Step Selector (Left / 5 columns) */}
          <div className="lg:col-span-5 space-y-3">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;

              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setCursorState({ type: 'explore' })}
                  onMouseLeave={() => setCursorState({ type: 'default' })}
                  className={`p-5 rounded-lg border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-[#141418] border-[#C8FF00] shadow-[0_10px_30px_rgba(0,0,0,0.4)]'
                      : 'bg-[#0D0D10] border-white/[0.06] hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <span className={`text-xs font-mono font-bold ${
                      isActive ? 'text-[#C8FF00]' : 'text-white/30'
                    }`}>
                      {step.number}
                    </span>
                    <div>
                      <h4 className={`text-base font-display font-bold ${
                        isActive ? 'text-white' : 'text-white/70'
                      }`}>
                        {step.title}
                      </h4>
                      <span className="text-xs font-mono text-white/40 block mt-0.5">
                        {step.question}
                      </span>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform ${
                    isActive ? 'text-[#C8FF00] translate-x-1' : 'text-white/20'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Deep Insight Card (Right / 7 columns) */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35 }}
              className="p-8 sm:p-10 rounded-xl bg-[#121216] border border-white/[0.1] shadow-2xl relative overflow-hidden"
            >
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-6 mb-8">
                <div className="flex items-center gap-3">
                  <span className="text-xs font-mono font-bold text-[#C8FF00] bg-[#C8FF00]/10 px-2.5 py-1 rounded">
                    STAGE {PROCESS_STEPS[activeStep].number}
                  </span>
                  <h3 className="text-2xl font-display font-bold text-white">
                    {PROCESS_STEPS[activeStep].title}
                  </h3>
                </div>
                <HelpCircle className="w-5 h-5 text-[#C8FF00]" />
              </div>

              {/* Guiding Question */}
              <div className="mb-8">
                <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest block mb-2">
                  THE FUNDAMENTAL INQUIRY
                </span>
                <p className="text-xl sm:text-2xl font-display font-bold text-[#F5F5F5] leading-snug">
                  "{PROCESS_STEPS[activeStep].question}"
                </p>
              </div>

              {/* Explanation */}
              <div className="mb-8 space-y-2">
                <span className="text-[11px] font-mono text-white/40 uppercase tracking-widest block">
                  MY PHILOSOPHY
                </span>
                <p className="text-sm sm:text-base text-[#9E9EA7] leading-relaxed">
                  {PROCESS_STEPS[activeStep].explanation}
                </p>
              </div>

              {/* Concrete Action */}
              <div className="p-5 rounded-lg bg-[#0E0E12] border border-white/[0.06] flex items-start gap-3">
                <CheckCircle2 className="w-4 h-4 text-[#C8FF00] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-mono text-[#C8FF00] font-semibold uppercase block mb-1">
                    EXECUTION PROTOCOL
                  </span>
                  <p className="text-xs sm:text-sm text-white/80">
                    {PROCESS_STEPS[activeStep].action}
                  </p>
                </div>
              </div>

            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};
