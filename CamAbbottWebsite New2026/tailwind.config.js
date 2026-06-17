/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FCF6F2',
        sand: '#F6E7DE',
        blush: '#F8E5EC',
        ink: '#231823',
        'ink-soft': '#5D4D57',
        line: '#E7D6CD',
        brand: {
          orange: '#E0552B',
          'orange-deep': '#C0441E',
          rose: '#BE4480',
          'rose-deep': '#9C3567',
          plum: '#2A1C29',
        },
        highlight: '#7DD3FC',
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: { '8xl': '96rem', '9xl': '104rem' },
    },
  },
  plugins: [],
}