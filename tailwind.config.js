/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5f7ff",
          100: "#ebf0ff",
          200: "#d6e0ff",
          300: "#adc1ff",
          400: "#8093ff",
          500: "#4c5dff",
          600: "#3a3fff",
          700: "#2828ff",
          800: "#1e1b9c",
          900: "#141270",
          950: "#0a0a47",
        },
        surface: {
          light: "#ffffff",
          dark: "#09090b",
        },
        content: {
          light: "#09090b",
          dark: "#ffffff",
        },
        accent: {
          light: "#2828ff",
          dark: "#adc1ff",
        },
        muted: {
          light: "#71717a",
          dark: "#a1a1aa",
        },
        border: {
          light: "#e4e4e7",
          dark: "#27272a",
        },
        hover: {
          light: "#f4f4f5",
          dark: "#18181b",
        },
      },
      fontFamily: {
        sans: ["Sora Variable", "sans-serif"],
      },
      transitionTimingFunction: {
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
