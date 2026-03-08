import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#111111",
        "bg-alt": "#191919",
        card: "#1E1E1E",
        dark: "#111111",
        light: "#FFFFFF",
        muted: "#888888",
        warm: "#2A2A2A",
      },
    },
  },
  plugins: [],
};
export default config;
