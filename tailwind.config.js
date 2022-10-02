/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#c004f9",

          secondary: "#f438a9",

          accent: "#cf92e8",

          neutral: "#1D2735",

          "base-100": "#E5E1EF",

          info: "#74B8DC",

          success: "#1DAF92",

          warning: "#996806",

          error: "#F8524F",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
