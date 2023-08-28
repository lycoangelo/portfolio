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
    min-h-[20px]
  `),

  title: ctl(`
    border-b
    border-gray
    font-am-200
    mb-8
    pb-5
    relative
    text-4xl
    typewriter

    md:text-5xl
    md:leading-[60px]

    xl:text-6xl
    xl:leading-[68px]

    xxl:text-7xl

    after:absolute
    after:bg-primary
    after:bottom-[-7px]
    after:content-['']
    after:duration-500
    after:h-[7px]
    after:mt-[11px]
    after:transition-colors
    after:w-[16.5%]

    [.text-left>&]:after:left-0
    [.text-right>&]:after:right-0
  `)
};

export default styles;
