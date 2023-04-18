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
	mb-2
	mr-5
	flex
	items-center
	text-xs
	uppercase

	before:mr-1.5
	before:block
	before:h-2.5
	before:w-2.5
	${levelsBG[level]}
`);

styles.container = ctl(`
	relative
	mt-7.5
`);

styles.legends = ctl(`
	mb-10
	flex
	flex-wrap
	items-center
`);

styles.logo = ctl(`
	object-contain
`);

styles.logoWrapper = ctl(`
	relative
	mr-2
	h-3.5
	w-3
	grayscale
`);

styles.skill = (level: string) =>
  ctl(`
	mr-2
	flex
	items-center
	rounded-md
	bg-primary
	px-2
	py-1
	text-xs

	${skillsBg[level]}
`);

styles.skills = ctl(`
	flex
	w-fit
	flex-wrap
	justify-between
`);

styles.skillSet = ctl(`
	block

	[&:not(:first-child)]:mt-5
	[&:not(:first-child)]:lg:mt-6
`);

styles.skillSetList = ctl(`
	relative
	block
`);

styles.skillSetName = ctl(`
	mb-3
	font-am-500
	text-sm

	md:text-lg
`);

export default styles;
