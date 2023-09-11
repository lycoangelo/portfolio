import ctl from '@netlify/classnames-template-literals';

const styles = {
  richtext: (className: string) =>
    ctl(`
      [&>*]:mb-5

      ${className}
    `),
  a: 'text-primary font-semibold hover:underline',
  figure: 'relative w-full',
  image: 'w-full h-auto',
  em: 'italic',
  h1: 'text-2xl lg:text-6xl',
  h2: 'text-1xl lg:text-5xl',
  h3: 'text-xl lg:text-4xl',
  h4: 'text-lg lg:text-3xl',
  h5: 'text-base lg:text-2xl',
  h6: 'text-base lg:text-xl',
  ol: 'list-decimal pl-5 text-left w-fit',
  p: 'text-sm leading-7 white-space-normal [li>&]:mb-0',
  strong: 'font-bold',
  sub: 'align-sub',
  sup: 'align-super',
  u: 'underline',
  ul: 'list-disc pl-5 text-left',
  table: 'w-full',
  td: 'border border-l',
  th: 'border border-l',
  tr: '',
  blockquote: ctl(`
    flex
    font-normal
    items-start
    mb-5
    relative

    [&_p]:text-xl

    [&_*:not(:first-child)]:text-xs

    [&_:empty]:block
    [&_:empty]:!mb-5

    lg:[&_p]:text-[24px]
    lg:[&_p:not(:first-child)]:font-semibold
    lg:[&_*:not(:first-child)]:text-base
  `),
  blockQuoteInner: ctl(`
    block
  `),
  leftQuote: ctl(`
    h-[14px]
    min-h-[14px]
    min-w-[14px]
    mr-4
    relative
    top-[7px]
    w-[14px]
    
    lg:h-[18px]
    lg:min-h-[18px]
    lg:min-w-[18px]
    lg:top-[5px]
    lg:w-[18px]
  `)
};

export default styles;
