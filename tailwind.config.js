module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        // Extended radii for large curved cards/sections
        "4xl": "2.25rem", // 36px
        "5xl": "2.5rem", // 40px
        "6xl": "3.75rem", // 60px
        "7xl": "5rem", // 80px
        "8xl": "6.25rem", // 100px
        "9xl": "10rem", // 160px
        "10xl": "12.5rem", // 200px
      },
      boxShadow: {
        primarySoft: "0 8px 30px rgba(124,58,237,0.15)",
        primaryHover: "0 10px 25px rgba(124,58,237,0.25)",
      },
      maxHeight: {
        "screen-80": "80vh",
      },
      maxWidth: {
        "screen-80": "80vw",
      },
      colors: {
        purplePrimary: "#7c3aed",
        purpleDark: "#5b21b6",
        purpleLight: "#c4b5fd",
        pinkAccent: "#f7a8c4",
        yellowAccent: "#fcd34d", // fixed to yellow shade
        purpleTextDark: "#4c1d95",
        purpleTextMedium: "#6d28d9",
        purpleTextLight: "#a78bfa",
      },
      fontFamily: {
        sans: ['"Open Sans"', "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        xl: "1.25rem", // 20px
        "2xl": "1.5rem", // 24px
        "3xl": "1.875rem", // 30px
        "4xl": "2.25rem", // 36px
        "5xl": "3rem", // 48px
      },
    },
  },
  plugins: [],
};
