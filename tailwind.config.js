const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkColor: '#212121',
        darkBackground: '#121212',
        cardGray: '#424242',
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
