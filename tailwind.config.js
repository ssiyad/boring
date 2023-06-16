const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      screens: {
        lg: '800px',
        xl: '900px',
        '2xl': '900px',
      },
    },
    fontFamily: {
      serif: ['"Crimson Pro"', ...defaultTheme.fontFamily.serif],
      sans: ['"Work Sans"', ...defaultTheme.fontFamily.sans],
      mono: ['"JetBrains Mono"', ...defaultTheme.fontFamily.mono],
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
