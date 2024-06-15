/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: ["class", '[data-kb-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        "main": "var(--bg)",
        "main-card": "var(--bg-card)",
        "main-hover": "var(--bg-hover)",
        "main-border": "var(--primary-border)",

        "one": "var(--bg-one)",
        "two": "var(--bg-two)",
        "three": "var(--bg-three)",
        "four": "var(--bg-four)",
        "five": "var(--bg-five)",
      }
    }
  },
  plugins: [
    require("@kobalte/tailwindcss")
  ]
};
