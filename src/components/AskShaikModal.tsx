import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ASSISTANT_KNOWLEDGE, PROJECTS } from '../data/portfolioData';
import { CursorState } from '../types';
import { Sparkles, X, Send, Bot, User, ArrowRight, CornerDownLeft } from 'lucide-react';

interface AskShaikModalProps {
  isOpen: boolean;
  onClose: () => void;
  setCursorState: (state: CursorState) => void;
}

interface ChatMessage {
  id: string;
  sender: 'ai' | 'user';
  text: string;
  timestamp: string;
}

export const AskShaikModal: React.FC<AskShaikModalProps> = ({ isOpen, onClose, setCursorState }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'welcome',
      sender: 'ai',
      text: "Hello! I am Shaik's Portfolio Assistant. I can answer any questions about his UX design philosophy, technical stack, or project case studies (Al Farah & StudySync). What would you like to know?",
      timestamp: 'Just now'
    }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const sampleQuestions = [
    "What has Shaik built?",
    "Tell me about Al Farah.",
    "What is Shaik's tech stack?",
    "Why hire Shaik as a junior builder?"
  ];

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  const generateGroundedAnswer = (query: string): string => {
    const q = query.toLowerCase();

    if (q.includes('al farah') || q.includes('car wash')) {
      return "Al Farah is a full-stack mobile car wash booking platform Shaik designed and engineered to replace manual WhatsApp messaging. Key capabilities include: dynamic vehicle-class pricing (Sedan/SUV), real-time slot conflict prevention with atomic hold locks, technician dispatch tracking, and a clean mobile-first UI built with Next.js, React, Tailwind, Express, and MongoDB.";
    }

    if (q.includes('studysync') || q.includes('study') || q.includes('learning')) {
      return "StudySync is an AI-powered learning workspace designed to prevent cognitive fatigue. It unifies markdown note-taking with a side-by-side Socratic AI tutor that guides students through targeted questions rather than giving raw answers, and includes a 1-click active recall flashcard generator.";
    }

    if (q.includes('built') || q.includes('project') || q.includes('work')) {
      return "Shaik has designed and built two flagship production projects: 1) AL FARAH (Mobile Car Wash Booking Platform solving manual coordination with transparent vehicle pricing and real-time slots) and 2) STUDYSYNC (An integrated study workspace with Socratic AI tutoring and active recall decks). Both feature end-to-end Figma UX flows and full-stack Next.js/MongoDB implementations.";
    }

    if (q.includes('stack') || q.includes('tech') || q.includes('technologies') || q.includes('react') || q.includes('figma')) {
      return "Shaik's primary toolkit bridges design and code:\n• Design: Figma (Design tokens, Auto Layout, Interactive prototypes), Wireframing, Systems.\n• Frontend: React 19, Next.js, TypeScript, Tailwind CSS (v4), Motion / Framer Motion.\n• Backend: Node.js, Express, MongoDB/Mongoose, JWT Authentication.\n• Workflow: Git, GitHub, VS Code.";
    }

    if (q.includes('why') || q.includes('hire') || q.includes('junior') || q.includes('fresher') || q.includes('consider')) {
      return "Shaik sits at the high-leverage intersection of UX and engineering: he understands why an interface should exist, crafts clean design systems with deliberate whitespace, and writes production-ready TypeScript code. As an early-career builder, he brings genuine curiosity, relentless execution, zero ego, and a refusal to build generic templates.";
    }

    if (q.includes('contact') || q.includes('email') || q.includes('available') || q.includes('hire')) {
      return `Shaik is immediately available for opportunities! You can email him directly at ${ASSISTANT_KNOWLEDGE.contact.email}. He is based in India and open to remote roles worldwide or on-site relocation.`;
    }

    return "Shaik Abdulla is a Computer Science graduate who sits between UX/Product Design and Frontend Engineering ('Designer's Eye. Engineer's Mind.'). He builds real digital products like Al Farah and StudySync with React, Next.js, and Figma. Feel free to ask about his projects, tech stack, or design process!";
  };

  const handleSend = (textToSend?: string) => {
    const questionText = textToSend || input;
    if (!questionText.trim()) return;

    const userMsg: ChatMessage = {
      id: Date.now().toString(),
      sender: 'user',
      text: questionText,
      timestamp: 'Now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInput('');
    setIsTyping(true);

    // Simulate smart, prompt response
    setTimeout(() => {
      const answer = generateGroundedAnswer(questionText);
      const aiMsg: ChatMessage = {
        id: (Date.now() + 1).toString(),
        sender: 'ai',
        text: answer,
        timestamp: 'Now'
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 450);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/75 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.2 }}
            className="w-full max-w-xl bg-[#0F0F13] border border-white/[0.12] rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[560px] text-[#F5F5F5]"
          >
            {/* Modal Header */}
            <div className="px-6 py-4 bg-[#14141A] border-b border-white/[0.08] flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-md bg-[#C8FF00]/10 text-[#C8FF00]">
                  <Sparkles className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="text-sm font-display font-bold text-white tracking-wider flex items-center gap-2">
                    <span>ASK SHAIK</span>
                    <span className="text-[10px] font-mono font-normal text-[#C8FF00] bg-[#C8FF00]/10 px-1.5 py-0.2 rounded">
                      GROUNDED AI
                    </span>
                  </h3>
                  <span className="text-[10px] font-mono text-white/40 block">
                    Strictly grounded in verified portfolio facts
                  </span>
                </div>
              </div>

              <button
                onClick={onClose}
                className="p-1.5 rounded-lg hover:bg-white/10 text-white/60 hover:text-white transition-colors"
                aria-label="Close Assistant"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Conversation Messages */}
            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-3 ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.sender === 'ai' && (
                    <div className="w-6 h-6 rounded-full bg-[#C8FF00]/20 text-[#C8FF00] flex items-center justify-center shrink-0 mt-0.5">
                      <Bot className="w-3.5 h-3.5" />
                    </div>
                  )}

                  <div
                    className={`max-w-[85%] p-3.5 rounded-xl text-xs sm:text-sm leading-relaxed ${
                      msg.sender === 'user'
                        ? 'bg-[#C8FF00] text-[#080808] font-medium rounded-tr-none'
                        : 'bg-[#181820] text-white/90 border border-white/[0.06] rounded-tl-none whitespace-pre-line'
                    }`}
                  >
                    {msg.text}
                  </div>

                  {msg.sender === 'user' && (
                    <div className="w-6 h-6 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0 mt-0.5">
                      <User className="w-3.5 h-3.5" />
                    </div>
                  )}
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3 justify-start">
                  <div className="w-6 h-6 rounded-full bg-[#C8FF00]/20 text-[#C8FF00] flex items-center justify-center shrink-0">
                    <Bot className="w-3.5 h-3.5" />
                  </div>
                  <div className="bg-[#181820] border border-white/[0.06] px-4 py-2 rounded-xl text-xs text-white/50 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-bounce" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-bounce [animation-delay:0.2s]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C8FF00] animate-bounce [animation-delay:0.4s]" />
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Quick Prompt Suggestions */}
            <div className="px-6 py-2 bg-[#121217] border-t border-white/[0.06] flex gap-2 overflow-x-auto no-scrollbar">
              {sampleQuestions.map((q) => (
                <button
                  key={q}
                  onClick={() => handleSend(q)}
                  className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] hover:bg-[#C8FF00]/10 text-white/70 hover:text-[#C8FF00] border border-white/[0.06] hover:border-[#C8FF00]/30 whitespace-nowrap transition-all"
                >
                  {q}
                </button>
              ))}
            </div>

            {/* Input Bar */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend();
              }}
              className="p-4 bg-[#14141A] border-t border-white/[0.08] flex items-center gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about Shaik's projects, UX thinking, or stack..."
                className="flex-1 px-4 py-2.5 bg-[#0A0A0D] border border-white/[0.08] rounded-lg text-xs font-mono text-white focus:outline-none focus:border-[#C8FF00]"
              />
              <button
                type="submit"
                className="p-2.5 rounded-lg bg-[#C8FF00] text-[#080808] hover:bg-[#D7FF33] transition-colors"
                aria-label="Send query"
              >
                <CornerDownLeft className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};
