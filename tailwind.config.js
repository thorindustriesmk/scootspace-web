/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      sofia: ["Sofia Pro", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "hero-pattern": 'url("/src/assets/background/heroBackground.svg")',
        heroBg: 'url("/src/assets/background/scootspacebg.png")',
        pricingPlanBg: 'url("/src/assets/background/pricingPlanBg.svg")',
      },
      colors: {
        primary: "#3AAFA9",
        borderColor: "#00A79D",
        howToParkBg: "#DEF2F1",
      },
    },
  },
  plugins: [],
};
