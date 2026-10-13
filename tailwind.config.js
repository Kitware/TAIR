/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,md}",
    "./_layouts/**/*.{html,md}",
    "./_includes/**/*.{html,md}",
    "./assets/js/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#101828",
          900: "#1d2939",
          800: "#344054"
        },
        brand: "#6554c0",
        accent: "#2e90fa"
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"]
      },
      boxShadow: {
        panel: "0 24px 70px rgba(16, 24, 40, 0.18)",
        navigation: "0 8px 12px rgba(16, 24, 40, 0.15)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        starter: {
          primary: "#6554c0",
          "primary-content": "#ffffff",
          secondary: "#2e90fa",
          "secondary-content": "#ffffff",
          accent: "#12b76a",
          neutral: "#101828",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f2f4f7",
          "base-300": "#d0d5dd",
          "base-content": "#1d2939",
          info: "#2e90fa",
          success: "#12b76a",
          warning: "#f79009",
          error: "#d92d20"
        }
      }
    ]
  }
};

