import Button from '@app/components/atoms/Button/Button';
import { SquircleIcon } from '@app/components/atoms/Icon/Icon';
import {
  FocusEventHandler,
  KeyboardEventHandler,
  useRef,
  useState
} from 'react';

import Essay from '../Essay/Essay';
import { IconShowcaseComponentProps } from './IconShowcase.interface';
import styles from './IconShowcase.styles';

export default function IconShowcase({
  iconsCollection,
  name
}: IconShowcaseComponentProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  const buttonsRef = useRef<HTMLButtonElement[]>([]);

  const toggleButtonTabIndex = (button: HTMLButtonElement, tabindex: 0 | -1) =>
    button.setAttribute('tabindex', tabindex.toString());

  const handleTabArrowKeys: KeyboardEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  > = (e) => {
    const { key, currentTarget } = e;

    const previousTabButton =
      currentTarget.previousElementSibling as HTMLButtonElement;
    const nextTabButton = currentTarget.nextElementSibling as HTMLButtonElement;

    if (['ArrowLeft', 'ArrowUp'].includes(key)) {
      e.preventDefault();

      if (previousTabButton) {
        toggleButtonTabIndex(previousTabButton, 0);
        previousTabButton.focus();
      } else {
        const lastButton = buttonsRef.current[buttonsRef.current.length - 1];
        toggleButtonTabIndex(lastButton, 0);
        lastButton?.focus();
      }
    }

    if (['ArrowRight', 'ArrowDown'].includes(key)) {
      e.preventDefault();

      if (nextTabButton) {
        toggleButtonTabIndex(nextTabButton, 0);
        nextTabButton.focus();
      } else {
        const firstButton = buttonsRef.current[0];
        toggleButtonTabIndex(firstButton, 0);
        firstButton?.focus();
      }
    }
  };

  const handleTabBlur: FocusEventHandler<HTMLButtonElement> &
    FocusEventHandler<HTMLAnchorElement> = (e) => {
    toggleButtonTabIndex(e.currentTarget as HTMLButtonElement, -1);
  };

  return (
    <div className={styles.container}>
      <div aria-label={name} className={styles.tablist} role="tablist">
        {iconsCollection.items.map(({ icon, name: iconName }, index) => {
          const isActive = index === activeIndex;

          return (
            <Button
              aria-live="polite"
              aria-label={iconName}
              aria-controls={`tabpanel-${name + index}`}
              aria-selected={isActive}
              className={styles.button}
              color="transparent"
              key={index}
              onClick={() => setActiveIndex(index)}
              onKeyDown={handleTabArrowKeys}
              onBlur={!isActive ? handleTabBlur : undefined}
              ref={(el) =>
                (buttonsRef.current[index] = el as HTMLButtonElement)
              }
              role="tab"
              size="fit"
              tabIndex={isActive ? 0 : -1}
            >
              <SquircleIcon
                className={styles.icon}
                color={isActive ? 'primary' : 'black'}
                image={icon}
              />
            </Button>
          );
        })}
      </div>

      <div className={styles.tabs}>
        {iconsCollection.items.map(({ description }, index) => (
          <Essay
            className={styles.tab(activeIndex === index)}
            essay={description}
            id={`tabpanel-${index}`}
            key={index}
            role="tabpanel"
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}
