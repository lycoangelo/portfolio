import ctl from '@netlify/classnames-template-literals';

const styles = {
  animation: ctl(`
    border-t
    border-t-gray
    h-auto
    mt-5
    order-10
    pt-10
    relative
    text-right
    w-full

    md:border-t-0
    md:pt-0
    md:mt-0
    md:-order-1
  `),

  animationText: ctl(`
    block
    label
    text-white
    mb-5
    w-full

    md:mb-1
    md:text-sm
  `),

  container: ctl(`
    grid-container
  `),

  eyebrow: ctl(`
    label
    mb-1
  `),

  panel: (isActive: boolean) =>
    ctl(`
      top-0
      ml-auto
      mr-0
      w-full
      pb-5

      ${
        isActive
          ? `
        visible
        relative
        opacity-100
      `
          : `
        invisible
        absolute
        opacity-0
      `
      }
    `),

  panels: ctl(`
    border-b
    border-b-gray
    col-end-5
    col-start-2
    relative

    md:col-start-7
    md:col-end-13

    lg:col-start-7
    lg:col-end-12
  `),

  scramble: ctl(`
    block
    font-am-200
    relative
    text-4xl
    text-primary
    text-right

    sm:text-5xl

    md:h-[160px]
    md:leading-[60px]
    md:mb-8
    md:pb-5
    md:text-6xl

    xl:leading-[68px]
    xl:text-6xl

    xxl:leading-[72px]
    xxl:text-7xl
  `),

  strong: ctl(`
    rotate-180
    vertical-rl

    md:horizontal-tb
  `),

  tab: (isActive: boolean) =>
    ctl(`
      label
      ml-auto
      mr-0
      mb-5
      text-right
      text-xs
      ${isActive && '!text-primary'}

      md:text-sm
    `),

  tabList: ctl(`
    flex
    flex-col
    pt-20
    relative

    md:col-span-5
    md:col-start-1
    md:pt-0

    lg:col-span-4
    lg:col-start-2
  `),

  title: ctl(`
    mb-8
    border-b
    border-gray
    pb-5
  `)
};

export default styles;
