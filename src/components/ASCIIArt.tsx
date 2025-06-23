'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ASCIIArtProps {
  art: string;
  animate?: boolean;
  className?: string;
}

const ASCIIArt: React.FC<ASCIIArtProps> = ({ art, animate = true, className = '' }) => {
  const [displayedArt, setDisplayedArt] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!animate) {
      setDisplayedArt(art);
      return;
    }

    if (currentIndex < art.length) {
      const timeout = setTimeout(() => {
        setDisplayedArt(art.slice(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      }, 10);
      return () => clearTimeout(timeout);
    }
  }, [art, currentIndex, animate]);

  return (
    <motion.pre
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`font-terminal text-hacker-orange text-xs sm:text-sm lg:text-base leading-tight ${className}`}
    >
      {displayedArt}
      {animate && currentIndex < art.length && <span className="animate-blink">_</span>}
    </motion.pre>
  );
};

// Logo with proper ASCII art - this works fine with any font
export const logoArt = `
    ██████╗ ██████╗ 
   ██╔════╝██╔════╝ 
   ██║     ██║      
   ██║     ██║      
   ╚██████╗╚██████╗ 
    ╚═════╝ ╚═════╝`;

// Simplified cyber art without box-drawing
export const cyberArt = `
    /\\  /\\/\\  /\\
   /  \\/  \\/  \\
  < CYBER PUNK >
   \\  /\\  /\\  /
    \\/  \\/  \\/`;

// No more ASCII boxes - we'll use proper components instead
export const welcomeArt = '';
export const blockchainArt = '';

// New component for styled boxes
export const StyledBox: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => {
  return (
    <div className={`border-2 border-hacker-orange p-6 relative ${className}`}>
      {/* Corner decorations */}
      <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-hacker-orange"></div>
      <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-hacker-orange"></div>
      <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-hacker-orange"></div>
      <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-hacker-orange"></div>
      {children}
    </div>
  );
};

export default ASCIIArt; 