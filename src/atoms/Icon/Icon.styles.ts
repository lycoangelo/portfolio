import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.figure = (className: string) =>
  ctl(`
  bg-black
	border
	border-primary
	p-4.5
  p-5
  relative
  h-auto
  w-fit
  ${className}

  before:absolute
  before:bg-primary
  before:h-full
  before:w-full
  before:left-1
  before:top-1
  before:-z-1
`);

styles.image = ctl(`
	w-auto
  h-auto
`);

export default styles;
