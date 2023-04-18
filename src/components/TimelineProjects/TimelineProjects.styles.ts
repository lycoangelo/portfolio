import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.container = ctl(`
  grid-container
`);

styles.dateRange = ctl(`
  border-b
  border-primary
  flex
  font-bold
  pb-2
  relative
  text-primary

  lg:pb-3
  lg:text-lg

  [:not(:first-child)>&]:border-r

  [:not(:first-child)>&]:md:border-r-0

  [:nth-child(even)>&]:md:pl-4

  [:nth-child(odd)>&]:md:pr-3

  [:last-child>&]:md:border-l

  after:absolute
  after:bg-primary
  after:rounded-full
  after:-bottom-2
  after:h-4
  after:w-4

  [:nth-child(even)>&]:after:-left-2
  [:nth-child(odd)>&]:after:-right-2
`);

styles.dateSeparator = ctl(`
  mx-1
`);

styles.detail = ctl(`
  flex
  flex-col
  label
  mb-3

  sm:flex-row
  sm:mb-1

  md:flex-col
  md:mb-3

  xl:flex-row
  xl:mb-1
`);

styles.details = ctl(`
  border-primary
  col-span-4
  pb-14
  pr-5
  pt-2.5
  relative

  md:col-span-6
  md:pt-5

  lg:col-span-5
  lg:col-start-2

  [:not(:last-child)>&]:border-r

  [:not(:last-child):not(:first-child)>&]:md:border-r-0

  [:nth-child(even)>&]:md:pl-5
  [:nth-child(even)>&]:md:pr-0

  [:nth-child(odd)>&]:md:pr-5

  after:absolute
  after:bg-primary
  after:rounded-full
  after:-right-2
  after:-top-2
  after:h-4
  after:w-4

  after:md:content-none
`);

styles.header = ctl(`
  col-span-3
  relative

  md:col-span-6

  lg:col-span-5
  lg:col-start-2
`);

styles.label = ctl(`
  mr-2
`);

styles.name = ctl(`
  font-am-500
  mb-3
  text-xl
`);

styles.present = ctl(`
  text-white
`);

styles.project = ctl(`
  border-primary

  md:w-[calc(50%+0.5px)]

  lg:col-span-5

  [&:nth-child(even)]:md:ml-[calc(50%-0.5px)]

  [&:nth-child(even):not(:first-child):not(:last-child)]:md:border-l

  [&:nth-child(odd)]:md:-mr-1

  [&:nth-child(odd):not(:first-child):not(:last-child)]:md:border-r
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
