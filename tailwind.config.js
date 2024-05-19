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
      boxShadow: {
        'custom': '2px 2px 2px 2px rgba(21, 52, 72, 0.6)'
      },
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