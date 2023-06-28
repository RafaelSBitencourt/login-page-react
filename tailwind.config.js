/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        action: "#455fb7",
        actdark: "#112a57",
        bgl: "#efe4f6",
        bgd: "#140f07",
        white: "#fff",
      },
      dropShadow: {
        my: "3px 3px #112a57",
      },
    },
  },
  plugins: [],
};
