/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        layout: "2fr 1fr", // Header, Main, Footer
      },
    },
  },
  plugins: [],
};
