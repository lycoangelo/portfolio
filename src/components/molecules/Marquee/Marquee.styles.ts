import ctl from '@netlify/classnames-template-literals';

const styles = {
  children: (pauseOnHover: boolean) =>
    ctl(`
      animate-ticker
      flex
      items-center
      min-w-fit
      w-full

      ${pauseOnHover && '[div:hover>&]:animation-pause'}

      last:absolute
      last:h-full
    `),

  container: (className: string) =>
    ctl(`
      flex
      overflow-hidden
      relative
      w-full

      ${className}
    `)
};

export default styles;
