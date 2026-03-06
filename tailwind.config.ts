import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        rose: {
          DEFAULT: '#C8728A',
          deep: '#A05070',
          mid: '#D4899F',
          soft: '#EEBECE',
          pale: '#FAF0F4',
          bg: '#FDF5F7',
        },
        gold: {
          DEFAULT: '#B8966A',
          warm: '#C8A87A',
          light: '#D4B896',
          pale: '#F5EDE0',
        },
        cream: {
          DEFAULT: '#FAF0E8',
          2: '#F2E8DC',
        },
        paper: '#FBF6F0',
        ink: {
          DEFAULT: '#2A1E28',
          2: '#5C3E50',
          3: '#9A7080',
          4: '#C4A0B0',
        },
      },
      fontFamily: {
        cinzel: ['var(--font-cinzel)', 'serif'],
        sacramento: ['var(--font-sacramento)', 'cursive'],
        nunito: ['var(--font-nunito)', 'sans-serif'],
        josefin: ['var(--font-josefin)', 'sans-serif'],
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease forwards',
        'fade-in': 'fadeIn 1s ease forwards',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
