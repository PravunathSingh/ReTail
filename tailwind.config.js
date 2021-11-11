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
      colors: {
        'brand-bg': '#F1F7E7',
        brand: '#2F5D62',
        'brand-primary': '#5E8B7E',
        'brand-primary-light': '#A7C4BC',
        'brand-secondary': '#6B7B6E',
        'text-brand': '#1C2B2D',
        'text-brand-light': '#4C4C4C',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
