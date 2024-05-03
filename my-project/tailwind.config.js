/** @type {import('tailwindcss').Config} */
export default {
content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width: {
        '96': '36rem', 
        '98': '48rem', 
        '99': '52rem', 
        '100': '60', 
      },
      height: {
        '97': '36rem', 
        '98': '48rem', 
        '99': '52rem', 
      },
    },
  },
  plugins: [],
}

