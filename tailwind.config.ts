import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "price-card": "linear-gradient(180deg, #67648a 0%, #e58fc4 100%)",

        "custom-gradient":
          "linear-gradient(90deg, #F5B6D3 -4.63%, #E5B9DA 93.89%, rgba(248, 183, 208, 0.00) 93.9%)",
      },
      colors: {
        primary: "#4428F2",
        blackish: "#030303",
      },
      fontFamily: {
        mono: [
          "Fira Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontWeight: {
        "1000": "1000",
        "1100": "1100",
        "1200": "1200",
      },
    },
  },
  plugins: [],
};
export default config;
