import ctl from '@netlify/classnames-template-literals';

const styles = {
  background: ctl(`
    absolute
    grayscale
    inset-0
    max-w-full
  `),

  backgroundImage: ctl(`
    duration-300
    h-auto
    max-h-[125vh]
    min-h-screen
    object-[75%_0%]
    object-cover
    transition-all

    lg:object-right-top
  `),

  backgroundWrapper: ctl(`
    relative

    after:absolute
    after:bottom-0
    after:h-1/2
    after:hero-gradient
    after:left-0
    after:w-full
  `),

  container: ctl(`
    grid-container
    h-screen
    relative
    w-screen
  `),

  cv: ctl(`
    whitespace-nowrap
  `),

  content: ctl(`
    col-span-full
    col-start-1
    flex
    flex-col
    items-start
    justify-end
    pb-20
    relative
    uppercase
    z-10

    md:col-span-9
    md:justify-center

    lg:col-span-6
    lg:col-start-2
  `),

  description: ctl(`
    mb-5
    text-base

    md:text-xl

    lg:mb-6
  `),

  title: ctl(`
    font-am-200
    h-[120px]
    leading-[120px]
    mb-5
    text-6xl
    two-color

    md:h-[174px]
    md:leading-23
    md:text-7xl

    lg:h-[17vw]
    lg:leading-[8.5vw]
    lg:mb-2
    lg:text-[7.5vw]
  `)
};

export default styles;
