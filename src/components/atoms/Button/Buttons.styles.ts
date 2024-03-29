import ctl from '@netlify/classnames-template-literals';

import { ButtonColors, ButtonSizes, ObjectKey } from './Button.interface';

const borderEffect: string = `
  after:absolute
  after:border
  after:border-white
  after:content-['']
  after:h-full
  after:left-0
  after:top-0
  after:translate-x-1
  after:translate-y-1
  after:w-full
  after:z-[-1]

  [&:focus::after]:transition-transform
  [&:focus::after]:translate-x-0
  [&:focus::after]:translate-y-0
`;

const colors: ButtonColors = {
  active: `
    bg-primary
    border
    border-primary
  `,
  inactive: `
    bg-black
    border
    border-inactive
    text-inactive

    hover:bg-gray
    hover:text-silver

    focus:bg-primary
    focus:text-white
  `,
  primary: `
    bg-black
    border
    border-white
    text-white

    hover:bg-primary
    hover:text-black

    focus:bg-white
    focus:text-black

    active:border-primary
    active:bg-white
    active:text-black
  `,
  secondary: `
    bg-white
    border
    border-black
    text-black

    hover:bg-primary
    hover:text-white

    focus:bg-primary
    focus:text-white

    active:border-primary
    active:bg-black
    active:text-white
  `,
  transparent: `
    border-0
    text-white
    hover:text-silver
    focus:text-silver
  `
};

const sizes: ButtonSizes = {
  auto: 'w-auto',
  fit: 'w-fit',
  full: 'w-full',
  sm: `
    leading-3
    min-w-btn-2xs
    px-4
    py-2
    text-xs

    md:min-w-btn-xs

    lg:py-[2px]
    lg:min-w-btn-sm
    lg:text-sm

    xl:min-w-btn-md
    xl:text-base
  `,
  md: `
    leading-4
    px-6
    py-1
    text-xs

    md:min-w-btn-sm
    md:text-sm

    lg:min-w-btn-md
    lg:text-base

    xl:min-w-btn-lg
    xl:text-lg
  `,
  lg: `
    leading-5
    min-w-btn-sm
    px-7
    py-1.5
    text-xs

    md:min-w-btn-md
    md:px-6
    md:text-base

    lg:min-w-btn-lg
    lg:px-7
    lg:text-lg

    xl:min-w-btn-xl
    xl:text-xl
  `
};

const iconColors: ObjectKey = {
  active: '[&_path]:fill-white',
  primary: `
    [&_path]:fill-white
    [button:active_&_path]:fill-black
    [button:hover:not(:active)_&_path]:fill-black
    [button:focus:not(:active)_&_path]:fill-black
  `
};

const iconSizes: ObjectKey = {
  sm: `
    ml-2
    h-3

    lg:ml-3
    lg:h-4
  `,
  lg: `
    ml-2
    h-3.5

    lg:ml-3
    lg:h-5
  `
};

const styles = {
  button: (
    color: keyof ButtonColors,
    size: keyof ButtonSizes,
    className?: string,
    hasBorderEffect?: boolean
  ) =>
    ctl(`
      duration-150
      flex
      items-center
      justify-center
      relative
      text-center
      transition-all
      uppercase

      ${colors[color]}
      ${sizes[size]}
      ${hasBorderEffect && borderEffect}
      ${className}
    `),
  icon: (color: string, size: string, iconClassName: string) =>
    ctl(`
      ${iconColors[color]}
      ${iconSizes[size]}
      ${iconClassName}
    `)
};

export default styles;
