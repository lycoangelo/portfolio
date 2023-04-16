import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.figure = (className: string) =>
  ctl(`
	border
	border-primary
	p-4.5
  p-5
  h-auto
  w-fit
  ${className}
`);

styles.image = ctl(`
	
`);

export default styles;
