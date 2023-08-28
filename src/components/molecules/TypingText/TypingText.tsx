import { useState, useEffect } from 'react';
import { useInViewRef } from 'rooks';
import { TypingTextProps } from './TypingText.interface';
import parse from 'html-react-parser';
import styles from './TypingText.styles';

const TypingText = ({
  className,
  divProps,
  duration = 300,
  hideCursor,
  layout = 'left',
  text,
  textProps
}: TypingTextProps) => {
  const [currentText, setCurrentText] = useState('');
  const [startAnimation, setStartAnimation] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  const cursorDuration = text.length * duration;

  const [typingTextRef] = useInViewRef(
    (entries) => {
      !startAnimation && entries[0].isIntersecting && setStartAnimation(true);
    },
    { rootMargin: '-15% 0px' }
  );

  useEffect(() => {
    if (startAnimation) {
      const timer = setTimeout(() => {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          clearTimeout(timer);
        }
      }, duration);

      return () => clearTimeout(timer);
    }
  }, [currentText, duration, hideCursor, startAnimation, text]);

  useEffect(() => {
    if (startAnimation && !hideCursor) {
      const cursorTimer = setInterval(() => {
        setShowCursor((prev) => !prev);
      }, duration);

      setTimeout(() => {
        setShowCursor(false);
        clearInterval(cursorTimer);
      }, cursorDuration);

      return () => clearInterval(cursorTimer);
    }
  }, [cursorDuration, duration, hideCursor, startAnimation]);

  return (
    <div
      className={styles.container(layout === 'left')}
      ref={typingTextRef}
      {...divProps}
    >
      <span aria-label={text} className={className} {...textProps}>
        {parse(currentText)}
      </span>
      {showCursor && !hideCursor && <span>_</span>}
    </div>
  );
};

export default TypingText;
