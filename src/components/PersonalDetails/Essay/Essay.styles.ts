import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.essay = ctl(`
	leading-7
	text-sm
	md:text-md
	xl:leading-8
	xl:text-lg
`);

export default styles;
