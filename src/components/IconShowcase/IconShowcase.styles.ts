import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.container = ctl(`
	flex
	flex-wrap
`);

styles.icon = ctl(`
	mr-4
`);

export default styles;
