/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0f172a', // slate-900
        card: 'rgba(30, 41, 59, 0.7)', // slate-800 with opacity
        border: 'rgba(51, 65, 85, 0.5)', // slate-700
        accent: {
          neon: '#0ea5e9', // sky-500
          purple: '#8b5cf6', // violet-500
          emerald: '#10b981', // emerald-500
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Clash Display', 'Inter', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
