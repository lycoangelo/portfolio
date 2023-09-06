import { ImageProps } from 'next/image';

import { ContentBody } from '@app/components/atoms/RichText/RichText.interface';

export interface HeroProps {
  background: ImageProps;
  cv?: {
    title: string;
    url: string;
  };
  description: string;
  headline: ContentBody;
}
