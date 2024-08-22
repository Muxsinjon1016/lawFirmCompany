/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        helpBg: "url('/help.jpg')",
        howCanHelp: "url('/howCanHelp.jpg')",
        contactBg: "url('/contactBg.jpg')",
        aboutHero: "url('/aboutHero.jpg')",
        aboutBg2: "url('/aboutBg2.jpg')",
        aboutBg3: "url('/aboutBg3.jpg')",
        aboutBg4: "url('/aboutBg4.jpg')",
        aboutBg5: "url('/aboutBg5.jpg')",
        aboutBg6: "url('/aboutBg6.jpg')",
        servicesBg1: "url('/servicesBg1.svg')",
        servicesBg2: "url('/servicesBg2.svg')",
        servicesBg3: "url('/servicesBg3.svg')",
        servicesBg4: "url('/servicesBg4.svg')",
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
