import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        bodyM: ["15px", { fontWeight: "400", lineHeight: "25px" }],
        headingXL: ["72px", { fontWeight: "300", lineHeight: "70px" }],
        headingL: ["48px", { lineHeight: "100%", fontWeight: "300" }],
      },
    },
  },
  plugins: [],
};
export default config;
