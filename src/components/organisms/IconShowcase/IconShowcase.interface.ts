import { ContentBody } from '@app/components/atoms/RichText/RichText.interface';

export interface IconProps {
  description: ContentBody;
  icon: {
    url: string;
    title: string;
  };
  name: string;
}

interface IconItemProps {
  sys: {
    id: string;
  };
}

export interface IconShowcaseProps {
  __typename: string;
  name: string;
  title: string;
  iconsCollection: {
    items: IconItemProps[];
  };
}

export interface IconShowcaseComponentProps {
  name: string;
  iconsCollection: {
    items: IconProps[];
  };
  title: string;
}
