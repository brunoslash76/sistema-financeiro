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
        transparent: "transparent",
        primary: {
          200: "#DCE6E7",
          400: "#004D61",
          600: "#013644"
        },
        secondary: {
          200: "#E4EDE3",
          400: "#47A138",
          600: "#39862C"
        },
        tertiary: {
          400: "#FF5031",
          600: "#D92C0E"
        },
        gray: {
          200: "#F5F5F5",
          400: "#CBCBCB",
          600: "#8B8B8B"
        },
        black: "#000000",
        white: "#FFFFFF"
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
    },
  },
  plugins: [],
};
export default config;
