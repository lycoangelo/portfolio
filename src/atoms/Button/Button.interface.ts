import { ButtonHTMLAttributes } from 'react';
import iconMap from '@app/lib/constants/iconMap';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: any;
  color?: string;
  icon?: keyof typeof iconMap;
  hasBorderEffect?: boolean;
  size?: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
}
