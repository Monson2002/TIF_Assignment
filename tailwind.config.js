/** @type {import('tailwindcss').Config} */
// const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        open_sans: ['Open Sans', 'sans-serif'],
        source_sans_pro: ['Source Sans Pro', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

