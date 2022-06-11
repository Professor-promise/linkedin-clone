module.exports = {
  important: '#root',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        mainBackground: 'var(--mainBackground)',
        mainWhite: 'var(--mainWhite)',
        lightGray: 'var(--lightGray)',
        mainGray: 'var(--mainGray)',
        mainBlue: 'var(--mainBlue)',
        hoverBackground: 'var(--hoverBackground)',
        hoverBlue: 'var(--hoverBlue)',
      },
    },
  },
  plugins: [],
};
