import ctl from '@netlify/classnames-template-literals';

const styles = {
  bullet: (isFlipped: boolean) =>
    ctl(`
      aspect-square
      duration-500
      mr-[10px]
      relative
      rounded-sm
      text-xs

      sm:rounded-md
      sm:text-sm

      md:text-base
      md:rounded-lg

      xl:mr-3
      xl:text-xl

      xxl:mr-5
      xxl:text-2xl

      hover:duration-300

      ${
        isFlipped &&
        `
        !bg-teal
        !text-white
        rotate-x-180
        rotate-z-180
        text-secondary
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

  header: ctl(`
    col-span-3
    relative

    md:col-span-6

    lg:col-span-5
    lg:col-start-2
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

    lg:col-span-10
    lg:col-start-2
  `)
};

export default styles;
