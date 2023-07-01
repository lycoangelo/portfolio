import styles from './IconShowcase.styles';
import { useState } from 'react';
import { IconShowcaseComponentProps } from './IconShowcase.interface';

import { SquircleIcon } from '@app/components/atoms/Icon/Icon';
import Button from '@app/components/atoms/Button/Button';
import Essay from '../Essay/Essay';

export default function IconShowcase({
  iconsCollection
}: IconShowcaseComponentProps) {
  const [isActiveIndex, setIsActiveIndex] = useState(0);

  return (
    <div className={styles.container}>
      {iconsCollection.items.map(({ icon }, index) => (
        <Button
          size="fit"
          color="transparent"
          key={index}
          onClick={() => setIsActiveIndex(index)}
        >
          <SquircleIcon
            className={styles.icon}
            color={isActiveIndex === index ? 'primary' : 'black'}
            image={icon}
          />
        </Button>
      ))}

      <div className={styles.tabs}>
        {iconsCollection.items.map(({ description }, index) => (
          <Essay
            className={styles.tab(isActiveIndex === index)}
            essay={description}
            key={index}
          />
        ))}
      </div>
    </div>
  );
}
