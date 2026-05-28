import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#fffaf3",
        cream: "#f8efe3",
        linen: "#eee1d3",
        mist: "#f6f2eb",
        ink: "#1d1b18",
        slate: "#6d6860",
        soft: "#a89c91",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Playfair Display", "Georgia", "serif"],
      },
      boxShadow: {
        soft: "0 20px 70px rgba(69, 57, 44, 0.08)",
        premium: "0 28px 90px rgba(69, 57, 44, 0.12)",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeUp: "fadeUp 700ms ease both",
      },
    },
  },
  plugins: [],
};

export default config;
