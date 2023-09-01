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
    },
    '.animation-delay-1': {
      animationDelay: '3000ms'
    },
    '.animation-delay-2': {
      animationDelay: '6000ms'
    },
    '.animation-delay-3': {
      animationDelay: '9000ms'
    },
    '.animation-delay-4': {
      animationDelay: '12000ms'
    },
    '.animation-delay-5': {
      animationDelay: '15000ms'
    },
    '.animation-delay-6': {
      animationDelay: '18000ms'
    },
    '.animation-delay-7': {
      animationDelay: '21000ms'
    },
    '.animation-delay-8': {
      animationDelay: '24000ms'
    },
    '.animation-delay-9': {
      animationDelay: '27000ms'
    },
    '.animation-delay-10': {
      animationDelay: '30000ms'
    },
    '.background': {
      background: 'linear-gradient(-45deg, #000000, #505050, #000000)',
      backgroundPosition: '0% 50%',
      backgroundSize: '400%',
      height: '100vh'
    },
    '.hero-gradient': {
      background:
        'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)'
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
      primary: 'var(--primary-color)',
      secondary: 'var(--secondary-color)',
      tertiary: 'var(--tertiary-color)',
      silver: '#cccccc',
      dark: '#030303',
      black: '#000000',
      white: '#ffffff',
      gray: '#3c3c3c',
      inactive: '#707070',
      transparent: 'transparent',
      error: '#ff0000',

      'teal-primary': '#00c9e3',
      'teal-secondary': '#0193a7',
      'teal-tertiary': '#005864',

      'orange-primary': '#ff6e00',
      'orange-secondary': '#b36500',
      'orange-tertiary': '#783f13',

      'green-primary': '#00ff66',
      'green-secondary': '#03835f',
      'green-tertiary': '#015d43',

      'blue-primary': '#2a86f6',
      'blue-secondary': '#0357bd',
      'blue-tertiary': '#013a81',

      'red-primary': '#ff0000',
      'red-secondary': '#c00808',
      'red-tertiary': '#6e0101',

      'yellow-primary': '#fff200',
      'yellow-secondary': '#82700b',
      'yellow-tertiary': '#413e01',

      'purple-primary': '#c900fb',
      'purple-secondary': '#a113ac',
      'purple-tertiary': '#62027a',

      'gray-primary': '#cdcdcd',
      'gray-secondary': '#8b8a8a',
      'gray-tertiary': '#3a3a3a'
    },
    extend: {
      animation: {
        background: 'background linear 30s infinite 10s',
        drop: 'drop linear 5.5s infinite',
        ticker: 'ticker linear infinite'
      },
      fontFamily: {
        'am-200': 'var(--apek-mk3-200)',
        'am-500': 'var(--apek-mk3-500)',
        roboto: 'var(--roboto)',
        quicksand: 'var(--quicksand)'
      },
      gridColumnEnd: {
        13: '13'
      },
      keyframes: {
        background: {
          '0%': {
            backgroundPosition: '0% 50%'
          },
          '50%': {
            backgroundPosition: '100% 50%'
          },
          '100%': {
            backgroundPosition: '0% 50%'
          }
        },
        drop: {
          '0%': {
            opacity: 0.5,
            top: '-50%'
          },
          '100%': {
            opacity: 0.8,
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
      transitionDuration: {
        0: '0ms'
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
