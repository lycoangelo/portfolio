import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: string } = {};

styles.background = ctl(`
	absolute
	grayscale
	inset-0
	max-w-full
`);

styles.backgroundImage = ctl(`
	duration-300
	h-auto
	max-h-[125vh]
	min-h-screen
	object-cover
	object-[75%_0%]
	transition-all
	lg:object-right-top
`);

styles.backgroundWrapper = ctl(`
	relative
	after:absolute
	after:hero-gradient
	after:h-1/2
	after:left-0
	after:bottom-0
	after:w-full
`);

styles.container = ctl(`
	grid-container
	relative
	h-screen
	w-screen
`);

styles.content = ctl(`
	col-span-full
	col-start-1
	flex
	flex-col
	items-start
	justify-center
	relative
	uppercase
	z-10
	md:col-span-9
	xl:col-span-6
`);

styles.cv = ctl(`
	
`);

styles.description = ctl(`
	mb-5
	text-base
	md:text-xl
	lg:mb-6
`);

styles.title = ctl(`
	font-am-200
	leading-30
	mb-9
	two-color
	text-6xl
	md:text-7xl
	md:mb-10
	md:leading-23
	lg:leading-[8.5vw]
	lg:mb-4
	lg:text-[7.5vw]
`);

export default styles;
