export interface JobProps {
  company: string;
  role: string;
  isPresent: boolean;
  endDate: string;
  startDate: string;
}

export interface JobsCollectionProps {
  title: string;
  jobsCollection: {
    items: JobProps[];
  };
}

export interface TimelineJobsProps {
  title: string;
  timelinesCollection: {
    items: JobsCollectionProps[];
  };
}
