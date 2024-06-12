/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        aptos: ["Aptos", "sans-serif"],
        "aptos-bold": ["Aptos-bold", "sans-serif"],
        "aptos-black": ["Aptos-black", "sans-serif"],
        "aptos-light": ["Aptos-light", "sans-serif"],
        "aptos-semibold": ["Aptos-semibold", "sans-serif"],
        sofia: ["Sofia Pro", "sans-serif"],
      },
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
