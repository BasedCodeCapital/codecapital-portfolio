/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'hacker-black': '#0a0a0a',
        'hacker-dark': '#0d0d0d',
        'hacker-darker': '#050505',
        'hacker-orange': '#ff6b00',
        'hacker-orange-bright': '#ff8c00',
        'hacker-orange-dim': '#cc5500',
        'hacker-green': '#00ff41',
        'hacker-red': '#ff0040',
        'terminal-bg': '#0c0c0c',
        'terminal-text': '#00ff00',
      },
      fontFamily: {
        'mono': ['Courier New', 'Courier', 'monospace'],
        'terminal': ['VT323', 'Courier New', 'monospace'],
        'typewriter': ['Special Elite', 'Courier New', 'monospace'],
      },
      animation: {
        'glitch': 'glitch 1s infinite',
        'glitch-2': 'glitch-2 0.5s infinite',
        'typing': 'typing 3.5s steps(40, end)',
        'blink': 'blink 1s step-end infinite',
        'scanline': 'scanline 8s linear infinite',
        'flicker': 'flicker 0.15s infinite',
        'matrix': 'matrix 20s linear infinite',
      },
      keyframes: {
        glitch: {
          '0%, 100%': { 
            textShadow: '2px 2px #ff6b00, -2px -2px #00ff41' 
          },
          '25%': { 
            textShadow: '-2px 2px #ff6b00, 2px -2px #00ff41' 
          },
          '50%': { 
            textShadow: '2px -2px #ff6b00, -2px 2px #00ff41' 
          },
          '75%': { 
            textShadow: '-2px -2px #ff6b00, 2px 2px #00ff41' 
          },
        },
        'glitch-2': {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-1px, 1px)' },
          '40%': { transform: 'translate(-1px, -1px)' },
          '60%': { transform: 'translate(1px, 1px)' },
          '80%': { transform: 'translate(1px, -1px)' },
        },
        typing: {
          from: { width: '0' },
          to: { width: '100%' }
        },
        blink: {
          'from, to': { opacity: '1' },
          '50%': { opacity: '0' }
        },
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        },
        flicker: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' }
        },
        matrix: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' }
        }
      },
      backgroundImage: {
        'terminal-gradient': 'radial-gradient(ellipse at center, #0d0d0d 0%, #000000 100%)',
        'crt-lines': 'repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.03), rgba(0, 255, 0, 0.03) 1px, transparent 1px, transparent 2px)',
      },
    },
  },
  plugins: [],
}

