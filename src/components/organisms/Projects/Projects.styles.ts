import ctl from '@netlify/classnames-template-literals';

const styles = {
  bullet: (isFlipped: boolean) =>
    ctl(`
      duration-500
      mr-2
      p-4
      relative
      rounded-md
      text-sm

      sm:mr-3
      sm:p-5
      sm:text-base

      md:mr-4
      md:p-6
      md:text-lg

      lg:mr-5
      lg:p-7
      lg:text-xl

      xl:mr-6
      xl:text-2xl

      xxl:text-3xl

      hover:duration-300

      [&_path]:transition-all

      ${
        isFlipped
          ? `
        !bg-teal
        !text-white
        rotate-x-180
        rotate-z-180

        [&_svg]:bottom-auto
        [&_svg]:top-1
      `
          : `
        [&:focus_path]:fill-black
      `
      }
    `),

  bullets: ctl(`
    flex
    justify-between
    mb-5
    w-full
  `),

  carouselNav: ctl(`
    flex
    h-fit
    items-center
    justify-between
    w-full
  `),

  container: ctl(`
    grid-container
    overflow-visible
  `),

  flip: ctl(`
    absolute
    bottom-1
    right-1
    transition-all
    w-3
  `),

  header: ctl(`
    col-span-3
    relative

    md:col-span-6

    lg:col-span-5
    lg:col-start-2
  `),

  logo: ctl(`
    grayscale
    object-contain
  `),

  marquee: ctl(`
    col-start-4
    mb-8
    relative

    md:col-start-7
    md:col-end-13
    md:w-[calc(100%+((100vw-100%)/2))]
  `),

  nav: ctl(`
    col-span-full
    flex
    flex-col
    justify-center
    h-full
    mt-5
    pb-8
    w-full

    lg:col-start-3
    lg:col-end-11
    lg:mt-10
  `),

  projects: ctl(`
    col-span-full
    relative

    lg:col-span-10
    lg:col-start-2
  `)
};

export default styles;
