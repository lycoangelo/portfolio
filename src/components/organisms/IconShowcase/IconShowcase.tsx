import Button from '@app/components/atoms/Button/Button';
import { SquircleIcon } from '@app/components/atoms/Icon/Icon';
import { useGetHighestHeight } from '@app/lib/hooks/useGetHighestHeight';
import va from '@vercel/analytics';
import { KeyboardEventHandler, useEffect, useRef, useState } from 'react';

import Essay from '../Essay/Essay';
import { IconShowcaseComponentProps } from './IconShowcase.interface';
import styles from './IconShowcase.styles';

export default function IconShowcase({
  iconsCollection,
  name
}: IconShowcaseComponentProps) {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const buttonsRef = useRef<HTMLButtonElement[]>([]);
  const essaysRef = useRef<HTMLDivElement[]>([]);
  const tabListRef = useRef<HTMLUListElement>(null);

  const buttonsLength = buttonsRef.current.length;
  const height = useGetHighestHeight(essaysRef.current);
  const tabs = iconsCollection.items;

  const handleArrowKeys: KeyboardEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    const { key, currentTarget } = e;
    const previousTabPanel = currentTarget?.previousElementSibling;
    const currentTabPanel = currentTarget?.nextElementSibling;

    const previousTabButton =
      previousTabPanel?.previousElementSibling as HTMLButtonElement;

    const nextTabButton =
      currentTabPanel?.nextElementSibling as HTMLButtonElement;

    if (['ArrowLeft', 'ArrowUp'].includes(key)) {
      e.preventDefault();

      if (previousTabButton) {
        previousTabButton.focus();
      } else {
        buttonsRef.current[buttonsLength - 1]?.focus();
      }
    }

    if (['ArrowRight', 'ArrowDown'].includes(key)) {
      e.preventDefault();

      if (nextTabButton) {
        nextTabButton.focus();
      } else {
        buttonsRef.current[0]?.focus();
      }
    }
  };

  const handleLinkClicks: EventListener = (e) => {
    const link = e.target as HTMLAnchorElement;
    va.track(`Clicked "${link.textContent}" link`);
  };

  const handleTabChange = (index: number) => {
    setActiveTabIndex(index);
    va.track(`Clicked "${tabs[index].name}"`);
  };

  useEffect(() => {
    const links = essaysRef.current
      .map((essay) => [...essay.querySelectorAll('a[href')])
      .flat();

    links.forEach((link) => {
      link.addEventListener('click', handleLinkClicks);
    });

    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClicks);
      });
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.wrapper} style={{ height }}>
        <ul aria-label={name} className={styles.tabList} ref={tabListRef}>
          {tabs.map(({ description, icon, name: iconName }, index) => {
            const isActive = index === activeTabIndex;

            return (
              <li key={index}>
                <Button
                  aria-label={iconName}
                  aria-expanded={isActive}
                  className={styles.button}
                  color="transparent"
                  onClick={() => handleTabChange(index)}
                  onKeyDown={handleArrowKeys}
                  ref={(el) =>
                    (buttonsRef.current[index] = el as HTMLButtonElement)
                  }
                  size="fit"
                >
                  <SquircleIcon
                    className={styles.icon}
                    color={isActive ? 'primary' : 'black'}
                    image={icon}
                  />
                </Button>
                <Essay
                  className={styles.tab(activeTabIndex === index)}
                  essay={description}
                  ref={(el) =>
                    (essaysRef.current[index] = el as HTMLDivElement)
                  }
                  style={{
                    marginTop: (tabListRef.current?.offsetHeight || 0) + 40
                  }}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
