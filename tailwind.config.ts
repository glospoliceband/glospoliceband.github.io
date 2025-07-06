import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/features/**/*.{js,ts,jsx,tsx}",
    "./src/app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        botgc: "#2E45BD",
      },
    },
  },
  darkMode: "class",
  plugins: [require("@tailwindcss/typography")],
};
export default config;
