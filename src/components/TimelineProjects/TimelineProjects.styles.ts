import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.container = ctl(`
  grid-container
`);

styles.dateRange = ctl(`
  relative
  flex
  border-b
  border-primary
  pb-2
  font-bold
  text-primary

  after:absolute
  after:-bottom-2
  after:h-4
  after:w-4
  after:rounded-full
  after:bg-primary

  lg:pb-3
  lg:text-lg

  [:last-child>&]:md:border-l

  [:not(:first-child)>&]:border-r
  [:not(:first-child)>&]:md:border-r-0

  [:nth-child(even)>&]:after:-left-2
  [:nth-child(even)>&]:md:pl-4

  [:nth-child(odd)>&]:after:-right-2
  [:nth-child(odd)>&]:md:pr-3
`);

styles.dateSeparator = ctl(`
  mx-1
`);

styles.detail = ctl(`
  label
  mb-3
  flex
  flex-col

  sm:mb-1
  sm:flex-row

  md:mb-3
  md:flex-col

  xl:mb-1
  xl:flex-row
`);

styles.details = ctl(`
  relative
  col-span-4
  border-primary
  pb-14
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
`);

styles.header = ctl(`
  relative
  col-span-3

  md:col-span-6

  lg:col-span-5
  lg:col-start-2
`);

styles.label = ctl(`
  mr-2
`);

styles.name = ctl(`
  mb-3
  font-am-500
  text-xl
`);

styles.present = ctl(`
  text-white
`);

styles.project = ctl(`
  border-primary

  md:w-[calc(50%+0.5px)]

  lg:col-span-5

  [&:nth-child(even):not(:first-child):not(:last-child)]:md:border-l

  [&:nth-child(even)]:md:ml-[calc(50%-0.5px)]

  [&:nth-child(odd):not(:first-child):not(:last-child)]:md:border-r

  [&:nth-child(odd)]:md:-mr-1
`);

styles.projects = ctl(`
  col-span-full

  lg:col-span-10
  lg:col-start-2
`);

styles.value = ctl(`
  text-white
`);

export default styles;
