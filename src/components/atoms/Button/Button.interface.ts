import iconMap from '@app/lib/constants/iconMap';
import {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
  Ref
} from 'react';

export interface ObjectKey {
  [key: string]: string;
}

export interface ButtonColors {
  active: string;
  inactive: string;
  primary: string;
  secondary: string;
  transparent: string;
}

export interface ButtonSizes {
  auto: string;
  fit: string;
  full: string;
  sm: string;
  md: string;
  lg: string;
}

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children?: ReactNode;
    color?: keyof ButtonColors;
    hasBorderEffect?: boolean;
    href?: string;
    icon?: keyof typeof iconMap;
    iconClassName?: string;
    size?: keyof ButtonSizes;
    ref?: Ref<HTMLButtonElement | HTMLAnchorElement>;
    type?: 'button' | 'submit' | 'reset';
  };
