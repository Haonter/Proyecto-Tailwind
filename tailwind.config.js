/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "negroOscuro": "#0D0D0E",
        "azul0": "#0F2849",
        "azul1": "#1D4981",
        "azul2": "#226FA6",
        "azul3": "#2482B5",
        "azul4": "#3F9CC8",
        "azul5": "#48BADE",
        "gris1": "#303043",
        "gris2": "#74889F",
        "gris3": "#52667B",
        "blanco1": "#DDDDDD",
        "blanco2": "#F0F8F9",
        "blanco3": "#C0C0C0",
        "rosa1": "#C45976",
        "rosa2": "#BC9494",
      },
      fontFamily:{
        "didactGotic": ["Didact Gothic", "sans-serif"],
        "freeman": ["Freeman", "sans-serif"],
        "actor": ["Actor", "sans-serif"],
      },
      animation: {
        grow: 'grow 1.5s infinite alternate',
        grow2: 'grow2 1.4s infinite'
      },
      keyframes: {
        grow: {
          '0%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        },
        grow2: {
          '0%': { transform: 'scale(1)',},
          '25%': { transform: 'rotate(5deg) scale(1.1)' },
          '50%': { transform: 'rotate(-5deg) scale(1.1)'},
          '75%': { transform: 'rotate(5deg) scale(1.1)' },
          '100%': { transform: 'scale(1)' },
        }
      }
    },
  },
  plugins: [],
}

