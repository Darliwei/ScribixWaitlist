/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        neon: {
          teal: '#00F5FF',
          purple: '#B026FF',
          blue: '#0066FF',
          cyan: '#00D9FF',
        },
        dark: {
          bg: '#0A0A0F',
          surface: '#111118',
          card: '#1A1A24',
        }
      },
      fontFamily: {
        sans: ['Segoe UI', 'Segoe UI Historic', 'Segoe UI Emoji', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['Segoe UI', 'Segoe UI Historic', 'Segoe UI Emoji', 'system-ui', '-apple-system', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(0, 245, 255, 0.5), 0 0 10px rgba(0, 245, 255, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(0, 245, 255, 0.8), 0 0 30px rgba(0, 245, 255, 0.5)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
