import ctl from '@netlify/classnames-template-literals';

const buttonStyles = ctl(`
  mb-0
  ml-auto
  mr-0
  mt-auto
`);

const styles = {
  back: ctl(`
    absolute
    border
    border-primary
    backface-hidden
    bg-teal
    flex
    flex-col
    h-full
    overflow-hidden
    p-8
    rounded-3xl
    rotate-x-180
    rotate-z-180
    w-full
  `),

  backButton: buttonStyles,

  dateRange: ctl(`
    border-b
    border-primary
    flex
    font-bold
    mb-6
    pb-2
    relative
    text-sm
    text-primary
    whitespace-nowrap
    uppercase

    lg:pb-3
    lg:text-base
  `),

  dateSeparator: 'mx-1',

  detail: ctl(`
    label
    mb-3

    sm:mb-1
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
    border-primary
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

  inner: (isFlipped: boolean) =>
    ctl(`
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

  project: (className: string) =>
    ctl(`
      bg-transparent
      min-h-[300px]
      min-w-full
      perspective-1000
      text-left

      md:min-w-[calc(50%-10px)]

      [&:not(:first-child)]:ml-5

      ${className}
    `),

  readMore: buttonStyles,

  value: ctl(`
    text-white
    text-sm
  `)
};

export default styles;
