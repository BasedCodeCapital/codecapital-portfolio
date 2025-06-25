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

              <div className="flex items-center justify-center min-h-[400px]">
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <StyledBox className="max-w-2xl">
                    <div className="text-hacker-orange font-typewriter space-y-4 text-center p-8">
                      <motion.div 
                        className="text-4xl mb-6"
                        animate={{ rotate: [0, 5, -5, 0] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        🚧 👷‍♂️ 🚧
                      </motion.div>
                      
                      <h3 className="text-2xl animate-pulse">UNDER CONSTRUCTION</h3>
                      
                      <div className="space-y-2 text-sm text-hacker-green">
                        <p>{'>'} Projects are currently being migrated to Web5</p>
                        <p>{'>'} (Yes, we skipped Web4. It was cringe.)</p>
                      </div>
                      
                      <div className="my-4 text-hacker-red">
                        <pre className="text-xs">
{`Error: Cannot display projects
Reason: Developer.prototype.finishProject is not a function`}
                        </pre>
                      </div>
                      
                      <div className="space-y-1 text-xs text-hacker-orange-dim">
                        <p>Meanwhile, here's what I'm probably doing:</p>
                        <p>• Arguing with TypeScript about types</p>
                        <p>• Centering divs (still)</p>
                        <p>• Googling "how to exit vim"</p>
                        <p>• Refactoring code that already works</p>
                      </div>
                      
                      <motion.div 
                        className="mt-6 text-lg"
                        animate={{ opacity: [0.5, 1, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        Check back Soon™
                      </motion.div>
                      
                      <div className="text-xs text-hacker-green mt-4">
                        Last update: Just now | Next update: Eventually
                      </div>
                    </div>
                  </StyledBox>
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
                    <p>Real projects coming after I finish this TODO list</p>
                    <p>(The TODO list is also TODO)</p>
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
