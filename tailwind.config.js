/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",
            ".src/Components/**/*.{js,ts,jsx,tsx}",
            ".src/components/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors:{
        "rnmGreen":"#97ce4c",
        "rnmSkin" :"#e4a788",
        "rnmYellow":"#f0e14a",
        "rnmYellowDark":"#CFC248",
        "rnmYellowDarker":"#A39A3B",
        "rnmBrown":"#44281d",
        "rnmPink": "#e89ac7"
      },
    },
  },
  plugins: [],
}

