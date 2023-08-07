import ctl from '@netlify/classnames-template-literals';

const styles = {
  children: (pauseOnHover: boolean) =>
    ctl(`
      animate-ticker
      flex
      items-center
      min-w-fit
      w-fit

      ${pauseOnHover && '[:has(button:hover)>&]:animation-pause'}
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
