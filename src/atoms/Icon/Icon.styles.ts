import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

const colors: { [key: string]: string } = {
  primary: `bg-primary border-primary before:left-0 before:top-0`,
  secondary: `bg-secondary`,
  white: `bg-white`,
  black: `bg-black border-primary`
};

styles.figure = (color: string, className: string) =>
  ctl(`
	border
	h-auto
  p-5
  relative
  transition-colors
	w-fit

  before:absolute
  before:left-1
  before:top-1
  before:-z-1
  before:h-full
  before:w-full
  before:bg-primary

  ${colors[color]}
  ${className}
`);

styles.image = ctl(`
	h-auto
  w-auto
`);

export default styles;
