module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ff3b46',
          100: '#ff313c',
          200: '#ff2732',
          300: '#f91d28',
          400: '#ef131e',
          500: '#e50914',
          600: '#db000a',
          700: '#d10000',
          800: '#c70000',
          900: '#bd0000'
        },
        secondary: {
          50: '#545454',
          100: '#4a4a4a',
          200: '#404040',
          300: '#363636',
          400: '#2c2c2c',
          500: '#222222',
          600: '#181818',
          700: '#0e0e0e',
          800: '#040404',
          900: '#000000'
        }
      },
      strokeWidth: {
        3: '3',
        4: '4',
        5: '5'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
