/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "sans-serif"],
        display: ["Archivo Black", "sans-serif"],
        mono: ["DM Mono", "ui-monospace", "monospace"],
        hand: ["Gochi Hand", "cursive"],
      },
      colors: {
        paper: "#F4ECDF",
        ink: "#1A120C",
        sun: "#FFD000",
        pop: "#E23A2B",
        citrus: "#FF6A1A",
        card: "#FFF8EE",
      },
      boxShadow: {
        hard: "3px 3px 0 #1A120C",
        "hard-md": "4px 4px 0 #1A120C",
        "hard-lg": "8px 8px 0 #1A120C",
        sticker: "12px 12px 0 #1A120C",
      },
      keyframes: {
        ticker: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-50%)" },
        },
        drift: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-6px)" },
        },
      },
      animation: {
        ticker: "ticker 28s linear infinite",
        drift: "drift 3.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
