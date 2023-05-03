const commonPixelValues = {
  0.25: '1px',
  0.75: '3px',
  1.25: '5px',
  1.75: '7px',
  2.75: '11px',
  4.5: '18px',
  5: '20px',
  7.5: '30px'
};

module.exports = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    colors: {
      primary: '#00c9e3',
      secondary: '#cccccc',
      dark: '#030303',
      black: '#000000',
      white: '#ffffff',
      gray: '#3c3c3c',
      inactive: '#707070',
      teal: '#005864',
      turquoise: '#0193a7',
      transparent: 'transparent',
      error: '#ff0000'
    },
    extend: {
      fontFamily: {
        'am-200': 'var(--apek-mk3-200)',
        'am-500': 'var(--apek-mk3-500)',
        roboto: 'var(--roboto)',
        quicksand: 'var(--quicksand)'
      },
      lineHeight: {
        11: '44px',
        12: '48px',
        13: '52px',
        14: '56px',
        15: '60px',
        16: '64px',
        17: '68px',
        18: '72px',
        23: '92px'
      },
      maxWidth: {
        'container-max': '1920px'
      },
      minHeight: {
        ...commonPixelValues
      },
      minWidth: {
        'btn-3xs': '60px',
        'btn-2xs': '80px',
        'btn-xs': '100px',
        'btn-sm': '120px',
        'btn-md': '160px',
        'btn-lg': '200px',
        'btn-xl': '240px',
        'screen-min': '375px'
      },
      spacing: {
        unset: 'unset',
        ...commonPixelValues
      },
      height: {
        ...commonPixelValues
      },
      width: {
        ...commonPixelValues
      },
      zIndex: {
        1: '1'
      },
      letterSpacing: {
        broad: '0.2em'
      }
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      xxl: '1440px',
      max: '1920px'
    }
  },
  plugins: []
};
