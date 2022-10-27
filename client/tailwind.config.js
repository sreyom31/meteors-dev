/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-srm': "url('./images/Srmseal.png')",
        'event-img': "url('./images/event.jpeg')"
      }
    },
  },
  plugins: [],
}
