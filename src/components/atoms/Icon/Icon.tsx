import Image from 'next/image';

import ArrowDownIcon from '@app/assets/icons/arrow-down.svg';
import ArrowLeftIcon from '@app/assets/icons/arrow-left.svg';
import ArrowRightIcon from '@app/assets/icons/arrow-right.svg';
import CloseIcon from '@app/assets/icons/close.svg';
import DownloadIcon from '@app/assets/icons/download.svg';
import EmailIcon from '@app/assets/icons/email.svg';
import FlipIcon from '@app/assets/icons/flip.svg';
import GithubIcon from '@app/assets/icons/github.svg';
import LinkedInIcon from '@app/assets/icons/linkedin.svg';
import LocationIcon from '@app/assets/icons/location.svg';
import MobileIcon from '@app/assets/icons/mobile.svg';
import TwitterXIcon from '@app/assets/icons/twitter-x.svg';
import UpworkIcon from '@app/assets/icons/upwork.svg';
import iconMap from '@app/lib/constants/iconMap';

import { SquircleIconProps } from './Icon.interface';
import styles from './Icon.styles';

const SquircleIcon = ({
  className = '',
  color,
  icon,
  image
}: SquircleIconProps) => {
  const Icon = icon && iconMap[icon];

  return (
    <figure className={styles.figure(color, className)}>
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

export {
  ArrowDownIcon,
  ArrowLeftIcon,
  ArrowRightIcon,
  CloseIcon,
  DownloadIcon,
  EmailIcon,
  FlipIcon,
  GithubIcon,
  LocationIcon,
  LinkedInIcon,
  MobileIcon,
  UpworkIcon,
  SquircleIcon,
  TwitterXIcon
};
