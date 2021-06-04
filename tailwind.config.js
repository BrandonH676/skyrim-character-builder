module.exports = {
  purge: [
    './public/index.html',
    './src/*.{vue,js}',
    './src/**/*.{vue,js}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      montserrat: ['Montserrat, sans-serif']
    },
    extend: {
      screens: {
        '2xl': '1440px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
