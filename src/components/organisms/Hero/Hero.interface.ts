import { ImageProps } from 'next/image';

export interface HeroProps {
  background: ImageProps;
  cv?: {
    title: string;
    url: string;
  };
  description: string;
  headline: any;
}
