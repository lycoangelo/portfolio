import { ButtonHTMLAttributes } from 'react';
import styles from './Buttons.styles';
import iconMap, { IconType } from '@app/lib/constants/iconMap';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  children: any;
  color: string;
  icon?: keyof typeof iconMap;
  hasBorderEffect?: boolean;
  size: string;
}

export default function Button({
  className,
  children,
  color,
  icon = '',
  hasBorderEffect,
  size,
  ...props
}: ButtonProps) {
  const Icon = iconMap[icon] as IconType;

  return (
    <button {...props} className={styles.button(color, size, className, hasBorderEffect)}>
      {children} {Icon && <Icon className={styles.icon(color, size)} />}
    </button>
  );
}
