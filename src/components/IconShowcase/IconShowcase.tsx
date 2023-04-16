import styles from './IconShowcase.styles';
import { IconShowcaseProps } from './IconShowcase.interface';
import { SquircleIcon } from '@app/atoms/Icon/Icon';

export default function IconShowcase({ iconsCollection }: IconShowcaseProps) {
  return (
    <div className={styles.container}>
      {iconsCollection.items.map(({ icon }, index) => (
        <SquircleIcon className={styles.icon} image={icon} key={index} />
      ))}
    </div>
  );
}
