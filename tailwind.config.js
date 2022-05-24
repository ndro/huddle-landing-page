module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: '3rem', // sm
          md: '1rem'
        }
      },
      colors: {
        'soft-magenta': 'hsl(300, 69%, 71%)'
      }
    },
  },
  plugins: [],
}
