import ctl from '@netlify/classnames-template-literals';

const styles = {
  animation: ctl(`
    mb-20
    h-40
    w-full
    border
    border-primary
  `),

  container: ctl(`
    grid-container
    overflow-hidden
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
    relative
    col-start-2
    col-end-5
    border-b
    border-b-gray

    md:col-start-7
    md:col-end-13

    lg:col-start-7
    lg:col-end-12
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
    relative

    md:col-span-5
    md:col-start-1

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
