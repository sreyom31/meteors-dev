/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'login-srm': "url('./images/Srmseal.png')",
        'event-img': "url('./images/event.jpeg')",
        'main': "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)) url(./images/background-main.jpg)"
      }
    },
  },
  plugins: [],
}
