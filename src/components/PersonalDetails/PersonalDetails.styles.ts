import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.animation = ctl(`
	bg-primary
	mb-16
	h-40
	w-full
`);

styles.container = ctl(`
	grid-container
	overflow-hidden
`);

styles.eyebrow = ctl(`
	label
	mb-1
`);

styles.panel = (isActive: boolean) =>
  ctl(`
	ml-auto
	mr-0
	mb-5
	${isActive ? 'opacity-100 visibile relative' : 'opacity-0 invisible absolute'}
`);

styles.panels = ctl(`
	relative
	col-span-3
	col-start-2
	md:col-span-6
	md:col-start-7
`);

styles.tab = (isActive: boolean) =>
  ctl(`
	label
	ml-auto
	mr-0
	mb-5
	text-right
	text-xs
	${isActive && '!text-primary'}

	md:text-base
`);

styles.tabList = ctl(`
	relative

	md:col-span-5
	md:col-start-1
`);

styles.title = ctl(`
	border-b
	border-gray
	mb-8
	pb-5
	section-title-right
`);

export default styles;
