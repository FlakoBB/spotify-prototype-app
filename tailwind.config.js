/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        flkblue: {
          DEFAULT: '#2960AB',
          dark: '#0E1A33',
          light: '#E6ECF3'
        }
      }
    }
  },
  plugins: []
}
