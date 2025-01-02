// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [  "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",],
//   theme: {
//     extend: {},
//   },
//   plugins: [
    
//   ],
// }
/**
 * 
 * 
//   @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       animation: {
//         'spin-slow': 'spin 10s linear infinite',
//       },
//       boxShadow: {
//         glow: "0 0 20px 10px rgba(255, 0, 255, 0.8), 0 0 20px 20px rgba(57, 255, 20, 0.6), 0 0 20px 30px rgba(0, 212, 255, 0.7)",
//       },
//     },
//   },
//   plugins: [],
// };

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        pulse: "pulse 1.5s infinite",
      },
      boxShadow: {
        glow: "0 0 20px 10px rgba(255, 0, 255, 0.8), 0 0 20px 20px rgba(57, 255, 20, 0.6), 0 0 20px 30px rgba(0, 212, 255, 0.7)",
      },
      colors: {
        "nav-bg": "#1a1a1a",
        "hover-text": "#ffcc00",
      },
    },
  },
  plugins: [],
};
