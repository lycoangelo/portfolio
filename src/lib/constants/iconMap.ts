import {
  DownloadIcon,
  EmailIcon,
  LocationIcon,
  LinkedInIcon,
  MobileIcon,
  UpworkIcon
} from '@app/atoms/Icon/Icon';

import { SVGProps } from 'react';

export type IconType = (_props: SVGProps<SVGSVGElement>) => JSX.Element;

const iconMap: { [key: string]: IconType } = {
  download: DownloadIcon,
  email: EmailIcon,
  location: LocationIcon,
  linkedin: LinkedInIcon,
  mobile: MobileIcon,
  upwork: UpworkIcon
};

export default iconMap;
