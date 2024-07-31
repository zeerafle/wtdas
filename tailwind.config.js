const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "medieval-sharp": ["MedievalSharp", "serif"],
        serif: ["Libre\\ Baskerville", ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#953b1d",
          "secondary": "#5e3921",
          "accent": "#70443e",
          "neutral": "#FFF2F2",
          "base-100": "#ffffff",
          "info": "#51829B",
          "success": "#A5DD9B",
          "warning": "#A5DD9B",
          "error": "#D37676",
        }
      },
    ]
  }
};
