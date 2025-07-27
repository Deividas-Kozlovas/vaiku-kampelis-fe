module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        purplePrimary: '#7c3aed',
        purpleDark: '#5b21b6',
        purpleLight: '#c4b5fd',
        pinkAccent: '#f7a8c4',
        yellowAccent: '#fcd34d', // fixed to yellow shade
        purpleTextDark: '#4c1d95',
        purpleTextMedium: '#6d28d9',
        purpleTextLight: '#a78bfa',
      },
      fontFamily: {
        sans: ['"Open Sans"', 'ui-sans-serif', 'system-ui'], 
      },
      fontSize: {
        'xl': '1.25rem',    // 20px
        '2xl': '1.5rem',    // 24px
        '3xl': '1.875rem',  // 30px
        '4xl': '2.25rem',   // 36px
        '5xl': '3rem',      // 48px
      },
    },
  },
  plugins: [],
}
