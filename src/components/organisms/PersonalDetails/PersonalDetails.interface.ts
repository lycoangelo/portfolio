import { Ref } from 'react';
import { EssayProps } from '../Essay/Essay.interface';
import { IconShowcaseProps } from '../IconShowcase/IconShowcase.interface';
import { SkillSetListProps } from '../SkillSetList/SkillSetList.interface';
import { TimelineJobsProps } from '../TimelineJobs/TimelineJobs.interface';

export interface ComponentMapProps {
  name: string;
  title: string;
  __typename: string;
}

export type PersonalDetailsItemsType =
  | (EssayProps & ComponentMapProps)
  | (TimelineJobsProps & ComponentMapProps)
  | (SkillSetListProps & ComponentMapProps)
  | (IconShowcaseProps & ComponentMapProps);

export interface PersonalDetailsAnimationProps {
  activeTabIndex: number;
  animationRef: Ref<HTMLParagraphElement>;
  isMobile?: boolean;
}

export interface PersonalDetailsProps {
  sectionsCollection: {
    items: PersonalDetailsItemsType[];
  };
}

export interface PersonalDetailsMap {
  [key: string]: (_props: any) => JSX.Element;
}
