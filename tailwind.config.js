module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1/10': '10%',
        '1/8': '12.5%',
        '1/20' : '5%',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
