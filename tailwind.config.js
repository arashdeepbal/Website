/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1024px',
    },
    colors: {
      'mainblack': '#171717',
      'offwhite': '#fafafa',
      'white': '#ffffff',
      'gray-light': '#fafafa',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

