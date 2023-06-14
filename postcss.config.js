const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    tailwindcss('src/styles/config/tailwindcss-config.js'),
    autoprefixer,
  ],
};
