const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      darkBlue: '#273F7F',
      blue: '#3261AF',
      lightBlue: '#4C86C5',
      green: '#49b659',
      gray: colors.gray,
      white: colors.white,
      black: colors.black,
    },
    extend: {
      backgroundImage: theme => ({
        'services': "url('/images/services.jpeg')",
        'bg': "url('/images/bg.jpg')",
       })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
