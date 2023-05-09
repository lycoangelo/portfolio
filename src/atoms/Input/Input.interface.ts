import { HTMLInputTypeAttribute, InputHTMLAttributes } from 'react';

export type TypeTypes = HTMLInputTypeAttribute | 'textarea' | undefined;

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  className: string;
  error?: string;
  isSubmitted?: boolean;
  label: string;
  type: TypeTypes;
}
