/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#EBF5FF",
          100: "#D6EBFF",
          200: "#ADD6FF",
          300: "#70B8FF",
          400: "#3B9AFF",
          500: "#1A7AE6",
          600: "#0D5CBF",
          700: "#0A4A99",
          800: "#073873",
          900: "#042650",
        },
        accent: {
          gold: "#C8A951",
          light: "#F0E6C8",
        },
        olive: {
          50: "#F5F7F0",
          100: "#E8EDDE",
          200: "#D1DBBD",
          300: "#B3C291",
          400: "#8FA564",
          500: "#6B8040",
          600: "#556833",
          700: "#4A5A2F",
          800: "#3D4A28",
          900: "#2E3820",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        heading: ["Cormorant Garamond", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
