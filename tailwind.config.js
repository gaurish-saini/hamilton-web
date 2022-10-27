/** @type {import('tailwindcss').Config} */

const { colors } = require("./styles/variables");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["Noto Sans"],
    },
    extend: {
      colors,
    },
  },
  plugins: [],
};
