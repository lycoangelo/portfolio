import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: string } = {};

styles.branding = ctl(`
	two-color-bold
	font-roboto
	text-2xl
	uppercase
	tracking-[0.2em]
`);

styles.header = ctl(`
	block-container
	absolute
	top-0
	z-50
	py-10

	lg:py-15
`);

export default styles;
