/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest': {
          DEFAULT: '#004D40',
          deep: '#00382F',
          light: '#005C4B',
        },
        'gold': {
          DEFAULT: '#D8B879',
          light: '#E5CA96',
          dark: '#C4A45F',
        },
        'ivory': {
          DEFAULT: '#F8F6EF',
          dark: '#EDE9DC',
        },
        'dark-text': '#25372F',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'Georgia', 'serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,56,47,0.55) 0%, rgba(0,56,47,0.75) 60%, rgba(0,56,47,0.90) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D8B879, #E5CA96)',
      },
      boxShadow: {
        'gold': '0 4px 24px rgba(216, 184, 121, 0.25)',
        'card': '0 8px 40px rgba(0, 56, 47, 0.12)',
      },
      borderRadius: {
        'xl2': '1.25rem',
        '2xl': '1rem',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out forwards',
        'fadeIn': 'fadeIn 0.8s ease-out forwards',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(30px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}

