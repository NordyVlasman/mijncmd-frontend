const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...colors,
        darkColor: '#212121',
        darkBackground: '#121212',
        cardGray: '#424242',
        gradientFirst: '#30DB81',
        gradientSecond: '#26AB93',
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
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}
