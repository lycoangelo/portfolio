import ctl from '@netlify/classnames-template-literals';

const styles = {
  background: ctl(`
    absolute
    bg-white
    h-[2px]
    rounded-xl
    w-full

    [:has(input:focus)>&]:outline
    [:has(input:focus)>&]:outline-primary
    [:has(input:focus)>&]:outline-offset-2
  `),

  range: ctl(`
    h-full
    opacity-0
    pointer-events-none
    w-full
  `),

  thumb: ctl(`
    absolute
    bg-primary
    cursor-pointer
    h-1
    rounded-xl
    top-1/2
    transition-all
    -translate-y-1/2
  `),

  wrapper: ctl(`
    flex
    items-center
    h-full
    left-0
    relative
    top-0
    w-full
  `)
};

export default styles;
