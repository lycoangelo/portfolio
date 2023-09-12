import ctl from '@netlify/classnames-template-literals';

const styles = {
  button: ctl(`
    !bg-white
    h-5
    flex
    items-center
    justify-center
    overflow-hidden
    rounded-full
    w-5

    [&_path]:!fill-primary
    [&_rect]:!fill-white
  `),

  container: ctl(`
    duration-150
    flex
    flex-col
    h-auto
    items-center
    justify-end
    min-h-[28px]
    overflow-hidden
    rounded-full
    transition-all
    w-7
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
    mb-3
    overflow-hidden
    relative
    rounded-full
  `),

  list: ctl(`
    bottom-5
		flex
		flex-col
		items-center
  `),

  toggle: ctl(`
    duration-500
    h-full
    rounded-full
    transition-all

    hover:opacity-75
  `)
};

export default styles;
