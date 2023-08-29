import ctl from '@netlify/classnames-template-literals';

const styles = {
  line: (order: number) =>
    ctl(`
    absolute
    h-full
    left-1/2
    overflow-hidden
    top-0
    w-[1px]
    -z-10

    after:absolute
    after:animate-drop
    after:bg-gradient-to-b
    after:block
    after:content-['']
    after:from-transparent
    after:h-[15vh]
    after:left-0
    after:to-white
    after:-top-1/2
    after:via-white
    after:w-full

    ${order === 0 && 'after:animation-delay-10 ml-[100%]'}
    ${order === 1 && 'after:animation-delay-1 ml-[40%]'}
    ${order === 2 && 'after:animation-delay-4 ml-[-30%]'}
    ${order === 3 && 'after:animation-delay-2 ml-[20%]'}
    ${order === 4 && 'after:animation-delay-3 ml-[-10%]'}
    ${order === 5 && 'after:animation-delay-5 ml-0'}
    ${order === 6 && 'after:animation-delay-7 ml-[10%]'}
    ${order === 7 && 'after:animation-delay-8 ml-[-20%]'}
    ${order === 8 && 'after:animation-delay-6 ml-[30%]'}
    ${order === 9 && 'after:animation-delay-9 ml-[-40%]'}
  `),
  lines: ctl(`
    fixed
    h-full
    inset-x-0
    m-auto
    opacity-20
    pointer-events-none
    top-0
    w-screen
    z-0
  `)
};

export default styles;
