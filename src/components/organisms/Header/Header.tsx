'use client';

import Link from 'next/link';

import {
  PERSONAL_DETAILS_ID,
  CONTACT_FORM_ID,
  PROJECTS_ID,
  HERO_ID,
  HEADER_ID
} from '@app/lib/constants/selectors';
import { scrollToElement } from '@app/lib/helpers/dom';
import { useBreakpoint } from '@app/lib/hooks/useBreakpoint';
import { useHideOtherElements } from '@app/lib/hooks/useHideOtherElements';
import { useIsMounted } from '@app/lib/hooks/useIsMounted';
import va from '@vercel/analytics';
import FocusTrap from 'focus-trap-react';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useLockBodyScroll, useWindowScrollPosition } from 'rooks';

import Share from '../Share/Share';
import { HeaderProps } from './Header.interface';
import styles from './Header.styles';

const links = [
  { label: 'Home', href: HERO_ID },
  { label: 'Profile', href: PERSONAL_DETAILS_ID },
  { label: 'Projects', href: PROJECTS_ID },
  { label: 'Contact', href: CONTACT_FORM_ID }
];

export default function Header({ isHomepage = false }: HeaderProps) {
  const [isActive, setIsActive] = useState(false);

  const closeRef = useRef(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const isMounted = useIsMounted();

  const { scrollY } = useWindowScrollPosition();

  const { isBelowSm } = useBreakpoint();

  useLockBodyScroll(isActive);

  useHideOtherElements(isActive, wrapperRef.current);

  const scrollToSection = (href: string) => {
    scrollToElement(href);
    setIsActive(false);
  };

  useEffect(() => {
    setIsActive(false);
  }, [isBelowSm]);

  const classes = styles(isActive, isMounted && scrollY > 0, isHomepage);

  const handleAnchorClick = (label: string, href: string) => {
    va.track(`Clicked "${label}"`);
    scrollToSection(href);
  };

  const handleMainMenuClick = () => {
    setIsActive(!isActive);
    va.track('Clicked "Main Menu Toggle"');
  };

  return (
    <motion.header
      className={classes.header}
      ref={headerRef}
      id={HEADER_ID}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className={classes.inner}>
        <Link
          aria-hidden={isActive}
          className={classes.branding}
          href="/"
          onClick={() => va.track('Clicked "Branding"')}
          title="Go to Homepage"
        >
          <b>L</b>A
        </Link>
        <FocusTrap active={isActive}>
          <div className={classes.wrapper} ref={wrapperRef}>
            <button
              aria-expanded={isActive}
              aria-label={`${isActive ? 'Close' : 'Open'} main menu`}
              className={classes.toggle}
              data-toggle
              onClick={handleMainMenuClick}
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
                      onClick={() => handleAnchorClick(label, href)}
                      tabIndex={isActive || !isBelowSm ? 0 : -1}
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
              <Share
                className={classes.share}
                isFocusable={(isActive && isBelowSm) || !isBelowSm}
              />
            </nav>
          </div>
        </FocusTrap>
      </div>
    </motion.header>
  );
}
