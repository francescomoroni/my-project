/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
    theme: {
      extend: {
        keyframes: {
          blob: {
            "0%": { transform: "translate(0px, 0px) scale(1)" },
            "33%": { transform: "translate(20px, -30px) scale(1.1)" },
            "66%": { transform: "translate(-20px, 10px) scale(0.9)" },
            "100%": { transform: "translate(0px, 0px) scale(1)" },
          },
          blob2: {
            "0%": { transform: "translate(0px, 0px) scale(1)" },
            "33%": { transform: "translate(-20px, -30px) scale(1.1)" },
            "66%": { transform: "translate(20px, -10px) scale(0.9)" },
            "100%": { transform: "translate(0px, 0px) scale(1)" },
          },
        },
        animation: {
          blob: "blob 5s infinite",
          blob2: "blob2 7s infinite",
        },
        colors: {
          rosino: "#C4C4C4",
        },
      },
      fontFamily: {
        Nunito: ["Nunito Sans", "sans-serif"],
        Caslon: ["Libre Caslon Text", "serif"],
        Lusitana: ["Lusitana", "serif"],
        Bebas: ["Bebas Neue", "sans-serif"],
        Dancing: ["Dancing Script", "cursive"],
        Pacifico: ["Pacifico", "cursive"],
        sans: ['Helvetica', 'Arial', 'sans-serif'],
      },
    },
    plugins: [],
  }