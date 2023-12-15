/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["poppins", "sans-serif"],
        inspiration: ["inspiration", "sans-serif"],
      },
      width: {
        1080: ["1080px"],
      },
      screens: {
        ss: "400px",
        mini: "300px",
      },
    },
  },
  plugins: [],
};
