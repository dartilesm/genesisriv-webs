const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "../../packages/ui/src/**/*.astro",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('tailwind-merge')],
  darkMode: 'class'
};