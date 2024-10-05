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
        background: "var(--background)",
        foreground: "var(--foreground)",
        dashboardPrimary: '#6EE7B7', 
        dashboardSecondary: '#A5F3FC',
        dashboardHighlight: '#E0E7FF',
      },
    },
  },
  plugins: [],
};
export default config;
