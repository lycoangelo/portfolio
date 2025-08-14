import { ThemeColors } from "@app/lib/constants/theme";
import ctl from "@netlify/classnames-template-literals";

const colorsMap: { [key: ThemeColors]: string } = {
  blue: "bg-blue-primary",
  green: "bg-green-primary",
  orange: "bg-orange-primary",
  purple: "bg-purple-primary",
  red: "bg-red-primary",
  teal: "bg-teal-primary",
  yellow: "bg-yellow-primary",
  gray: "bg-gray-primary"
};

const styles = {
  container: (className: string, isActive: boolean) =>
    ctl(`
    bg-[rgba(25,25,25,0.75)]
    duration-150
    flex
    flex-col
    h-auto
    items-center
    justify-end
    min-h-[28px]
    overflow-hidden
    p-1
    relative
    rounded-full
    transition-all
    w-7

    ${className}

    before:bg-[rgba(0,0,0,0.5)]
    before:fixed
    before:h-screen
    before:inset-0
    before:transition-all
    before:w-screen

    ${
      isActive
        ? `
      before:opacity-100
      before:visible
      `
        : `
      before:opacity-0
      before:invisible
    `
    }
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

    ${
      isToggle
        ? "w-5"
        : `
        first:mt-1
        last:mb-4 w-full
        mb-3
      `
    }
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
