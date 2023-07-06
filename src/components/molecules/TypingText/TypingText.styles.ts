import ctl from '@netlify/classnames-template-literals';

const styles = {
  container: (isLeftAligned: boolean) =>
    ctl(`
			flex
			items-center

			${isLeftAligned ? 'justify-end' : 'justify-start'}
		`)
};

export default styles;
