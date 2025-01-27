/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cedarville: ['"Cedarville Cursive"', "cursive"],
        oswald: ['"Oswald"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
