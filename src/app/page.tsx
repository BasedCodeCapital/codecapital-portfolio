'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from '@/components/Terminal';
import GlitchText from '@/components/GlitchText';
import ASCIIArt, { logoArt, StyledBox } from '@/components/ASCIIArt';
import MatrixRain from '@/components/MatrixRain';
import TypewriterText from '@/components/TypewriterText';

export default function Home() {
  const [showTerminal, setShowTerminal] = useState(false);
  const [currentSection, setCurrentSection] = useState<'intro' | 'terminal' | 'projects'>('intro');

  const phrases = [
    "Building things that probably work...",
    "404: Sleep not found...",
    "git push --force && pray...",
    "console.log('why no work?')...",
  ];

  useEffect(() => {
    // Simulate initial loading
    const timer = setTimeout(() => {
      setShowTerminal(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Add keyboard event listener for "press any key to continue" and ESC functionality
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Handle ESC key on terminal or projects sections
      if (event.key === 'Escape' && (currentSection === 'terminal' || currentSection === 'projects')) {
        setCurrentSection('intro');
      }
      // Handle any key on intro section
      else if (currentSection === 'intro') {
        // Prevent triggering on modifier keys alone
        if (!['Shift', 'Control', 'Alt', 'Meta'].includes(event.key)) {
          setCurrentSection('terminal');
        }
      }
    };

    window.addEventListener('keydown', handleKeyPress);

    // Cleanup
    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentSection]);

  return (
    <div className="relative min-h-screen flex flex-col">
      <MatrixRain />
      
      <AnimatePresence mode="wait">
        {currentSection === 'intro' && (
          <motion.div
            key="intro"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 flex flex-col items-center justify-center p-8 relative z-20"
          >
            <div className="max-w-6xl w-full space-y-8">
              {/* ASCII Logo */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="flex justify-center mb-8"
              >
                <ASCIIArt art={logoArt} animate={true} />
              </motion.div>

              {/* Glitch Title */}
              <div className="text-center">
                <GlitchText text="CODE CAPITAL" className="mb-4 neon-glow" />
                <TypewriterText 
                  strings={phrases}
                  className="text-xl md:text-2xl mb-8"
                />
              </div>

              {/* Welcome Box - replaced ASCII art with styled component */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center"
              >
                <StyledBox className="max-w-3xl">
                  <div className="text-hacker-orange space-y-4">
                    <p className="text-lg font-typewriter">
                      Welcome to my digital playground - Where bugs become
                      features and coffee becomes code
                    </p>
                    <div className="space-y-2 text-sm font-typewriter">
                      <p>&gt; Status: Probably online</p>
                      <p>&gt; Mood: Caffeinated</p>
                      <p>&gt; Bugs: It's not a bug, it's a feature™</p>
                    </div>
                  </div>
                </StyledBox>
              </motion.div>

              {/* Action Buttons */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
              >
                <button
                  onClick={() => setCurrentSection('terminal')}
                  className="group relative px-8 py-4 bg-transparent border-2 border-hacker-orange text-hacker-orange font-mono uppercase tracking-wider hover:bg-hacker-orange hover:text-hacker-black transition-all duration-300"
                >
                  <span className="relative z-10">Enter Terminal</span>
                  <div className="absolute inset-0 bg-hacker-orange opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                </button>

                <button
                  onClick={() => setCurrentSection('projects')}
                  className="group relative px-8 py-4 bg-transparent border-2 border-hacker-green text-hacker-green font-mono uppercase tracking-wider hover:bg-hacker-green hover:text-hacker-black transition-all duration-300"
                >
                  <span className="relative z-10">View Projects</span>
                  <div className="absolute inset-0 bg-hacker-green opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" />
                </button>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-center text-sm text-hacker-orange-dim mt-8"
              >
                {'>'} Press any key to continue... (or just click a button, I'm not your boss)
              </motion.div>
            </div>
          </motion.div>
        )}

        {currentSection === 'terminal' && (
          <motion.div
            key="terminal"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="flex-1 flex flex-col items-center justify-center p-8 relative z-20"
          >
            <div className="w-full max-w-6xl">
              <div className="mb-4 flex justify-between items-center">
                <h2 className="text-2xl font-typewriter text-hacker-orange">
                  Terminal™ (Patent Pending)
                </h2>
                <button
                  onClick={() => setCurrentSection('intro')}
                  className="text-hacker-orange hover:text-hacker-orange-bright transition-colors"
                >
                  [ESC] Escape Reality
                </button>
              </div>
              <Terminal />
            </div>
          </motion.div>
        )}

        {currentSection === 'projects' && (
          <motion.div
            key="projects"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="flex-1 p-8 relative z-20 overflow-y-auto"
          >
            <div className="max-w-6xl mx-auto">
              <div className="mb-8 flex justify-between items-center">
                <h2 className="text-3xl font-typewriter text-hacker-orange glitch-text" data-text="Things I've Built">
                  Things I've Built (That Actually Work)
                </h2>
                <button
                  onClick={() => setCurrentSection('intro')}
                  className="text-hacker-orange hover:text-hacker-orange-bright transition-colors"
                >
                  [ESC] Go Back
                </button>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Project Cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 }}
                  className="terminal-window group cursor-pointer hover:border-hacker-orange-bright transition-all duration-300"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-typewriter text-hacker-orange group-hover:animate-pulse">
                      DeFi_Thing.sol
                    </h3>
                    <pre className="text-sm text-hacker-green opacity-80">
{`Type: AMM + Yield Farm
Chain: Ethereum (gas go brrr)
Status: Audited ✓
Bugs: Yes, but they're features

> Swap tokens
> Farm yields  
> Lose money efficiently™`}
                    </pre>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 border border-hacker-orange text-hacker-orange">Solidity</span>
                      <span className="px-2 py-1 border border-hacker-orange text-hacker-orange">DeFi</span>
                      <span className="px-2 py-1 border border-hacker-orange text-hacker-orange">Web3</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="terminal-window group cursor-pointer hover:border-hacker-orange-bright transition-all duration-300"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-typewriter text-hacker-orange group-hover:animate-pulse">
                      NFT_Marketplace_v69
                    </h3>
                    <pre className="text-sm text-hacker-green opacity-80">
{`Type: JPEG Store
Status: It mints! 
Sales: Mom bought one
Features: 

> Right-click protection (jk)
> IPFS (when it works)
> Royalties (maybe)`}
                    </pre>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 border border-hacker-orange text-hacker-orange">NFTs</span>
                      <span className="px-2 py-1 border border-hacker-orange text-hacker-orange">React</span>
                      <span className="px-2 py-1 border border-hacker-orange text-hacker-orange">IPFS</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="terminal-window group cursor-pointer hover:border-hacker-orange-bright transition-all duration-300"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-typewriter text-hacker-orange group-hover:animate-pulse">
                      AI_Assistant_2077
                    </h3>
                    <pre className="text-sm text-hacker-green opacity-80">
{`Type: Skynet Beta
Status: Mostly harmless
IQ: Over 9000 (in binary)

> Writes code for me
> Explains my own code to me
> Judges my variable names`}
                    </pre>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 border border-hacker-orange text-hacker-orange">Python</span>
                      <span className="px-2 py-1 border border-hacker-orange text-hacker-orange">TensorFlow</span>
                      <span className="px-2 py-1 border border-hacker-orange text-hacker-orange">Prayers</span>
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="terminal-window group cursor-pointer hover:border-hacker-orange-bright transition-all duration-300"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl font-typewriter text-hacker-orange group-hover:animate-pulse">
                      Portfolio_Site_v420
                    </h3>
                    <pre className="text-sm text-hacker-green opacity-80">
{`Type: Recursive
Status: You're looking at it
Meta: Very

> Shows I can code
> Has a terminal (why? yes)
> Probably overengineered`}
                    </pre>
                    <div className="flex gap-2 text-xs">
                      <span className="px-2 py-1 border border-hacker-orange text-hacker-orange">Next.js</span>
                      <span className="px-2 py-1 border border-hacker-orange text-hacker-orange">TypeScript</span>
                      <span className="px-2 py-1 border border-hacker-orange text-hacker-orange">Caffeine</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Footer - replace ASCII box with styled component */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 text-center text-sm text-hacker-orange-dim"
              >
                <StyledBox className="inline-block">
                  <div className="text-center font-typewriter">
                    <p>More projects in ~/unfinished/</p>
                    <p>(We don't talk about those)</p>
                  </div>
                </StyledBox>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scanline Effect */}
      <div className="scanline" />
    </div>
  );
}
