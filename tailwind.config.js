/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    colors: {
      'green': '#0f6046',
      'lightgreen': '#50b697',
      'navhover': '#ebc83b',
    },
    extend: {
      fontFamily: {
        kellyslab: ['Kelly Slab', 'serif'],
      }
    },
  },
  plugins: [],
}

