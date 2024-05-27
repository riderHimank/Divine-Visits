/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        screens: {
          'mdd': '850px',   // Custom breakpoint
        },
        boxShadow: {
          'glow': '0 0 10px rgba(255, 255, 255, 0.5)', // You can customize this as needed
        },
        textShadow: {
          'default': '2px 2px 4px rgba(0, 0, 0, 0.1)',
          'md': '4px 4px 6px rgba(0, 0, 0, 0.2)',
          'lg': '6px 6px 8px rgba(0, 0, 0, 0.3)',
          'xl': '8px 8px 10px rgba(0, 0, 0, 0.4)',
          '2xl': '10px 10px 12px rgba(0, 0, 0, 0.5)',
          'none': 'none',
        }
      },
      fontFamily: {
        'Inter': ['Inter'],
        'Jack': ['Jacquard-12'],
        'Dosis': ['Dosis'],
        'EB': ['EB-Garamond'],
        'garamond': ['"EB Garamond"', 'serif'],
        'outfit': ['"Outfit"', 'sans-serif'],
      },
    },
    plugins: [
      function({ addUtilities }) {
        const newUtilities = {
          '.text-glow': {
            textShadow: '0 0 10px rgba(255, 255, 255, 0.8)',
          },
          '.text-shadow': {
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.1)',
          },
          '.text-shadow-md': {
            textShadow: '4px 4px 6px rgba(0, 0, 0, 0.2)',
          },
          '.text-shadow-lg': {
            textShadow: '6px 6px 8px rgba(0, 0, 0, 0.3)',
          },
          '.text-shadow-xl': {
            textShadow: '8px 8px 10px rgba(0, 0, 0, 0.4)',
          },
          '.text-shadow-2xl': {
            textShadow: '10px 10px 12px rgba(0, 0, 0, 0.5)',
          },
          '.text-shadow-none': {
            textShadow: 'none',
          },
        }
        addUtilities(newUtilities, ['responsive', 'hover'])
      }
    ],
  }