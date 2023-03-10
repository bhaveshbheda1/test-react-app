module.exports = {
  mode: "jit",
  content: [
    "./src/**/**/*.{js,ts,jsx,tsx,html,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,html,mdx}",
  ],
  darkMode: "class",
  theme: {
    screens: { lg: "1120px", xl: "1281px", "2xl": "1441px", "3xl": "1729px" },
    extend: {
      colors: {
        gray_600: "#757575",
        black_900_b2: "#000000b2",
        gray_901: "#191919",
        gray_900: "#292929",
        green_801: "#1a8917",
        green_800: "#278916",
        gray_50: "#fafafa",
        gray_100: "#f2f2f2",
        black_900_1e: "#0000001e",
        black_900: "#000000",
        bluegray_400: "#868686",
        white_A700: "#ffffff",
        black_900_26: "#00000026",
      },
      borderRadius: {
        radius4: "4px",
        radius5: "5px",
        radius21: "21px",
        radius31: "31px",
        radius41: "41px",
        radius42: "42px",
        radius50: "50%",
      },
      fontFamily: {
        sfprodisplay: "SF Pro Display",
        charter: "Charter",
        roboto: "Roboto",
      },
      opacity: {
        op3: 0.3,
        op5: 0.5,
        op7: 0.7,
        op8: 0.08,
        op81: 0.8,
        op12: 0.12,
      },
      boxShadow: { bs: "0px 0px  10px 2px #00000026" },
      letterSpacing: { ls1: "1px" },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
