/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./layouts/**/*.{html,js}", "./static/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes: {
         pulse: {
          "0%": { opacity: 0},
          "100%": {
            opacity: 1
          },
          "50%": {
            opacity: 0
          }
        }
      },
    },
  },
  plugins: [],
}
