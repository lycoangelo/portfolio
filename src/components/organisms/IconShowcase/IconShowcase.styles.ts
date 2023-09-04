import ctl from '@netlify/classnames-template-literals';

const styles = {
  button: ctl(`
		mr-3

		md:mr-4

		lg:mr-5
	`),

  container: ctl(`
		flex
		flex-wrap
	`),

  icon: ctl(`
		[button_&:before]:transition-all

		[button:hover_&:before]:inset-0
	`),

  tab: (isActive: boolean) =>
    ctl(`
		duration-300
		mt-5
		top-0
		w-full

		${
      isActive
        ? `
			visible
			opacity-100
			relative
		`
        : `
			invisible
			opacity-0
			absolute
		`
    }
	`),

  tablist: ctl(`
		flex
		flex-wrap
		w-full
	`),

  tabs: ctl(`
		relative
	`)
};

export default styles;
