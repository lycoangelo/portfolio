import ctl from '@netlify/classnames-template-literals';

const styles = {
  arrow: ctl(`
    h-5
    pointer-events-none
    w-5

    lg:h-8
    lg:w-8
  `),

  button: (isPrevBtn: boolean) =>
    ctl(`
      h-full
      w-fit

      ${isPrevBtn ? 'rotate-90' : '-rotate-90'}
    `),

  container: (className = '') =>
    ctl(`
      relative

      ${className}
    `),

  range: ctl(`
    h-auto
    relative
    mx-3
    w-full
  `),

  slider: ctl(`
    duration-300
    flex
    items-center
    relative
    transition-all
    w-auto
  `)
};

export default styles;
