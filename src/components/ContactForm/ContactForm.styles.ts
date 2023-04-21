import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

const rightColumnsCommonClass = `
  relative
  col-span-full

  md:col-span-6

  lg:col-span-5
  lg:col-start-7
`;

styles.animation = ctl(`
  block
  mb-5
  h-auto
  w-full
  border
  border-primary

  md:col-span-6

  lg:col-span-5
  lg:col-start-2
`);

styles.contact = ctl(`
  flex
  items-center
  mb-4
  text-sm

  lg:w-1/2
`);

styles.contacts = ctl(`
  col-span-full
  items-start

  md:col-span-6

  lg:col-span-5
  lg:col-start-2
`);

styles.container = ctl(`
	grid-container
`);

styles.form = ctl(`
  ${rightColumnsCommonClass}
`);

styles.header = ctl(`
  ${rightColumnsCommonClass}
`);

styles.icon = ctl(`
  mr-4
  h-3.5
`);

styles.iconWrapper = ctl(`
  flex
  justify-center
  items-center
  w-10
`);

styles.input = (isTextArea: boolean) =>
  ctl(`
  w-full
  [&:not(:first-child)]:mt-5

  ${isTextArea && 'h-40'}
`);

styles.submit = ctl(`
  mt-7.5
`);

styles.submittedMsg = ctl(`
  text-xl
  ${rightColumnsCommonClass}
`);

export default styles;
