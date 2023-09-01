import ctl from '@netlify/classnames-template-literals';

interface Colors {
  primary: string;
  secondary: string;
  white: string;
  black: string;
}

const colors: Colors = {
  primary: 'bg-primary border-primary before:left-0 before:top-0',
  secondary: 'bg-silver',
  white: 'bg-white',
  black: 'bg-black border-primary'
};

const styles = {
  figure: (color: keyof Colors, className: string) =>
    ctl(`
      border
      h-auto
      p-2
      relative
      transition-colors
      w-fit

      md:p-3

      lg:p-4

      before:absolute
      before:left-1
      before:top-1
      before:-z-10
      before:h-full
      before:w-full
      before:bg-primary

      ${colors[color]}
      ${className}
    `),

  image: ctl(`
    h-5
    w-5

    md:h-6
    md:w-6

    lg:h-7
    lg:w-7
  `)
};

export default styles;
