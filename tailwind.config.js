// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1E40AF",
        accent:  "#F43F5E",
      },
      fontFamily: {
        sans: ["var(--font-roboto)", "ui-sans-serif", "system-ui"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        light: {
          "primary": "#1E40AF",
          "secondary": "#F43F5E",
          "base-100": "#FFFFFF",
        },
      },
    ],
  },
};
