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
      secondary: '#039eb2',
      dark: '#030303',
      black: '#000000',
      white: '#ffffff',
      gray: '#3c3c3c'
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
        15: '60px'
      },
      maxWidth: {
        'container-max': '1920px'
      },
      minWidth: {
        'btn-lg': '160px'
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
