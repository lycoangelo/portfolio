'use client';

import Button from '@app/components/atoms/Button/Button';
import { themeColors, ThemeColors } from '@app/lib/constants/theme';
import { useHideOtherElements } from '@app/lib/hooks/useHideOtherElements';
import FocusTrap from 'focus-trap-react';
import { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import { useLockBodyScroll } from 'rooks';

import { ThemePickerProps } from './ThemePicker.interface';
import styles from './ThemePicker.styles';

const themeCookieName = 'theme';

export default function ThemePicker({ className = '' }: ThemePickerProps) {
  const [isActive, setIsActive] = useState(false);
  const [listHeight, setListHeight] = useState(0);

  const [cookies, setCookie] = useCookies([themeCookieName]);

  const buttonsRef = useRef<HTMLButtonElement[]>([]);
  const listRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  useLockBodyScroll(isActive);

  useHideOtherElements(isActive, listRef.current);

  const activeColor = cookies.theme || 'teal';

  const handleClick = (color: ThemeColors) => {
    if (isActive) {
      setCookie(themeCookieName, color);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const toggleActiveState = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    setListHeight(
      isActive
        ? (listRef?.current?.offsetHeight ?? 0) +
            (toggleRef?.current?.offsetHeight ?? 0)
        : toggleRef?.current?.offsetHeight ?? 0
    );
  }, [isActive]);

  useEffect(() => {
    document.body.setAttribute('theme', activeColor);
  }, [activeColor, setCookie]);

  return (
    <FocusTrap active={isActive}>
      <div
        className={styles.container(className, isActive)}
        style={{ height: listHeight }}
      >
        <ul aria-hidden={!isActive} className={styles.list} ref={listRef}>
          {themeColors
            .filter((color) => color !== activeColor)
            .map((color, index) => (
              <li className={styles.item(false)} key={index}>
                <Button
                  aria-label={`Select ${color} Color`}
                  className={styles.toggle(color)}
                  color="transparent"
                  onClick={() => handleClick(color)}
                  ref={(el) =>
                    (buttonsRef.current[index] = el as HTMLButtonElement)
                  }
                  size="full"
                  tabIndex={isActive ? 0 : -1}
                />
              </li>
            ))}
        </ul>
        <div className={styles.item(true)} ref={toggleRef}>
          <Button
            aria-label="Theme Colors Options Toggle"
            aria-expanded={isActive}
            className={styles.toggle(activeColor)}
            color="transparent"
            onClick={toggleActiveState}
            size="full"
          />
        </div>
      </div>
    </FocusTrap>
  );
}
