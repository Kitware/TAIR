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
          950: "#031529",
          900: "#062847",
          800: "#073c68"
        },
        brand: "#4cc43b",
        accent: "#0875d1"
      },
      fontFamily: {
        sans: ["Space Grotesk", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["Space Mono", "ui-monospace", "SFMono-Regular", "monospace"]
      },
      boxShadow: {
        panel: "0 24px 70px rgba(2, 18, 35, 0.18)",
        navigation: "0 8px 12px rgba(3, 21, 41, 0.15)"
      }
    }
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  daisyui: {
    themes: [
      {
        starter: {
          primary: "#4cc43b",
          "primary-content": "#ffffff",
          secondary: "#0875d1",
          "secondary-content": "#ffffff",
          accent: "#30a8e8",
          neutral: "#031529",
          "neutral-content": "#ffffff",
          "base-100": "#ffffff",
          "base-200": "#f4f6f8",
          "base-300": "#dce2e8",
          "base-content": "#17202a",
          info: "#0875d1",
          success: "#4cc43b",
          warning: "#f3b33d",
          error: "#dc4c64"
        }
      }
    ]
  }
};

