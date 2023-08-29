'use client';

import {
  PERSONAL_DETAILS,
  CONTACT_FORM,
  PROJECTS,
  HERO
} from '@app/lib/constants/selectors';
import { useBreakpoint } from '@app/lib/hooks/useBreakpoint';
import { useIsMounted } from '@app/lib/hooks/useIsMounted';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { useLockBodyScroll, useWindowScrollPosition } from 'rooks';
import styles from './Header.styles';

const links = [
  { label: 'Home', href: HERO },
  { label: 'Profile', href: PERSONAL_DETAILS },
  { label: 'Projects', href: PROJECTS },
  { label: 'Contact', href: CONTACT_FORM }
];

export default function Header() {
  const [isActive, setIsActive] = useState(false);

  const headerRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useWindowScrollPosition();

  const isMounted = useIsMounted();

  const { isBelowSm } = useBreakpoint();

  useLockBodyScroll(isActive);

  const scrollToSection = (href: string) => {
    window.scrollTo({
      behavior: 'smooth',
      top:
        (document.getElementById(href)?.offsetTop ?? 0) -
        (headerRef.current?.offsetHeight ?? 0) -
        20
    });

    setIsActive(false);
  };

  useEffect(() => {
    setIsActive(false);
  }, [isBelowSm]);

  return isMounted ? (
    <header className={styles.header(scrollY > 0)} ref={headerRef}>
      <div className={styles.inner}>
        <Link className={styles.branding} href="/" title="Go to Homepage">
          <b>L</b>A
        </Link>
        <button
          aria-expanded={isActive}
          aria-label={`${isActive ? 'Close' : 'Open'} main menu`}
          className={styles.toggle}
          data-toggle
          onClick={() => setIsActive(!isActive)}
        >
          <span className={styles.hamburgerTop(isActive)} />
          <span className={styles.hamburgerCenter(isActive)} />
          <span className={styles.hamburgerBottom(isActive)} />
        </button>
        <nav className={styles.nav(isActive)}>
          {links.map(({ href, label }, index) => (
            <a
              className={styles.link}
              data-target={href}
              key={index}
              onClick={() => scrollToSection(href)}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  ) : null;
}
