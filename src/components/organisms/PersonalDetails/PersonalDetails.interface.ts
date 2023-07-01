import { EssayProps } from '../Essay/Essay.interface';
import { IconShowcaseProps } from '../IconShowcase/IconShowcase.interface';
import { SkillSetListProps } from '../SkillSetList/SkillSetList.interface';
import { TimelineJobsProps } from '../TimelineJobs/TimelineJobs.interface';

export type PersonalDetailsItemsType =
  | EssayProps
  | TimelineJobsProps
  | SkillSetListProps
  | IconShowcaseProps;

export interface PersonalDetailsProps {
  sectionsCollection: {
    items: PersonalDetailsItemsType[];
  };
}

export interface PersonalDetailsMap {
  [key: string]: (_props: any) => JSX.Element;
}
