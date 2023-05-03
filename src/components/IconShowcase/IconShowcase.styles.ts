import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.container = ctl(`
	flex
	flex-wrap
`);

styles.icon = ctl(`
	mr-5

	[button_&:before]:transition-all

	[button:hover_&:before]:inset-0
`);

styles.tab = (isActive: boolean) =>
  ctl(`
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
	`);

styles.tabs = ctl(`
	relative
`);

export default styles;
