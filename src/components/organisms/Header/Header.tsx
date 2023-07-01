'use client';

import {
  PERSONAL_DETAILS,
  CONTACT_FORM,
  TIMELINE_PROJECTS,
  HERO
} from '@app/lib/constants/selectors';

import Link from 'next/link';
import { useRef } from 'react';
import { useWindowScrollPosition } from 'rooks';
import styles from './Header.styles';

const links = [
  { label: 'Home', href: HERO },
  { label: 'About Me', href: PERSONAL_DETAILS },
  { label: 'Projects', href: TIMELINE_PROJECTS },
  { label: 'Contact', href: CONTACT_FORM }
];

export default function Header() {
  const { scrollY } = useWindowScrollPosition();

  const headerRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (href: string) =>
    window.scrollTo({
      behavior: 'smooth',
      top:
        (document.getElementById(href)?.offsetTop || 0) -
        (headerRef.current?.offsetHeight || 0) -
        20
    });

  return (
    <header className={styles.header(scrollY > 0)} ref={headerRef}>
      <div className={styles.inner}>
        <Link className={styles.branding} href="/" title="Go to Homepage">
          <b>L</b>A
        </Link>
        <nav className={styles.nav}>
          {links.map(({ href, label }, index) => (
            <a
              className={styles.link}
              onClick={() => scrollToSection(href)}
              key={index}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
