import ctl from '@netlify/classnames-template-literals';

const hamburgerCommonClass = `
  absolute
	bg-white
  block
  h-0.5
  pointer-events-none
  transition-all
  w-full
`;

const styles = (isActive: boolean, isScrolled: boolean) => ({
  branding: ctl(`
		two-color-bold
		font-roboto
		text-2xl
		uppercase
		tracking-[0.2em]

		lg:col-start-2
	`),

  closeIcon: ctl(`
		h-5
		w-5
	`),

  header: ctl(`
		bg-black
		fixed
		py-10
		top-0
		transition-all
		w-full
		z-50

		lg:py-[60px]

		${
      isScrolled
        ? 'drop-shadow-[0px_2px_15px_rgba(255,255,255,0.18)]'
        : 'drop-shadow-[0_0_0_rgba(255,255,255,0.18)]'
    }
	`),

  hamburgerTop: ctl(`
    ${hamburgerCommonClass}

    ${
      isActive
        ? `
        rotate-[-315deg]
        top-[7px]
      `
        : `
        rotate-0
        top-0
      `
    }
	`),

  hamburgerCenter: ctl(`
      top-1/2
		-translate-y-1/2

		${hamburgerCommonClass}

		${
      isActive
        ? `
				opacity-0
				rotate-180
			`
        : `
				opacity-100
				rotate-0
			`
    }
	`),

  hamburgerBottom: ctl(`
		${hamburgerCommonClass}

		${
      isActive
        ? `
				bottom-[7px]
				rotate-[315deg]
			`
        : `
				bottom-0
				rotate-0
			`
    }
	`),

  inner: ctl(`
		grid-container-no-margin
	`),

  link: ctl(`
		cursor-pointer
		label
		mb-8
		text-2xl
		z-10

		sm:mb-0
		sm:opacity-100
		sm:text-sm

		hover:text-white

		[&:not(:last-child)]:mr-10
	`),

  nav: ctl(`
		bg-black
		duration-300
		flex
		flex-col
		h-full
		justify-center
		ml-auto
		mr-0
		pl-10
		text-white
		transition-all
		top-0
		w-screen
		
		sm:bg-transparent
		sm:flex-row
		sm:items-center
		sm:justify-end
		sm:translate-x-0
		sm:pl-0
		sm:pt-0
		sm:w-full

		${isActive ? 'translate-x-1/3' : 'translate-x-full'}
	`),

  toggle: ctl(`
		absolute
		h-4
		right-5
		top-12
		w-5
		z-50

		sm:hidden
	`),

  wrapper: ctl(`
		fixed
		flex
		h-screen
		items-center
		left-0
		transition-colors
		top-0
		w-screen

		sm:col-start-4
		sm:col-end-13
		sm:h-auto
		sm:relative
		sm:w-full

		lg:col-end-12

		${isActive ? 'bg-[rgba(0,0,0,0.8)]' : 'bg-transparent'}
	`)
});

export default styles;
