import ctl from '@netlify/classnames-template-literals';

const styles = {
  footer: ctl(`
		block-container
		relative
		z-10
		w-full
		border-t
		py-5
		text-sm

		lg:py-[30px]
		lg:text-xl

		[&>p]:two-color
		[&>p]:text-center
	`)
};

export default styles;
