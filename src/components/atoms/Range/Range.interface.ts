import { Dispatch, SetStateAction } from 'react';

export interface RangeProps {
  className?: string;
  min?: number;
  max?: number;
  setValue: Dispatch<SetStateAction<number>>;
  value: number;
}
