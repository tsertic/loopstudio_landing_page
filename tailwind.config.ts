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
        primary: "rgb(var(--color-primary) / <alpha-value>)",

        "primary-content": "rgb(var(--color-primary-content) / <alpha-value>)",

        "base-100": "rgb(var(--color-base-100) / <alpha-value>)",
        "base-content": "rgb(var(--color-base-content) / <alpha-value>)",
      },
      fontSize: {
        bodyM: ["15px", { fontWeight: "400", lineHeight: "25px" }],
        headingXL: ["72px", { fontWeight: "300", lineHeight: "70px" }],
        headingL: ["48px", { lineHeight: "100%", fontWeight: "300" }],
      },
      boxShadow: {
        button: "0 15px 15px -10px #FF9F8E",
      },
    },
  },
  plugins: [],
};
export default config;
