/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: ["class"],
  theme: {
    extend: {
      colors: {
        // Text colors
        text: {
          950: "#0c0c0d",
          900: "#18181b",
          800: "#313135",
          700: "#494950",
          600: "#62626a",
          500: "#7a7a85",
          400: "#95959d",
          300: "#afafb6",
          200: "#cacace",
          100: "#e4e4e7",
          50: "#f2f2f3",
        },
        background: {
          950: "#0f1208",
          900: "#1e240f",
          800: "#3b471f",
          700: "#596b2e",
          600: "#768f3d",
          500: "#94b34d",
          400: "#a9c270",
          300: "#bfd194",
          200: "#d4e0b8",
          100: "#eaf0db",
          50: "#f4f7ed",
        },
        primary: {
          950: "#011519",
          900: "#022a31",
          800: "#035563",
          700: "#057f94",
          600: "#06a9c6",
          500: "#08d3f7",
          400: "#39dcf9",
          300: "#6be5fa",
          200: "#9ceefc",
          100: "#cef6fd",
          50: "#e6fbfe",
        },
        secondary: {
          950: "#191301",
          900: "#312502",
          800: "#624b04",
          700: "#947005",
          600: "#c59507",
          500: "#f6bb09",
          400: "#f8c83a",
          300: "#fad66b",
          200: "#fbe49d",
          100: "#fdf1ce",
          50: "#fef8e6",
        },
        accent: {
          950: "#17020d",
          900: "#2e051a",
          800: "#5c0a33",
          700: "#8a0f4d",
          600: "#b91366",
          500: "#e71880",
          400: "#ec4699",
          300: "#f075b3",
          200: "#f5a3cc",
          100: "#fad1e6",
          50: "#fde8f2",
        },

        // System colors
        surface: {
          light: "#f4f7ee", // Using background-50
          dark: "#0e1108", // Using background-950
        },
        content: {
          light: "#18181b", // Using text-900
          dark: "#f2f2f3", // Using text-50
        },
        muted: {
          light: "#7a7a85", // Using text-500
          dark: "#95959d", // Using text-400
        },
        hover: {
          light: "#e9efdc", // Using background-100
          dark: "#1d2310", // Using background-900
        },
      },
      fontFamily: {
        sans: ["Sora Variable", "sans-serif"],
      },
      // Rest of the configuration remains the same
    },
  },
  plugins: ["tailwindcss-animate"],
};
