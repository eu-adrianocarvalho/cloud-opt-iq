/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      spacing: {
        '15': '3.75rem',
        '20': '5rem',
        '25': '6.25rem',
        '30': '7.5rem',
      },
      zIndex: {
        '1': '1',
      },
    },
  },
  plugins: [],
} 