import ctl from '@netlify/classnames-template-literals';

const styles = {
  aside: ctl(`
    bottom-5
    fixed
    right-5
    z-40
  `),

  share: ctl(`
    hidden

    sm:block
  `)
};

export default styles;
