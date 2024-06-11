/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#F5F9FCD6",
        secondary: "#E5E7EB",
        "content-text": "#434C52",
        "color-links": "#355DEE",
        "color-white": "#fff",
        gradient:
          "rgba(178, 248, 240, 0.78) -9.55%, rgba(148, 220, 251, 0.8958) 4.42%, rgba(90, 152, 246, 0.97235) 33.3%, #073099 97.82%",
      },
      fontFamily: {
        sans: ["Poppins", "Arial", "Helvetica", "sans-serif"],
      },
      backgroundImage: {
        "main-gradient": "linear-gradient(180deg, #F8FAFC 0%, #ECFEFF 100%)",
      },
    },
  },
  plugins: [],
};
