import { ContentBody } from '@app/components/atoms/RichText/RichText.interface';

export interface ProjectProps {
  description: ContentBody;
  name: string;
  company: string;
  role: string;
  isPresent: boolean;
  endDate: string;
  startDate: string;
  sys: {
    id: string;
  };
}

export interface ProjectsCollectionProps {
  title: string;
  projectsCollection: {
    items: ProjectProps[];
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
