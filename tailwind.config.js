/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#393175",
        secondary: "#0D0D23",
        textCyan: "#44E6F6",
      },
      boxShadow: {
        inner: "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        outer: "0 2px 4px 0 rgba(0, 0, 0, 0.06)", // This is the outer shadow
        "all-around": "0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        // Add more custom outer shadows as needed
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
