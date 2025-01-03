/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}", // Include paths to your JS files.
  ],
  theme: {
    extend: {
      fontFamily: {
        averta: ['Averta Demo PE', 'sans-serif'],
        // cookie: ['Cookie', 'serif'],
      },
    },
  },
  plugins: [],
}

