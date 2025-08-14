import { sanitizeString } from "@app/lib/helpers/string";
import { useInView } from "framer-motion";
import parse from "html-react-parser";
import { useState, useEffect, useRef } from "react";

import { TypingTextProps } from "./TypingText.interface";
import styles from "./TypingText.styles";

const TypingText = ({
  className,
  divProps,
  duration = 300,
  hideCursor,
  layout = "left",
  tag = "p",
  text,
  textProps
}: TypingTextProps) => {
  const [currentText, setCurrentText] = useState("");
  const [showCursor, setShowCursor] = useState(true);

  const typingTextRef = useRef(null);

  const Tag: keyof JSX.IntrinsicElements = tag;

  const cursorDuration = text.length * duration;

  const startAnimation = useInView(typingTextRef, {
    once: true,
    margin: "-20% 0px"
  });

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
      className={styles.container(layout === "left")}
      ref={typingTextRef}
      {...divProps}
    >
      <Tag className={className} {...textProps}>
        <span aria-hidden>{parse(currentText)}</span>
        <span className={styles.srOnly}>{sanitizeString(text)}</span>
      </Tag>
      {showCursor && !hideCursor && <span>_</span>}
    </div>
  );
};

export default TypingText;
