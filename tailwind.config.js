/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      backgroundSize: {
        '300%': '300%',
      },
      animation: {
        gradient: 'gradient 8s ease infinite',
        pingSlow: 'ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            backgroundPosition: '0% 50%',
          },
          '50%': {
            backgroundPosition: '100% 50%',
          },
        },
      },
      transitionDelay: {
        '200': '200ms',
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '1100': '1100ms',
      },
      translate: {
        '5': '1.25rem',
        '10': '2.5rem',
        '12': '3rem',
      },
    },
  },
  plugins: [],
};
