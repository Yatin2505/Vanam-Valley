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
          darker: '#002620',
          darkest: '#001D18',
          light: '#005C4B',
        },
        'gold': {
          DEFAULT: '#D8B879',
          light: '#E5CA96',
          dark: '#C4A45F',
          pale: '#F4E9D4',
        },
        'ivory': {
          DEFAULT: '#F8F6EF',
          soft: '#FBF9F4',
          dark: '#EDE9DC',
        },
        'dark-text': '#1D2D26',
      },
      fontFamily: {
        'playfair': ['"Playfair Display"', 'Georgia', 'serif'],
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-gradient': 'linear-gradient(to bottom, rgba(0,38,32,0.4) 0%, rgba(0,38,32,0.65) 50%, rgba(0,29,24,0.92) 100%)',
        'gold-gradient': 'linear-gradient(135deg, #D8B879 0%, #E5CA96 50%, #C4A45F 100%)',
        'forest-gradient': 'linear-gradient(180deg, #002620 0%, #001D18 100%)',
      },
      boxShadow: {
        'gold': '0 8px 32px rgba(216, 184, 121, 0.22)',
        'gold-glow': '0 0 25px rgba(216, 184, 121, 0.35)',
        'card': '0 12px 40px rgba(0, 29, 24, 0.12)',
        'card-dark': '0 16px 48px rgba(0, 0, 0, 0.3)',
      },
      letterSpacing: {
        'ultra-wide': '0.3em',
        'mega-wide': '0.4em',
      },
      borderRadius: {
        'xl2': '1.25rem',
        '3xl': '1.75rem',
        'arch': '120px 24px 24px 24px',
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'pulse-subtle': 'pulseSubtle 3s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(28px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: 0.9, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.04)' },
        },
      },
    },
  },
  plugins: [],
}

