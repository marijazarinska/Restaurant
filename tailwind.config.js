/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E83667",
        primaryDark: "#BB2C51",
        secondary: "#21D4B9",
        dark: "#303030",
        light: '#732c00',
        copper: {
          50: '#fdf7f3',
          100: '#fcefe7',
          200: '#fad6c0',
          300: '#f8bc96',
          400: '#f28b45',
          500: '#eb5a00',
          600: '#d35100',
          700: '#ae4400',
          800: '#8b3600',
          900: '#732c00',
        },
        biscuit: {
          50: '#f9f6f4',
          100: '#f2eae4',
          200: '#e9d1c6',
          300: '#dfb8a8',
          400: '#cb8870',
          500: '#b75738',
          600: '#a34e32',
          700: '#883f29',
          800: '#6f3221',
          900: '#5b291b',
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        cursive: ["Ephesis", "cursive"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
        },
      },
    },
  },
  plugins: [],
};