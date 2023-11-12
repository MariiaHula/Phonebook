/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['nunito', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
