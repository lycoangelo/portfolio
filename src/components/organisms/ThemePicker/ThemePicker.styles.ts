import { ThemeColors } from '@app/lib/constants/theme';
import ctl from '@netlify/classnames-template-literals';

const colorsMap: { [key: ThemeColors]: string } = {
  blue: 'bg-blue-primary',
  green: 'bg-green-primary',
  orange: 'bg-orange-primary',
  purple: 'bg-purple-primary',
  red: 'bg-red-primary',
  teal: 'bg-teal-primary',
  yellow: 'bg-yellow-primary',
  gray: 'bg-gray-primary'
};

const styles = {
  aside: ctl(`
    bg-[rgba(0,0,0,0.75)]
    bottom-5
    duration-150
    fixed
    flex
    flex-col
    h-auto
    items-center
    justify-end
    min-h-[28px]
    overflow-hidden
    p-1
    right-5
    rounded-full
    transition-all
    w-6
    z-40
  `),

  item: (isToggle: boolean) =>
    ctl(`
    border
    border-inactive
    h-5
    overflow-hidden
    p-0.5
    relative
    rounded-full

    ${isToggle ? 'w-5' : 'mb-3 first:mt-1 last:mb-4 w-full'}
  `),

  list: ctl(`
    absolute
    bottom-5
    h-auto
    overflow-hidden
    transition-all
    w-5
  `),

  toggle: (color: ThemeColors) =>
    ctl(`
    duration-500
    h-full
    rounded-full
    transition-all

    hover:opacity-75

    ${colorsMap[color]}
`)
};

export default styles;
