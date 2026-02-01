/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        teal: {
          50: '#eef4ff',
          100: '#d9e4ff',
          200: '#bcd0ff',
          300: '#aac0ff',
          400: '#8ba8f5',
          500: '#aac0ff',
          600: '#aac0ff',
          700: '#8ba3e8',
          800: '#6b8ad4',
          900: '#4a6bb8',
        },
        sage: {
          50: '#f6f7f4',
          100: '#e8ebe3',
          200: '#d4dac9',
          300: '#b5c0a8',
          400: '#94a37d',
          500: '#76895d',
          600: '#5d6d49',
          700: '#4a573b',
          800: '#3d4732',
          900: '#343c2b',
        },
        // Etsy banner: mint → light pastel blue
        brand: {
          mint: '#c8f0e0',
          mintLight: '#e0f7f2',
          skyLight: '#e0f7fa',
          skyPastel: '#b2ebf2',
          skySoft: '#add8e6',
        },
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        display: ['Outfit', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'review-in': 'fade-in-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [],
}
