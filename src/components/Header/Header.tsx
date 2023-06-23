'use client';

import {
  PERSONAL_DETAILS,
  CONTACT_FORM,
  TIMELINE_PROJECTS,
  HERO
} from '@app/lib/constants/selectors';

import Link from 'next/link';
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

  return (
    <header className={styles.header(scrollY > 0)}>
      <Link className={styles.branding} href="/" title="Go to Homepage">
        <b>L</b>A
      </Link>
      <nav className={styles.nav}>
        {links.map(({ href, label }, index) => (
          <Link className={styles.link} href={'#' + href} key={index}>
            {label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
