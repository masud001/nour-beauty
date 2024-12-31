/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{html,js,ts,jsx,tsx}", // Include paths to your JS files.
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter','Roboto', 'sans-serif'],
        // roboto: ['Roboto', 'sans-serif'],
        cookie: ['Cookie', 'serif'],
      },
    },
  },
  plugins: [],
}

