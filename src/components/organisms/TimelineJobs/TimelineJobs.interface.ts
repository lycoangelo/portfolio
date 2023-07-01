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
  __typename: string;
  name: string;
  title: string;
  timelinesCollection: {
    items: JobsCollectionProps[];
  };
}
