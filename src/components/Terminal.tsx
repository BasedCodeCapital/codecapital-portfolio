'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { StyledBox } from './ASCIIArt';

interface Command {
  input: string;
  output: React.ReactNode;
}

const Terminal: React.FC = () => {
  const [commands, setCommands] = useState<Command[]>([
    { input: '', output: <div className="text-hacker-green">CodeCapital Terminal v4.20.69 - Definitely Production Ready™</div> },
    { input: '', output: <div className="text-hacker-green">Type 'help' for commands or 'vibe' to check the vibe</div> },
  ]);
  const [currentInput, setCurrentInput] = useState('');
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const availableCommands = {
    help: () => (
      <div className="space-y-1">
        <div className="text-hacker-green">Available commands:</div>
        <div className="ml-4">about       - Who am I? (existential crisis included)</div>
        <div className="ml-4">skills      - Things I'm decent at</div>
        <div className="ml-4">projects    - Stuff I've built (some even work!)</div>
        <div className="ml-4">contact     - Slide into my DMs (professionally)</div>
        <div className="ml-4">stack       - Tech stack (spoiler: it's complicated)</div>
        <div className="ml-4">vibe        - Check current vibe</div>
        <div className="ml-4">whoami      - Identity crisis simulator</div>
        <div className="ml-4">sudo        - Try your luck</div>
        <div className="ml-4">clear       - Clean slate</div>
      </div>
    ),
    about: () => (
      <div className="space-y-2">
        <div className="text-hacker-green">{'>'} Loading profile.exe...</div>
        <StyledBox className="mt-2 max-w-md">
          <div className="text-hacker-orange font-typewriter space-y-1">
            <div className="text-center text-xl mb-2">CODE CAPITAL PROFILE</div>
            <div>Name: [YOUR NAME]</div>
            <div>Class: Full-Stack Wizard 🧙‍♂️</div>
            <div>Alignment: Chaotic Good</div>
            <div>Special: Can center a div</div>
            <div>Weakness: Regex</div>
            <div>Status: Caffeinated ☕</div>
          </div>
        </StyledBox>
        <div className="text-hacker-green">Profile loaded. Coffee levels: optimal.</div>
      </div>
    ),
    skills: () => (
      <div className="space-y-2">
        <div className="text-hacker-green">{'>'} Analyzing skill tree...</div>
        <div className="grid grid-cols-2 gap-4 mt-2">
          <div>
            <div className="text-hacker-orange">Code Magic:</div>
            <div className="ml-2 text-sm">JavaScript   [████████░░] 80%</div>
            <div className="ml-2 text-sm">TypeScript   [█████████░] 90%</div>
            <div className="ml-2 text-sm">React/Next   [████████░░] 80%</div>
            <div className="ml-2 text-sm">CSS Wizardry [███████░░░] 70%</div>
          </div>
          <div>
            <div className="text-hacker-orange">Crypto Stuff:</div>
            <div className="ml-2 text-sm">Solidity     [███████░░░] 70%</div>
            <div className="ml-2 text-sm">Web3         [████████░░] 80%</div>
            <div className="ml-2 text-sm">DeFi         [██████░░░░] 60%</div>
            <div className="ml-2 text-sm">Hodling      [██████████] 100%</div>
          </div>
        </div>
        <div className="text-xs text-hacker-green mt-2">
          * Skill levels may vary depending on Stack Overflow availability
        </div>
      </div>
    ),
    projects: () => (
      <div className="space-y-2">
        <div className="text-hacker-green">{'>'} SELECT * FROM projects WHERE actually_finished = true;</div>
        <div className="mt-2">
          <StyledBox className="max-w-md">
            <div className="text-hacker-orange font-typewriter space-y-2 text-center">
              <div className="text-xl mb-2 animate-pulse">⚠️ 404: PROJECTS NOT FOUND ⚠️</div>
              <div>Currently refactoring...</div>
              <div className="text-sm text-hacker-green">
                <div>// TODO: Add actual projects</div>
                <div>// TODO: Learn how to finish projects</div>
                <div>// TODO: Stop procrastinating</div>
              </div>
              <div className="mt-4 text-xs">
                ETA: Soon™ (2-3 business centuries)
              </div>
              <div className="text-xs text-hacker-red mt-2">
                Error: Coffee levels too low to display projects
              </div>
            </div>
          </StyledBox>
        </div>
        <div className="text-xs text-hacker-green mt-2">
          * Projects are currently being rewritten in Rust for 🚀 blazingly fast 🚀 performance
        </div>
      </div>
    ),
    contact: () => (
      <div className="space-y-2">
        <div className="text-hacker-green">{'>'} Establishing secure connection...</div>
        <StyledBox className="mt-2 max-w-md">
          <div className="text-hacker-orange font-typewriter space-y-1">
            <div className="text-center text-xl mb-2">CONTACT PROTOCOLS v2.0</div>
            <div>Email: hello@notascam.eth</div>
            <div>GitHub: github.com/codecapital</div>
            <div>Twitter: @probably_not_me</div>
            <div>Discord: CoffeeOverflow#4242</div>
            <div className="mt-2 pt-2 border-t border-hacker-orange-dim">
              <div>Response Time: 1-2 business minutes</div>
              <div>(or 3-5 if it's before coffee)</div>
            </div>
          </div>
        </StyledBox>
      </div>
    ),
    stack: () => (
      <div className="space-y-2">
        <div className="text-hacker-green">{'>'} cat /etc/tech-stack.conf</div>
        <pre className="text-sm font-mono text-hacker-orange">
{`Frontend:    React (because who doesn't)
Backend:     Node.js + Whatever's trending
Database:    PostgreSQL (the reliable friend)
Blockchain:  ETH, SOL, "Have you heard of X?"
CSS:         Tailwind (I promise I can write vanilla)
State Mgmt:  Zustand (Redux hurt me)
Deploy:      Vercel (it just works™)
Coffee:      Yes, lots.`}
        </pre>
        <div className="text-xs text-hacker-orange mt-2">
          Warning: Stack may change based on Twitter trends
        </div>
      </div>
    ),
    vibe: () => {
      const vibes = [
        "Vibe check: ✨ Immaculate ✨",
        "Current vibe: Chaotic but functional",
        "Vibe status: 404 Not Found (but we're working on it)",
        "Vibe level: Maximum overdrive 🚀",
        "Vibe check passed. You may proceed.",
        "Vibing at 60Hz (144Hz with premium subscription)"
      ];
      return (
        <div className="text-hacker-green">
          {vibes[Math.floor(Math.random() * vibes.length)]}
        </div>
      );
    },
    whoami: () => (
      <div className="space-y-1">
        <div className="text-hacker-orange">root@localhost</div>
        <div className="text-sm">Just kidding, I'm:</div>
        <div className="text-sm">- 10% Coffee</div>
        <div className="text-sm">- 20% Stack Overflow</div>
        <div className="text-sm">- 30% "It worked yesterday"</div>
        <div className="text-sm">- 40% Pure determination</div>
        <div className="text-sm">- 100% Bad at math</div>
      </div>
    ),
    sudo: () => (
      <div className="space-y-1">
        <div className="text-hacker-red">[sudo] password for user:</div>
        <div className="text-hacker-orange">Nice try! But I appreciate the effort.</div>
        <div className="text-sm text-hacker-green">
          Fun fact: My sudo password is "password123" 
          <span className="text-xs"> (it's not)</span>
        </div>
      </div>
    ),
    clear: () => {
      setCommands([
        { input: '', output: <div className="text-hacker-green">Terminal cleared. Your secrets are safe.</div> },
      ]);
      return null;
    },
    // Hidden easter eggs
    btc: () => (
      <div className="text-hacker-orange animate-pulse">
        TO THE MOON! 🚀🌙
        <div className="text-sm">Current price: More than yesterday, less than tomorrow</div>
      </div>
    ),
    gm: () => (
      <div className="text-hacker-green text-xl">
        GM! ☀️ (it's always morning somewhere in the metaverse)
      </div>
    ),
    wagmi: () => (
      <div className="text-hacker-green">
        <div>We're All Gonna Make It! 💪</div>
        <div className="text-sm">(Copium levels: Maximum)</div>
      </div>
    ),
  };

  const processCommand = (input: string) => {
    const trimmedInput = input.trim().toLowerCase();
    const commandFunc = availableCommands[trimmedInput as keyof typeof availableCommands];
    
    if (commandFunc) {
      const output = commandFunc();
      if (output !== null) {
        setCommands(prev => [...prev, { input, output }]);
      }
    } else if (trimmedInput === '') {
      setCommands(prev => [...prev, { input: '', output: null }]);
    } else if (trimmedInput === 'ls') {
      setCommands(prev => [...prev, { 
        input, 
        output: <div>projects/  skills/  memes/  coffee_supply/  will_to_live/</div> 
      }]);
    } else if (trimmedInput === 'cd ..') {
      setCommands(prev => [...prev, { 
        input, 
        output: <div className="text-hacker-red">Error: Cannot escape the matrix</div> 
      }]);
    } else if (trimmedInput.includes('rm -rf')) {
      setCommands(prev => [...prev, { 
        input, 
        output: <div className="text-hacker-red">Woah there! Let's not delete production again...</div> 
      }]);
    } else {
      setCommands(prev => [...prev, { 
        input, 
        output: <div className="text-hacker-red">Command not found: {trimmedInput}. But great attempt! Type 'help' for actual commands.</div> 
      }]);
    }
    
    setCommandHistory(prev => [...prev, input]);
    setHistoryIndex(-1);
    setCurrentInput('');
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      processCommand(currentInput);
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCurrentInput(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCurrentInput('');
      }
    }
  };

  useEffect(() => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  }, [commands]);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="terminal-window w-full max-w-4xl mx-auto h-[600px] flex flex-col"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="terminal-header">
        <div className="terminal-button bg-hacker-red"></div>
        <div className="terminal-button bg-yellow-500"></div>
        <div className="terminal-button bg-hacker-green"></div>
        <div className="flex-1 text-center text-sm">codecapital@cyberspace:~$</div>
      </div>
      
      <div ref={terminalRef} className="flex-1 overflow-y-auto space-y-2 font-mono text-sm">
        {commands.map((cmd, index) => (
          <div key={index}>
            {cmd.input && (
              <div className="flex">
                <span className="text-hacker-green mr-2">$</span>
                <span>{cmd.input}</span>
              </div>
            )}
            {cmd.output && <div className="ml-4">{cmd.output}</div>}
          </div>
        ))}
        
        <div className="flex">
          <span className="text-hacker-green mr-2">$</span>
          <input
            ref={inputRef}
            type="text"
            value={currentInput}
            onChange={(e) => setCurrentInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1 bg-transparent outline-none text-hacker-orange"
            spellCheck={false}
            autoComplete="off"
          />
          <span className="animate-blink">_</span>
        </div>
      </div>
    </motion.div>
  );
};

export default Terminal; 