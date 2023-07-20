import ctl from '@netlify/classnames-template-literals';

const styles = {
  branding: ctl(`
		two-color-bold
		font-roboto
		text-2xl
		uppercase
		tracking-[0.2em]

		lg:col-start-2
	`),

  content: ctl(`
		content
	`),

  header: (isScrolled: boolean) =>
    ctl(`
			bg-black
			fixed
			py-10
			top-0
			transition-all
			w-full
			z-50

			lg:py-15

			${
        isScrolled
          ? 'drop-shadow-[0px_2px_15px_rgba(255,255,255,0.18)]'
          : 'drop-shadow-[0_0_0_rgba(255,255,255,0.18)]'
      }
		`),

  inner: ctl(`
		grid-container-no-margin
	`),

  link: ctl(`
		cursor-pointer
		label

		hover:text-white

		[&:not(:last-child)]:mr-10
	`),

  nav: ctl(`
		hidden
		items-center
		justify-end
		ml-auto
		mr-0
		text-white
		w-full

		lg:col-start-4
		lg:col-end-12
		lg:flex
	`)
};

export default styles;
