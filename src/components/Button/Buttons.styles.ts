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
	[&:hover::after]:transition-transform
	[&:hover::after]:translate-x-0
	[&:hover::after]:translate-y-0
`;

const colors: ObjectKey = {
  primary:
    'border border-white bg-black hover:bg-white focus:bg-primary text-white hover:text-black'
};

const sizes: ObjectKey = {
  lg: 'px-4 py-1.5 leading-5 text-lg lg:text-xl'
};

const iconColors: ObjectKey = {
  primary:
    '[&_path]:transition-colors [&_path]:duration-300 [&_path]:fill-white [button:hover_&_path]:fill-black'
};

const iconSizes: ObjectKey = {
  lg: 'ml-2 h-5 w-4'
};

const styles: {
  [key: string]: Function;
} = {
  button: (color: string, size: string, className?: string) =>
    ctl(`
			duration-300
			flex
			items-center
			relative
			uppercase
			transition-colors
			${borderEffect}
			${className}
			${colors[color]}
			${sizes[size]}
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
