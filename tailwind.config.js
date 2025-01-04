const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: "#CDB4ff",
        secondary: "#B4FFC9",
        black: "#383838",
        white: "#f5f5f5"
      },
      animation: {
        marquee: "marquee 25s linear infinite",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
    },
    plugins: [
      plugin(function ({ addUtilities }) {
        addUtilities({
          ".animate-marquee": {
            animation: "marquee 25s linear infinite",
          },
        });
      }),
    ],
  }
}