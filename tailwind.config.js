const isDev = process.env.NODE_ENV === 'development'
/**
 * @typedef { import("@types/tailwindcss/tailwind-config").TailwindConfig } TailwindConfig
 */

/**@type {TailwindConfig} */
module.exports = {
  mode: isDev ? 'jit' : false,
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'soft-blue': 'hsl(215, 51%, 70%)',
        cyan: 'hsl(178, 100%, 50%)',
        'dark-blue': {
          'main-bg': 'hsl(217, 54%, 11%)',
          'card-bg': 'hsl(216, 50%, 16%)',
          line: 'hsl(215, 32%, 27%)',
        },
      },

      fontSize: {
        para: '18px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
