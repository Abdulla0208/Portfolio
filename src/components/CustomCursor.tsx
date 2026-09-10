import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { CursorState } from '../types';

interface CustomCursorProps {
  cursorState: CursorState;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({ cursorState }) => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer
    const isTouch = window.matchMedia('(pointer: coarse)').matches;
    if (isTouch) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener('mousemove', handleMouseMove);
    document.body.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible || cursorState.type === 'hidden') {
    return null;
  }

  const isProject = cursorState.type === 'project';
  const isLink = cursorState.type === 'link';
  const isExplore = cursorState.type === 'explore';

  return (
    <div className="custom-cursor fixed inset-0 pointer-events-none z-50 overflow-hidden">
      {/* Follower Dot */}
      <motion.div
        className="fixed top-0 left-0 rounded-full flex items-center justify-center pointer-events-none transition-colors duration-200"
        animate={{
          x: position.x - (isProject ? 42 : isExplore ? 40 : isLink ? 18 : 6),
          y: position.y - (isProject ? 42 : isExplore ? 40 : isLink ? 18 : 6),
          width: isProject ? 84 : isExplore ? 80 : isLink ? 36 : 12,
          height: isProject ? 84 : isExplore ? 80 : isLink ? 36 : 12,
          backgroundColor: isProject 
            ? '#C8FF00' 
            : isExplore 
            ? '#F5F5F5' 
            : isLink 
            ? 'rgba(200, 255, 0, 0.25)' 
            : '#C8FF00',
          borderColor: isLink ? '#C8FF00' : 'transparent',
          borderWidth: isLink ? 1 : 0,
        }}
        transition={{
          type: 'spring',
          stiffness: 450,
          damping: 32,
          mass: 0.5,
        }}
      >
        {isProject && (
          <span className="text-[11px] font-bold tracking-wider text-[#080808] font-mono select-none">
            {cursorState.text || 'VIEW ↗'}
          </span>
        )}
        {isExplore && (
          <span className="text-[10px] font-bold tracking-wider text-[#080808] font-mono select-none">
            EXPLORE
          </span>
        )}
        {isLink && (
          <span className="text-[11px] font-bold text-[#C8FF00] select-none">
            ↗
          </span>
        )}
      </motion.div>
    </div>
  );
};
