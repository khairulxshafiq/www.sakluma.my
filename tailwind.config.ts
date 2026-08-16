import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ember: {
          50: "#fdf8ef",
          100: "#f9edd3",
          200: "#f2d8a5",
          300: "#eabd6d",
          400: "#f5a623",
          500: "#d97f0e",
          600: "#b75f0a",
          700: "#92430c",
          800: "#783510",
          900: "#642d10",
        },
        smoke: {
          50: "#f7f5f1",
          100: "#ece7de",
          200: "#d9d0c0",
          300: "#bfb19a",
          400: "#a58f74",
          500: "#93795c",
          600: "#7f644d",
          700: "#684f41",
          800: "#57433a",
          900: "#4a3a33",
          950: "#281f1b",
        },
      },
      fontFamily: {
        display: ["Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
