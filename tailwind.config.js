module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        sm: "320px",
  
        md: "567px",
  
        lg: "768px",
  
        xlg:"991px",
  
        xxlg: "1200px",
      },
      colors: {
        "eff7f0": "#EFF7F0",
        "87ac9b": "#87AC9B",
        "648b7a": "#648B7A",
        "metal": "#163828",
        "unnamed-color-ea66e0": "#EA66E0",
        "f46e56": " #F46E56",
        "4160e0": "#4160E0",
        "a9d046": " #A9D046",
        "light-green": "#00A85A",
      },
      boxShadow: {
        'wakanda': '0px 50px 60px #AACE5099;',
        'button': '0px 5px 20px #00A85A;',
      }
    },
  },
  plugins: [],
  darkMode: "class",
};
