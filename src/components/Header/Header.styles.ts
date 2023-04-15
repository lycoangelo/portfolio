import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: string } = {};

styles.branding = ctl(`
	font-roboto
	text-2xl
	tracking-[0.2em]
	two-color-bold
	uppercase
`);

styles.header = ctl(`
	absolute
	block-container
	py-10
	top-0
	z-50
	lg:py-15
`);

export default styles;
