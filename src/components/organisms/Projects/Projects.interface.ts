import { ImageProps } from 'next/image';

import { ContentBody } from '@app/components/atoms/RichText/RichText.interface';

export interface ProjectProps {
  description: ContentBody;
  logo: ImageProps;
  name: string;
  link: string;
  company: string;
  role: string;
  isPresent: boolean;
  endDate: string;
  startDate: string;
  sys: {
    id: string;
  };
}

export interface ProjectsProps {
  name: string;
  projectsCollection: {
    items: ProjectProps[];
  };
  title: string;
  variant: 'carousel' | 'timeline';
}
