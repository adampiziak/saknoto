/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-kb-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        "main": "var(--bg)",
        "main-hover": "var(--bg-hover)"

      }
    }
  },
  plugins: [
    require("@kobalte/tailwindcss")
  ]
};
