const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        base: '#000500',
        secondary: '#F89084',
        gray: '#E3F2FD',
        grayDark: '#8491A0',
        dark: '#121212',
      },
      fontFamily: {
        sans: ['Noah', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
