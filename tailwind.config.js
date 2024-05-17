/** @type {import('tailwindcss').Config} */

import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',
      ...defaultTheme.screens,
    },
    extend: {
      colors: {
        lite: "#948979",
        toolite: "#dfd0b8",
        dark: "#3c5b6f",
        toodark: "#153448"
      },
      fontFamily: {
        sans: ['"nunito"', "sans-serif"],
        custom: ['"cooper-black-std"', "serif"]
      }
    },
  },
  plugins: [],
}