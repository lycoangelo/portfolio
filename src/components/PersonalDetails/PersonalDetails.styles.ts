import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.animation = ctl(`
  mb-20
  h-40
  w-full
  border
  border-primary
`);

styles.container = ctl(`
  grid-container
  mb-32
  overflow-hidden
`);

styles.eyebrow = ctl(`
  label
  mb-1
`);

styles.panel = (isActive: boolean) =>
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
`);

styles.panels = ctl(`
  relative
  col-span-3
  col-start-2
  border-b
  border-b-gray

  md:col-span-6
  md:col-start-7

  xl:col-span-5
  xl:col-start-7
`);

styles.tab = (isActive: boolean) =>
  ctl(`
  label
  ml-auto
  mr-0
  mb-5
  text-right
  text-xs
  ${isActive && '!text-primary'}

  md:text-sm
`);

styles.tabList = ctl(`
  relative

  md:col-span-4
  md:col-start-1

  lg:col-span-4
  lg:col-start-2
`);

styles.title = ctl(`
  mb-8
  border-b
  border-gray
  pb-5
`);

export default styles;
