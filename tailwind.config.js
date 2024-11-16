/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  // other configurations...
}
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // This includes all JS/JSX/TS/TSX files in the src directory
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

