import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./ui-framework/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'], // main body
        display: ['var(--font-playfair)', 'serif'], // seasonal headers
        casual: ['var(--font-poppins)', 'sans-serif'],
        bold: ['var(--font-lobster)', 'cursive'],
        script: ['var(--font-greatVibes)', 'cursive'],
        festive: ['var(--font-pacifico)', 'cursive'],
      }
    },
  },
  plugins: [aspectRatio],
}
