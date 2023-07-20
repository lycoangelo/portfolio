import ctl from '@netlify/classnames-template-literals';

const styles = {
  back: ctl(`
    absolute
    border
    border-primary
    backface-hidden
    bg-teal
    h-full
    overflow-hidden
    p-8
    rounded-3xl
    rotate-x-180
    rotate-z-180
    w-full
  `),

  container: ctl(`
    grid-container
  `),

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

  dateSeparator: ctl(`
    mx-1
  `),

  detail: ctl(`
    label

    mb-3

    sm:mb-1
  `),

  details: ctl(`
    relative
    border-primary
  `),

  front: ctl(`
    absolute
    backface-hidden
    bg-dark
    border
    border-primary
    h-full
    left-0
    overflow-hidden
    p-8
    rounded-3xl
    top-0
    w-full
  `),

  header: ctl(`
    col-span-3
    relative

    md:col-span-6

    lg:col-span-5
    lg:col-start-2
  `),

  inner: ctl(`
    duration-1000
    h-full
    relative
    transition-all
    transform-style-3d
    w-full
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

    sm:min-w-[calc(50%-10px)]

    xl:min-w-[calc(33.333337%-20px)]

    [&:not(:first-child)]:ml-5

    focus:outline-none
  `),

  projects: ctl(`
    col-span-full
    flex

    lg:col-span-10
    lg:col-start-2
  `),

  value: ctl(`
    text-white
    text-sm
  `)
};

export default styles;
