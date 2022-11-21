/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./templates/**/*.html", "./theme/**/*.html"],
  darkMode: 'class',
  theme: {},
  variants: {},
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
