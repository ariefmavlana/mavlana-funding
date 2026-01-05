import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          teal: "#18bfc3",
          dark: "#041D57",
        },
        success: "#3ac798",
        warning: "#fa575d",
        info: "#369ff4",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        serif: ["Roboto Slab", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
