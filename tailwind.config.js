/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        slowPulse: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0.7 },
        },
      },
      animation: {
        pulseSlow: 'pulse 8s ease-in-out infinite',
        slowPulse: 'slowPulse 5s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        pink: {
          50:  '#fff5f7',
          100: '#fde4ea',
          200: '#fac9d5',
          300: '#f7aebf',
          400: '#f394aa',
          500: '#EBADB8', // Brand pink
          600: '#dc8395',
          700: '#c7637a',
          800: '#a74c60',
          900: '#883847',
        },
        cherry: {
          50:  '#fff5f6',
          100: '#ffe3e7',
          200: '#fecbd1',
          300: '#fbb0b9',
          400: '#f292a0',
          500: '#EBADB8',
          600: '#d88594',
          700: '#bc6477',
          800: '#994c5d',
          900: '#763a47',
        },
        powderBlue: {
          50:  '#f5f8fc',
          100: '#e5ecf5',
          200: '#d3deee',
          300: '#c0cee4',
          400: '#aac0db',
          500: '#91AAC6', // brand core
          600: '#7a92ab',
          700: '#667890',
          800: '#526070',
          900: '#3f4a56',
        },
        carolina: {
          50:  '#f3f9fc',
          100: '#e1f0f9',
          200: '#cce6f3',
          300: '#b5daed',
          400: '#9dcde6',
          500: '#78B1CE',
          600: '#5b95b3',
          700: '#457a98',
          800: '#35607a',
          900: '#28495f',
        },
        roseQuartz: {
          50:  '#f8f6f8',
          100: '#f0e9f0',
          200: '#e4d8e5',
          300: '#d7c4d9',
          400: '#c8adca',
          500: '#BAA4B7',
          600: '#a3889e',
          700: '#8d6f85',
          800: '#735a6c',
          900: '#594555',
        },
        coolGray: {
          50:  '#f6f6f8',
          100: '#e7e7ed',
          200: '#d5d5e0',
          300: '#c3c3d4',
          400: '#aeaec4',
          500: '#A4A4BA',
          600: '#8c8ca2',
          700: '#75758a',
          800: '#5d5d70',
          900: '#474758',
        },
        primary: '#F3D1DC',
        lavender: '#D4C1EC',
        mauve: '#B388EB',
        darkpink: '#D1007F',
        soft: '#FAF7F5',
        grayText: '#6B7280',
      },
      textShadow: {
        sm: '1px 1px 2px rgba(0, 0, 0, 0.25)',
        DEFAULT: '2px 2px 4px rgba(0, 0, 0, 0.35)',
        md: '3px 3px 6px rgba(0, 0, 0, 0.5)',
        darkpink: '2px 2px 3px #D1007F',
        white: '1px 1px 2px white',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    function ({ matchUtilities, theme }) {
      // Text Shadow
      matchUtilities(
        {
          'text-shadow': (value) => ({
            textShadow: value,
          }),
        },
        { values: theme('textShadow') }
      );

      // Text Outline
      matchUtilities(
        {
          'text-outline': (value) => ({
            WebkitTextStroke: value,
          }),
        },
        {
          values: {
            '1': '1px black',
            '2': '2px black',
            '1-pink': '1px #EBADB8',
            '2-pink': '2px #EBADB8',
            '1-darkpink': '1px #D1007F',
            '2-darkpink': '2px #D1007F',
            '1-white': '1px white',
            '2-white': '2px white',
          },
        }
      );
    },
  ],
}
