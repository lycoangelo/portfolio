import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: string } = {};

styles.background = ctl(`
  absolute
  inset-0
  max-w-full
  grayscale
`);

styles.backgroundImage = ctl(`
  h-auto
  max-h-[125vh]
  min-h-screen
  object-cover
  object-[75%_0%]
  transition-all
  duration-300

  lg:object-right-top
`);

styles.backgroundWrapper = ctl(`
  relative

  after:hero-gradient
  after:absolute
  after:left-0
  after:bottom-0
  after:h-1/2
  after:w-full
`);

styles.container = ctl(`
  grid-container
  relative
  h-screen
  w-screen
`);

styles.cv = ctl(`
  whitespace-nowrap
`);

styles.content = ctl(`
  relative
  z-10
  col-span-full
  col-start-1
  flex
  flex-col
  items-start
  justify-end
  pb-20
  uppercase

  md:col-span-9
  md:justify-center

  lg:col-span-6
  lg:col-start-2
`);

styles.description = ctl(`
  mb-5
  text-base

  md:text-xl

  lg:mb-6
`);

styles.title = ctl(`
  leading-30
  two-color
  mb-5
  font-am-200
  text-6xl

  md:text-7xl
  md:leading-23

  lg:mb-2
  lg:text-[7.5vw]
  lg:leading-[8.5vw]
`);

export default styles;
