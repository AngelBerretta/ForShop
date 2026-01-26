
/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '475px',    // Pequeños teléfonos en horizontal
      'sm': '640px',    // Teléfonos grandes/tablets pequeños
      'md': '768px',    // Tablets
      'lg': '1024px',   // Laptops pequeñas
      'xl': '1280px',   // Laptops/desktops
      '2xl': '1536px',  // Desktops grandes
    },
    extend: {
      colors: {
        primary: "#4338ca",
        sidebar: "#3730a3",
        "sidebar-dark": "#1e1b4b",
        "background-light": "#f8fafc",
        "background-dark": "#0f172a",
        "card-light": "#ffffff",
        "card-dark": "#1e293b",
      },
      fontFamily: {
        display: ["Poppins", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "0.75rem",
        '3xl': '1.5rem',
        '4xl': '2.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
        'glow': '0 0 15px rgba(67, 56, 202, 0.3)',
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [],
};
