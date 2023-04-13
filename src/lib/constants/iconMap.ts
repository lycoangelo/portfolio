import { DownloadIcon } from '@app/components/Icon/Icon';
import { SVGProps } from 'react';

export type IconType = (props: SVGProps<SVGSVGElement>) => JSX.Element;

const iconMap: { [key: string]: IconType } = {
  download: DownloadIcon
};

export default iconMap;
