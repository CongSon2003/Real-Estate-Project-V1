import type { Config } from "tailwindcss";
const config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // cho React/Vite
    "./app/**/*.{js,ts,jsx,tsx}",
  ], // cho Next.js 13+],
  theme: {
    extend: {
      backgroundColor: {
        "primary-50": "#EDEFF6",
        "primary-100": "#DBDFEC",
        "primary-200": "#B7BFD9",
        "primary-300": "#92A0C7",
        "primary-400": "#6E80B4",
        "primary-500": "#4A60A1",
        "primary-600": "#3B4D81",
        "primary-700": "#2C3A61",
        "primary-800": "#1E2640",
        "primary-900": "#0F1320",
        "gray-black": "#1B1D1F",
        "gray-700": "#363A3D",
        "gray-600": "#52565C",
        "gray-500": "#6D737A",
        "gray-400": "#889099",
        "gray-300": "#A0A6AD",
        "gray-200": "#B8BCC2",
        "gray-100": "#CFD3D6",
        "gray-50": "#E7E9EB",
        "gray-white": "#FFFFFF",
      },
      colors: {
        "primary-50": "#EDEFF6",
        "primary-100": "#DBDFEC",
        "primary-200": "#B7BFD9",
        "primary-300": "#92A0C7",
        "primary-400": "#6E80B4",
        "primary-500": "#4A60A1",
        "primary-600": "#3B4D81",
        "primary-700": "#2C3A61",
        "primary-800": "#1E2640",
        "primary-900": "#0F1320",
      },
      width: {
        main: "1400px",
        primary: "1200px",
      },
      backgroundImage: {
        "header-primary1": "url('/Rectangle 6.png')",
        "header-primary2": "url('/Rectangle 25.png')",
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
