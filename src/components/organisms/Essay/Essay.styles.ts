import ctl from '@netlify/classnames-template-literals';

const styles = {
  essay: (className: string) =>
    ctl(`
			text-sm
			leading-7

			md:text-base

			xl:text-lg
			xl:leading-8

			${className}
		`)
};

export default styles;
