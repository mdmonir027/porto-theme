const { colors: defaultColors } = require('tailwindcss/defaultTheme');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...defaultColors,
      black: {
        main: '#212529',
        hover: '#32383e',
      },
      primary: {
        main: '#08c',
        hover: '#00a1f2',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
