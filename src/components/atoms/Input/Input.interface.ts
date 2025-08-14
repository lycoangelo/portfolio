import { HTMLInputTypeAttribute, InputHTMLAttributes, Ref } from 'react';

export type TypeTypes = HTMLInputTypeAttribute | 'textarea' | undefined;

type InputElement = HTMLInputElement | HTMLTextAreaElement;

export interface InputProps
  extends InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
  className: string;
  error?: string;
  isSubmitted?: boolean;
  label: string;
  ref?: Ref<InputElement>;
  type: TypeTypes;
}
