/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'primary': '#612550',
        'error': '#9A0B11',
        'error-bg': '#E8D0D1',
      },
       boxShadow: {
        'error-sh': '0 4px 10px 0 #E9444B40',
      }
    },
  },
  plugins: [],
}
