module.exports = {
  purge: [
    './public/index.html',
    './src/*.{vue,js}',
    './src/**/*.{vue,js}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      montserrat: ['Montserrat, sans-serif'],
    },
    extend: {
      colors: {
        blue: {
          900: '#08121E',
        },
        gray: {
          300: '#D6D6D6',
          700: '#939393',
        },
        teal: {
          200: '#26A6AD',
          500: '#198187',
        },
      },
      height: {
        'none': '0%',
      },
      screens: {
        '2xl': '1440px',
      },
      spacing: {
        '75%': '75%',
        '80%': '80%',
      },
    },
  },
}
