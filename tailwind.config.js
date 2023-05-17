/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "green-main": "#326e51",
      },
      backgroundColor: {
        "green-main": "#326e51",
      },
      fontFamily: {
        montserrat: ["Montserrat Alternates", "sans-serif"],
        iCielBCRostrum: ["iCielBCRostrum", "sans-serif"],
        iCielBCCubano: ["iCielBCCubano", "sans-serif"],
      },
    },
  },
  plugins: [],
};
