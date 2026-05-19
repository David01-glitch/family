/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cream: '#FBF5EC',
        cream2: '#F4E9D6',
        brown: {
          DEFAULT: '#6B3F23',
          dark: '#4A2A14',
          light: '#A57C56'
        },
        vintage: '#A63A2A',
        gold: '#C99A4B'
      },
      fontFamily: {
        heading: ['Fraunces', 'serif'],
        body: ['Inter', 'sans-serif']
      },
      boxShadow: {
        soft: '0 6px 24px -8px rgba(74,42,20,0.18)'
      }
    }
  },
  plugins: []
}
