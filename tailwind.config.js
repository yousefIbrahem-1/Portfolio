import { theme as customTheme } from "./src/theme.js";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["selector", '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        primary: customTheme.colors.primary,
        secondary: customTheme.colors.secondary,
        bg: {
          DEFAULT: customTheme.colors.bg.light,
          dark: customTheme.colors.bg.dark,
        },
        text: {
          DEFAULT: customTheme.colors.text.light,
          dark: customTheme.colors.text.dark,
        },
        header: {
          DEFAULT: customTheme.colors.header.light,
          dark: customTheme.colors.header.dark,
        },
        card: {
          DEFAULT: customTheme.colors.card.light,
          dark: customTheme.colors.card.dark,
        },
        border: {
          DEFAULT: customTheme.colors.border.light,
          dark: customTheme.colors.border.dark,
        },
      },
    },
  },
  plugins: [],
};
