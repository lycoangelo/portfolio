import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: ctl(`
		flex
		flex-wrap
	`),

  icon: ctl(`
		mr-5

		[button_&:before]:transition-all

		[button:hover_&:before]:inset-0
	`),

  tab: (isActive: boolean) =>
    ctl(`
		duration-300
		mt-5
		top-0
		transition-all

		${
      isActive
        ? `
			visible
			opacity-1
			relative
		`
        : `
			invisible
			opacity-0
			absolute
		`
    }
	`),

  tabs: ctl(`
		relative
	`)
};

export default styles;
