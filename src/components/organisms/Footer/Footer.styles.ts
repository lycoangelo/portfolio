import ctl from '@netlify/classnames-template-literals';

const styles = {
  footer: ctl(`
		block-container-no-margin
		relative
		z-10
		w-full
		border-t
		py-10
		text-sm

		sm:py-5

		lg:py-[30px]
		lg:text-xl

		[&>p]:two-color
		[&>p]:text-center
	`)
};

export default styles;
