module.exports = {
  purge: { content: ["./public/**/*.html", "./src/**/*.vue"] },
  darkMode: false,
  theme: {
    extend: {
      colors: {
        primary: "#2d7abb",
        dark: "#070A10",
      },
      fontFamily: {
        sans: ["Roboto"],
        primary: ["Huntington"],
      },
      height: {
        "full-h-16": "calc(100% - 4rem)",
      },
      minHeight: {
        "1/2-screen": "50vh",
        "3/4-screen": "75vh",
      },
      maxWidth: {
        "3/4": "75%",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first", "last"],
    },
  },
};
