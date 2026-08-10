import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0A0E1A",
        surface: "#0F1526",
        "surface-2": "#151D33",
        line: "#232D48",
        "line-soft": "#1A2338",
        ink: "#EAEEF7",
        "ink-dim": "#8B96B3",
        "ink-faint": "#5B6684",
        accent: "#3E7BFA",
        "accent-dim": "#1B3A73",
        "accent-soft": "#132A56",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1.4", letterSpacing: "0.02em" }],
        sm: ["0.875rem", { lineHeight: "1.55" }],
        base: ["1rem", { lineHeight: "1.65" }],
        lg: ["1.125rem", { lineHeight: "1.6" }],
        xl: ["1.375rem", { lineHeight: "1.5" }],
        "2xl": ["1.75rem", { lineHeight: "1.3", letterSpacing: "-0.01em" }],
        "3xl": ["2.25rem", { lineHeight: "1.2", letterSpacing: "-0.015em" }],
        "4xl": ["3rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
        "5xl": ["3.75rem", { lineHeight: "1.05", letterSpacing: "-0.025em" }],
        "6xl": ["4.5rem", { lineHeight: "1.02", letterSpacing: "-0.03em" }],
      },
      maxWidth: {
        content: "72rem",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(to bottom, rgba(62,123,250,0) 0%, rgba(10,14,26,0) 60%, rgba(10,14,26,1) 100%)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: "0.2" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease forwards",
        blink: "blink 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
