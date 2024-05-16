/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lite: "#948979",
        toolite: "#dfd0b8",
        dark: "#3c5b6f",
        toodark: "#153448"
      },
      fontFamily: {
        sans: ['"vesper-libre"', "sans-serif"],
        custom: ['"alfarn"', "sans-serif"]
      }
    },
  },
  plugins: [],
}