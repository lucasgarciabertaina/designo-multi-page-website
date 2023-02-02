/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.vue"],
  theme: {
    letterSpacing: {
      button: "0.063rem",
      title: "0.125rem",
    },
    fontFamily: {
      jost: ["Jost", "sans-serif"],
    },
    extend: {
      colors: {
        peach: "#E7816B",
        black: "#1D1C1E",
        white: "#FFFFFF",
        "light-peach": "#FFAD9B",
        "dark-gray": "#333136",
        "light-gray": "#F1F3F5",
      },
    },
  },
  plugins: [],
};
