/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{html,js}',
  ],
  theme: {
    screens: {
      small: '480px',
      medium: '768px',
      large: '976px',
      xlarge: '1440px',
    },
    colors: {
      'dark-blue': '#000F1F',
      'gold': '#F4F849',
      'pink': '#ff49db',
      'bg-blue': '#001A36',
      'btn-green': '#123600',
      'green': '#13ce66',
      'black': '#191919',
      'full-black': '#000',
      'white': '#fff',
    },
    fontFamily: {
      sans: ['Quantico', 'sans-serif'],
      monospace: ['Consolas', 'monospace'],
    },
    extend: {
      borderRadius: {
        'div': '1rem',
        'container': '2rem',
      }
    },
  },
  plugins: [],
}

