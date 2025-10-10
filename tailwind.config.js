/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  important: ".deadlock-quiz-container", // Scope Tailwind to this class
  corePlugins: {
    preflight: false, // Disable Tailwind's CSS reset
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
