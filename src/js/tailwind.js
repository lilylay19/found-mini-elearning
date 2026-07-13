/** @type {import('tailwindcss').Config} */

module.exports = {

  darkMode: "class",

  content: [
    "./*.html",
    "./pages/**/*.html",
    "./src/**/*.{html,js}"
  ],

  theme: {

    extend: {

      colors: {

        primary: "#8cdc2b",

        secondary: "#03543f",

        "secondary-2": "#f5f5f5",

        "secondary-4": "#d1d5db",

        "brand-50": "#f0fdf4"

      }

    }

  },


  plugins: []

}