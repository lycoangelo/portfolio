import Button from '@app/components/atoms/Button/Button';
import { SquircleIcon } from '@app/components/atoms/Icon/Icon';
import { useState } from 'react';

import Essay from '../Essay/Essay';
import { IconShowcaseComponentProps } from './IconShowcase.interface';
import styles from './IconShowcase.styles';

export default function IconShowcase({
  iconsCollection
}: IconShowcaseComponentProps) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.tablist} role="tablist">
        {iconsCollection.items.map(({ icon }, index) => {
          const isActive = index === activeIndex;

          return (
            <Button
              aria-controls={`tab-${index}`}
              aria-selected={isActive}
              className={styles.button}
              size="fit"
              color="transparent"
              key={index}
              onClick={() => setActiveIndex(index)}
              role="tab"
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
            key={index}
            role="tabpanel"
          />
        ))}
      </div>
    </div>
  );
}
