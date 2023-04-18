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
  relative
  mb-8
  border-b
  border-gray
  pb-5
  font-am-200
  text-2xl

  after:absolute
  after:-bottom-1.75
  after:mt-2.75
  after:h-1.75
  after:w-[16.5%]
  after:bg-primary
  after:content-['']

  md:text-3xl
  md:leading-8

  lg:text-5xl
  lg:leading-15

  [.text-left>&]:after:left-0
  [.text-right>&]:after:right-0
`);

export default styles;
