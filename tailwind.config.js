const defaultTheme = require('tailwindcss/defaultTheme')
const appConfig = require('./app.config.json')

module.exports = {
  content: [],
  theme: {
    extend: {
      colors: {
        primary: appConfig.colors.primary || '#0d2433',
        'primary-hover': appConfig.colors.primaryHover || '#283c4a',
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
