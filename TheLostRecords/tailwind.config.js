// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Optional: override if you want a custom theme
        // primary: '#e879f9', // soft purple-pink
        highlight: '#7DD3FC' // tailwind sky-300
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
        maxWidth: {
        '8xl': '96rem',   // 1536px
        '9xl': '104rem',  // 1664px
      },
    },
  },
  plugins: [],
}
