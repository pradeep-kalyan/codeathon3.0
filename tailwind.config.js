/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        squid: ["game-of-squids", "cursive"],
        money: ["CompactaBT", "cursive"],
        courier: ["courier prime", "monospace"],
        ds: ["Dancing Script", "cursive"],
        ls: ["Lavishly Yours", "cursive"],
        audio: ["Audiowide", "cursive"],
        electro: ["Electrolize", "cursive"],
        great: ["Great Vibes", "cursive"],
      },
      cursor: {
        pointer: "url('images/cp.png'), auto",
      },
    },
  },
  plugins: [],
});
