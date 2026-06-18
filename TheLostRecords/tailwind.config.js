// tailwind.config.js
/** @type {import('tailwindcss').Config} */

/*
 * THE LOST RECORDS — color system (v2)
 * ------------------------------------
 * One source of truth. To retint the whole project, change the hex values here.
 * Concept: cool tones = "the record / the system" · warm amber = "the human story".
 *
 * Default Tailwind colors (zinc, sky, etc.) still work, so any page not yet
 * converted keeps rendering. New pages use the semantic names below.
 */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces (darkest -> raised) — a deep slate, not pure black
        base: '#0E1318',
        surface: '#161D25',
        raised: '#1F2731',
        hairline: '#2C3742',

        // Text
        ink: '#ECEFF2',
        muted: '#A6B2BF',
        faint: '#6E7C8A',

        // Primary accent — confident cyan in the brand/logo lineage
        accent: {
          DEFAULT: '#58C6E6',
          soft: '#8BD9EF',
          strong: '#2FA6CB',
          ink: '#08121A',
        },

        // Signature secondary — warm "lamplight" amber (the human counterpoint)
        ember: {
          DEFAULT: '#E6A95C',
          soft: '#F1C88E',
          strong: '#C9863A',
        },

        // Functional
        warn: '#E6A95C',
        danger: '#E5736B',
        ok: '#6FCF97',

        // Back-compat alias from the original config
        highlight: '#7DD3FC',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '96rem',
        '9xl': '104rem',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
    },
  },
  plugins: [],
};