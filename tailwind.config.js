/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#3b82f6',
      },
      boxShadow: {
        glow: '0 20px 60px rgba(30, 64, 175, 0.35)',
      },
    },
  },
  plugins: [],
}
