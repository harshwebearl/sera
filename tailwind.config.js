/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1BA3D6",        // Sera Blue
        primaryDark: "#0B5F7C",
        primaryLight: "#4FC3F7",

        dark: "#0B0B0B",
        darkGray: "#1A1A1A",

        textGray: "#9CA3AF",
      },
      fontFamily: {
        heading: ["Poppins", "sans-serif"],
        body: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
