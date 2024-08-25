/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    screens: {
      'mobile': {'min':'200px','max':'427px'},
      'tablet': {'min':'427px','max':'782px'},
      'laptop': {'min':'782.1px'}
    },
    fontFamily: {
      'bungee': ['Bungee','sans-serif'],
      'yanone': ['Yanone','sans-serif']
    },
    colors: {
      'pavlova': '#D4BE9C',
      'cello':'#1F3E59',
      'wellread': '#BA3630',
      'mercury': '#E1E1E1',
      'foggygray':'#D1D2BE',
      'william':'#426C63',
    },
    extend: {
      boxShadow: {
        'inner-bottom': 'inset 0 -7.5px 1px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}

