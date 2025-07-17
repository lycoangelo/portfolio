import ctl from '@netlify/classnames-template-literals';

interface ObjectKey {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any;
}

const levelsBG: ObjectKey = {
  novice: 'before:bg-tertiary',
  intermediate: 'before:bg-secondary',
  advanced: 'before:bg-primary'
};

const skillsBg: ObjectKey = {
  novice: 'bg-tertiary text-silver',
  intermediate: 'bg-secondary text-white',
  advanced: 'bg-primary text-black'
};

const styles: ObjectKey = {
  color: (level: string) =>
    ctl(`
      flex
      items-center
      mb-2
      mr-5
      text-xs
      uppercase

      before:block
      before:duration-500
      before:size-2.5
      before:mr-1.5
      before:transition-colors
      
      ${levelsBG[level]}
    `),

  container: ctl(`
    mt-[30px]
    relative
  `),

  legends: ctl(`
    mb-10
    flex
    flex-wrap
    items-center
  `),

  logo: ctl(`
    object-contain
  `),

  logoWrapper: ctl(`
    relative
    mr-2
    h-3.5
    w-3
    grayscale
  `),

  skill: (level: string) =>
    ctl(`
      mr-2
      mb-4
      flex
      items-center
      rounded-md
      bg-primary
      px-2
      py-1
      text-xs

      ${skillsBg[level]}
    `),

  skills: ctl(`
    flex
    flex-wrap
    w-fit
  `),

  skillSet: ctl(`
    block

    [&:not(:first-child)]:mt-5
    [&:not(:first-child)]:lg:mt-6
  `),

  skillSetList: ctl(`
    relative
    block
  `),

  skillSetName: ctl(`
    mb-3
    font-am-500
    text-sm

    md:text-lg
  `)
};

export default styles;
