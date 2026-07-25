import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        night: "#070707",
        steel: "#b8c0c8",
        signal: "#b00012",
        hazard: "#ef233c",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      boxShadow: {
        glow: "0 0 46px rgba(176, 0, 18, 0.34)",
        logo: "0 0 42px rgba(239, 35, 60, 0.24)",
      },
    },
  },
  plugins: [],
};

export default config;
