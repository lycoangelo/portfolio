import { HTMLAttributes } from 'react';

export interface TextScrambleProps extends HTMLAttributes<HTMLSpanElement> {
  texts: string[];
  className?: string;
  letterSpeed?: number;
  nextLetterSpeed?: number;
  paused?: boolean;
  pauseTime?: number;
}
