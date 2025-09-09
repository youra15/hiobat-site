module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#ECEFF3",       // site + France map
        line: "#CBD5E1",
        france: "#ECEFF3",
        idf: "#374151",
        accent: "#2F80ED",
        text: "#0F172A"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        pill: "999px"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(2,6,23,.08)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      animation: {
        fadeUp: "fadeUp .45s ease both"
      }
    }
  },
  plugins: []
};
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#ECEFF3",       // site + France map
        line: "#CBD5E1",
        france: "#ECEFF3",
        idf: "#374151",
        accent: "#2F80ED",
        text: "#0F172A"
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.25rem",
        pill: "999px"
      },
      boxShadow: {
        soft: "0 8px 30px rgba(2,6,23,.08)"
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" }
        }
      },
      animation: {
        fadeUp: "fadeUp .45s ease both"
      }
    }
  },
  plugins: []
};
