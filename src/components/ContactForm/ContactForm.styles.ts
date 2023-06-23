import ctl from '@netlify/classnames-template-literals';

const rightColumnsCommonClass = `
  relative
  col-span-full

  md:col-span-6

  lg:col-span-5
  lg:col-start-7
`;

const styles = {
  animation: ctl(`
    block
    mb-5
    h-auto
    w-full
    border
    border-primary

    md:col-span-6

    lg:col-span-5
    lg:col-start-2
  `),

  contact: ctl(`
    flex
    items-center
    mb-4
    text-sm

    lg:w-1/2
  `),

  contacts: ctl(`
    col-span-full
    items-start

    md:col-span-6
    md:mt-12

    lg:col-span-5
    lg:col-start-2
  `),

  container: ctl(`
    grid-container
  `),

  form: ctl(`
    mt-8

    ${rightColumnsCommonClass}
  `),

  header: ctl(rightColumnsCommonClass),

  icon: ctl(`
    mr-4
    h-3.5
  `),

  iconWrapper: ctl(`
    flex
    justify-center
    items-center
    w-10
  `),

  input: (isTextArea: boolean) =>
    ctl(`
    w-full
    [&:not(:first-child)]:mt-5

    ${isTextArea && 'h-40'}
  `),

  submit: ctl(`
    mt-7.5
  `),

  submittedMsg: ctl(`
    text-xl
    ${rightColumnsCommonClass}
  `)
};

export default styles;
