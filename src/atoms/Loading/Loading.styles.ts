import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.loading = ctl(`
	bg-black
	fixed
	flex
	items-center
	justify-center
	h-screen
	w-screen
	z-50
`);

styles.wave = ctl(`
	wave
`);

export default styles;
