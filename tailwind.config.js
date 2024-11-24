/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sure-text": "hsl(0, 0%, 100%)",
        "dark-text": "hsl(207, 13%, 34%)",
        "gray-text": "hsl(0,  0% 91.49%)",
        "sure-color": "hsl(208, 49%, 24%)",
        "dark-color": "hsl(237, 17%, 21%)",
        "grayish-blue": "hsl(208, 49%, 24%)",
        "primary-color": "hsl(356, 100%, 66%)",
      },
    },
  },
  plugins: [],
}