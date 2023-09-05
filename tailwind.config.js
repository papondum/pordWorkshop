/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1201px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins"],
      },
      borderRadius: {
        "4xl": "2rem",
      },
      colors: {
        base: "#EBEAF8",
        h2: "#8785AA",
        chat: "#3CABFC",
        arrow: "#12294B",
        "b-color": "#1D5279",
        "b-client": "#5EBBFF",
        border: "#3D97D9",
      },
      spacing: {
        391: "391px",
      },
      padding: {
        "main-left": `${100 / 12.01}%`,
        "main-right": `${178.59 / 12.01}%`,
      },
      fontSize: {
        13: ["13px", "24px"],
        h1: ["40px", "52px"],
        h2: ["18px", "22px"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
