/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "smoke-gray": "#666e75",
        "sky-blue": "#8a96a0",
        "not-that-black": "#222328",
      },
      screens: {
        xs: "480px",
      },
      fontFamily: {
        inter: ["Inter var", "sans-serif"],
        serif: ["Source Serif Pro", ...defaultTheme.fontFamily.serif],
      },
      boxShadow: {
        card: "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.2)",
        cardhover:
          "0 0 1px 0 rgba(189,192,207,0.06),0 10px 16px -1px rgba(189,192,207,0.4)",
      },
    },
  },
  plugins: [],
}
