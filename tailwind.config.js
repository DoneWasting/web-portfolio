/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./docs/**/*.{html,js}"],
  theme: {
    extend: {   colors: {
      main:"#222831",
      secondary: "#2A3335",
      mainblue: "#00ADB5",
      mainwhite:"#EEEEEE",
      textGreyish: "#F8F8F2CC",
      test: "#1D1B22"

    },},
  },
  plugins: [],
}
