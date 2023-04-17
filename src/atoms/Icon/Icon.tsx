import DownloadIcon from '@app/assets/icons/download.svg';
import iconMap from '@app/lib/constants/iconMap';
import styles from './Icon.styles';
import Image from 'next/image';
import { SquircleIconProps } from './Icon.interface';

const SquircleIcon = ({ className = '', icon, image }: SquircleIconProps) => {
  const Icon = icon && iconMap[icon];

  return (
    <figure className={styles.figure(className)}>
      {Icon ? (
        <Icon />
      ) : (
        image && (
          <Image
            className={styles.image}
            src={image.url}
            alt={image.title}
            width={30}
            height={30}
          />
        )
      )}
    </figure>
  );
};

export { DownloadIcon, SquircleIcon };
