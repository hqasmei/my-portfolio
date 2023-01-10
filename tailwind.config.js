/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: { sm: "480px", md: "768px", lg: "976px", xl: "1440pd" },
  },
  plugins: [],
}
