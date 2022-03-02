module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pupylinux': ['"Poppins"', 'sans-serif'],
        'sourcesans': ['"Source Sans Pro"', 'sans-serif'],
        'patuh': ['"Patua One"','cursive'],
        'inter' : ['"Inter"' , 'sans-serif'],
        'ibmplex': ['"IBM Plex Mono"', 'monospace']
      }
    },
  },
  plugins: [],
}
