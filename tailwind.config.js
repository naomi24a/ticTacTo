/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,scss,ts}"],
  theme: {
    extend: {
        colors: {
          'lavander': 'rgb(170, 170, 220)',
        },
        fontFamily: {
          franklin: ['Franklin Gothic', 'Arial Narrow'],
        },
    },
  },
  plugins: [],
}