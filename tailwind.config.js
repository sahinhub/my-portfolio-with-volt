/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'montserrat-alternates': ['Montserrat Alternates', 'sans-serif'],
      },
      colors: {
        'dark-bg': '#0e0918',
      },
      animation: {
        'gradient-shift': 'gradient-shift 8s ease infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'rotate-glow': 'rotate-glow 4s linear infinite',
      },
      backgroundImage: {
        'glow-conic': 'conic-gradient(from 0deg, #ff9b26, #ff0c00, #fd8925, #ff9b26)',
      },
      keyframes: {
        'gradient-shift': {
          '0%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
          '100%': { 'background-position': '0% 50%' },
        },
        'rotate-glow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
      }
    },
  },
  plugins: [],
};