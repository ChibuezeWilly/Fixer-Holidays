/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        sm: '480px',
        md: '768px',
        lg: '960px',
        xl: '1280px'
      }
    },
  },
  plugins: [],
}

