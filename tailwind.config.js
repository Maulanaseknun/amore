/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', 'node_modules/flowbite-react/lib/esm/**/*.js'],
  theme: {
    extend: {
      colors:{
        'navi': '#121C26',
        'orange': '#FAB416',
      }
    },
  },
  plugins: [require('flowbite/plugin'),
],
};
