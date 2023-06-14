/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      green: {
        light: '#365B61',
        dark: '#24484E'
      },
      accent: {
        orange: '#F15A3B',
        red: '#C83939'
      },
      white: '#FDFDFD',
      lightGrey: '#F3F1F1',
      black: '#191919',
      grey: '#929292'
    },
    backgroundColor: {
      input: '#F3F1F1',
      primary: '#FDFDFD',
      navbar: '#24484E',
      card: '#929292',
      orange: '#F15A3B'
    },
    borderColor: {
      green: '#365B61'
    },
    extend: {},
  },
  plugins: [],
};
