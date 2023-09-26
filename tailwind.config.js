/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        croissant: "Croissant One, cursive",
        fuggles: "Fuggles, cursive",
        serif: "Martel Sans, sans-serif",
        sourceCodePro: "Source Code Pro, monospace",
      },
    },
  },
  plugins: [],
};
