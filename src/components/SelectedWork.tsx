import React from 'react';
import { motion } from 'motion/react';
import { PROJECTS } from '../data/portfolioData';
import { Project, CursorState } from '../types';
import { AlFarahMockup, StudySyncMockup } from './ProjectMockups';
import { ArrowUpRight, Sparkles } from 'lucide-react';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
  setCursorState: (state: CursorState) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject, setCursorState }) => {
  return (
    <section id="work" className="py-24 sm:py-36 border-b border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 sm:mb-24 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <span className="text-[11px] font-mono tracking-widest text-[#C8FF00] uppercase font-semibold">
                [ 02 / SELECTED WORK ]
              </span>
              <span className="text-white/20">•</span>
              <span className="text-[11px] font-mono tracking-wider text-white/40 uppercase">
                PRODUCTION BUILDS
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold tracking-[-0.035em] text-[#F5F5F5] uppercase">
              SELECTED WORK
            </h2>
          </div>
          <p className="text-sm sm:text-base text-[#9E9EA7] max-w-md">
            A few things I've designed and built. Deep-dive case studies showcasing end-to-end UX architecture and production frontend execution.
          </p>
        </div>

        {/* Project Showcases */}
        <div className="space-y-24 sm:space-y-36">
          {PROJECTS.map((project, index) => {
            const isAlFarah = project.id === 'al-farah';

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
              >
                {/* Visual Showcase (7 columns) */}
                <div 
                  className={`lg:col-span-7 ${index % 2 === 1 ? 'lg:order-2' : 'lg:order-1'}`}
                  onMouseEnter={() => setCursorState({ type: 'project', text: 'VIEW ↗' })}
                  onMouseLeave={() => setCursorState({ type: 'default' })}
                  onClick={() => onSelectProject(project)}
                >
                  <div className="relative rounded-2xl p-2 sm:p-4 bg-[#121216] border border-white/[0.08] group-hover:border-[#C8FF00]/40 transition-all duration-500 cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.6)] group-hover:shadow-[0_20px_60px_rgba(200,255,0,0.08)]">
                    
                    {/* Visual Mockup Container */}
                    <div className="relative aspect-[16/11] sm:aspect-[16/10] w-full overflow-hidden rounded-xl bg-[#080808]">
                      {isAlFarah ? (
                        <AlFarahMockup interactive={false} />
                      ) : (
                        <StudySyncMockup interactive={false} />
                      )}

                      {/* Subtle hover overlay hint */}
                      <div className="absolute inset-0 bg-[#080808]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                        <div className="px-5 py-2.5 rounded-full bg-[#C8FF00] text-[#080808] font-mono text-xs font-bold tracking-wider uppercase flex items-center gap-2 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                          <span>OPEN COMPLETE CASE STUDY</span>
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Metadata & Narrative (5 columns) */}
                <div className={`lg:col-span-5 space-y-6 ${index % 2 === 1 ? 'lg:order-1' : 'lg:order-2'}`}>
                  
                  {/* Number & Role */}
                  <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
                    <span className="text-2xl sm:text-3xl font-mono font-bold text-[#C8FF00]">
                      /{project.number}
                    </span>
                    <span className="text-xs font-mono text-white/50 uppercase tracking-wider">
                      {project.role}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <div>
                    <h3 className="text-2xl sm:text-4xl font-display font-bold text-[#F5F5F5] tracking-tight mb-2">
                      {project.title}
                    </h3>
                    <p className="text-sm font-mono text-[#C8FF00]">
                      {project.subtitle}
                    </p>
                  </div>

                  {/* Concise Description */}
                  <p className="text-sm sm:text-base text-[#9E9EA7] leading-relaxed">
                    {project.summary}
                  </p>

                  {/* Category Pills */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="px-2.5 py-1 rounded bg-white/[0.04] border border-white/[0.08] text-[10px] font-mono text-white/70 uppercase tracking-wider"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack List */}
                  <div className="pt-2">
                    <span className="text-[10px] font-mono text-white/40 uppercase tracking-widest block mb-2">
                      Technologies
                    </span>
                    <p className="text-xs font-mono text-white/60">
                      {project.technologies.join(' · ')}
                    </p>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <button
                      onClick={() => onSelectProject(project)}
                      onMouseEnter={() => setCursorState({ type: 'link' })}
                      onMouseLeave={() => setCursorState({ type: 'default' })}
                      className="inline-flex items-center gap-2 px-5 py-3 rounded-md bg-white/[0.06] hover:bg-[#C8FF00] text-white hover:text-[#080808] border border-white/[0.1] hover:border-[#C8FF00] text-xs font-mono font-bold tracking-wider uppercase transition-all duration-200"
                    >
                      <span>VIEW CASE STUDY</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>

              </motion.article>
            );
          })}
        </div>

      </div>
    </section>
  );
};
