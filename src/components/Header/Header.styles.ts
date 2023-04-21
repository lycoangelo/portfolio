import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: string } = {};

styles.branding = ctl(`
	two-color-bold
	font-roboto
	text-2xl
	uppercase
	tracking-[0.2em]
  lg:col-start-2
`);

styles.header = ctl(`
	grid-container
	absolute
	top-0
	z-50
	py-10
	w-full

	lg:py-15
`);

export default styles;
