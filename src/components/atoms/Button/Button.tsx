'use client';

import Link from 'next/link';

import iconMap from '@app/lib/constants/iconMap';
import { useIsExternalLink } from '@app/lib/hooks/useIsExternalLink';
import { forwardRef, LegacyRef, Ref } from 'react';

import { ButtonProps } from './Button.interface';
import styles from './Buttons.styles';

const Button = forwardRef(
  (
    {
      children,
      color = 'primary',
      hasBorderEffect,
      href,
      icon = '',
      iconClassName = '',
      size = 'sm',
      type = 'button',
      ...props
    }: ButtonProps,
    ref
  ) => {
    const Icon = iconMap[icon];

    const buttonClasses = styles.button(
      color,
      size,
      props.className,
      hasBorderEffect
    );

    const iconClasses = styles.icon(color, size, iconClassName);

    const isExternalLink = useIsExternalLink(href);

    if (href) {
      if (isExternalLink) {
        return (
          <a
            {...props}
            className={buttonClasses}
            href={href}
            rel="noreferrer"
            target="_blank"
            ref={ref as Ref<HTMLAnchorElement>}
          >
            {children} {Icon && <Icon className={iconClasses} />}
          </a>
        );
      }

      return (
        <Link
          {...props}
          className={buttonClasses}
          href={href}
          ref={ref as Ref<HTMLAnchorElement>}
        >
          {children} {Icon && <Icon className={iconClasses} />}
        </Link>
      );
    }

    return (
      <button
        {...props}
        className={buttonClasses}
        onClick={props.onClick}
        type={type}
        ref={ref as LegacyRef<HTMLButtonElement>}
      >
        {children} {Icon && <Icon className={iconClasses} />}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
