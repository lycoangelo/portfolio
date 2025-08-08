import ctl from '@netlify/classnames-template-literals';

const styles = (className: string, isVertical: boolean) => ({
  button: ctl(`
    !bg-white
    size-5
    flex
    items-center
    justify-center
    overflow-hidden
    rounded-full
    [&_svg]:overflow-hidden

    [&_svg]:rounded-full
    [&_path]:!fill-primary
    [&_rect]:!fill-white
  `),

  container: ctl(`
    duration-150
    flex
    flex-col
    h-auto
    min-h-[28px]
    rounded-full
    transition-all

    ${
      isVertical
        ? `
        items-center
        justify-end
        w-7
      `
        : `
        w-auto
      `
    }
    ${className}
  `),

  icon: ctl(`
    h-auto
    w-2
  `),

  item: ctl(`
    border
    border-inactive
		flex
		flex-col
		items-center
    relative
    rounded-full

    ${isVertical ? 'mb-3' : 'mr-3'}
  `),

  list: ctl(`
		flex
    items-center

    ${isVertical && 'flex-col'}
  `),

  toggle: ctl(`
    duration-500
    h-full
    rounded-full
    transition-all

    hover:opacity-75
  `)
});

export default styles;
