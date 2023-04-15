import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.company = ctl(`
	font-am-500
	mt-1
	text-sm

	md:mt-0
`);

styles.date = ctl(`
	font-bold
	ml-auto
	mr-5
	text-primary
	text-sm

	md:pt-5
`);

styles.details = ctl(`
	border-primary
	relative

	md:border-b
	md:border-l
	md:p-5

	md:after:absolute
	md:after:bottom-[-5.5px]
	md:after:bg-primary
	md:after:h-2.75
	md:after:left-[-5.5px]
	md:after:rounded-full
	md:after:w-2.75
`);

styles.job = ctl(`
	border-b
	border-l
	border-primary
	job-timeline-grid
	p-5
	relative

	md:border-0
	md:p-0

	after:absolute
	after:bottom-[-5.5px]
	after:bg-primary
	after:h-2.75
	after:left-[-5.5px]
	after:rounded-full
	after:w-2.75

	md:after:content-none
`);

styles.role = ctl(`
	font-medium
	mt-1
	text-sm
	text-secondary
`);

styles.timelinePanel = (isActive: boolean) =>
  ctl(`
	${isActive ? 'opacity-100 visibile relative' : 'opacity-0 invisible absolute'}
`);

styles.timelinePanels = ctl(`
	relative
	w-full

	md:border-0
`);

styles.timelines = ctl(`
	w-full
`);

styles.timelineTab = (isFirstChild: boolean, isActive: boolean) =>
  ctl(`
	ml-5
	relative

	after:absolute
	after:bg-primary
	after:h-0.25
	after:-left-5
	after:transition-all
	${isActive ? 'after:w-5' : 'after:w-0'}

	md:after:w-2.5

	before:absolute
	before:bg-inactive
	before:h-0.25
	before:-left-5
	before:w-5
	md:before:w-2.5

	[:first-child>&]:md:ml-0
	[:first-child>&]:md:mr-2.5
	[:first-child>&]:md:after:left-unset
	[:first-child>&]:md:after:-right-2.75
	[:first-child>&]:md:before:left-unset
	[:first-child>&]:md:before:-right-2.75

	[:not(:first-child)>&]:md:before:-left-2.75
	[:not(:first-child)>&]:md:ml-2.5
	[:not(:first-child)>&]:md:after:-left-2.75
`);

styles.timelineTabList = ctl(`
	job-timeline-grid
	mb-5

	md:mb-7.5
`);

styles.timelineTabWrapper = (isFirstChild: boolean, isActive: boolean) =>
  ctl(`
	mb-3
	relative

	md:mb-0

	after:absolute
	after:duration-300
	after:h-[calc(100%+50%)]
	after:top-1/2
	after:transition-all
	after:w-0.25
	after:z-20

	md:after:bg-primary

	before:absolute
	before:bg-inactive
	before:h-[calc(100%+50%)]
	before:top-1/2
	before:w-0.25
	before:z-10


	${
    isFirstChild
      ? `
		after:md:-right-0.25
		after:md:top-1/2

		${
      !isActive
        ? `
			after:bg-inactive
			after:h-[calc(100%+50%)]
		`
        : `
			after:bg-primary
		`
    }

		before:md:-right-0.25
		before:md:top-1/2
	`
      : `
		after:bg-primary
	`
  }
`);

export default styles;
