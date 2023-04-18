import { DownloadIcon } from '@app/atoms/Icon/Icon';
import { SVGProps } from 'react';

export type IconType = (_props: SVGProps<SVGSVGElement>) => JSX.Element;

const iconMap: { [key: string]: IconType } = {
  download: DownloadIcon
};

export default iconMap;
