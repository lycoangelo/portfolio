import { useIsMounted } from '@app/lib/hooks/useIsMounted';
import React, { useState, useEffect } from 'react';

import { TextScrambleProps } from './ScrambleText.interface';
import { randomItem, nextItem } from './ScrambleText.utils';

const symbols: string[] =
  'ABCDEFGHIJKLMNOPQRSTYUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');

const TextScramble = ({
  className = '',
  letterSpeed = 5,
  nextLetterSpeed = 100,
  paused = false,
  pauseTime = 1500,
  texts,
  ...props
}: TextScrambleProps) => {
  const [currentText, setCurrentText] = useState<string>(texts[0]);

  const isMounted = useIsMounted();

  const initSymbols: string[] = Array(currentText.length)
    .fill(0)
    .map(() => randomItem(symbols));

  const [displayedText, setDisplayedText] = useState<string[]>(initSymbols);

  const leftIndexes: number[] = [];

  const defaultLeftIndexes = (): void => {
    currentText.split('').forEach((_, i) => {
      leftIndexes.push(i);
    });
  };

  let bakeLetterInterval = 0;
  let bakeTextInterval = 0;

  const bakeLetter = () => {
    bakeLetterInterval = window.setInterval(() => {
      if (!paused) {
        const updatedText: string[] = [];

        currentText.split('').forEach((_, i) => {
          if (!leftIndexes.includes(i)) {
            updatedText[i] = currentText[i];

            return;
          }

          const randomSymbol = randomItem(symbols);
          updatedText[i] = randomSymbol;
        });

        setDisplayedText(updatedText);
      }
    }, letterSpeed);
  };

  const bakeText = () => {
    defaultLeftIndexes();
    bakeLetter();

    bakeTextInterval = window.setInterval(() => {
      if (!paused) {
        if (leftIndexes.length === 0) {
          clearInterval(bakeLetterInterval);
          clearInterval(bakeTextInterval);

          setTimeout(() => {
            setCurrentText(nextItem(texts, currentText));
            defaultLeftIndexes();
          }, pauseTime);
        }

        leftIndexes.shift();
      }
    }, nextLetterSpeed);
  };

  useEffect(() => {
    if (!paused) bakeText();
  }, [currentText, paused]); // eslint-disable-line react-hooks/exhaustive-deps

  return isMounted ? (
    <span className={className} {...props}>
      {displayedText}
    </span>
  ) : null;
};

export default TextScramble;
