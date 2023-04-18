import { EssayProps } from '../Essay/Essay.interface';
import { TimelineJobsProps } from '../TimelineJobs/TimelineJobs.interface';

export interface PersonalDetailsProps {
  sectionsCollection: {
    items: (EssayProps | TimelineJobsProps)[];
  };
}

export interface PersonalDetailsMap {
  [key: string]: (_props: any) => JSX.Element;
}
