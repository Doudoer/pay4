/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C3E50',
          dark: '#1B2631',
        },
        accent: {
          DEFAULT: '#FF7F50', // Orange
          highlight: '#FF4500',
        },
        secondary: {
          DEFAULT: '#32CD32', // Lime Green
        }
      },
    },
  },
  plugins: [],
}
