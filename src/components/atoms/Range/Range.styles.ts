import ctl from '@netlify/classnames-template-literals';

const styles = {
  background: ctl(`
    flex
    items-center
    h-2
    overflow-hidden
    relative
    rounded-xl
    transition-all
    w-full

    [:has(input:focus)>&]:outline
    [:has(input:focus)>&]:outline-primary
    [:has(input:focus)>&]:outline-offset-2

    before:absolute
    before:bg-white
    before:h-px
    before:w-full
  `),

  range: ctl(`
    absolute
    size-full
    opacity-0
    pointer-events-none
  `),

  thumb: (isShow: boolean) =>
    ctl(`
    absolute
    bg-primary
    cursor-pointer
    h-2
    rounded-xl
    top-1/2
    transition-all
    -translate-y-1/2

    ${isShow ? 'opacity-100' : 'opacity-0'}
  `),

  wrapper: (className: string) =>
    ctl(`
    flex
    items-center
    size-full
    left-0
    relative
    top-0

    ${className}
  `)
};

export default styles;
