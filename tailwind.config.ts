import type { Config } from "tailwindcss"
import typography from "@tailwindcss/typography"

const config: Config = {
  content: ["./app/**/*.{ts,tsx,mdx}", "./components/**/*.{ts,tsx,mdx}", "./content/**/*.{mdx,md}"],
  darkMode: ["class", '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-display)", "Space Grotesk", "system-ui", "sans-serif"]
      },
      colors: {
        lab: {
          bg: "rgb(var(--color-bg) / <alpha-value>)",
          panel: "rgb(var(--color-panel) / <alpha-value>)",
          ink: "rgb(var(--color-ink) / <alpha-value>)",
          muted: "rgb(var(--color-muted) / <alpha-value>)",
          faint: "rgb(var(--color-faint) / <alpha-value>)",
          line: "rgb(var(--color-line) / <alpha-value>)",
          accent: "rgb(var(--color-accent) / <alpha-value>)",
          signal: "rgb(var(--color-signal) / <alpha-value>)",
          warn: "rgb(var(--color-warn) / <alpha-value>)",
          biz: "rgb(var(--color-biz) / <alpha-value>)"
        }
      },
      boxShadow: {
        lab: "0 1px 0 rgb(var(--color-line)), 0 18px 44px rgb(0 0 0 / 0.06)"
      },
      lineClamp: {
        2: "2",
        3: "3"
      }
    }
  },
  plugins: [typography]
}

export default config
