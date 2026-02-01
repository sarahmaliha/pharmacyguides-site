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
          50: '#f0fdfa',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
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
        // Mint → teal gradient (original teal palette)
        brand: {
          mint: '#c8f0e0',
          mintLight: '#e0f7f2',
          skyLight: '#ccfbf1',
          skyPastel: '#99f6e4',
          skySoft: '#5eead4',
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
