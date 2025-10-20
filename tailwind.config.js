/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          100: '#98c5ca',
          300: '#6cbbc3',
          500: '#54b7c1',
          700: '#49a9b2',
          900: '#447e84',
        },
        secondary: {
          100: '#f5e8ed',
          300: '#eac0d0',
          500: '#e6aac1',
          700: '#dd9ab3',
          900: '#c77d99',
        },
        tertiary: {
          100: '#f1e3b0',
          300: '#f0d87d',
          500: '#f2d462',
          700: '#ebcb4f',
          900: '#dab62e',
        },
        neutral: {
          100: '#898989',
          300: '#707070',
          500: '#494949',
          700: '#363636',
          900: '#303030',
        },
        font: {
          DEFAULT: '#303030',
        },
        background: '#fafafa',
        // Cores do EmpaTEA
        empatea: {
          green: '#64A555',     // Verde
          red: '#BF3930',       // Vermelho
          yellow: '#EEC666',    // Amarelo
          blue: '#659AC4',      // Azul
          'green-light': '#8BC67F',
          'green-dark': '#4D8445',
          'red-light': '#D9534F',
          'red-dark': '#A02F28',
          'yellow-light': '#F5D98F',
          'yellow-dark': '#E4B84D',
          'blue-light': '#8FB5D6',
          'blue-dark': '#4D7FA0',
        },
      },
    },
  },
  plugins: [],
};
