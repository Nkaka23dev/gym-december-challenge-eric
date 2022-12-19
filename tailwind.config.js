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
        'tum-blue-brand': '#3070B3',
        'tum-blue-dark': '#072140',
        'tum-blue-dark-1': '#0A2D57',
        'tum-blue-dark-2': '#0E396E',
        'tum-blue-dark-3': '#114584',
        'tum-blue-dark-4': '#14519A',
        'tum-blue-dark-5': '#165DB1',
        'tum-blue-light': '#5E94D4',
        'tum-blue-light-1': '#9ABCE4',
        'tum-blue-light-2': '#C2D7EF',
        'tum-blue-light-3': '#D7E4F4',
        'tum-blue-light-4': '#E3EEFA',
        'tum-blue-light-5': '#F0F5FA',
        'tum-yellow': '#FED702',
        'tum-yellow-dark': '#CBAB01',
        'tum-yellow-1': '#FEDE34',
        'tum-yellow-2': '#FEE667',
        'tum-yellow-3': '#FEEE9A',
        'tum-yellow-4': '#FEF6CD',
        'tum-orange': '#F7B11E',
        'tum-orange-dark': '#D99208',
        'tum-orange-1': '#F9BF4E',
        'tum-orange-2': '#FAD080',
        'tum-orange-3': '#FCE2B0',
        'tum-orange-4': '#FEF4E1',
        'tum-orange-danger': '#C24814',
        'tum-pink': '#B55CA5',
        'tum-pink-dark': '#9B468D',
        'tum-pink-1': '#C680BB',
        'tum-pink-2': '#D6A4CE',
        'tum-pink-3': '#E6C7E1',
        'tum-pink-4': '#F6EAF4',
        'tum-blue-bright': '#8F81EA',
        'tum-blue-bright-dark': '#6955E2',
        'tum-blue-bright-1': '#B6ACF1',
        'tum-blue-bright-2': '#C9C2F5',
        'tum-blue-bright-3': '#DCD8F9',
        'tum-blue-bright-4': '#EFEDFC',
        'tum-red': '#EA7237',
        'tum-red-dark': '#D95117',
        'tum-red-1': '#EF9067',
        'tum-red-2': '#F3B295',
        'tum-red-3': '#F6C2AC',
        'tum-red-4': '#FBE4DA',
        'tum-green': '#9FBA36',
        'tum-green-dark': '#7D922A',
        'tum-green-1': '#B6CE55',
        'tum-green-2': '#C7D97D',
        'tum-green-3': '#D8E5A4',
        'tum-green-4': '#E9F1CB',
        'tum-grey-1': '#20252A',
        'tum-grey-2': '#333A41',
        'tum-grey-3': '#475058',
        'tum-grey-4': '#6A757E',
        'tum-grey-5': '#ABB5BE',
        'tum-grey-6': '#CDD4DB',
        'tum-grey-7': '#DDE2E6',
        'tum-grey-8': '#E8ECEF',
        'tum-grey-9': '#F8F9FA',
      },
      spacing: {
        '4.5': '4.5rem',
      }
    },
  },
  plugins: [],
}