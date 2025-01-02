module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'galaxy-dark': '#0C0C1E',       // Deep space dark blue
        'cosmic-blue': '#4CA6FF',        // Bright space blue
        'space-gray': '#1A1A2E',         // Dark gray for components
        'nebula-purple': '#6A5ACD'       // Accent purple
      },
      backgroundImage: {
        'galaxy-pattern': 'linear-gradient(to right, #0C0C1E, #1A1A2E)',
      }
    },
  },
  plugins: [],
}