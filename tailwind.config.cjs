module.exports = {
  content: ['./src/**/*/*.{astro,html,js,jsx}'],
  theme: {
    extend: {
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}