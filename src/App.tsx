/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Project, CursorState } from './types';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { SelectedWork } from './components/SelectedWork';
import { CaseStudyModal } from './components/CaseStudyModal';
import { ProcessSection } from './components/ProcessSection';
import { DesignEngineeringSection } from './components/DesignEngineeringSection';
import { ToolboxSection } from './components/ToolboxSection';
import { CurrentlyBuilding } from './components/CurrentlyBuilding';
import { ExperimentsSection } from './components/ExperimentsSection';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { AskShaikModal } from './components/AskShaikModal';
import { ResumeModal } from './components/ResumeModal';
import { Sparkles } from 'lucide-react';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isAskShaikOpen, setIsAskShaikOpen] = useState<boolean>(false);
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);
  const [cursorState, setCursorState] = useState<CursorState>({ type: 'default' });

  const handleExploreClick = () => {
    const workSection = document.getElementById('work');
    if (workSection) {
      workSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleContactClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#080808] text-[#F5F5F5] selection:bg-[#C8FF00] selection:text-[#080808] relative">
      {/* Desktop Custom Interactive Cursor */}
      <CustomCursor cursorState={cursorState} />

      {/* Subtle Grain Overlay for Film/Editorial Texture */}
      <div className="fixed inset-0 bg-grain pointer-events-none z-30" />

      {/* Primary Navigation */}
      <Navbar
        onOpenAskShaik={() => setIsAskShaikOpen(true)}
        onOpenResume={() => setIsResumeOpen(true)}
        setCursorState={setCursorState}
      />

      {/* Main Flow */}
      <main id="main-content" className="relative z-10">
        {/* 1. Hero */}
        <Hero
          setCursorState={setCursorState}
          onExploreClick={handleExploreClick}
          onContactClick={handleContactClick}
        />

        {/* 2. Introduction & Principles */}
        <Introduction setCursorState={setCursorState} />

        {/* 3. Selected Work (Showcase) */}
        <SelectedWork
          onSelectProject={(proj) => setSelectedProject(proj)}
          setCursorState={setCursorState}
        />

        {/* 4. How I Think (Interactive Process) */}
        <ProcessSection setCursorState={setCursorState} />

        {/* 5. Designer × Engineering (The Signature Dual Section) */}
        <DesignEngineeringSection setCursorState={setCursorState} />

        {/* 6. Toolbox */}
        <ToolboxSection setCursorState={setCursorState} />

        {/* 7. Currently Building */}
        <CurrentlyBuilding setCursorState={setCursorState} />

        {/* 8. Experiments (Interactive Playground) */}
        <ExperimentsSection setCursorState={setCursorState} />

        {/* 9. About Me */}
        <AboutSection
          onOpenResume={() => setIsResumeOpen(true)}
          setCursorState={setCursorState}
        />

        {/* 10. Contact */}
        <ContactSection
          onOpenResume={() => setIsResumeOpen(true)}
          setCursorState={setCursorState}
        />
      </main>

      {/* Footer */}
      <Footer setCursorState={setCursorState} />

      {/* Floating "✦ ASK SHAIK" Button (Fixed bottom right) */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          onClick={() => setIsAskShaikOpen(true)}
          onMouseEnter={() => setCursorState({ type: 'explore' })}
          onMouseLeave={() => setCursorState({ type: 'default' })}
          className="group px-4 py-2.5 rounded-full bg-[#121217]/90 backdrop-blur-md border border-white/[0.12] hover:border-[#C8FF00]/60 text-white hover:text-[#C8FF00] text-xs font-mono font-semibold shadow-2xl flex items-center gap-2 transition-all duration-300 hover:scale-105 active:scale-95"
          aria-label="Open AI Portfolio Assistant"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#C8FF00] group-hover:rotate-12 transition-transform" />
          <span>ASK SHAIK</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
        </button>
      </div>

      {/* Modals */}
      {/* 1. Dedicated Deep-Dive Case Study Modal */}
      <CaseStudyModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        setCursorState={setCursorState}
      />

      {/* 2. Grounded AI Portfolio Assistant */}
      <AskShaikModal
        isOpen={isAskShaikOpen}
        onClose={() => setIsAskShaikOpen(false)}
        setCursorState={setCursorState}
      />

      {/* 3. In-App Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}
