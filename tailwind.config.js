/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./views/**/*.ejs'],
  theme: {
    extend: {
      screens: {
        xsm: '400px',
        // => @media (min-width: 1536px) { ... }
      },
    },
  },
  plugins: [],
}