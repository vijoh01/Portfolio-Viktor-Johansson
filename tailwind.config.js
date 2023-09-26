/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      'mini': '350px',
      'sm': '576px',
      'md': '900px',
      'lg': '1281px',
    },
    fontFamily: {
      display: ['Pally', 'Comic Sans MS', 'sans-serif'],
      body: ['Pally', 'Comic Sans MS', 'sans-serif'],
    },
    colors: {
      primary: {
        50: '#c09f98',
        100: '#22223B',
        200: '#4A4E69',
        300: '#D9D9D9',
        400: '#fb7185',
        500: '#f43f5e',
        600: '#e11d48',
        700: '#be123c',
        800: '#111d1c',
        900: '#b2b2b2',
      },
      secondary: {
        50: '#222222',
        100: '#b6acb4',
        200: '#C9ADA7',
        300: '#F2E9E4',
        400: '#0d100b',
        500: '#ffffff',
        600: '#7c3aed',
        700: '#6d28d9',
        800: '#5b21b6',
        900: '#4c1d95',
      },
    },
    extend: {
    backgroundImage: {
      'vector' : 'url("../imgs/vector.jpg")'
    },
    dropShadow: {
      '3xl': '0 0 70px #e3d4d1',
    },
    animation: {
      fadein_left: 'fadein_left 1s ease-in-out',
      fadeout_left: 'fadein_left 1s ease-in-out',
      fadein_right: 'fadein_right 1s ease-in-out',
      fadein_bottom: 'fadein_bottom 1s ease-in-out',
      color: 'color 1s infinite alternate',
      shadow: 'shadow 5s infinite alternate',
      fade: 'fade 2s ease-in-out alternate',
      scale: 'scale 1.5s alternate infinite ease',
      bounce_arrow: 'bounce_arrow 1.5s alternate infinite'
    },
    boxShadow: {
      'image': '0 0 8px 8px white inset',
    },
    keyframes: {
        fadein_left: {
          '0%': { transform: 'translateX(-100rem)' },
          '80%': { transform: 'translateX(0rem)' },
          '85%': { transform: 'translateX(-1rem)'},
          '100%': { transform: 'translateX(0rem)'},
        },
        scale: {
          
          '100%': { transform: 'scale(1.1)' }
        },
        bounce_arrow: {
          '0%': { transform: 'translateY(-1px)' },
          '100%': { transform: 'translateY(1px)' }
        },
        shadow: {
          '0%': { filter: 'drop-shadow(0 0 70px #0e0a09)' },
          '25%': {  filter: 'drop-shadow(0 0 70px #0e0a09)' },
          '50%': { filter: 'drop-shadow(0 0 70px #0e0a09)' },
          '75%': { filter: 'drop-shadow(0 0 70px #0e0a09)' },
          '100%': { filter: 'drop-shadow(0 0 70px #0e0a09)' },
        },
        fade: {
          '0%': { opacity: 1 },
          '50%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        color: {
          '0%': { filter: 'hue-rotate(0deg)' },
          '25%': {  filter: 'hue-rotate(22.5deg)' },
          '50%': { filter: 'hue-rotate(45deg)' },
          '75%': { filter: 'hue-rotate(67,5deg)' },
          '100%': { filter: 'hue-rotate(90deg)' },
        },
        fadeout_left: {
          '0%': { transform: 'translateX(0rem)' },
          '80%': { transform: 'translateX(-1rem)' },
          '85%': { transform: 'translateX(0rem)'},
          '100%': { transform: 'translateX(-200rem)'},
        },
        fadein_right: {
          '0%': { transform: 'translateX(500rem)' },
          '80%': { transform: 'translateX(0rem)' },
          '85%': { transform: 'translateX(1rem)'},
          '100%': { transform: 'translateX(0rem)'},
        },
        fadein_bottom: {
          '0%': { transform: 'translateY(500rem)' },
          '80%': { transform: 'translateY(0rem)' },
          '85%': { transform: 'translateY(1rem)'},
          '100%': { transform: 'translateY(0rem)'},
        }
      }
    }
  },
  darkMode: ['class'],
  plugins: [],
}
