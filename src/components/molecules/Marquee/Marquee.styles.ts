import ctl from '@netlify/classnames-template-literals';

const styles = {
  children: ctl(`
    animate-ticker
    flex
    items-center
    min-w-fit
    w-fit
  `),
  container: (className: string) =>
    ctl(`
      flex
      min-w-full
      overflow-hidden
      w-full

      ${className}
    `)
};

export default styles;
