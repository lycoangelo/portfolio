import ctl from '@netlify/classnames-template-literals';

const styles = {
  line: (order: number) =>
    ctl(`
    fixed
    h-full
    left-1/2
    overflow-hidden
    pointer-events-none
    top-0
    w-[1px]

    after:absolute
    after:animate-drop
    after:block
    after:content-['']
    after:h-[15vh]
    after:w-full
    after:left-0
    after:bg-gradient-to-b
    after:from-transparent
    after:via-white
    after:to-white

    ${order === 0 && 'after:animation-delay-10 ml-[100%]'}
    ${order === 1 && 'after:animation-delay-1 ml-[-40%]'}
    ${order === 2 && 'after:animation-delay-4 ml-[-10%]'}
    ${order === 3 && 'after:animation-delay-2 ml-[-30%]'}
    ${order === 4 && 'after:animation-delay-3 ml-[-20%]'}
    ${order === 5 && 'after:animation-delay-5 ml-0'}
    ${order === 6 && 'after:animation-delay-7 ml-[10%]'}
    ${order === 7 && 'after:animation-delay-8 ml-[30%]'}
    ${order === 8 && 'after:animation-delay-6 ml-[40%]'}
    ${order === 9 && 'after:animation-delay-9 ml-[20%]'}
  `),
  lines: ctl(`
    absolute
    h-full
    inset-x-0
    m-auto
    opacity-50
    top-0
    w-screen
  `)
};

export default styles;
