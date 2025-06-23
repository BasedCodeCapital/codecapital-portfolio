'use client';

import React from 'react';
import Typewriter from 'typewriter-effect';

interface TypewriterTextProps {
  strings: string[];
  className?: string;
  autoStart?: boolean;
  loop?: boolean;
}

const TypewriterText: React.FC<TypewriterTextProps> = ({ 
  strings, 
  className = '', 
  autoStart = true,
  loop = true 
}) => {
  return (
    <div className={`font-typewriter text-hacker-orange ${className}`}>
      <Typewriter
        options={{
          strings: strings,
          autoStart: autoStart,
          loop: loop,
          delay: 75,
          deleteSpeed: 50,
          cursor: '_',
          cursorClassName: 'text-hacker-orange animate-blink',
        }}
      />
    </div>
  );
};

export default TypewriterText; 