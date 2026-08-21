/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Base surfaces — deep graphite console, not pure black
        canvas: "#0E1116",
        panel: "#151922",
        "panel-raised": "#1B2029",
        line: "#262B36",
        "line-soft": "#1E232D",

        // Text
        ink: "#EDEFF3",
        "ink-dim": "#C4C9D4",
        muted: "#8A93A6",
        faint: "#5B6373",

        // Signal accents — amber (primary/action) + teal (data/live)
        signal: "#FFB020",
        "signal-dim": "#8A611C",
        "signal-soft": "#3A2E14",
        pulse: "#37D0C4",
        "pulse-soft": "#12302D",
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
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
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
