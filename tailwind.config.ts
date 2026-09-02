/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          50: '#f0f5fa',
          800: '#1E293B',
          900: '#0F172A',
          950: '#0A0F1E',
        },
        background: '#0F172A',
        surface: '#1E293B',
        primary: {
          DEFAULT: '#F59E0B',
          light: '#FBBF24',
          dark: '#D97706',
        },
        charcoal: '#F5F5DC',
        cream: {
          DEFAULT: '#F5F5DC',
          light: '#FFFFF0',
          dark: '#EDE8D0',
        },
        slate: {
          DEFAULT: '#D1D5DB',
          light: '#9CA3AF',
        },
      },
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};