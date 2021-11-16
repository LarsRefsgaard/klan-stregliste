
module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '1/10': '10%',
        '1/8': '12.5%',
        '1/20': '5%',
        'left-padding': 'max(5%, 80px)'
      },
      colors: {
        nord0: '#2e3440',
        nord1: '#3b4252',
        nord2: '#434c5e',
        nord3: '#4c566a',
        nord4: '#d8dee9',
        nord5: '#e5e9f0',
        nord6: '#eceff4',
        nord7: '#8fbcbb',
        nord8: '#88c0d0',
        nord9: '#81a1c1',
        nord10: '#5e81ac',
        nord11: '#bf616a',
        nord12: '#d08770',
        nord13: '#ebcb8b',
        nord14: '#a3be8c',
        nord15: '#b48ead',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
