import { Dispatch, InputHTMLAttributes, SetStateAction } from 'react';

export interface RangeProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  min?: number;
  max?: number;
  name: string;
  setValue: Dispatch<SetStateAction<number>>;
  value: number;
}
