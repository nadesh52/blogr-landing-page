import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: { overpass: ["Overpass"], ubuntu: ["Ubuntu"] },
      colors: {
        "red-light-100": "#ff8f70",
        "red-light-200": "#ff525d",
        "red-light-300": "#ff7a85",
        "blue-gray-100": "#c8c8cb",
        "blue-gray-200": "#4b5862",
        "blue-gray-300": "#1f3f5b",
        "blue-gray-400": "#2c2d3f",
        "blue-gray-500": "#3f4164",
        "blue-dark-100": "#25252d",
      },
      screens: {
        desktop: "1440px",
        mobile: "375px",
      },
      backgroundImage: {
        "intro-desktop": "url('/assets/images/bg-pattern-intro-desktop.svg')",
        // "intro-mobile": "url('/assets/images/bg-pattern-intro-mobile.svg')",
        // "pattern-cirlce": "url('/assets/images/bg-pattern-circles.svg')"
      },
      backgroundPosition: {
        "desktop-origin": "top -1340px left -440px",
        "mobile-origin": "top -250px left -320px",
        "desktop-circle": "top -500px left -214px",
        "mobile-circle": "top -220px left -100px",
      },
    },
  },
  plugins: [],
} satisfies Config;
