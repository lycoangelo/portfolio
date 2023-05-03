import { ButtonHTMLAttributes } from 'react';
import iconMap from '@app/lib/constants/iconMap';

export interface ObjectKey {
  [key: string]: string;
}

export interface ButtonColors {
  active: string;
  inactive: string;
  primary: string;
  transparent: string;
}

export interface ButtonSizes {
  fit: string;
  sm: string;
  md: string;
  lg: string;
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: any;
  color?: keyof ButtonColors;
  icon?: keyof typeof iconMap;
  hasBorderEffect?: boolean;
  size?: keyof ButtonSizes;
  type?: 'button' | 'submit' | 'reset' | undefined;
}
