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
  timelinesCollection: {
    items: JobsCollectionProps[];
  };
}

export interface TimelineJobs extends TimelineJobsProps {
  __typename: string;
  name: string;
  title: string;
}
