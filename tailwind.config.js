/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      'moellegreen': '#0f6046',
      'lightgreen': '#50b697',
      'navhover': '#ebc83b',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      blue: colors.blue,
      red: colors.red,
      green: colors.green,
    },
    extend: {
      fontFamily: {
        sans: ['tahoma', 'sans-serif'],
        kellyslab: ['Kelly Slab', 'serif'],
      }
    },
  },
  plugins: [],
}

