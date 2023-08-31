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
    before:h-[1px]
    before:w-full
  `),

  range: ctl(`
    absolute
    h-full
    opacity-0
    pointer-events-none
    w-full
  `),

  thumb: ctl(`
    absolute
    bg-primary
    cursor-pointer
    h-2
    rounded-xl
    top-1/2
    transition-all
    -translate-y-1/2
  `),

  wrapper: (className: string) =>
    ctl(`
    flex
    items-center
    h-full
    left-0
    relative
    top-0
    w-full

    ${className}
  `)
};

export default styles;
