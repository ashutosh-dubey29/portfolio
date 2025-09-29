/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",    // Ensures Tailwind scans all source files/components
  ],
  theme: {
    extend: {
      colors: {
        // Example: Custom highlight color for buttons, icons, etc.
        cyan: {
          400: "#22d3ee",
          500: "#06b6d4",
        },
        bgDark: "#0f172a",           // Custom background shade
      },
      // in tailwind.config.js
      darkMode: 'class', // or 'media' for automatic OS-level detection

      fontFamily: {
        // Use your favorite fonts! Example:
        sans: ['Inter', 'Segoe UI', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        "3xl": "0 10px 40px -10px #00ffc380",    // Neon/cyan accent shadow for animated cards
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
    },
  },
  plugins: [],
}
