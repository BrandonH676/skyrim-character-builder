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
          500: '#3482ab',
          900: '#08121E',
        },
        gray: {
          300: '#D6D6D6',
        },
        green: {
          500: '#3e8c17',
        },
        orange: {
          500: '#bc6521',
        },
        teal: {
          200: '#26A6AD',
          500: '#14696d',
        },
      },
      height: {
        'none': '0%',
        '140': '35rem',
        '112': '28rem',
        'min-content': 'min-content',
      },
      letterSpacing: {
        '0.15': '0.15em',
      },
      minHeight: {
        '200': '50rem',
        '260': '65rem',
      },
      screens: {
        '2xl': '1440px',
      },
      spacing: {
        '3.4': '.85rem',
        '5%': '5%',
        '30%': '30%',
        '40%': '40%',
        '70%': '70%',
        '80%': '80%',
      },
    },
  },
  variants: {
    extend: {
      brightness: ['hover'],
      margin: ['first', 'last'],
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ]
}
