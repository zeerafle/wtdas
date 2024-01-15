const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "prairie-sand": "#953b1d",
        "irish-coffe": "#5e3921",
        kabul: "#70443e",
        plantation: "#2b4b50",
        "go-ben": "#696149",
      },
    },
    fontFamily: {
      "medieval-sharp": ["MedievalSharp", "serif"],
      serif: ["Libre\\ Baskerville", ...defaultTheme.fontFamily.serif],
    },
  },
  plugins: [],
};
