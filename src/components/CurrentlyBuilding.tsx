import React from 'react';
import { CURRENTLY_BUILDING } from '../data/portfolioData';
import { CursorState } from '../types';
import { RefreshCw, Terminal, Sparkles, Activity } from 'lucide-react';

interface CurrentlyBuildingProps {
  setCursorState: (state: CursorState) => void;
}

export const CurrentlyBuilding: React.FC<CurrentlyBuildingProps> = ({ setCursorState }) => {
  return (
    <section id="building" className="py-24 sm:py-32 border-b border-white/[0.06] relative bg-[#09090C]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-mono tracking-widest text-[#C8FF00] uppercase font-semibold">
                [ 06 / ACTIVE EVOLUTION ]
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[11px] font-mono tracking-wider text-white/40 uppercase">
                LIVING LOG
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-[-0.035em] text-[#F5F5F5] uppercase">
              CURRENTLY BUILDING
            </h2>
          </div>

          <div className="p-4 rounded-lg bg-white/[0.03] border border-white/[0.08] max-w-sm">
            <div className="flex items-center gap-2 text-xs font-mono text-[#C8FF00] mb-1">
              <Activity className="w-3.5 h-3.5 animate-pulse" />
              <span>HONEST DEVELOPMENT MANIFESTO</span>
            </div>
            <p className="text-xs text-white/60 leading-relaxed">
              Always learning. Always building. Always improving. Unfinished ideas are actively labeled as iterations, never dressed up as phantom startups.
            </p>
          </div>
        </div>

        {/* Live Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CURRENTLY_BUILDING.map((item, idx) => (
            <div
              key={item.name}
              onMouseEnter={() => setCursorState({ type: 'explore' })}
              onMouseLeave={() => setCursorState({ type: 'default' })}
              className="p-6 sm:p-8 rounded-xl bg-[#111115] border border-white/[0.08] hover:border-[#C8FF00]/40 transition-all duration-300 flex flex-col justify-between space-y-6"
            >
              <div>
                <div className="flex items-center justify-between mb-3 text-xs font-mono">
                  <span className="text-[#C8FF00] font-bold">LOG /0{idx + 1}</span>
                  <span className="px-2 py-0.5 rounded bg-white/[0.05] text-white/60 text-[10px]">
                    {item.status}
                  </span>
                </div>

                <h3 className="text-lg font-display font-bold text-white mb-1">
                  {item.name}
                </h3>
                <p className="text-xs font-mono text-[#C8FF00] mb-4">
                  {item.tagline}
                </p>

                <p className="text-xs sm:text-sm text-white/70 leading-relaxed font-sans">
                  {item.currentMilestone}
                </p>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-white/50"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
