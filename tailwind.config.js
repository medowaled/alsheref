/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        industrial: {
          50: '#f4f6f8',
          100: '#e4e8ed',
          200: '#c5cdd6',
          300: '#9baab8',
          400: '#6a7e93',
          500: '#4a627a',
          600: '#384d63',
          700: '#2d3f52',
          800: '#263545',
          900: '#232e3a',
          950: '#151d26',
        },
        accent: {
          blue: '#0056b3',
          orange: '#f37021', // Safety orange (kept for reference)
          teal: '#0ea5e9',   // Brand primary — matches logo cyan
          'teal-dark': '#0369a1', // Deeper teal for gradients
          'teal-glow': '#38bdf8', // Lighter glow teal for hover effects
        }
      },
      fontFamily: {
        sans: ['Cairo', 'Tajawal', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
