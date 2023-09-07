import ctl from '@netlify/classnames-template-literals';

const styles = (className: string, isFlipped: boolean) => ({
  back: ctl(`
    absolute
    border
    border-white
    backface-hidden
    bg-secondary
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

  backWrapper: ctl(`
    max-h-[calc(100%-56px)]
    overflow-auto
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
    min-h-[300px]
    min-w-full
    perspective-1000
    text-left

    md:min-w-[calc(50%-10px)]

    [&:not(:first-child)]:ml-5

    ${className}
  `),

  toggle: (isHidden: boolean) =>
    ctl(`
    absolute
    transform-style-3d
    z-50

    focus:text-white
    focus:underline

    lg:text-base

    ${
      isFlipped
        ? `
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
