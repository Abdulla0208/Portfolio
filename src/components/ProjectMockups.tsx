import React, { useState } from 'react';
import { 
  Car, 
  Calendar, 
  Clock, 
  CheckCircle2, 
  ShieldCheck, 
  Sparkles, 
  BookOpen, 
  BrainCircuit, 
  ChevronRight, 
  Cpu, 
  Layers 
} from 'lucide-react';

interface AlFarahMockupProps {
  interactive?: boolean;
}

export const AlFarahMockup: React.FC<AlFarahMockupProps> = ({ interactive = true }) => {
  const [selectedCar, setSelectedCar] = useState<'sedan' | 'suv' | 'hatchback'>('sedan');
  const [selectedService, setSelectedService] = useState<'standard' | 'deep'>('standard');
  const [selectedSlot, setSelectedSlot] = useState<string>('10:30 AM');

  const prices = {
    hatchback: { standard: 25, deep: 45 },
    sedan: { standard: 35, deep: 55 },
    suv: { standard: 45, deep: 70 },
  };

  const currentPrice = prices[selectedCar][selectedService];

  return (
    <div className="w-full h-full bg-[#0E0E12] rounded-xl border border-white/[0.08] overflow-hidden flex flex-col shadow-2xl">
      {/* Device Top Bar */}
      <div className="px-4 py-3 bg-[#131317] border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          <span className="ml-2 text-[11px] font-mono text-white/50">alfarah.app/book</span>
        </div>
        <div className="flex items-center gap-1.5 px-2 py-0.5 rounded bg-[#C8FF00]/10 border border-[#C8FF00]/20">
          <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-pulse" />
          <span className="text-[10px] font-mono text-[#C8FF00] font-medium">LIVE PREVIEW</span>
        </div>
      </div>

      {/* App Body */}
      <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between overflow-y-auto space-y-6">
        {/* Header & Step Tracker */}
        <div>
          <div className="flex items-center justify-between text-xs font-mono text-white/40 mb-2">
            <span>STEP 01 OF 04</span>
            <span className="text-[#C8FF00]">ON-DEMAND DISPATCH</span>
          </div>
          <h4 className="text-base sm:text-lg font-display font-bold text-[#F5F5F5]">
            Configure Your Wash
          </h4>
        </div>

        {/* 1. Vehicle Selector */}
        <div className="space-y-2.5">
          <label className="text-[11px] font-mono text-white/60 uppercase tracking-wider block">
            Select Vehicle Class
          </label>
          <div className="grid grid-cols-3 gap-2">
            {[
              { id: 'hatchback', label: 'Hatchback', base: '$25' },
              { id: 'sedan', label: 'Sedan', base: '$35' },
              { id: 'suv', label: 'SUV / 4x4', base: '$45' },
            ].map((car) => (
              <button
                key={car.id}
                type="button"
                onClick={() => interactive && setSelectedCar(car.id as any)}
                className={`p-3 rounded-lg border text-left transition-all ${
                  selectedCar === car.id
                    ? 'bg-[#181820] border-[#C8FF00] text-white'
                    : 'bg-[#121215] border-white/[0.06] text-white/60 hover:border-white/20'
                }`}
              >
                <Car className={`w-4 h-4 mb-2 ${selectedCar === car.id ? 'text-[#C8FF00]' : 'text-white/40'}`} />
                <div className="text-xs font-medium font-sans">{car.label}</div>
                <div className="text-[10px] font-mono text-white/40 mt-0.5">from {car.base}</div>
              </button>
            ))}
          </div>
        </div>

        {/* 2. Service Tier */}
        <div className="space-y-2.5">
          <label className="text-[11px] font-mono text-white/60 uppercase tracking-wider block">
            Treatment Package
          </label>
          <div className="grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={() => interactive && setSelectedService('standard')}
              className={`p-3 rounded-lg border text-left transition-all ${
                selectedService === 'standard'
                  ? 'bg-[#181820] border-[#C8FF00] text-white'
                  : 'bg-[#121215] border-white/[0.06] text-white/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold">Exterior Eco-Steam</span>
                {selectedService === 'standard' && <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00]" />}
              </div>
              <p className="text-[10px] text-white/40 mt-1">Waterless high-gloss wash (35 mins)</p>
            </button>

            <button
              type="button"
              onClick={() => interactive && setSelectedService('deep')}
              className={`p-3 rounded-lg border text-left transition-all ${
                selectedService === 'deep'
                  ? 'bg-[#181820] border-[#C8FF00] text-white'
                  : 'bg-[#121215] border-white/[0.06] text-white/60'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold">Deep Interior + Steam</span>
                {selectedService === 'deep' && <CheckCircle2 className="w-3.5 h-3.5 text-[#C8FF00]" />}
              </div>
              <p className="text-[10px] text-white/40 mt-1">Ozone sanitation & conditioning (65 mins)</p>
            </button>
          </div>
        </div>

        {/* 3. Slot Selector */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-white/60 uppercase tracking-wider">Available Slot Today</span>
            <span className="text-white/40 flex items-center gap-1">
              <Clock className="w-3 h-3 text-[#C8FF00]" /> 3 Slots Left
            </span>
          </div>
          <div className="flex gap-2">
            {['09:00 AM', '10:30 AM', '02:00 PM', '04:30 PM'].map((slot) => (
              <button
                key={slot}
                type="button"
                onClick={() => interactive && setSelectedSlot(slot)}
                className={`flex-1 py-2 text-[11px] font-mono rounded border transition-all ${
                  selectedSlot === slot
                    ? 'bg-[#C8FF00] text-[#080808] font-bold border-[#C8FF00]'
                    : 'bg-[#121215] border-white/[0.06] text-white/70 hover:border-white/15'
                }`}
              >
                {slot}
              </button>
            ))}
          </div>
        </div>

        {/* Bottom Total & Status Bar */}
        <div className="pt-4 border-t border-white/[0.08] flex items-center justify-between bg-[#121216] -mx-5 -mb-5 p-5">
          <div>
            <span className="text-[10px] font-mono text-white/40 uppercase block">Calculated Total</span>
            <span className="text-xl font-display font-bold text-[#F5F5F5]">${currentPrice}.00</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="text-right hidden sm:block">
              <span className="text-[10px] font-mono text-[#C8FF00] block">NO PHONE CALL REQUIRED</span>
              <span className="text-[10px] text-white/40">Guaranteed Technician Slot</span>
            </div>
            <div className="px-4 py-2 bg-[#C8FF00] text-[#080808] font-mono text-xs font-bold rounded flex items-center gap-1">
              <span>CONFIRM</span>
              <ChevronRight className="w-3.5 h-3.5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface StudySyncMockupProps {
  interactive?: boolean;
}

export const StudySyncMockup: React.FC<StudySyncMockupProps> = ({ interactive = true }) => {
  const [activeTab, setActiveTab] = useState<'editor' | 'flashcard'>('editor');
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div className="w-full h-full bg-[#0A0A0E] rounded-xl border border-white/[0.08] overflow-hidden flex flex-col shadow-2xl">
      {/* Device Top Bar */}
      <div className="px-4 py-3 bg-[#111116] border-b border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/80" />
          <span className="ml-2 text-[11px] font-mono text-white/50">studysync.workspace/cs302</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 text-[11px] font-mono text-white/60">
            <Clock className="w-3 h-3 text-[#C8FF00]" />
            <span>25:00 POMODORO</span>
          </div>
        </div>
      </div>

      {/* Split-pane Workspace */}
      <div className="flex-1 grid grid-cols-1 md:grid-cols-12 overflow-hidden">
        
        {/* Left: Notes Editor Canvas (60%) */}
        <div className="md:col-span-7 p-5 border-b md:border-b-0 md:border-r border-white/[0.06] flex flex-col justify-between space-y-4">
          <div>
            <div className="flex items-center gap-2 text-[10px] font-mono text-[#C8FF00] mb-2 uppercase">
              <BookOpen className="w-3 h-3" />
              <span>ALGORITHMS // MODULE 4: GRAPH TRAVERSALS</span>
            </div>
            <h4 className="text-base font-display font-bold text-[#F5F5F5] mb-3">
              Breadth-First Search (BFS) vs DFS
            </h4>
            <div className="text-xs text-white/70 font-sans space-y-2 leading-relaxed">
              <p>
                BFS systematically explores vertices in concentric distance layers using a{' '}
                <span className="text-[#C8FF00] font-mono bg-[#C8FF00]/10 px-1 py-0.5 rounded">
                  FIFO Queue
                </span>.
              </p>
              <div className="p-3 bg-[#131318] rounded-md font-mono text-[11px] text-white/80 border border-white/[0.04] space-y-1">
                <div className="text-white/40">// Queue enforces level-by-level evaluation</div>
                <div>queue.push(startVertex);</div>
                <div>visited[startVertex] = true;</div>
                <div className="text-[#C8FF00]">while (!queue.isEmpty()) &#123; curr = queue.shift(); &#125;</div>
              </div>
            </div>
          </div>

          <div className="p-2.5 bg-white/[0.03] rounded border border-white/[0.06] flex items-center justify-between text-[11px] font-mono">
            <span className="text-white/50">✦ Selected: FIFO Queue Mechanism</span>
            <span className="text-[#C8FF00] flex items-center gap-1 cursor-pointer">
              Ask Socratic Tutor <ChevronRight className="w-3 h-3" />
            </span>
          </div>
        </div>

        {/* Right: Socratic Tutor & Recall Drawer (40%) */}
        <div className="md:col-span-5 p-5 bg-[#0F0F14] flex flex-col justify-between space-y-4">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-[10px] font-mono border-b border-white/[0.06] pb-2">
              <span className="text-white/60 flex items-center gap-1">
                <BrainCircuit className="w-3.5 h-3.5 text-[#C8FF00]" />
                SOCRATIC TUTOR
              </span>
              <span className="text-[#C8FF00] bg-[#C8FF00]/10 px-1.5 py-0.5 rounded">GUIDED MODE</span>
            </div>

            {/* AI Socratic Bubble */}
            <div className="p-3 rounded-lg bg-[#15151C] border border-white/[0.08] space-y-2">
              <span className="text-[10px] font-mono text-[#C8FF00] uppercase font-semibold block">
                TUTOR PROMPT
              </span>
              <p className="text-xs text-white/80 leading-relaxed font-sans">
                "If we replace the FIFO Queue with a LIFO Stack in this loop, what happens to the traversal order? Why does BFS guarantee shortest path in unweighted graphs?"
              </p>
            </div>

            {/* Active Recall Card Teaser */}
            <div 
              onClick={() => interactive && setIsFlipped(!isFlipped)}
              className="p-3 rounded-lg bg-[#181822] border border-[#C8FF00]/20 cursor-pointer hover:border-[#C8FF00]/50 transition-all text-left"
            >
              <div className="flex items-center justify-between text-[10px] font-mono text-white/50 mb-1">
                <span>ACTIVE RECALL FLASHCARD</span>
                <span className="text-[#C8FF00]">{isFlipped ? 'ANSWER' : 'CLICK TO REVEAL'}</span>
              </div>
              <p className="text-xs text-[#F5F5F5]">
                {isFlipped 
                  ? 'Queue FIFO order ensures nodes at depth k are processed strictly before any node at depth k+1.'
                  : 'Q: Why does BFS guarantee the shortest path in unweighted graphs?'}
              </p>
            </div>
          </div>

          <div className="text-[10px] font-mono text-white/40 pt-2 border-t border-white/[0.06] flex items-center justify-between">
            <span>RETENTION SCORE: 94%</span>
            <span className="text-[#C8FF00]">NO SPOILERS</span>
          </div>
        </div>

      </div>
    </div>
  );
};
