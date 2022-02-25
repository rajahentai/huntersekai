const plugin = require("tailwindcss/plugin");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "3rem",
      },
    },
    fontFamily: {
      serif: ["Lato", "Arial", "sans-serif"],
      sans: ["Mulish", "Arial", "sans-serif"],
    },
    extend: {
      colors: {
        yami: {
          200: "#D2D4DE",
          300: "#6B7089",
          600: "#33374C",
          900: "#1E2132",
        },
        murasakino: "#A093C7",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar"),
    plugin(({ addUtilities }) => {
      const utilities = {
        ".bg-search": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg opacity='0.1'%3E%3Cpath d='M6.41667 11.0833C8.994 11.0833 11.0833 8.994 11.0833 6.41667C11.0833 3.83934 8.994 1.75 6.41667 1.75C3.83934 1.75 1.75 3.83934 1.75 6.41667C1.75 8.994 3.83934 11.0833 6.41667 11.0833Z' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3Cpath d='M12.25 12.25L9.71251 9.71246' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/g%3E%3C/svg%3E%0A")`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "12px 12px",
        },
      };
      addUtilities(utilities);
    }),
  ],
};