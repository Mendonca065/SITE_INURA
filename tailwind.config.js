/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* NEUTROS */
        "gray-20": "#FFFFFF",
        "gray-50": "#FDF5E1",

        /* PRIMARY — AMARELO */
        "primary-100": "#FBEAC3",
        "primary-300": "#F8E0A5",
        "primary-500": "#F6D588",
      },

      backgroundImage: {
        "gradient-primary": "linear-gradient(90deg, #F8E0A5 0%, #F6D588 100%)",
      },

      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
    },

    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [],
};
