export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: '#A82123',
        surface: '#FEFFFF',
        muted: '#6b7280',
      },
      boxShadow: {
        soft: '0 18px 50px rgba(168, 33, 35, 0.12)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
