import ctl from '@netlify/classnames-template-literals';

const rightColumnsCommonClass = `
  relative
  col-span-full

  md:col-start-7
  md:col-end-[-1]

  lg:col-span-5
  lg:col-start-7
`;

const styles = {
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

    md:col-span-5
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
  `),

  time: ctl(`
    font-am-200
    mb-5
    relative
    w-full

    [&_.odometer-digit]:text-4xl
    [&_.odometer-formatting-mark]:text-4xl
    [&_.odometer-time-indicator]:text-4xl
    [&_.odometer-digit]:leading-10
    [&_.odometer-formatting-mark]:leading-10
    [&_.odometer-time-indicator]:leading-10

    md:[&_.odometer-digit]:text-5xl
    md:[&_.odometer-formatting-mark]:text-5xl
    md:[&_.odometer-time-indicator]:text-5xl
    md:[&_.odometer-digit]:leading-15
    md:[&_.odometer-formatting-mark]:leading-15
    md:[&_.odometer-time-indicator]:leading-15

    xl:[&_.odometer-digit]:text-6xl
    xl:[&_.odometer-formatting-mark]:text-6xl
    xl:[&_.odometer-time-indicator]:text-6xl
    xl:[&_.odometer-digit]:leading-17
    xl:[&_.odometer-formatting-mark]:leading-17
    xl:[&_.odometer-time-indicator]:leading-17

    xxl:[&_.odometer-digit]:text-7xl
    xxl:[&_.odometer-formatting-mark]:text-7xl
    xxl:[&_.odometer-time-indicator]:text-7xl
    xxl:[&_.odometer-digit]:leading-18
    xxl:[&_.odometer-formatting-mark]:leading-18
    xxl:[&_.odometer-time-indicator]:leading-18
  `),

  timeLabel: ctl(`
    label
    text-primary
  `),

  timeWrapper: ctl(`
    col-span-full

    md:col-span-5
    md:col-start-1

    lg:col-span-5
    lg:col-start-2
  `)
};

export default styles;
