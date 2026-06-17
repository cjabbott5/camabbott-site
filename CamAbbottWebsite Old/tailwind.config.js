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
        background: {
          DEFAULT: '#0f172a',   // dark slate
          light: '#1e293b',     // slightly lighter for cards
          muted: '#334155',     // muted slate for sections
        },
        text: {
          primary: '#f9fafb',   // near white
          secondary: '#d1d5db', // gray-300
          muted: '#9ca3af',     // gray-400
        },
        accent: {
          pink: '#e879f9',      // brighter magenta-pink
          violet: '#7c3aed',    // deep violet
          sky: '#38bdf8',       // sky-400 for highlights
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '96rem',   // 1536px
        '9xl': '104rem',  // 1664px
      },
      boxShadow: {
        glow: '0 0 10px rgba(236, 72, 153, 0.6)', // pink glow for hover
      },
    },
  },
  plugins: [],
}
