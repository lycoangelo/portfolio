import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.essay = ctl(`
	text-sm
	leading-7

	md:text-base

	xl:text-lg
	xl:leading-8
`);

export default styles;
