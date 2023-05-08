import PersonalDetailsComponent from './PersonalDetailsComponent';
import iconQuery from '@app/lib/queries/Icon.query';
import personalDetailsQuery from '@app/lib/queries/PersonalDetails.query';
import { fetchGraphQL } from '@app/lib/helpers/api';
import { EssayProps } from '@app/components/Essay/Essay.interface';
import { IconShowcaseProps } from '@app/components/IconShowcase/IconShowcase.interface';
import { SkillSetListProps } from '@app/components/SkillSetList/SkillSetList.interface';
import { TimelineJobsProps } from '@app/components/TimelineJobs/TimelineJobs.interface';

import {
  PersonalDetailsItemsType,
  PersonalDetailsProps
} from '@app/components/PersonalDetails/PersonalDetails.interface';

const personalDetailsDataMap: (_props: PersonalDetailsItemsType) => Promise<{
  [key: string]:
    | EssayProps
    | TimelineJobsProps
    | SkillSetListProps
    | IconShowcaseProps;
}> = async (props) => {
  let iconsData;

  if (props.__typename === 'IconShowcase') {
    const { iconsCollection } = props as IconShowcaseProps;

    iconsData = await Promise.all(
      iconsCollection.items.map(({ sys: { id } }: { sys: { id: string } }) =>
        fetchGraphQL(iconQuery, false, { id })
      )
    ).then(async (res) => {
      const data = await Promise.all(
        res.map(async (data) => await data.json())
      ).then((res) => res.map(({ data }) => ({ ...data.icon })));

      return data;
    });
  }

  return {
    Essay: { ...props } as EssayProps,
    TimelineJobs: { ...props } as TimelineJobsProps,
    SkillSetList: { ...props } as SkillSetListProps,
    IconShowcase: {
      ...props,
      iconsCollection: { items: iconsData }
    } as IconShowcaseProps
  };
};

export async function getPersonalDetailsData({
  sectionsCollection: sections
}: PersonalDetailsProps) {
  const sectionsCollection = {
    items: await Promise.all(
      sections.items.map(async (item) => {
        const itemData = await personalDetailsDataMap(item);
        return itemData[item.__typename];
      })
    )
  };

  return { sectionsCollection };
}

const getPersonalDetails = async (id: string) => {
  const res = await fetchGraphQL(personalDetailsQuery, false, {
    id
  });
  return await res.json();
};

export default async function PersonalDetails({ id }: { id: string }) {
  const {
    data: { personalDetails }
  } = await getPersonalDetails(id);

  const data = await getPersonalDetailsData({ ...personalDetails });

  return <PersonalDetailsComponent {...data} />;
}
