export interface EssayEssayProps {
  essay: {
    json: any;
  };
}

export interface EssayProps extends EssayEssayProps {
  __typename: string;
  name: string;
  title: string;
}

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

export interface SkillProps {
  logo: {
    title: string;
    url: string;
  };
  level: string;
  name: string;
}

export interface SkillsProps {
  name: string;
  skillsCollection: {
    items: SkillProps[];
  };
}

export interface SkillSetListProps {
  listCollection: {
    items: SkillsProps[];
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

export interface PersonalDetailsProps {
  sectionsCollection: {
    items: (EssayProps | TimelineJobs)[];
  };
}

export interface PersonalDetailsMap {
  [key: string]: (props: any) => JSX.Element;
}
