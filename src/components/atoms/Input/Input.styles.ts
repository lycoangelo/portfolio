import ctl from '@netlify/classnames-template-literals';

import { TypeTypes } from './Input.interface';

const styles = {
  error: ctl(`
		text-xs
		text-error
	`),

  input: ctl(`
		appearance-none
		bg-transparent
		p-3
		mt-[1px]
		resize-none
		h-full
		w-full

		focus:outline-0

		[&:-webkit-autofill:first-line]:bg-transparent
		checked:bg-transparent
	`),

  label: (className: string, type: TypeTypes) =>
    ctl(`
			bg-transparent
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
		`),

  labelText: ctl(`
		block
		left-3
		p-3
		pr-0
		text-primary
		w-fit
	`)
};

export default styles;
