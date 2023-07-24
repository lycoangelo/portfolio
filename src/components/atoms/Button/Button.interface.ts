import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
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

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: any;
    color?: keyof ButtonColors;
    hasBorderEffect?: boolean;
    href?: string;
    icon?: keyof typeof iconMap;
    iconClassName?: string;
    size?: keyof ButtonSizes;
    type?: 'button' | 'submit' | 'reset' | undefined;
  };
