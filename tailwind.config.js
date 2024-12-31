/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    fontFamily: {
      chivo : ["Chivo", "serif"],
      monsterat: ["Montserrat", "serif"]
    }
    },
  },
  plugins: [],
}