import type { Config } from "tailwindcss";
const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy:  { DEFAULT: "#050F1A", 800: "#0A1A2E", 700: "#0D2040", 600: "#112848" },
        teal:  { DEFAULT: "#00C9B1", 600: "#00A896", 400: "#33D4C0", 200: "#99EAE2" },
        gold:  { DEFAULT: "#D4AF37", 600: "#B8943F", 400: "#E0C060", 200: "#F0DC98" },
        ink:   { DEFAULT: "#0D1F30" },
        mist:  { DEFAULT: "#8AABB8" },
        cream: { DEFAULT: "#F0EAD6" },
        amber: { DEFAULT: "#C8922A" },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "Times New Roman", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
