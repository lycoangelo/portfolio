import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.container = ctl(`
	flex
	flex-wrap
`);

styles.icon = ctl(`
	mr-5

	[button_&:before]:transition-all

	[button:hover_&:before]:inset-0
`);

export default styles;
