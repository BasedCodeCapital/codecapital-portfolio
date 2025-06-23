'use client';

import { useEffect } from 'react';

const DevToolsDetector = () => {
  useEffect(() => {
    // Initial console messages
    console.log(
      '%c🚨 STOP RIGHT THERE! 🚨',
      'color: #ff6b00; font-size: 30px; font-weight: bold; text-shadow: 2px 2px 0px rgba(255, 107, 0, 0.5);'
    );
    
    console.log(
      '%cOh, you think you\'re a hacker now? 🤔',
      'color: #00ff41; font-size: 16px; font-family: monospace;'
    );

    console.log(
      '%c' + 
      '╔═══════════════════════════════════════╗\n' +
      '║     CODE CAPITAL SECURITY SYSTEM      ║\n' +
      '║                                       ║\n' +
      '║  Status: You\'ve been detected! 👀     ║\n' +
      '║  Threat Level: Script Kiddie          ║\n' +
      '║  Coffee Level: Critically Low ☕      ║\n' +
      '║                                       ║\n' +
      '║  "With great power comes great        ║\n' +
      '║   responsibility to not break prod"   ║\n' +
      '╚═══════════════════════════════════════╝',
      'color: #ff6b00; font-family: monospace; line-height: 1.2;'
    );

    console.log(
      '%cFine, since you\'re here... 🙄',
      'color: #ff6b00; font-size: 14px;'
    );

    console.log(
      '%cTry these console commands:\n' +
      '• hack() - Initiate "hacking" sequence\n' +
      '• coffee() - Refill coffee levels\n' +
      '• vibe() - Check the vibe\n' +
      '• secret() - Find the easter egg\n' +
      '• hire() - Why you should hire me',
      'color: #00ff41; font-family: monospace;'
    );

    // Add global console commands
    (window as any).hack = () => {
      console.log('%c⚡ INITIATING HACK SEQUENCE... ⚡', 'color: #00ff41; font-size: 20px;');
      setTimeout(() => {
        console.log('%c[▓▓▓▓▓▓▓▓▓▓] 100% Complete', 'color: #00ff41;');
        console.log('%c✅ Successfully hacked the mainframe!', 'color: #00ff41;');
        console.log('%c...Just kidding, you just console.log\'d 😂', 'color: #ff6b00;');
      }, 2000);
    };

    (window as any).coffee = () => {
      console.log('%c☕ *BREWING COFFEE* ☕', 'color: #8B4513; font-size: 20px;');
      setTimeout(() => {
        console.log('%c☕ Coffee is ready! Productivity +100%', 'color: #8B4513;');
        console.log('%c(Coffee is virtual. Real coffee sold separately)', 'color: #666;');
      }, 1500);
    };

    (window as any).vibe = () => {
      const vibes = [
        '✨ Vibe Status: Immaculate ✨',
        '🚀 Vibe Level: To the moon! 🚀',
        '🎵 Current Vibe: Lo-fi beats to code to 🎵',
        '💯 Vibe Check: Passed with flying colors 💯',
        '🌊 Riding the good vibes wave 🌊'
      ];
      const randomVibe = vibes[Math.floor(Math.random() * vibes.length)];
      console.log(`%c${randomVibe}`, 'color: #ff6b00; font-size: 16px;');
    };

    (window as any).secret = () => {
      console.log('%c🎉 You found the secret! 🎉', 'color: #ff6b00; font-size: 20px;');
      console.log('%cHere\'s your reward: 🍕', 'font-size: 30px;');
      console.log('%c(Pizza is also virtual. I\'m not made of money)', 'color: #666;');
      console.log('%cBut seriously, the real secret is...', 'color: #00ff41;');
      setTimeout(() => {
        console.log('%c...there is no secret. The real treasure was the console.logs we made along the way 💚', 'color: #00ff41;');
      }, 2000);
    };

    (window as any).hire = () => {
      console.log('%c📋 WHY YOU SHOULD HIRE ME:', 'color: #ff6b00; font-size: 18px; font-weight: bold;');
      console.log('%c1. I hide easter eggs in production (responsibly)', 'color: #00ff41;');
      console.log('%c2. I can center a div (no, really!)', 'color: #00ff41;');
      console.log('%c3. My code is self-documenting (it documents how confusing it is)', 'color: #00ff41;');
      console.log('%c4. I write tests (console.log counts, right?)', 'color: #00ff41;');
      console.log('%c5. I\'m already in your console, might as well make it official', 'color: #00ff41;');
      console.log('%c\n💼 Convinced? Let\'s chat! hello@codecapital.dev', 'color: #ff6b00; font-size: 14px;');
    };

    // DevTools size detection (works in some browsers)
    let devtools = { open: false, orientation: null };
    const threshold = 160;
    const emitEvent = (state: boolean) => {
      if (state) {
        console.log('%c👀 I see you opened DevTools!', 'color: #ff6b00; font-size: 14px;');
        console.log('%cDon\'t worry, I won\'t tell anyone... this time.', 'color: #666;');
      }
    };

    setInterval(() => {
      if (window.outerHeight - window.innerHeight > threshold || 
          window.outerWidth - window.innerWidth > threshold) {
        if (!devtools.open) {
          emitEvent(true);
          devtools.open = true;
        }
      } else {
        devtools.open = false;
      }
    }, 500);

    // Add some "encrypted" source code comments
    const sourceComment = document.createComment(`
    
    01001000 01100101 01111001 00100000 01110100 01101000 01100101 01110010 01100101 00100001
    
    ═══════════════════════════════════════════════════════════════════════════════════════
    
    Oh, checking the source code? How very 1337 of you! 🕵️
    
    Since you're here, might as well share some "classified" information:
    
    PROJECT: CODE CAPITAL
    STATUS: PROBABLY WORKING
    BUGS: YES (BUT THEY'RE FEATURES)
    COFFEE_CONSUMED: 9999+ CUPS
    SLEEP_SCHEDULE: 404 NOT FOUND
    
    Fun fact: This entire site was built during a caffeine-fueled coding marathon.
    Another fun fact: I'm lying, it took way longer than I'd like to admit.
    
    Want to see something cool? Check the console (F12) and type: hack()
    
    ═══════════════════════════════════════════════════════════════════════════════════════
    
    // TODO: Remove this before production
    // TODO: Remember to remove the above TODO
    // TODO: Stop writing TODOs and actually do them
    
    `);
    document.head.appendChild(sourceComment);

    // Anti-select shenanigans (just for fun)
    document.addEventListener('selectstart', (e) => {
      if (Math.random() < 0.01) { // 1% chance
        e.preventDefault();
        console.log('%c🚫 Nice try! This text is too valuable to copy!', 'color: #ff6b00;');
        console.log('%c(Just kidding, try again)', 'color: #666; font-size: 10px;');
      }
    });

    // Cleanup function
    return () => {
      delete (window as any).hack;
      delete (window as any).coffee;
      delete (window as any).vibe;
      delete (window as any).secret;
      delete (window as any).hire;
    };
  }, []);

  return null;
};

export default DevToolsDetector; 