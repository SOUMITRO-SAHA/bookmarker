module.exports = {
  plugins: {
    "postcss-import": {},
    tailwindcss: {},
    autoprefixer: {},
    "postcss-pseudo-companion-classes": {
      prefix: "sb-pseudo--",
      restrictTo: [":hover", ":focus"],
    },
  },
};
