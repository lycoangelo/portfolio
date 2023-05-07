import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useInViewRef } from 'rooks';
import { TypingTextProps } from './TypingText.interface';
import styles from './TypingText.styles';

const TypingText = ({ className, layout, text, duration }: TypingTextProps) => {
  const [currentText, setCurrentText] = useState('');
  const [startAnimation, setStartAnimation] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const cursorDuration = text.length * duration;

  const [typingTextRef] = useInViewRef(
    (entries) => {
      !startAnimation && entries[0].isIntersecting && setStartAnimation(true);
    },
    { rootMargin: '-30% 0px' }
  );

  useEffect(() => {
    if (startAnimation) {
      let timer = setTimeout(() => {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          clearTimeout(timer);
        }
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [currentText, duration, startAnimation, text]);

  useEffect(() => {
    if (startAnimation) {
      let cursorTimer = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, duration);

      setTimeout(() => {
        setShowCursor(false);
        clearInterval(cursorTimer);
      }, cursorDuration);

      return () => clearInterval(cursorTimer);
    }
  }, [cursorDuration, duration, startAnimation]);

  return (
    <div
      className={styles.container(layout === 'left', className)}
      ref={typingTextRef}
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
