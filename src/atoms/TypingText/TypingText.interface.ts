import { AnimationEvent, HTMLAttributes } from 'react';

export interface TypingTextProps {
  className: string;
  divProps?: HTMLAttributes<HTMLDivElement>;
  duration?: number;
  hideCursor?: boolean;
  layout?: 'left' | 'right';
  text: string;
  textProps?: AnimationEvent<HTMLSpanElement>;
}
