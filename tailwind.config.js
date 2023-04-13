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
      primary: '#00C9E3',
      secondary: '#039EB2',
      dark: '#030303',
      black: '#000000',
      white: '#ffffff'
    },
    extend: {
      fontFamily: {
        'am-200': 'var(--apek-mk3-200)',
        'am-500': 'var(--apek-mk3-500)',
        roboto: 'var(--roboto)',
        quicksand: 'var(--quicksand)'
      },
      maxWidth: {
        'container-max': '1920px'
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
