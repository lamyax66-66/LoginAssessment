/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        'primary': '#612550',
        'errorMessage': '#9A0B11'
      },
    },
  },
   safelist: [
    'border-errorMessage'
  ],
  plugins: [require('daisyui')],
}
