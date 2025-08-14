import ctl from "@netlify/classnames-template-literals";

const styles = {
  loading: ctl(`
		bg-black
		fixed
		flex
		items-center
		justify-center
		h-screen
		w-screen
		z-50
	`),

  wave: ctl(`
		wave
	`)
};

export default styles;
