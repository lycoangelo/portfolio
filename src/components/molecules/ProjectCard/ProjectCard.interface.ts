import { ProjectProps } from '@app/components/organisms/Projects/Projects.interface';
import { MutableRefObject } from 'react';

export interface ProjectCardProps extends ProjectProps {
  className?: string;
  index: number;
  isFlipped: boolean;
  isPresent: boolean;
  projectsRef: MutableRefObject<(HTMLElement | null)[]>;
  setIsFlipped: () => void;
}
