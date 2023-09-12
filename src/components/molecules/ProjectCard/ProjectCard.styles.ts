import ctl from '@netlify/classnames-template-literals';

const styles = (className: string, isFlipped: boolean) => ({
  arrow: ctl(`
    h-5
    ml-2
    -rotate-45
    w-5

    sm:h-6
    sm:w-6

    lg:h-8
    lg:ml-3
    lg:w-8

    [&_path]:fill-primary

    [a_&_path:last-child]:origin-right
    [a_&_path:last-child]:transition-all
    [a:hover_&_path:last-child]:scale-0
  `),
  back: ctl(`
    absolute
    backface-hidden
    bg-secondary
    border
    border-white
    flex
    flex-col
    h-full
    overflow-hidden
    p-8
    pt-20
    rounded-3xl
    rotate-x-180
    rotate-z-180
    w-full
    z-0
  `),

  dateRange: ctl(`
    border-b
    border-gray
    duration-100
    flex
    font-bold
    mb-6
    pb-2
    relative
    text-sm
    text-primary
    transition-colors
    whitespace-nowrap
    uppercase

    lg:pb-3
    lg:text-base
  `),

  dateSeparator: 'mx-1',

  description: ctl(`
    hyphens-auto
    line-clamp-8
  `),

  detail: ctl(`
    duration-100
    label
    mb-3
    transition-colors
    text-xs

    sm:mb-1

    md:text-sm
  `),

  details: ctl(`
    border-primary
    mb-auto
    relative
  `),

  front: ctl(`
    absolute
    backface-hidden
    bg-dark
    border
    border-inactive
    flex
    flex-col
    h-full
    left-0
    overflow-hidden
    p-8
    rounded-3xl
    top-0
    w-full
  `),

  inner: ctl(`
    duration-500
    h-full
    relative
    transition-all
    transform-style-3d
    w-full

    ${
      isFlipped &&
      `
      rotate-x-180
      rotate-z-180
    `
    }
  `),

  label: ctl(`
    leading-6
    mr-2
    text-sm
  `),

  link: '!text-left',

  name: ctl(`
    mb-2.5
    font-am-500
    leading-8
    text-2xl

    md:text-3xl

    lg:text-4xl
  `),

  present: ctl(`
    text-white
  `),

  project: ctl(`
    bg-transparent
    min-h-[400px]
    min-w-full
    perspective-1000
    text-left

    sm:min-h-[300px]

    md:min-h-[360px]
    md:min-w-[calc(50%-10px)]

    [&:not(:first-child)]:ml-5

    ${className}
  `),

  toggle: (isHidden: boolean, isViewMore?: boolean) =>
    ctl(`
    absolute
    transform-style-3d
    underline
    z-50

    hover:!opacity-70

    lg:text-base

    ${
      isFlipped
        ? isViewMore
          ? `
        bottom-8
        right-8
      `
          : `
        left-8
        top-8 
      `
        : `
      bottom-8
      right-8
    `
    }

    ${
      isHidden
        ? `
        invisible
        opacity-0
      `
        : `
        opacity-100
        visible
      `
    }
  `),

  value: ctl(`
    text-white
    text-xs

    md:text-sm
  `)
});

export default styles;
