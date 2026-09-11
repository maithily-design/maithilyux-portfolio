import type { Config } from "tailwindcss";

/**
 * Design tokens sourced from src/data/design-tokens.json.
 * Loaded into Tailwind v4 via the `@config` directive in src/app/globals.css.
 *
 * Letter-spacing values in the source file are expressed as percentages of the
 * font size; they are converted to `em` units here (‑1.5% -> ‑0.015em).
 */
const config: Config = {
  theme: {
    extend: {
      colors: {
        blue: {
          0: "#E8F4FD",
          100: "#C5E3F9",
          200: "#9DCEF5",
          300: "#6DB5EF",
          400: "#3D9CE8",
          500: "#0C8CE9",
          600: "#0A70BA",
          700: "#07548C",
          800: "#05385D",
          900: "#021C2F",
          1000: "#010E17",
        },
        gray: {
          0: "#FFFFFF",
          100: "#F5F5F7",
          200: "#E5E5E8",
          300: "#D1D1D4",
          400: "#A8A8AE",
          500: "#85858B",
          600: "#62626A",
          700: "#4A4A52",
          800: "#2E2E35",
          900: "#1E1E24",
          1000: "#111115",
        },
        red: { 0: "#FFF0EE", 400: "#E86B5A", 500: "#E05A3E" },
        green: { 0: "#E6FAF5", 500: "#1EAD84" },
        purple: { 0: "#F3EDFC", 500: "#7B45D6" },
        "shadow-blue": { 50: "#F0F7FF" },

        // Semantic aliases
        ink: "#111115", // text.primary / headings
        "ink-secondary": "#4A4A52", // text.secondary
        "ink-tertiary": "#85858B", // text.secondary in the brief (Gray/500)
        brand: "#0C8CE9", // Blue/500 — primary accent (named `brand` to avoid the shadcn `accent` token)
        paper: "#FFFFFF",
        canvas: "#F5F5F7",
        hairline: "#E5E5E8",
      },
      fontFamily: {
        sans: [
          "var(--font-manrope)",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
        ],
        mono: [
          "var(--font-geist-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "monospace",
        ],
      },
      fontSize: {
        h1: ["48px", { lineHeight: "56px", letterSpacing: "-0.015em", fontWeight: "700" }],
        h2: ["36px", { lineHeight: "44px", letterSpacing: "-0.01em", fontWeight: "700" }],
        h3: ["28px", { lineHeight: "36px", letterSpacing: "-0.005em", fontWeight: "700" }],
        h4: ["20px", { lineHeight: "28px", letterSpacing: "-0.005em", fontWeight: "600" }],
        "body-lg": ["18px", { lineHeight: "28px", fontWeight: "400" }],
        body: ["16px", { lineHeight: "28px", fontWeight: "400" }],
        "body-sm": ["14px", { lineHeight: "22px", fontWeight: "400" }],
        caption: ["13px", { lineHeight: "18px", fontWeight: "400" }],
        button: ["14px", { lineHeight: "20px", fontWeight: "600" }],
        "mono-label": ["12px", { lineHeight: "16px", letterSpacing: "0.06em", fontWeight: "500" }],
        "mono-tag": ["11px", { lineHeight: "16px", letterSpacing: "0.04em", fontWeight: "500" }],
        "mono-caption": ["12px", { lineHeight: "18px", fontWeight: "400" }],
        "mono-stamp": ["10px", { lineHeight: "14px", letterSpacing: "0.08em", fontWeight: "500" }],
      },
      spacing: {
        // Named steps mirroring design-tokens.json spacing scale
        // [4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 120]
        xs: "4px",
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "32px",
        "4xl": "40px",
        "5xl": "48px",
        "6xl": "64px",
        "7xl": "80px",
        "8xl": "120px",
      },
      boxShadow: {
        small: "0px 2px 8px rgba(0, 0, 0, 0.04)",
        medium: "0px 4px 16px rgba(0, 0, 0, 0.06)",
        large: "0px 8px 32px rgba(0, 0, 0, 0.08)",
        "card-hover": "0px 8px 24px rgba(12, 140, 233, 0.10)",
      },
      borderRadius: {
        card: "16px",
      },
    },
  },
};

export default config;
