/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  
  theme: {
    extend: {

      fontFamily: {
        'logoFont': ['"Caveat"'],
        'subText': ['"Poiret One"'],
      },

      colors: {
      },

      backgroundImage: {
        'headerBg1': "url('/src/assets/images/keyboards.jpg')",
        'headerBg2': "url('/src/assets/images/chairDesktop.jpg')",
        'headerBg3': "url('/src/assets/images/completeSet.jpg')",
        'Card1': "url('/src/assets/images/grid1.jpg')",
        'Card2': "url('/src/assets/images/grid2.jpg')",
        'Card3': "url('/src/assets/images/grid3.jpg')",
        'Card4': "url('/src/assets/images/grid4.jpg')",
        'Card5': "url('/src/assets/images/grid5.jpg')",
        'Card6': "url('/src/assets/images/grid6.jpg')",
      },

    },
  },
  plugins: [],
}

