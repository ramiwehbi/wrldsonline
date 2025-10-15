
import React, { useState, useEffect, useRef } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
}

const GlitchText: React.FC<GlitchTextProps> = ({ text, className = '' }) => {
  const [displayText, setDisplayText] = useState('');
  const intervalRef = useRef<number | null>(null);
  const timeoutRef = useRef<number | null>(null);

  const scramble = () => {
    const chars = '!<>-_\\/[]{}—=+*^?#________';
    let newText = '';
    for (let i = 0; i < text.length; i++) {
      const randomChar = chars[Math.floor(Math.random() * chars.length)];
      newText += Math.random() > 0.6 ? randomChar : text[i];
    }
    setDisplayText(newText);
  };
  
  const unscramble = () => {
      let progress = 0;
      if (intervalRef.current) clearInterval(intervalRef.current);
      intervalRef.current = window.setInterval(() => {
        const newText = text
          .split('')
          .map((char, index) => {
            if (index < progress) return char;
            const chars = '!<>-_\\/[]{}—=+*^?#';
            return chars[Math.floor(Math.random() * chars.length)];
          })
          .join('');
        setDisplayText(newText);
        if (progress >= text.length) {
            if (intervalRef.current) clearInterval(intervalRef.current);
            setDisplayText(text);
        }
        progress += 1 / 2;
      }, 40);
  };


  useEffect(() => {
    timeoutRef.current = window.setTimeout(() => {
        unscramble();
    }, 500); // Initial delay before unscrambling starts

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  return (
    <h1 className={`glitch-text ${className}`}>
      {displayText}
    </h1>
  );
};

export default GlitchText;
