/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        /* Paleta Dark Mode Apple - INURA */
        "inura-black": "#000000",
        "inura-card": "#1d1d1f",
        "inura-gray": "#86868b",
        
        /* Mapeamento das Cores Primárias (Laranja INURA) */
        primary: {
          500: "#f97316", // Laranja padrão
          600: "#ea580c", // Hover
        },
      },
      backgroundImage: {
        "gradient-apple": "linear-gradient(180deg, rgba(255, 255, 255, 0.15) 0%, rgba(255, 255, 255, 0) 100%)",
        "gradient-orange": "linear-gradient(135deg, #f97316 0%, #ea580c 100%)",
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
      lg: "1240px",
    },
  },
  plugins: [],
};