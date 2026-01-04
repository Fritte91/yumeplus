/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      colors: {
        brand: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          500: '#64748b',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
        accent: {
          50: '#fffbeb',
          100: '#fef3c7',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
        },
        gold: {
          50: '#fffbeb',
          100: '#fef3c7',
          200: '#fde68a',
          300: '#fcd34d',
          400: '#fbbf24',
          500: '#f59e0b',
          600: '#d97706',
          700: '#b45309',
          800: '#92400e',
          900: '#78350f',
        },
        luxury: {
          gold: '#d4af37',
          'gold-light': '#f4e4bc',
          'gold-dark': '#b8941f',
          brass: '#b5a642',
          bronze: '#cd7f32',
        }
      },
      letterSpacing: {
        tight: '-0.025em',
        tighter: '-0.04em',
      },
      boxShadow: {
        'soft': '0 4px 6px -1px rgba(0, 0, 0, 0.02), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
        'card': '0 0 0 1px rgba(0,0,0,0.03), 0 2px 8px rgba(0,0,0,0.04)',
        'luxury': '0 10px 40px -10px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(212, 175, 55, 0.1)',
        'luxury-lg': '0 20px 60px -15px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(212, 175, 55, 0.15)',
        'gold': '0 4px 20px -2px rgba(212, 175, 55, 0.3), 0 0 0 1px rgba(212, 175, 55, 0.1)',
        'gold-lg': '0 10px 40px -5px rgba(212, 175, 55, 0.4), 0 0 0 1px rgba(212, 175, 55, 0.2)',
      },
      backgroundImage: {
        'pattern-dots': 'radial-gradient(circle, rgba(212, 175, 55, 0.03) 1px, transparent 1px)',
        'pattern-grid': 'linear-gradient(rgba(212, 175, 55, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(212, 175, 55, 0.02) 1px, transparent 1px)',
        'pattern-luxury': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(212, 175, 55, 0.02) 10px, rgba(212, 175, 55, 0.02) 20px)',
        'gradient-luxury': 'linear-gradient(135deg, rgba(212, 175, 55, 0.05) 0%, rgba(244, 228, 188, 0.03) 100%)',
        'gradient-gold': 'linear-gradient(135deg, rgba(212, 175, 55, 0.1) 0%, rgba(244, 228, 188, 0.05) 100%)',
      },
      backgroundSize: {
        'pattern': '20px 20px',
        'pattern-lg': '40px 40px',
      }
    },
  },
  plugins: [],
}

