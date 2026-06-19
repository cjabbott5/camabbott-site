// tailwind.config.js
/** @type {import('tailwindcss').Config} */

/*
 * THE LOST RECORDS — color system (v3 · "Oxblood / Redaction")
 * -----------------------------------------------------------
 * One source of truth. To retint the whole project, change the hex values here.
 *
 * Concept: warm near-black + cream = the human / the testimony.
 *          oxblood red = the record, the wound, the redaction.
 *
 * Use red sparingly — wordmark, eyebrows, primary actions, key markers.
 * Everything else carries weight through warm neutrals and space.
 *
 * NOTE: the default `sky` and `blue` scales are remapped onto the oxblood
 * family below, so any page still using `text-sky-300`, `bg-blue-500`, etc.
 * picks up the new palette automatically (no per-file rewrite needed).
 */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Surfaces (darkest -> raised) — warm near-black, never blue-black
        base: '#14100E',
        surface: '#1F1815',
        raised: '#2A211C',
        hairline: '#3A2E29',

        // Text — warm cream lineage
        ink: '#F4EAE2',
        muted: '#C3B4AA',
        faint: '#8A7A70',

        // Primary accent — muted oxblood (deep, bloody, never alarm-red)
        accent: {
          DEFAULT: '#9D342E',
          soft: '#C75B4E',   // lighter — links, hovers (more legible on dark)
          strong: '#7E2A26', // deeper — pressed / dense fills
          ink: '#FBF2EC',    // cream text on accent
        },

        // Signature secondary — warm lamplight amber (the human counterpoint)
        ember: {
          DEFAULT: '#E6A95C',
          soft: '#F1C88E',
          strong: '#C9863A',
        },

        // Functional
        warn: '#E6A95C',
        danger: '#E5736B',
        ok: '#6FCF97',

        // Back-compat alias (was cyan) -> now soft oxblood
        highlight: '#C75B4E',

        // --- Legacy palette remaps: cyan/blue -> oxblood family ---
        sky: {
          50:  '#FCF3EE',
          100: '#F7E6DE',
          200: '#EAC6BC',
          300: '#DB8E81',
          400: '#C75F51',
          500: '#A53A33',
          600: '#86302A',
          700: '#6B2823',
          800: '#4E1F1B',
          900: '#371714',
          950: '#23100E',
        },
        blue: {
          50:  '#FCF3EE',
          100: '#F7E6DE',
          200: '#EAC6BC',
          300: '#DB8E81',
          400: '#C75F51',
          500: '#A53A33',
          600: '#86302A',
          700: '#6B2823',
          800: '#4E1F1B',
          900: '#371714',
          950: '#23100E',
        },
      },
      fontFamily: {
        // Body / UI
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        // Display / wordmark / headings — characterful, warm, editorial
        display: ['"Bricolage Grotesque"', 'Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '96rem',
        '9xl': '104rem',
      },
      borderRadius: {
        xl2: '1.25rem',
      },
      boxShadow: {
        'accent-glow': '0 0 40px -8px rgba(157,52,46,0.45)',
      },
    },
  },
  plugins: [],
};