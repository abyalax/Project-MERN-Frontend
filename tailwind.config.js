/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        'full': [
            '0 -2px 3px rgb(0 0 0 / 0.07)',
            '0 2px 2px rgb(0 0 0 / 0.06)'
        ]
      },
    }
  },
  plugins: [],
}
