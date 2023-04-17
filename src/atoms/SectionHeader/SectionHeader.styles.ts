import ctl from '@netlify/classnames-template-literals';

const styles: { [key: string]: any } = {};

styles.container = (layout = 'string', className = '') =>
  ctl(`
  ${layout === 'right' ? 'text-left' : 'text-right'}
  ${className}
`);

styles.eyebrow = ctl(`
  label
  mb-1
`);

styles.title = ctl(`
  border-b
  border-gray
  font-am-200
  mb-8
  pb-5
  relative
  text-2xl

  md:text-3xl
  md:leading-8

  lg:text-5xl
  lg:leading-15

  after:absolute
  after:bg-primary
  after:-bottom-2;
  after:content-['']
  after:h-1.75
  after:mt-2.75
  after:-bottom-1.75
  after:w-[16.5%]

  [.text-left>&]:after:left-0
  [.text-right>&]:after:right-0
  }
`);

export default styles;
