/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      // font 설정
      fontFamily: {
        dancing: ["Dancing Script", "sans-serif"],
      },
    },
  },
  plugins: [],
};
