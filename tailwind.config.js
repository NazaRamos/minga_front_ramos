/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': "320px",
      ...defaultTheme.screens
    },
    extend: {
      backgroundImage: {
        'fondo-web': "url('./public/images/fondo-web.png')",
        'fondo-mobile': "url('./public/images/fondo-mobile.jpg')"
      }
    },
  },
  plugins: [],
}

