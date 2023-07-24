import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: (className = '') =>
    ctl(`
      ${className}
    `),

  slider: ctl(`
    duration-300
    flex
    relative
    transition-all
    w-auto
  `)
};

export default styles;
