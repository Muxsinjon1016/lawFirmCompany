/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        helpBg: "url('/public/help.jpg')",
        howCanHelp: "url('/public/howCanHelp.jpg')",
        contactBg: "url('/public/contactBg.jpg')",
        aboutHero: "url('/public/aboutHero.jpg')",
        aboutBg2: "url('/public/aboutBg2.jpg')",
        aboutBg3: "url('/public/aboutBg3.jpg')",
        aboutBg4: "url('/public/aboutBg4.jpg')",
        aboutBg5: "url('/public/aboutBg5.jpg')",
        aboutBg6: "url('/public/aboutBg6.jpg')",
        servicesBg1: "url('/public/servicesBg1.svg')",
        servicesBg2: "url('/public/servicesBg2.svg')",
        servicesBg3: "url('/public/servicesBg3.svg')",
        servicesBg4: "url('/public/servicesBg4.svg')",
      },
      borderRadius: {
        6: "6px",
        12: "12px",
        20: "20px",
        100: "100%",
      },
      container: {
        padding: "20px",
        center: true,
        screens: {
          sm: "680px",
          md: "808px",
          lg: "1064px",
          xl: "1320px",
        },
      },
    },
  },
  plugins: [],
};
