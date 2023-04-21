import { InputHTMLAttributes } from 'react';

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  className: string;
  error?: string;
  isSubmitted?: boolean;
  label: string;
}
