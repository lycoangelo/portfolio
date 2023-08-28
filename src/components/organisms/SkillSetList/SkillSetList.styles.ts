import ctl from '@netlify/classnames-template-literals';

interface ObjectKey {
  [key: string]: any;
}

const levelsBG: ObjectKey = {
  novice: 'before:bg-tertiary',
  intermediate: 'before:bg-secondary',
  advanced: 'before:bg-primary'
};

const skillsBg: ObjectKey = {
  novice: 'bg-tertiary text-silver',
  intermediate: 'bg-secondary text-white',
  advanced: 'bg-primary text-black'
};

const styles: ObjectKey = {
  color: (level: string) =>
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
		`),

  container: ctl(`
		relative
		mt-[30px]
	`),

  legends: ctl(`
		mb-10
		flex
		flex-wrap
		items-center
	`),

  logo: ctl(`
		object-contain
	`),

  logoWrapper: ctl(`
		relative
		mr-2
		h-3.5
		w-3
		grayscale
	`),

  skill: (level: string) =>
    ctl(`
			mr-2
			mb-4
			flex
			items-center
			rounded-md
			bg-primary
			px-2
			py-1
			text-xs

			${skillsBg[level]}
		`),

  skills: ctl(`
		flex
		flex-wrap
		w-fit
	`),

  skillSet: ctl(`
		block

		[&:not(:first-child)]:mt-5
		[&:not(:first-child)]:lg:mt-6
	`),

  skillSetList: ctl(`
		relative
		block
	`),

  skillSetName: ctl(`
		mb-3
		font-am-500
		text-sm

		md:text-lg
	`)
};

export default styles;
