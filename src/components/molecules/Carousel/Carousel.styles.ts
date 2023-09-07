import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: (className = '') =>
    ctl(`
      ${className}
    `),

  slider: ctl(`
    backface-hidden
    duration-300
    flex
    relative
    transition-all
    transform-3d-0
    w-auto
  `)
};

export default styles;
