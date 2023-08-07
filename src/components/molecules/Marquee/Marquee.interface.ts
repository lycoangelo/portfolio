import { ReactNode } from 'react';

export interface MarqueeProps {
  className?: string;
  children: ReactNode;
  duration?: number;
  pauseOnHover?: boolean;
}
