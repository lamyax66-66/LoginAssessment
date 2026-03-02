/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        "tahakom-gradient":
        "linear-gradient(to bottom, #35142C, #612550, #497283, #31BFB7)",
        "tahakom-header-gradient": "linear-gradient(to right, #35142C, #612550, #497283)",
      },
      colors: {
        'primary': '#612550',
        'page-bg':'#F8F8F8',
        'error': '#9A0B11',
        'error-bg': '#E8D0D1',
        'gray': '#636364',
        'gray-2': '#D9D9D9'
      },
      boxShadow: {
        'error-sh': '0 4px 10px 0 #E9444B40',
      }
    },
  },
   safelist: [
    'border-errorMessage'
  ],
  plugins: [],
}

