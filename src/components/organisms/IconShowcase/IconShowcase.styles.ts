import ctl from "@netlify/classnames-template-literals";

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
		absolute
		duration-300
		left-0
		mt-20
		top-0
		w-full

		${
      isActive
        ? `
			visible
			opacity-100
		`
        : `
			invisible
			opacity-0
		`
    }
	`),

  tabList: ctl(`
		flex
		flex-wrap
		items-start
		pl-0
		relative
		w-full
	`),

  tabs: ctl(`
		relative
	`),

  wrapper: ctl(`
		w-full
	`)
};

export default styles;
