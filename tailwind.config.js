const colors = require('tailwindcss/colors')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      'xxxs': '360px',
      'xxs': '420px',
      'xs': '560px',
      'sm':	'640px',
      'md':	'768px',
      'lg':	'1024px', 
      'xl':	'1280px',
      '2xl': '1536px',
    },
    colors: {
      darkBlue: '#273F7F',
      blue: '#3261AF',
      lightBlue: '#4C86C5',
      green: '#49b659',
      yellow: '#ffd028',
      gray: colors.zinc,
      white: colors.white,
      black: colors.black,
    },
    listStyleType: {
      none: 'none',
     disc: 'disc',
     decimal: 'decimal'
    },
    extend: {
      backgroundImage: theme => ({
        'services': "url('/images/services.webp')",
        'bg': "url('/images/bg.webp')",
        'shapes': "url('/images/shapeBg.svg')",
       })
    },
  },
  plugins: [],
}
