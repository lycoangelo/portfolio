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
  lg: `
		min-w-btn-lg
		leading-5
		px-7
		py-1.5
		text-lg
		lg:text-xl
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
  lg: `
		ml-2
		h-5
		w-4
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
			relative
			uppercase
			transition-colors
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
