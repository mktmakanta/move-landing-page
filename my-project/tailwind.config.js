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
        keyframes: {
        slide: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0)' },
        },
      },
        animation: {
        slideSlow: 'slide 1.2s ease-out',
        slideMedium: 'slide 1s ease-out',
        slideFast: 'slide 0.8s ease-out',
        slideFaster: 'slide 0.6s ease-out',
        slideFastest: 'slide 0.4s ease-out',
      },
    },
  },
  plugins: [],
}

