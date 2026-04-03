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
        base: '#FBF6F0',
        primary: '#2A2A2A',
        rose: {
          DEFAULT: '#E8CFCF',
          dark: '#C8728A',
          deep: '#A05070',
          mid: '#D4899F',
          soft: '#EEBECE',
          pale: '#FAF0F4',
          bg: '#FDF5F7',
          blush: '#F5DDE5',
          muted: '#D9B3BC',
        },
        olive: {
          DEFAULT: '#6F7D6B',
          light: '#8A9A85',
          dark: '#5A6A56',
        },
        nude: {
          DEFAULT: '#DCC5B2',
          light: '#E8D5C4',
          dark: '#C4A896',
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
        chocolate: {
          DEFAULT: '#5C3D2E',
          light: '#8B6F5E',
          dark: '#3E2723',
        },
        paper: '#FBF6F0',
        ink: {
          DEFAULT: '#2A2A2A',
          2: '#555555',
          3: '#888888',
          4: '#AAAAAA',
        },
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Playfair Display', 'Georgia', 'serif'],
        display: ['Bobby Jones', 'Playfair Display', 'Georgia', 'serif'],
        sans: ['Poppins', 'Inter', 'system-ui', 'sans-serif'],
        script: ['Beautifully Delicious', 'Georgia', 'serif'],
        hand: ['Schoolbell', 'cursive'],
        poppins: ['Poppins', 'system-ui', 'sans-serif'],
        cormorant: ['Cormorant Garamond', 'Georgia', 'serif'],
      },
      fontSize: {
        'body': ['1rem', { lineHeight: '1.75' }],
        'body-lg': ['1.125rem', { lineHeight: '1.75' }],
      },
      animation: {
        'fade-up': 'fadeUp 0.9s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 1.2s ease forwards',
        'slide-in': 'slideIn 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(40px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        scrollDot: {
          '0%, 100%': { opacity: '0.3', transform: 'translateY(0)' },
          '50%': { opacity: '1', transform: 'translateY(6px)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
