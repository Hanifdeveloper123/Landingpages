/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center: true,
      padding: '16',

    },
    extend: {
      colors:{
        primary:'#14b8a6',
      },
      screens:{
        '2xl':'1320px',
      },
    },
  },
  plugins: [],
}
