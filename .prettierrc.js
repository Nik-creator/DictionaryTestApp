module.exports = {
  plugins: [require('prettier-plugin-tailwindcss')],
  tailwindConfig: './src/styles/config/tailwind.config.js',
  printWidth: 80,
  singleQuote: true,
  trailingComma: 'all',
  bracketSpacing: true,
  jsxBracketSameLine: false,
  tabWidth: 2,
  semi: true,
};
