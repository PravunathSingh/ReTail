module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '2rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '5.5rem',
      },
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'Roboto'],
      },
      // colors: {
      //   'bg-brand': '#FDFAF6',
      //   'bg-brand-dark': '#FFF8EC',
      //   'brand-primary': '#064420',
      //   'brand-primary-light': '#386C5F',
      //   'brand-secondary': '#6B7B6E',
      // },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
