import ctl from '@netlify/classnames-template-literals';

const styles = {
  arrow: ctl(`
    h-10
    pointer-events-none
    w-10
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
