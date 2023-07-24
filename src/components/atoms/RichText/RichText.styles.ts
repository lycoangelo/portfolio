import ctl from '@netlify/classnames-template-literals';

const styles = {
  richtext: (className: string) =>
    ctl(`
      break-words
      hyphens-auto

      ${className}
    `),
  a: 'text-dp-purple font-semibold hover:underline',
  figure: 'relative w-full',
  image: 'w-full h-auto',
  em: 'italic',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h5',
  ol: 'list-decimal pl-5 text-left w-fit',
  p: 'paragraph white-space-normal',
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
    items-start
    font-normal
    mb-5
    relative
    [&_p]:text-xl

    [&_*:not(:first-child)]:text-xs

    [&_:empty]:block
    [&_:empty]:!mb-5

    lg:[&_p]:text-24px
    lg:[&_p:not(:first-child)]:font-semibold
    lg:[&_*:not(:first-child)]:text-base
  `),
  blockQuoteInner: ctl(`
    block
  `),
  leftQuote: ctl(`
    min-h-14px
    min-w-14px
    h-14px
    w-14px
    mr-4
    relative
    top-7px
    
    lg:h-18px
    lg:w-18px
    lg:min-h-18px
    lg:min-w-18px
    lg:top-5px
  `)
};

export default styles;
