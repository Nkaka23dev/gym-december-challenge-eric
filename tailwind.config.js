/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'nunito': ['nunito'],
        'josephine': ['Josefin Sans']
      },
      colors: {
        'primary': '#c69963',
      },
      spacing: {
        '4.5': '4.5rem',
      }
    },
  },
  plugins: [],
}