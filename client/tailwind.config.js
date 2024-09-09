/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      warmOrange: "#D87D4A ",
      darkGray: "#101010",
      gray: "#4C4C4C",
      "gray-2": "#CFCFCF",
      lightGray: "#F1F1F1",
      almostWhite: "#FAFAFA",
      peach: "#FBAF85",
      white: "#fff",
      black: "#000",
      error: "#CD2C2C",
    },
  },
  plugins: [],
};
