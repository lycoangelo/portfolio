import ctl from '@netlify/classnames-template-literals';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const styles: { [key: string]: any } = {
  company: ctl(`
    mt-1
    font-am-500
    text-sm

    md:mt-0
    md:text-lg
  `),

  date: ctl(`
    duration-100
    w-full
    pr-5
    text-sm
    font-bold
    text-primary

    md:pt-6
    md:text-right
  `),

  details: ctl(`
    relative
    border-primary

    md:border-b
    md:border-l
    md:p-5

    md:after:absolute
    md:after:bottom-[-5.5px]
    md:after:left-[-5.5px]
    md:after:size-[11px]
    md:after:rounded-full
    md:after:bg-primary
  `),

  job: ctl(`
    job-timeline-grid
    relative
    border-b
    border-l
    border-primary
    p-5

    after:absolute
    after:bottom-[-5.5px]
    after:left-[-5.5px]
    after:size-[11px]
    after:rounded-full
    after:bg-primary
    md:border-0

    md:p-0
    md:after:content-none
  `),

  present: 'text-silver',

  role: ctl(`
    mt-1
    text-sm
    font-medium
    text-silver
  `),

  timelinePanel: (isActive: boolean) =>
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
    ),

  timelinePanels: ctl(`
    relative
    w-full

    md:border-0
  `),

  timelines: ctl(`
    w-full
  `),

  timelineTab: (isActive: boolean) =>
    ctl(`


    max-w-full
    ml-5
    relative
    text-black

    after:absolute
    after:-left-5
    after:h-px
    after:bg-primary
    after:transition-all

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

    before:absolute
    before:bg-inactive
    before:h-px
    before:-left-5
    before:w-5

    md:before:w-2.5

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
  `),

  timelineTabList: ctl(`
    job-timeline-grid
    mb-5

    md:mb-[26px]
  `),

  timelineTabText: ctl(`
    duration-0
    overflow-hidden
    text-ellipsis
  `),

  timelineTabWrapper: (isFirstChild: boolean, isActive: boolean) =>
    ctl(`
    relative
    mb-3

    before:absolute
    before:top-1/2
    before:z-10
    before:h-[calc(100%+50%)]
    before:w-px
    before:bg-inactive

    after:absolute
    after:top-1/2
    after:z-20
    after:h-[calc(100%+50%)]
    after:w-px
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
      after:md:right-px
      after:md:top-1/2

      before:md:right-px
      before:md:top-1/2
    `
        : `
      after:bg-primary
    `
    }
  `)
};

export default styles;
