import styles from './IconShowcase.styles';
import { IconShowcaseProps } from './IconShowcase.interface';
import { SquircleIcon } from '@app/atoms/Icon/Icon';
import Button from '@app/atoms/Button/Button';
import { useState } from 'react';

export default function IconShowcase({ iconsCollection }: IconShowcaseProps) {
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
    </div>
  );
}
