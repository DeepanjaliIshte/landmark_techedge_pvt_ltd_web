/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#f5fbff',
          100: '#eaf6ff',
          500: '#2563eb'
        }
      },
      boxShadow: {
        'soft-lg': '0 28px 90px rgba(15, 23, 42, 0.12)'
      }
    }
  },
  plugins: []
};
