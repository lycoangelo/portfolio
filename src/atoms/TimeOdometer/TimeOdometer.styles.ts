import ctl from '@netlify/classnames-template-literals';

const styles = {
  odometer: ctl(`
    mr-2
    relative
    text-center
    z-10
  `),

  time: (className?: string) =>
    ctl(`
      flex
      whitespace-nowrap

      ${className}
    `),

  timeIndicator: ctl(`
    odometer-time-indicator

    md:pr-5

    lg:pr-0
  `)
};

export default styles;
