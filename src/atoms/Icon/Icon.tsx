import DownloadIcon from '@app/assets/icons/download.svg';
import iconMap from '@app/lib/constants/iconMap';
import styles from './Icon.styles';
import Image from 'next/image';

const SquircleIcon = ({
  className = '',
  icon,
  image
}: {
  className?: string;
  icon?: string;
  image?: {
    title: string;
    url: string;
  };
}) => {
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
