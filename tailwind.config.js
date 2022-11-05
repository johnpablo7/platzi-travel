/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      },
      textColor: {
        primary: "#CC2D4A",
        secondary: "#8FA206",
        tertiary: "#61AEC9",
      },
      fontFamily: {
        Montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        "san-francisco": "url('../img/san-francisco.jpg')",
        "san-francisco-desktop": "url('../img/san-francisco-desktop.jpg')",
        yosemite: "url('../img/yosemite.jpg')",
        la: "url('../img/la.jpg')",
        seattle: "url('../img/seattle.jpg')",
        "new-york": "url('../img/new-york.jpg')",
        norway: "url('../img/norway.jpg')",
        sydney: "url('../img/sydney.jpg')",
        miami: "url('../img/miami.jpg')",
        switzerland: "url('../img/switzerland.jpg')",
        bali: "url('../img/bali.jpg')",
        norway: "url('../img/norway.jpg')",
        chicago: "url('../img/chicago.jpg')",
        europe: "url('../img/europe.jpg')",
        iceland: "url('../img/iceland.jpg')",
      },
    },
  },
  variants: {
    width: ["responsive", "hover", "focus"],
    extend: {},
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
