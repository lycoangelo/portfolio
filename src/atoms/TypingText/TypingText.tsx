import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { TypingTextProps } from './TypingText.interface';

const TypingText = ({ className, layout, text, duration }: TypingTextProps) => {
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const cursorDuration = text.length * duration;

  useEffect(() => {
    let timer = setTimeout(() => {
      if (currentText.length < text.length) {
        setCurrentText(text.slice(0, currentText.length + 1));
      } else {
        clearTimeout(timer);
      }
    }, duration);

    return () => clearTimeout(timer);
  }, [currentText, duration, text]);

  useEffect(() => {
    let cursorTimer = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, duration);

    setTimeout(() => {
      setShowCursor(false);
      clearInterval(cursorTimer);
    }, cursorDuration);

    return () => clearInterval(cursorTimer);
  }, [cursorDuration, duration]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: layout === 'left' ? 'flex-end' : 'flex-start'
      }}
    >
      <motion.span
        className={className}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
      >
        {currentText}
      </motion.span>
      {showCursor && (
        <motion.span animate={{ opacity: 0 }} initial={{ opacity: 1 }}>
          _
        </motion.span>
      )}
    </div>
  );
};

export default TypingText;
