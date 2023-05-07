import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: (isLeftAligned: boolean, className: string) =>
    ctl(`
		flex
		items-center

		${isLeftAligned ? 'justify-end' : 'justify-start'}
		${className}
	`)
};

export default styles;
