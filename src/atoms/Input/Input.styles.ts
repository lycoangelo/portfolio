import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.error = ctl(`
	text-xs
	text-error
`);

styles.input = ctl(`
	bg-transparent
	p-3
	mt-0.25
	resize-none
	h-full
	w-full

	focus:outline-0

	[&:-webkit-autofill:first-line]:bg-transparent
	checked:bg-transparent
`);

styles.label = (className: string, type: string) =>
  ctl(`
	bg-transparent
	border
	border-transparent
	relative
	flex
	items-start
	text-sm
	${className}

	${
    type === 'textarea'
      ? `
			border
			border-inactive
		`
      : `
			border-b
			border-b-inactive
		`
  }

	[&:has(:focus)]:border-primary
	[&:has(:focus)]:rounded-md
`);

styles.labelText = ctl(`
	block
	left-3
	p-3
	pr-0
	text-primary
	w-fit
`);

export default styles;
