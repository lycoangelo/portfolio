export interface IconProps {
  description: {
    json: any;
  };
  icon: {
    url: string;
    title: string;
  };
}

export interface IconShowcaseProps {
  iconsCollection: {
    items: IconProps[];
  };
}
