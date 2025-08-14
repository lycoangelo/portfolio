import { ProjectProps } from "@app/components/organisms/Projects/Projects.interface";

export interface ProjectCardProps extends ProjectProps {
  className?: string;
  isFlipped: boolean;
  isPresent: boolean;
  setIsFlipped: () => void;
}
