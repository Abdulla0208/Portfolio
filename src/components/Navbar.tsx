import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { CursorState } from '../types';

interface NavbarProps {
  onOpenAskShaik: () => void;
  onOpenResume: () => void;
  setCursorState: (state: CursorState) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenAskShaik, onOpenResume, setCursorState }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'WORK', href: '#work' },
    { label: 'ABOUT', href: '#about' },
    { label: 'PROCESS', href: '#process' },
    { label: 'EXPERIMENTS', href: '#experiments' },
    { label: 'CONTACT', href: '#contact' },
  ];

  const handleLinkClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'py-3.5 bg-[#080808]/85 backdrop-blur-md border-b border-white/[0.08]'
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
          {/* Logo / Left */}
          <a
            href="#"
            className="group flex items-center gap-2.5 text-[#F5F5F5] font-display tracking-tight text-sm sm:text-base font-semibold"
            onMouseEnter={() => setCursorState({ type: 'link' })}
            onMouseLeave={() => setCursorState({ type: 'default' })}
          >
            <span className="w-2 h-2 rounded-sm bg-[#C8FF00] group-hover:scale-125 transition-transform" />
            <span className="tracking-[0.12em] font-medium">SHAIK ABDULLA</span>
            <span className="hidden md:inline-block text-[10px] font-mono text-white/40 uppercase tracking-widest pl-1 border-l border-white/10">
              Product & Frontend
            </span>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8 text-[13px] font-mono tracking-wider text-[#9E9EA7]">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#C8FF00] transition-colors relative py-1 group"
                onMouseEnter={() => setCursorState({ type: 'link' })}
                onMouseLeave={() => setCursorState({ type: 'default' })}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#C8FF00] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Right: Status + Resume & AI trigger */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={onOpenResume}
              className="text-[12px] font-mono tracking-wider text-white/70 hover:text-[#C8FF00] px-3 py-1.5 rounded-full border border-white/10 hover:border-[#C8FF00]/40 transition-all flex items-center gap-1.5"
              onMouseEnter={() => setCursorState({ type: 'link' })}
              onMouseLeave={() => setCursorState({ type: 'default' })}
            >
              RESUME
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            {/* Opportunities status badge */}
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#C8FF00] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#C8FF00]" />
              </span>
              <span className="text-[11px] font-mono tracking-wider text-white/80 uppercase">
                AVAILABLE FOR OPPORTUNITIES
              </span>
            </div>
          </div>

          {/* Mobile Right: Menu button */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-white/90 hover:text-[#C8FF00] transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-30 bg-[#080808]/98 backdrop-blur-xl pt-28 px-8 flex flex-col justify-between pb-12 sm:hidden"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[11px] font-mono text-[#C8FF00] tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00]" />
                NAVIGATION
              </div>
              <div className="flex flex-col space-y-4">
                {navLinks.map((link, idx) => (
                  <button
                    key={link.label}
                    onClick={() => handleLinkClick(link.href)}
                    className="text-left text-2xl font-display font-medium tracking-tight text-[#F5F5F5] hover:text-[#C8FF00] transition-colors py-1 flex items-center justify-between"
                  >
                    <span>{link.label}</span>
                    <span className="text-xs font-mono text-white/30">0{idx + 1}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="pt-8 border-t border-white/10 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-white/60">
                <span className="w-2 h-2 rounded-full bg-[#C8FF00] animate-pulse" />
                <span>AVAILABLE FOR OPPORTUNITIES</span>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenResume();
                  }}
                  className="flex-1 py-3 text-xs font-mono tracking-wider bg-white/10 text-white rounded-lg flex items-center justify-center gap-1.5"
                >
                  VIEW RESUME
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenAskShaik();
                  }}
                  className="px-4 py-3 text-xs font-mono tracking-wider bg-[#C8FF00] text-[#080808] font-semibold rounded-lg flex items-center gap-1.5"
                >
                  <Sparkles className="w-4 h-4" />
                  ASK SHAIK
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
