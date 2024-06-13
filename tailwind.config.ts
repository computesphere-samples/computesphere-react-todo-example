/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        "dark-blue": "var(--dark-blue)",
        "dark-gray": "var(--dark-gray)",
        "link-color": "var(--link-color)",
        gradient: "var(--gradient-color)",
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "Helvetica", "sans-serif"],
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(180deg, #F8FAFC 0%, #ECFEFF 100%)",
        "logo-gradient": "linear-gradient(0deg, var(--gradient-color))",
        watermark: "url(assets/background-img.png)",
      },
    },
  },
  plugins: [],
};
