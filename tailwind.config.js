/** @type {import('tailwindcss').Config} */
export default {
    content: [
      './index.html',
      './src/**/*.{js,jsx,ts,tsx}',
      "./node_modules/flowbite/**/*.js", // 👈 agrega esto

    ],
    theme: {
      extend: {
        fontFamily: {
          sans: ['Inter', 'sans-serif'],
        },
        colors: {
          vite: '#646cff', // el violeta estilo Vite
        },
      },
    },
    plugins: [
      require('flowbite/plugin') // 👈 y esto
    ],
  }
  