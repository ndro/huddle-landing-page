module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: '1rem'
      },
      colors: {
        'soft-magenta': 'hsl(300, 69%, 71%)'
      }
    },
  },
  plugins: [],
}
