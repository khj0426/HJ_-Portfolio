import { defineConfig, defineGlobalStyles } from "@pandacss/dev";

const globalCSS = defineGlobalStyles({
  "html,body": {
    boxSizing: "border-box",
    minHeight: "100vh",
    backgroundColor: "rgb(15,24,42);",
    paddingLeft: "2.5",
    paddingRight: "2.5",
    color: "gray.400",
  },
});

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./pages/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],

  // Useful for theme customization
  theme: {
    extend: {
      breakpoints: {
        sm: "400px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
  globalCss: globalCSS,
});
