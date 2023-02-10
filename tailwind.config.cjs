module.exports = {
  content: ['./src/**/*/*.{astro,html,js,jsx,tsx,vue,svelte}'],
  theme: {
    extend: {
    }
  },
  plugins: [require('@tailwindcss/line-clamp')]
}