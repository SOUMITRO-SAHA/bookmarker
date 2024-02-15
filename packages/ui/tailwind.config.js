const twPreset = require("@repo/tailwind-config/tailwind-preset");
/** @type {import('tailwindcss').Config} */
const config = {
  ...twPreset,
  content: ["src/**/*.{ts,tsx}"],
};

module.exports = config;
