'use client';

import styles from './Buttons.styles';
import iconMap, { IconType } from '@app/lib/constants/iconMap';
import { ButtonProps } from './Button.interface';

export default function Button({
  className,
  children,
  color = 'primary',
  icon = '',
  hasBorderEffect,
  size = 'sm',
  type = 'button',
  ...props
}: ButtonProps) {
  const Icon = iconMap[icon] as IconType;

  return (
    <button
      {...props}
      className={styles.button(color, size, className, hasBorderEffect)}
      type={type}
    >
      {children} {Icon && <Icon className={styles.icon(color, size)} />}
    </button>
  );
}
