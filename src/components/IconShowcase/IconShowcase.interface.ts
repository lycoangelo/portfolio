export interface IconProps {
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
