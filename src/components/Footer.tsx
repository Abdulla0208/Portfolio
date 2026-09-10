import React from 'react';
import { ArrowUp } from 'lucide-react';
import { CursorState } from '../types';

interface FooterProps {
  setCursorState: (state: CursorState) => void;
}

export const Footer: React.FC<FooterProps> = ({ setCursorState }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-12 bg-[#080808] border-t border-white/[0.08] text-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left info */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 text-center sm:text-left">
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <span className="w-2 h-2 rounded-sm bg-[#C8FF00]" />
            <span className="font-display font-bold tracking-wider text-sm">SHAIK ABDULLA</span>
          </div>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="text-xs font-mono text-white/50 tracking-wider">
            UX × FRONTEND × PRODUCT
          </span>
          <span className="text-white/20 hidden sm:inline">•</span>
          <span className="text-xs font-mono text-white/40">
            INDIA · 2026
          </span>
        </div>

        {/* Right: Back to top & copyright */}
        <div className="flex items-center gap-6">
          <span className="text-xs font-mono text-white/30">
            © 2026 Shaik Abdulla
          </span>

          <button
            onClick={scrollToTop}
            onMouseEnter={() => setCursorState({ type: 'link' })}
            onMouseLeave={() => setCursorState({ type: 'default' })}
            className="flex items-center gap-1.5 text-xs font-mono text-white/70 hover:text-[#C8FF00] transition-colors py-1 px-2 rounded hover:bg-white/[0.04]"
          >
            <span>BACK TO TOP</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
