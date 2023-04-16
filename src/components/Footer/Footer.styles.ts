import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: string } = {};

styles.footer = ctl(`
	border-t
	block-container
	py-5
	relative
	text-sm
	w-full
	z-10

	lg:py-7.5
	lg:text-xl

	[&>p]:text-center
	[&>p]:two-color
`);

export default styles;
