import ctl from '@netlify/classnames-template-literals';

const styles = {
  bullet: (isFlipped: boolean) =>
    ctl(`
      duration-500
      mr-3
      p-4
      relative
      rounded-md
      text-sm
      h-[70px]
      w-[100px]

      sm:p-5
      sm:text-base
      sm:h-[80px]
      sm:w-[110px]

      md:p-6
      md:text-lg
      md:h-[80px]
      md:w-[120px]

      lg:mr-4
      lg:px-7
      lg:py-4
      lg:text-xl
      lg:h-[100px]
      lg:w-[140px]

      xl:mr-5
      xl:text-2xl

      xxl:text-3xl

      hover:duration-300

      [&_path]:transition-all

      ${
        isFlipped
          ? `
        !bg-secondary
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

  logo: (isFlipped: boolean, isActive: boolean) =>
    ctl(`
      brightness-[100]
      grayscale
      size-full
      object-contain
      transition-all

      ${
        isFlipped
          ? `
          [:hover>&]:brightness-[100]
          [:focus>&]:brightness-[100]
        `
          : `
          [:focus>&]:brightness-0
          ${isActive && '[:hover>&]:brightness-0'}
        `
      }
    `),

  marquee: ctl(`
    col-start-4
    mb-8
    relative
    !w-[calc(100%+(100%/2))]

    md:col-start-7
    md:col-end-13
  `),

  nav: ctl(`
    col-span-full
    flex
    flex-col
    justify-center
    size-full
    mt-5
    pb-8
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
