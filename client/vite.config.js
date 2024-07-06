/** @type {import('tailwindcss').Config} */
import Dotenv from 'dotenv-webpack';
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    new Dotenv()
  ],
  server: {
    port: 5000
  },
}