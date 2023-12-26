/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    `./src/pages/**/*.{js,jsx,ts,tsx}`,
    `./src/components/**/*.{js,jsx,ts,tsx}`,
    `./src/feature/**/*.{js,jsx,ts,tsx}`,
    `./src/templates/**/*.{js,jsx,ts,tsx}`,
  ],
  theme: {
    extend: {
      colors: {
        "yellow-300": "#FDFBF7",
        "yellow-400": "#FAF3E3",
        "yellow-500": "#FDE8A2",
        "orange-400": "#F16529",
        "purple-400": "#55328C",
      },
      boxShadow: {
        light: "0px 4px 4px rgba(0,0,0,0.25)",
        heavy: "drop-shadow(0px 80px 60px rgba(0,0,0,0.15))",
      },
    },
  },
  plugins: [],
};
