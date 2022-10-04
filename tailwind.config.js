/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        green: "#54CC8B",        
    },
    fontFamily: {
      font: ["Poppins", "sans-serif"],
  },
    },
  },
  plugins: [],
}
