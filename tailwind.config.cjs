import colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: ["class", '[saknoto_mode="dark"]'],
  theme: {
    extend: {
      colors: {
        accent: {
          "50": "oklch(var(--accent-serial-50) / <alpha-value>)",
          "100": "oklch(var(--accent-serial-100) / <alpha-value>)",
          "200": "oklch(var(--accent-serial-200) / <alpha-value>)",
          "300": "oklch(var(--accent-serial-300) / <alpha-value>)",
          "400": "oklch(var(--accent-serial-400) / <alpha-value>)",
          "500": "oklch(var(--accent-serial-500) / <alpha-value>)",
          "600": "oklch(var(--accent-serial-600) / <alpha-value>)",
          "700": "oklch(var(--accent-serial-700) / <alpha-value>)",
          "800": "oklch(var(--accent-serial-800) / <alpha-value>)",
          "900": "oklch(var(--accent-serial-900) / <alpha-value>)",
          "950": "oklch(var(--accent-serial-950) / <alpha-value>)"
        },
        lum: {
          "50": "light-dark(oklch(var(--accent-serial-50) / <alpha-value>), oklch(var(--accent-serial-950) / <alpha-value>))",
          "100": "light-dark(oklch(var(--accent-serial-100) / <alpha-value>), oklch(var(--accent-serial-900) / <alpha-value>))",
          "200": "light-dark(oklch(var(--accent-serial-200) / <alpha-value>), oklch(var(--accent-serial-800) / <alpha-value>))",
          "300": "light-dark(oklch(var(--accent-serial-300) / <alpha-value>), oklch(var(--accent-serial-700) / <alpha-value>))",
          "400": "light-dark(oklch(var(--accent-serial-400) / <alpha-value>), oklch(var(--accent-serial-600) / <alpha-value>))",
          "500": "light-dark(oklch(var(--accent-serial-500) / <alpha-value>), oklch(var(--accent-serial-500) / <alpha-value>))",
          "600": "light-dark(oklch(var(--accent-serial-600) / <alpha-value>), oklch(var(--accent-serial-400) / <alpha-value>))",
          "700": "light-dark(oklch(var(--accent-serial-700) / <alpha-value>), oklch(var(--accent-serial-300) / <alpha-value>))",
          "800": "light-dark(oklch(var(--accent-serial-800) / <alpha-value>), oklch(var(--accent-serial-200) / <alpha-value>))",
          "900": "light-dark(oklch(var(--accent-serial-900) / <alpha-value>), oklch(var(--accent-serial-100) / <alpha-value>))",
          "950": "light-dark(oklch(var(--accent-serial-950) / <alpha-value>), oklch(var(--accent-serial-50) / <alpha-value>))"
        },
        danger: colors.red
      }
    }
  },
  plugins: [
    require("@kobalte/tailwindcss")
  ]
};
