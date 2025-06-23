'use client';

import { useEffect } from 'react';

const AntiDebug = () => {
  useEffect(() => {
    // Disable right-click context menu with a fun message
    const handleContextMenu = (e: MouseEvent) => {
      e.preventDefault();
      console.log(
        '%c🚫 Right-click disabled! 🚫\n' +
        'Nice try, but the source code is protected by advanced* security measures!\n' +
        '*Not actually that advanced',
        'color: #ff6b00; font-size: 14px;'
      );
      
      // Show a fun alert occasionally
      if (Math.random() < 0.3) {
        alert('🔒 Access Denied!\n\nJust kidding, you can use F12 to see everything anyway 😄');
      }
    };

    // Fun with debugger statements (use sparingly in production!)
    const antiDebugger = () => {
      const startTime = performance.now();
      // debugger; // Uncomment for extra annoyance (not recommended for production)
      const endTime = performance.now();
      
      if (endTime - startTime > 100) {
        console.log('%c🕵️ Debugger detected! Are you stepping through my code?', 'color: #ff6b00;');
      }
    };

    // Obfuscate some "important" variables
    const _0x4e2c = ['c29tZXRoaW5nIGltcG9ydGFudA==', 'SSBzZWUgeW91IGRlY29kZWQgdGhpcyE='];
    const _0x1a3f = (index: number) => atob(_0x4e2c[index]);
    
    console.log('%cSecret message:', 'color: #00ff41;', _0x1a3f(1));

    // Add fake error messages to confuse
    console.warn('Warning: Quantum entanglement detected in component state');
    console.info('Info: Coffee levels approaching critical threshold');
    
    // Override console methods temporarily (just for fun)
    const originalLog = console.log;
    let jokeCounter = 0;
    console.log = (...args) => {
      jokeCounter++;
      if (jokeCounter === 10) {
        originalLog('%c🎉 Achievement Unlocked: Console Logger! 🎉', 'color: gold; font-size: 16px;');
        originalLog('You\'ve used console.log 10 times! Here\'s a cookie: 🍪');
        jokeCounter = 0;
      }
      originalLog(...args);
    };

    // Add keyboard shortcut easter eggs
    const konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiIndex = 0;

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[konamiIndex]) {
        konamiIndex++;
        if (konamiIndex === konamiCode.length) {
          console.log('%c🎮 KONAMI CODE ACTIVATED! 🎮', 'color: #ff6b00; font-size: 30px;');
          console.log('%cYou\'ve unlocked... absolutely nothing! But good job! 👏', 'color: #00ff41;');
          document.body.style.transform = 'rotate(360deg)';
          document.body.style.transition = 'transform 2s';
          setTimeout(() => {
            document.body.style.transform = 'rotate(0deg)';
          }, 2000);
          konamiIndex = 0;
        }
      } else {
        konamiIndex = 0;
      }
    };

    // Add event listeners
    document.addEventListener('contextmenu', handleContextMenu);
    document.addEventListener('keydown', handleKeydown);
    
    // Run anti-debugger check occasionally
    const debugInterval = setInterval(antiDebugger, 5000);

    // ASCII art in source
    const asciiArt = `
    <!--
      _____          _        _____             _ _        _ 
     / ____|        | |      / ____|           (_) |      | |
    | |     ___   __| | ___ | |     __ _ _ __  _| |_ __ _| |
    | |    / _ \\ / _\` |/ _ \\| |    / _\` | '_ \\| | __/ _\` | |
    | |___| (_) | (_| |  __/| |___| (_| | |_) | | || (_| | |
     \\_____\\___/ \\__,_|\\___| \\_____\\__,_| .__/|_|\\__\\__,_|_|
                                        | |                  
                                        |_|                  
    
    If you're reading this, you're probably a developer.
    Or you're really bored. Either way, welcome! 🎉
    
    Fun fact: This ASCII art took longer to make than the actual component.
    Another fun fact: I used a generator. Work smarter, not harder! 😎
    -->
    `;
    
    const commentNode = document.createComment(asciiArt);
    document.body.appendChild(commentNode);

    // Cleanup
    return () => {
      document.removeEventListener('contextmenu', handleContextMenu);
      document.removeEventListener('keydown', handleKeydown);
      clearInterval(debugInterval);
      console.log = originalLog; // Restore original console.log
    };
  }, []);

  // Add some obfuscated inline styles
  return (
    <div
      style={{
        position: 'fixed',
        top: '-9999px',
        left: '-9999px',
        width: '1px',
        height: '1px',
        overflow: 'hidden',
        // This does nothing but looks mysterious in the inspector
        WebkitUserSelect: 'none',
        MozUserSelect: 'none',
        msUserSelect: 'none',
        userSelect: 'none',
      }}
      data-important="VGhpcyBpcyB0b3RhbGx5IGltcG9ydGFudCBkYXRhLCBkbyBub3QgZGVsZXRlIQ=="
      data-secret="TmljZSB0cnksIGJ1dCB0aGlzIGlzIGp1c3QgYmFzZTY0IGVuY29kZWQgbm9uc2Vuc2U="
    >
      {/* Invisible honeypot div */}
      <input
        type="password"
        name="totally_not_a_honeypot"
        autoComplete="off"
        tabIndex={-1}
        aria-hidden="true"
      />
    </div>
  );
};

export default AntiDebug; 