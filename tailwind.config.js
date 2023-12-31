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
      screens: {
        '2xl': {'max': '1400px'},
  
        'xl': {'max': '1279px'},
  
        'lg': {'max': '1023px'},
  
        'md': {'max': '767px'},
  
        'sm': {'max': '639px'},  
        },
    },
  },
  plugins: [],
};
