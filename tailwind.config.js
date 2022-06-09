const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: process?.env?.COLOR_PRIMARY || '#0d2433',
        'primary-hover': process?.env?.COLOR_PRIMARY_HOVER || '#283c4a',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
