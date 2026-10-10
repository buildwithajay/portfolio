/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        midnight: "#101828",
        paper: "#F7F5F0",
        cobalt: "#3157D5",
        persimmon: "#F16B4A",
        mist: "#DCE5F2",
        leaf: "#237A57",
      },
      borderRadius: {
        DEFAULT: "0.375rem",
        sm: "0.25rem",
        lg: "0.625rem",
        xl: "1rem",
      },
      spacing: {
        gutter: "24px",
        "section-gap": "112px",
        "section-gap-sm": "64px",
        "container-max": "1180px",
      },
      maxWidth: {
        "container-max": "1180px",
      },
      fontFamily: {
        display: ["Bricolage Grotesque", "Arial Narrow", "sans-serif"],
        body: ["Manrope", "sans-serif"],
      },
      fontSize: {
        "display-lg": ["4rem", { lineHeight: "1.05", letterSpacing: "-0.03em", fontWeight: "600" }],
        "display-md": ["2.75rem", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "600" }],
        "display-sm": ["2rem", { lineHeight: "1.15", letterSpacing: "-0.015em", fontWeight: "600" }],
      },
      keyframes: {
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.35" },
        },
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "grid-pan": {
          "0%": { backgroundPosition: "0 0" },
          "100%": { backgroundPosition: "48px 48px" },
        },
      },
      animation: {
        blink: "blink 2s ease-in-out infinite",
        rise: "rise 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
        "grid-pan": "grid-pan 6s linear infinite",
      },
    },
  },
  plugins: [],
}
