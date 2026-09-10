import React, { useState } from 'react';
import { TOOLBOX } from '../data/portfolioData';
import { CursorState } from '../types';
import { Wrench, CheckCircle2 } from 'lucide-react';

interface ToolboxSectionProps {
  setCursorState: (state: CursorState) => void;
}

export const ToolboxSection: React.FC<ToolboxSectionProps> = ({ setCursorState }) => {
  const [hoveredTool, setHoveredTool] = useState<string | null>(null);

  return (
    <section id="toolbox" className="py-24 sm:py-32 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-mono tracking-widest text-[#C8FF00] uppercase font-semibold">
                [ 05 / TOOLBOX ]
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[11px] font-mono tracking-wider text-white/40 uppercase">
                CAPABILITIES
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold tracking-[-0.035em] text-[#F5F5F5] uppercase">
              TOOLS & TECHNOLOGIES
            </h2>
          </div>
          <p className="text-sm text-[#9E9EA7] max-w-md">
            An editorial breakdown of the frameworks, design tooling, and runtime environments I actively use to ship production work.
          </p>
        </div>

        {/* Editorial Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TOOLBOX.map((cat) => (
            <div key={cat.category} className="space-y-4">
              <div className="flex items-center justify-between border-b border-white/[0.1] pb-3">
                <h3 className="text-sm font-mono font-bold tracking-widest text-[#C8FF00] uppercase">
                  {cat.category}
                </h3>
                <span className="text-[10px] font-mono text-white/40">
                  [{cat.items.length}]
                </span>
              </div>

              <div className="space-y-3">
                {cat.items.map((item) => (
                  <div
                    key={item.name}
                    onMouseEnter={() => {
                      setHoveredTool(item.name);
                      setCursorState({ type: 'explore' });
                    }}
                    onMouseLeave={() => {
                      setHoveredTool(null);
                      setCursorState({ type: 'default' });
                    }}
                    className={`p-4 rounded-lg border transition-all duration-200 cursor-default ${
                      hoveredTool === item.name
                        ? 'bg-[#141419] border-[#C8FF00]/60 -translate-y-0.5 shadow-lg'
                        : 'bg-[#0E0E12] border-white/[0.05] hover:border-white/15'
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-sm font-semibold font-mono text-white">
                        {item.name}
                      </span>
                      <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-white/60">
                        {item.level}
                      </span>
                    </div>
                    <p className="text-xs text-white/50 leading-relaxed font-sans">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
