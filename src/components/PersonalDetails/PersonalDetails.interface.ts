import { EssayProps } from '../Essay/Essay.interface';
import { TimelineJobs } from '../TimelineJobs/TimelineJobs.interface';

export interface PersonalDetailsProps {
  sectionsCollection: {
    items: (EssayProps | TimelineJobs)[];
  };
}

export interface PersonalDetailsMap {
  [key: string]: (props: any) => JSX.Element;
}
