'use client';

import Link from 'next/link';

import {
  PERSONAL_DETAILS,
  CONTACT_FORM,
  PROJECTS,
  HERO
} from '@app/lib/constants/selectors';
import { useBreakpoint } from '@app/lib/hooks/useBreakpoint';
import { useHideOtherElements } from '@app/lib/hooks/useHideOtherElements';
import FocusTrap from 'focus-trap-react';
import { useEffect, useRef, useState } from 'react';
import { useLockBodyScroll, useWindowScrollPosition } from 'rooks';

import { HeaderProps } from './Header.interface';
import styles from './Header.styles';

const links = [
  { label: 'Home', href: HERO },
  { label: 'Profile', href: PERSONAL_DETAILS },
  { label: 'Projects', href: PROJECTS },
  { label: 'Contact', href: CONTACT_FORM }
];

export default function Header({ isHomepage = false }: HeaderProps) {
  const [isActive, setIsActive] = useState(false);

  const closeRef = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const { scrollY } = useWindowScrollPosition();

  const { isBelowSm } = useBreakpoint();

  useLockBodyScroll(isActive);

  useHideOtherElements(isActive, wrapperRef.current);

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

  const classes = styles(isActive, scrollY > 0, isHomepage);

  return (
    <header className={classes.header} ref={headerRef}>
      <div className={classes.inner}>
        <Link className={classes.branding} href="/" title="Go to Homepage">
          <b>L</b>A
        </Link>
        <FocusTrap active={isActive}>
          <div className={classes.wrapper} ref={wrapperRef}>
            <button
              aria-expanded={isActive}
              aria-label={`${isActive ? 'Close' : 'Open'} main menu`}
              className={classes.toggle}
              data-toggle
              onClick={() => setIsActive(!isActive)}
              ref={closeRef}
            >
              <span className={classes.hamburgerTop} />
              <span className={classes.hamburgerCenter} />
              <span className={classes.hamburgerBottom} />
            </button>
            <nav aria-hidden={!isActive && isBelowSm} className={classes.nav}>
              <ul className={classes.list}>
                {links.map(({ href, label }, index) => (
                  <li className={classes.item} key={index}>
                    <a
                      className={classes.link}
                      data-target={href}
                      onClick={() => scrollToSection(href)}
                      tabIndex={isActive ? 0 : -1}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </FocusTrap>
      </div>
    </header>
  );
}
