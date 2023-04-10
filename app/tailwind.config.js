/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}", 
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors : {
        'primary' : '#FBC600',
        'secondary' : '#0086D9',
        'tertiary' : '#00ADFF'
      }
    },
  },
  plugins: [],
}
