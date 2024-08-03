/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        pendulum: {
          '0%, 50%, 100%': { transform: 'rotate(0deg)' },
          '25%': { transform: 'rotate(25deg)' },
          '75%': { transform: 'rotate(-25deg)' },
        },
      },
      animation: {
        pendulum: 'pendulum 0.6s infinite',
      },
      
    },
  },
  plugins: [],
};