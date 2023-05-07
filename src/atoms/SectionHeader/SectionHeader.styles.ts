import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: (layout = 'string', className = '') =>
    ctl(`
      ${layout === 'right' ? 'text-left' : 'text-right'}
      ${className}
    `),

  eyebrow: ctl(`
    block
    label
    mb-1
    min-h-5
  `),

  title: ctl(`
    relative
    mb-8
    border-b
    border-gray
    pb-5
    font-am-200
    text-4xl
    typewriter

    after:absolute
    after:-bottom-1.75
    after:mt-2.75
    after:h-1.75
    after:w-[16.5%]
    after:bg-primary
    after:content-['']

    md:text-5xl
    md:leading-15

    xl:text-6xl
    xl:leading-17

    xxl:text-7xl
    xxl:leading-18

    [.text-left>&]:after:left-0
    [.text-right>&]:after:right-0
  `)
};

export default styles;
