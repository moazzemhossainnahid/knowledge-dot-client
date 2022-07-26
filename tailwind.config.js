/** @type {import('tailwindcss').Config} */
<<<<<<< HEAD

 
module.exports = ({
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
=======
module.exports = {
  content: ["./src/**/*.{html,js}"],
>>>>>>> main
  theme: {
    screens: {
      sm: "320px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
<<<<<<< HEAD
  plugins: [require("daisyui")],
});
=======
  plugins: [],
};
>>>>>>> main
