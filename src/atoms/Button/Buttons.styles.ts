import ctl from '@netlify/classnames-template-literals';

interface ObjectKey {
  [key: string]: string;
}

const borderEffect: string = `
	after:absolute
	after:border
	after:border-white
	after:content-['']
	after:h-full
	after:left-0
	after:top-0
	after:translate-x-1
	after:translate-y-1
	after:w-full
	after:z-[-1]

	[&:focus::after]:transition-transform
	[&:focus::after]:translate-x-0
	[&:focus::after]:translate-y-0
`;

const colors: ObjectKey = {
  active: `
		bg-primary
		border
		border-primary
	`,
  inactive: `
		bg-black
		border
		border-inactive
		text-inactive

		hover:bg-gray
		hover:text-secondary

		focus:bg-primary
		focus:text-white
	`,
  primary: `
		bg-black
		border
		border-white
		text-white

		hover:bg-white
		hover:text-black

		focus:border-primary
		focus:bg-primary
		focus:text-white
	`,
  transparent: `
		border-0
		text-white
		hover:text-secondary
		focus:text-primary
	`
};

const sizes: ObjectKey = {
  fit: 'w-fit',
  md: `
		leading-4
		px-2
		py-1
		text-xs

		md:min-w-btn-sm
		md:text-sm

		lg:min-w-btn-md
		lg:text-md

		xl:min-w-btn-lg
		xl:text-lg
	`,
  lg: `
		leading-5
		min-w-btn-sm
		px-5
		py-1.5
		text-xs

		md:min-w-btn-md
		md:px-6
		md:text-md

		lg:min-w-btn-lg
		lg:px-7
		lg:text-lg

		xl:min-w-btn-xl
		xl:text-xl
	`
};

const iconColors: ObjectKey = {
  active: `
		[&_path]:fill-white
	`,
  primary: `
		[&_path]:fill-white
		[button:hover_&_path]:fill-black
		[button:focus_&_path]:!fill-white
	`
};

const iconSizes: ObjectKey = {
  sm: `
		ml-2
		h-3

		lg:ml-3
		lg:h-4
	`,
  lg: `
		ml-2
		h-3.5

		lg:ml-3
		lg:h-5
	`
};

const styles: {
  [key: string]: Function;
} = {
  button: (color: string, size: string, className?: string, hasBorderEffect?: boolean) =>
    ctl(`
			duration-300
			flex
			items-center
			justify-center
			relative
			text-center
			transition-colors
			whitespace-nowrap
			uppercase
			${className}
			${colors[color]}
			${sizes[size]}
			${hasBorderEffect && borderEffect}
		`),
  icon: (color: string, size: string) =>
    ctl(`
			[&_path]:duration-300
			[&_path]:transition-colors
			${iconColors[color]}
			${iconSizes[size]}
		`)
};

export default styles;
