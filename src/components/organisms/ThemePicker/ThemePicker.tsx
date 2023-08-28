'use client';

import Button from '@app/components/atoms/Button/Button';
import { PrimaryColors, primaryColors } from '@app/lib/constants/theme';
import { useIsMounted } from '@app/lib/hooks/useIsMounted';
import FocusTrap from 'focus-trap-react';
import { useEffect, useRef, useState } from 'react';
import { useCookies } from 'react-cookie';
import styles from './ThemePicker.styles';

const themeCookieName = 'theme';

export default function ThemePicker() {
  const [isActive, setIsActive] = useState(false);
  const [listHeight, setListHeight] = useState(0);

  const isMounted = useIsMounted();

  const [cookies, setCookie] = useCookies([themeCookieName]);

  const activeColor = cookies.theme || 'teal';

  const listRef = useRef<HTMLUListElement>(null);
  const toggleRef = useRef<HTMLDivElement>(null);

  const handleClick = (color: PrimaryColors) => {
    if (isActive) {
      setCookie(themeCookieName, color);
      setIsActive(false);
    } else {
      setIsActive(true);
    }
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

  return isMounted ? (
    <FocusTrap active={isActive}>
      <aside className={styles.aside} style={{ height: listHeight }}>
        <ul className={styles.list} ref={listRef}>
          {primaryColors
            .filter((color) => color !== activeColor)
            .map((color, index) => (
              <li className={styles.item(false)} key={index}>
                <Button
                  className={styles.toggle(color)}
                  color="transparent"
                  onClick={() => handleClick(color)}
                  size="full"
                />
              </li>
            ))}
        </ul>
        <div className={styles.item(true)} ref={toggleRef}>
          <Button
            className={styles.toggle(activeColor)}
            color="transparent"
            onClick={() => setIsActive(!isActive)}
            size="full"
          />
        </div>
      </aside>
    </FocusTrap>
  ) : null;
}
