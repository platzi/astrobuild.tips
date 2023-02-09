module.exports = {
  content: ['./src/**/*/*.{astro,html,js,jsx,tsx,vue}'],
  theme: {
    extend: {
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}