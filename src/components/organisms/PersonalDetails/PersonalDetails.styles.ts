import ctl from '@netlify/classnames-template-literals';

const styles = {
  animation: (isMobile: boolean) =>
    ctl(`
    border-t
    border-t-gray
    h-auto
    mt-10
    order-10
    pt-10
    relative
    text-right
    w-full

    md:border-t-0
    md:pt-0
    md:mt-0
    md:ml-0
    md:mr-auto
    md:-order-1
    md:w-[41.18%]

    ${isMobile ? 'block md:hidden' : 'hidden md:block'}
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
    block-container
    h-auto
    overflow-hidden
  `),

  eyebrow: ctl(`
  label
    mb-1
  `),

  panel: (isActive: boolean) =>
    ctl(`
      absolute
      top-0
      ml-auto
      mr-0
      w-[72.93%]
      pb-5

      md:w-[49.12%]

      lg:left-[50.31%]
      lg:w-[41%]

      ${
        isActive
          ? `
        visible
        opacity-100
      `
          : `
        invisible
        opacity-0
        pointer-events-none

        [&_[href]]:invisible
      `
      }
    `),

  panels: ctl(`
    border-b
    border-b-gray
    relative
  `),

  scramble: ctl(`
    block
    font-am-200
    relative
    text-4xl
    text-primary
    text-right

    md:mb-14

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
      ml-auto
      mr-0
      label
      mb-5
      text-right
      text-xs
      ${isActive && '!text-primary'}

      md:text-sm
    `),

  tabList: ctl(`
    flex
    flex-col
    items-end
    pt-20
    relative

    md:pt-0
  `),

  tabWrapper: ctl(`
    ml-0
    mr-auto
    w-[20.18%]

    md:w-[41.18%]

    md:first:mt-[100px]
  `),

  title: ctl(`
    mb-8
    border-b
    border-gray
    pb-5
  `)
};

export default styles;
