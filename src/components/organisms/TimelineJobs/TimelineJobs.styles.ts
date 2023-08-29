import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.company = ctl(`
  mt-1
  font-am-500
  text-sm

  md:mt-0
  md:text-lg
`);

styles.date = ctl(`
  duration-100
  w-full
  pr-5
  text-sm
  font-bold
  text-primary

  md:pt-6
  md:text-right
`);

styles.details = ctl(`
  relative
  border-primary

  md:border-b
  md:border-l
  md:p-5

  md:after:absolute
  md:after:bottom-[-5.5px]
  md:after:left-[-5.5px]
  md:after:h-[11px]
  md:after:w-[11px]
  md:after:rounded-full
  md:after:bg-primary
`);

styles.job = ctl(`
  job-timeline-grid
  relative
  border-b
  border-l
  border-primary
  p-5

  after:absolute
  after:bottom-[-5.5px]
  after:left-[-5.5px]
  after:h-[11px]
  after:w-[11px]
  after:rounded-full
  after:bg-primary

  md:border-0
  md:p-0

  md:after:content-none
`);

styles.role = ctl(`
  mt-1
  text-sm
  font-medium
  text-silver
`);

styles.timelinePanel = (isActive: boolean) =>
  ctl(
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
  );

styles.timelinePanels = ctl(`
  relative
  w-full

  md:border-0
`);

styles.timelines = ctl(`
  w-full
`);

styles.timelineTab = (isActive: boolean) =>
  ctl(`
  max-w-full
  ml-5
  relative
  text-black

  after:absolute
  after:-left-5
  after:h-[1px]
  after:bg-primary
  after:transition-all

  before:absolute
  before:bg-inactive
  before:h-[1px]
  before:-left-5
  before:w-5

  md:before:w-2.5
  
  ${
    isActive
      ? `
        after:w-5

        [:first-child>&]:md:after:w-[11px]

        [*:not(:first-child)>&]:md:after:w-2.5
      `
      : `
        after:w-0
      `
  }

  [:first-child>&]:md:ml-0
  [:first-child>&]:md:mr-[9px]
  [:first-child>&]:md:before:left-unset
  [:first-child>&]:md:before:-right-3
  [:first-child>&]:md:after:left-unset
  [:first-child>&]:md:after:-right-3
  [:first-child>&]:md:before:w-[11px]

  [:not(:first-child)>&]:md:ml-2.5
  [:not(:first-child)>&]:md:before:left-[-11px]
  [:not(:first-child)>&]:md:after:left-[-11px]
`);

styles.timelineTabList = ctl(`
  job-timeline-grid
  mb-5

  md:mb-[26px]
`);

styles.timelineTabText = ctl(`
  duration-0
  overflow-hidden
  text-ellipsis
`);

styles.timelineTabWrapper = (isFirstChild: boolean, isActive: boolean) =>
  ctl(`
  relative
  mb-3

  before:absolute
  before:top-1/2
  before:z-10
  before:h-[calc(100%+50%)]
  before:w-[1px]
  before:bg-inactive

  after:absolute
  after:top-1/2
  after:z-20
  after:h-[calc(100%+50%)]
  after:w-[1px]
  after:transition-all
  after:duration-300

  md:mb-0
  md:after:bg-primary

  ${
    isFirstChild && !isActive
      ? `
    after:h-[calc(100%+50%)]
    after:bg-inactive
  `
      : `
    after:bg-primary
  `
  }

  ${
    isFirstChild
      ? `
    after:md:right-[-1px]
    after:md:top-1/2

    before:md:right-[-1px]
    before:md:top-1/2
  `
      : `
    after:bg-primary
  `
  }
`);

export default styles;
