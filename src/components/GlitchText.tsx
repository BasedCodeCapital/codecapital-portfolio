'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  return (
    <motion.h1
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`relative font-typewriter text-4xl md:text-6xl lg:text-8xl ${className}`}
    >
      <span className="relative inline-block">
        <span className="relative z-10">{text}</span>
        <span 
          className="absolute top-0 left-0 text-hacker-green opacity-70 z-0"
          style={{ 
            clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)',
            transform: 'translateX(-2px) translateY(2px)'
          }}
          aria-hidden="true"
        >
          {text}
        </span>
        <span 
          className="absolute top-0 left-0 text-hacker-red opacity-70 z-0"
          style={{ 
            clipPath: 'polygon(0 55%, 100% 55%, 100% 100%, 0 100%)',
            transform: 'translateX(2px) translateY(-2px)'
          }}
          aria-hidden="true"
        >
          {text}
        </span>
      </span>
    </motion.h1>
  );
};

export default GlitchText; 