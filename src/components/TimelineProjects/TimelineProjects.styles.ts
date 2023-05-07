import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: ctl(`
    grid-container
  `),

  dateRange: ctl(`
    border-b
    border-primary
    flex
    font-medium
    pb-2
    relative
    text-sm
    text-primary
    uppercase

    lg:pb-3
    lg:text-base

    after:absolute
    after:-bottom-2
    after:h-4
    after:w-4
    after:rounded-full

    md:after:bg-primary

    [:last-child>&]:md:border-l

    [:not(:first-child)>&]:border-r
    [:not(:first-child)>&]:md:border-r-0

    [:nth-child(even)>&]:md:after:-left-2
    [:nth-child(even)>&]:md:pl-5

    [:nth-child(odd)>&]:after:-right-2
    [:nth-child(odd)>&]:md:pr-3
  `),

  dateSeparator: ctl(`
    mx-1
  `),

  detail: ctl(`
    flex
    flex-col
    label
    mb-3

    sm:mb-1
    sm:flex-row
    sm:items-center

    md:mb-3
    md:flex-col
    md:items-start

    xl:mb-1
    xl:flex-row
    xl:items-center
  `),

  details: ctl(`
    relative
    col-span-4
    border-primary
    pr-5
    pt-2.5

    after:absolute
    after:-right-2

    after:-top-2
    after:h-4

    after:w-4

    after:rounded-full

    after:bg-primary
    md:col-span-6

    md:pt-5

    after:md:content-none
    lg:col-span-5
    lg:col-start-2
    [:not(:last-child):not(:first-child)>&]:md:border-r-0
    [:not(:last-child)>&]:border-r
    [:nth-child(even)>&]:md:pl-5
    [:nth-child(even)>&]:md:pr-0

    [:nth-child(odd)>&]:md:pr-5
    [:not(:last-child)>&]:pb-14
    [:last-child>&]:pb-5
  `),

  header: ctl(`
    relative
    col-span-3

    md:col-span-6

    lg:col-span-5
    lg:col-start-2
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
    border-primary

    md:w-[calc(50%+0.5px)]

    lg:col-span-5

    [&:nth-child(even):not(:first-child):not(:last-child)]:md:border-l

    [&:nth-child(even)]:md:ml-[calc(50%-0.5px)]

    [&:nth-child(odd):not(:first-child):not(:last-child)]:md:border-r

    [&:nth-child(odd)]:md:-mr-1
  `),

  projects: ctl(`
    col-span-full

    lg:col-span-10
    lg:col-start-2
  `),

  value: ctl(`
    text-white
    text-sm
  `)
};

export default styles;
