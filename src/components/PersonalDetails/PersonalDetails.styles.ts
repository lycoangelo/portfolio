import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.animation = ctl(`
	border
	border-primary
	mb-20
	h-40
	w-full
`);

styles.container = ctl(`
	grid-container
	mb-32
	overflow-hidden]
`);

styles.eyebrow = ctl(`
	label
	mb-1
`);

styles.panel = (isActive: boolean) =>
  ctl(`
	border-b
	border-b-gray
	h-full
	ml-auto
	mr-0
	pb-5
	top-0
	w-full
	${isActive ? 'opacity-100 visibile relative' : 'opacity-0 invisible absolute'}
`);

styles.panels = ctl(`
	relative
	col-span-3
	col-start-2

	md:col-span-6
	md:col-start-7

	xl:col-span-5
	xl:col-start-7
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

	md:text-sm
`);

styles.tabList = ctl(`
	relative

	md:col-span-5
	md:col-start-1

	xl:col-span-4
	xl:col-start-2
`);

styles.title = ctl(`
	border-b
	border-gray
	mb-8
	pb-5
	section-title-right
`);

export default styles;
