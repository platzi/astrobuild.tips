module.exports = {
  content: ['./src/**/*/*.{astro,html,js,jsx,tsx}'],
  theme: {
    extend: {
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}