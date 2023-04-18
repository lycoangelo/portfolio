import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.figure = (className: string) =>
  ctl(`
  relative
	h-auto
	w-fit
	border
  border-primary
  bg-black
  p-5
  ${className}

  before:absolute
  before:left-1
  before:top-1
  before:-z-1
  before:h-full
  before:w-full
  before:bg-primary
`);

styles.image = ctl(`
	h-auto
  w-auto
`);

export default styles;
