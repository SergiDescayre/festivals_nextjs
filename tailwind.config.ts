import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#fed7aa",
        secondary: "#e4e4e7",
        dark100: "#09090b",
        dark75: "#18181b",
        dark50: "#27272a",
      },
    },
  },
  plugins: [require("daisyui")],
};
export default config;
