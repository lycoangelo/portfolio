export interface Colors {
  primary: string;
  secondary: string;
  white: string;
  black: string;
}

export interface SquircleIconProps {
  className?: string;
  color?: keyof Colors;
  icon?: string;
  image?: {
    title: string;
    url: string;
  };
}
