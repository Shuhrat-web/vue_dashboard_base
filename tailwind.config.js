/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#4f46e5',
        'warning': '#FFE492',
        'danger': '#f00',
        'success': '#56ba56',
        'secondary': '#D1D5DB',
        'secondary-dark': '#867878',
        'secondary-500': '#F5E3FF',
      },
    },
  },
  plugins: [],
}