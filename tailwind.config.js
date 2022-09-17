// tailwind.config.js
module.exports = {
  mode: "jit",
  purge: [
    "./assets/**/*.{css}",
    "./components/*.{vue,js}",
    "./components/**/*.{vue,js}",
    "./pages/*.vue",
    "./layouts/*.vue",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xs: "576px",
      sm: "768px",
      md: "992px",
      lg: "1200px",
      xl: "1400px",
      xxl: "1700px",
    },
    container: {
      center: true,
      padding: "20px",
      screens: {
        xs: "540px",
        sm: "720px",
        md: "960px",
        lg: "1140px",
        xl: "1320px",
        xxl: "1600px",
      },
    },
    fontFamily: {
      body: "Nunito Sans",
      display: "Josefin Sans",
    },
    extend: {
      colors: {
        primary: {
          100: "#FEDED5",
          200: "#FDB6AB",
          300: "#FB8681",
          400: "#F7616A",
          500: "#F32F4C",
          600: "#D0224C",
          700: "#AE174A",
          800: "#8C0E44",
          900: "#740941",
        },
        secondary: {
          100: "#FFECDF",
          200: "#FFD5C0",
          300: "#FFB9A0",
          400: "#FF9E89",
          500: "#ff7162",
          600: "#DB4947",
          700: "#B7313A",
          800: "#931F30",
          900: "#7A122A",
        },
        dark: {
          100: "#F4F4F4",
          200: "#EAEAEA",
          300: "#C0C0C0",
          400: "#828282",
          500: "#303030",
          600: "#292323",
          700: "#221819",
          800: "#1B0F12",
          900: "#17090E",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
};
