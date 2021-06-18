const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        blob: 'blob 7s infinite',
      },
      keyframes: {
        blob: {
          '0%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
          '33%': {
            transform: 'translate(30px, -50px) scale(1.2)',
          },
          '66%': {
            transform: 'translate(-20px, 20px) scale(0.8)',
          },
          '100%': {
            transform: 'translate(0px, 0px) scale(1)',
          },
        },
      },
      colors: {
        ...colors,
        darkColor: '#212121',
        darkBackground: '#121212',
        cardGray: '#424242',
        gradientFirst: '#30DB81',
        gradientSecond: '#26AB93',
        buttonGray: '#E1E1E1',
        ...defaultTheme.colors,
      },
      fontFamily: {
        sans: ['Mulish', ...defaultTheme.fontFamily.sans],
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme('colors.gray.900'),

          a: {
            color: theme('colors.blue.500'),
            '&:hover': {
              color: theme('colors.blue.700'),
            },
          },
        },
      },

      dark: {
        css: {
          color: theme('colors.gray.100'),

          a: {
            color: theme('colors.blue.100'),
            '&:hover': {
              color: theme('colors.blue.100'),
            },
          },
        },
      },
    }),
  },
  variants: {
    extend: {
      typography: ['dark'],
      blur: ['hover', 'focus', 'group-hover'],
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
