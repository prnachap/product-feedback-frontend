/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "indigo-1000": "#4661E6",
        "purple-1000": "#AD1FEA",
        "alice-blue": "#F2F4FF",
        "ghost-white": "#F7F8FD",
        "american-blue-100": "#3A4374",
        "american-blue-200": "#373F68",
        "dark-blue-gray": "#647196",
        "vivid-tangerine": "#F49F85",
        "maya-blue": "#62BCFA",
        "lavender-blue": "#CFD7FF",
        "purple-light": "#C75AF6",
        "indigo-light": "#7C91F9",
        "american-blue-light": "#656EA3",
        jasper: "#D73737",
        "jasper-light": "#E98888",
      },
    },
  },
  plugins: [],
};
