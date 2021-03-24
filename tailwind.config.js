module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './src/\*\*/\*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'about-background': "url('/src/assets/images/pexels-fauxels-3184460.jpg')"
       })
    },
    zIndex:{
      '-10':'-10',
      '-20':'-20'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
