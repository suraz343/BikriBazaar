/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',  // Adjust based on your directory structure
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',  // Ensure all your React components are covered
  ],
  theme: {
    extend: {},
  },
  plugins: [
     require('tailwindcss'),
    require('autoprefixer'),],
}

