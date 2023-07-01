export interface ProjectProps {
  name: string;
  company: string;
  role: string;
  isPresent: boolean;
  endDate: string;
  startDate: string;
}

export interface ProjectsCollectionProps {
  title: string;
  projectsCollection: {
    items: ProjectProps[];
  };
}

export interface TimelineProjectsProps {
  name: string;
  title: string;
  projectsCollection: {
    items: ProjectProps[];
  };
}
