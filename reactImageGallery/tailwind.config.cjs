/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
    
  ],
  theme: {
    extend: {},
    colors:{
      transparent: 'transparent',
      white: '#ffffff',
      primary:"#ffffff",
      black:"#000000",

    }
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
