export interface IconProps {
  description: {
    json: any;
  };
  icon: {
    url: string;
    title: string;
  };
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
  iconsCollection: {
    items: IconProps[];
  };
}