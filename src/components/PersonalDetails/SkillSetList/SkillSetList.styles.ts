import ctl from '@netlify/classnames-template-literals';

interface ObjectKey {
  [key: string]: any;
}

const styles: ObjectKey = {};

const levelsBG: ObjectKey = {
  novice: 'before:bg-teal',
  intermediate: 'before:bg-turquoise',
  advanced: 'before:bg-primary'
};

const skillsBg: ObjectKey = {
  novice: 'bg-teal text-secondary',
  intermediate: 'bg-turquoise text-white',
  advanced: 'bg-primary text-black'
};

styles.color = (level: string) =>
  ctl(`
	flex
	items-center
	mb-2
	mr-5
	text-xs
	uppercase

	before:block
	before:h-2.5
	before:mr-1.5
	before:w-2.5
	${levelsBG[level]}
`);

styles.container = ctl(`
	mt-7.5
	relative
`);

styles.legends = ctl(`
	flex
	flex-wrap
	items-center
	mb-10
`);

styles.logo = ctl(`
	object-contain
`);

styles.logoWrapper = ctl(`
	h-3.5
	mr-2
	grayscale
	relative
	w-3
`);

styles.skill = (level: string) =>
  ctl(`
	bg-primary
	flex
	items-center
	mr-2
	px-2
	py-1
	rounded-md
	text-xs

	${skillsBg[level]}
`);

styles.skills = ctl(`
	flex
	flex-wrap
	justify-between
	w-fit
`);

styles.skillSet = ctl(`
	block

	[&:not(:first-child)]:mt-5
	[&:not(:first-child)]:lg:mt-6
`);

styles.skillSetList = ctl(`
	block
	relative
`);

styles.skillSetName = ctl(`
	font-am-500
	mb-3
	text-sm

	md:text-lg
`);

export default styles;
