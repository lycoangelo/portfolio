import { HTMLAttributes } from 'react';

export interface EssayProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  essay: {
    json: any;
  };
}
