const plugin = require("tailwindcss/plugin");

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      backgroundImage: {
        close: "url('/src/assets/close.svg')",
      },
      maxWidth: {
        "cw-1440": "1440px",
      },
      transitionProperty: {
        all: "all",
      },
      transitionDuration: {
        300: "300ms",
      },
      transitionTimingFunction: {
        linear: "linear",
      },
      transitionDelay: {
        0: "0ms",
      },
      colors: {
        "text-grey": "#cecfd7",
        "insights-bg": "#030631",
        "benefits-bg": "#1a1d44",
        "tos-text-color": "#8d8e9f",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      fontWeight: {
        regular: 400,
        medium: 500,
        "semi-bold": 600,
      },
      screens: {
        "cs-500": "500px",
        "cs-1150": "1150px",
        "cs-1440": "1440px",
        "cs-1600": "1600px",
      },
      fontSize: {
        12: "12px",
        14: "14px",
        16: "16px",
        22: "22px",
      },
      lineHeight: {
        16: "16px",
        20: "20px",
        24: "24px",
        28: "28px",
      },
      letterSpacing: {
        0.1: "0.1px",
        0.25: "0.25px",
        0.4: "0.4px",
        0.5: "0.5px",
        1: "1px",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".custom-transition": {
          transition: "all 0.3s linear 0s",
        },
      };
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
