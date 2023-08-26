const plugin = require('tailwindcss/plugin');

const additionalUtilities = plugin(function ({ addUtilities }) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
      '-moz-backface-visibility': 'visible',
      '-webkit-backface-visibility': 'visible',
      '-ms-backface-visibility': 'visible'
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
      '-moz-backface-visibility': 'hidden',
      '-webkit-backface-visibility': 'hidden',
      '-ms-backface-visibility': 'hidden'
    },
    '.animation-pause': {
      'animation-play-state': 'paused'
    },
    '.horizontal-tb': {
      writingMode: 'horizontal-tb'
    },
    '.vertical-rl': {
      writingMode: 'vertical-rl'
    },
    '.vertical-lr': {
      writingMode: 'vertical-lr'
    }
  });
});

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
      animation: {
        ticker: 'ticker linear infinite'
      },
      fontFamily: {
        'am-200': 'var(--apek-mk3-200)',
        'am-500': 'var(--apek-mk3-500)',
        roboto: 'var(--roboto)',
        quicksand: 'var(--quicksand)'
      },
      keyframes: {
        drop: {
          '0%': {
            top: '-50%'
          },
          '100%': {
            top: '110%'
          }
        },
        ticker: {
          '0%': {
            transform: 'translateX(0)'
          },
          '100%': {
            transform: 'translateX(-100%)'
          }
        }
      },
      maxWidth: {
        'container-max': '1920px'
      },
      minWidth: {
        'btn-3xs': '60px',
        'btn-2xs': '80px',
        'btn-xs': '100px',
        'btn-sm': '120px',
        'btn-md': '160px',
        'btn-lg': '200px',
        'btn-xl': '240px',
        'screen-min': '320px'
      },
      spacing: {
        unset: 'unset'
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
  plugins: [require('tailwindcss-3d'), additionalUtilities]
};
