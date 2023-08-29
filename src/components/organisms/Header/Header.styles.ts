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

const styles = {
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

  header: (isScrolled: boolean) =>
    ctl(`
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

  hamburgerTop: (isActive: boolean) =>
    ctl(`
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

  hamburgerCenter: (isActive: boolean) =>
    ctl(`
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

  hamburgerBottom: (isActive: boolean) =>
    ctl(`
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

  nav: (isActive: boolean) =>
    ctl(`
		bg-black
		duration-300
		flex
		flex-col
	  fixed
		h-screen
		justify-center
		ml-auto
		mr-0
		pl-10
		text-white
		transition-all
		top-0
		w-screen

		${isActive ? 'translate-x-1/3' : 'translate-x-full'}
		
		sm:bg-transparent
		sm:col-start-4
		sm:col-end-13
		sm:flex-row
		sm:h-auto
		sm:items-center
		sm:justify-end
		sm:translate-x-0
		sm:pl-0
		sm:pt-0
		sm:relative
		sm:w-full

		lg:col-end-12

		before:duration-300
		before:fixed
		before:bg-black
		before:content-['']
		before:left-0
		before:h-screen
		before:opacity-50
		before:top-0
		before:transition-opacity
		before:w-screen

		${
      isActive
        ? 'before:opacity-80 before:-translate-x-full'
        : 'before:opacity-0 before:translate-x-full'
    }
	`),

  toggle: ctl(`
		absolute
		h-4
		right-5
		top-12
		w-5
		z-50

		sm:hidden
	`)
};

export default styles;
