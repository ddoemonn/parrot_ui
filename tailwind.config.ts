import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './modules/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        fade: 'fade-in .5s ease-in-out',
        'fade-in-left': 'fade-in-left 0.6s ease-in-out',
        'fade-in-right': 'fade-in-right 0.6s ease-in-out',
        'fade-in-up': 'fade-in-up 0.6s ease-in-out',
        'fade-in-down': 'fade-in-down 0.6s ease-in-out',
        'slide-in-left': 'slide-in-left 0.6s ease-out',
        'slide-in-right': 'slide-in-right 0.6s ease-out',
        'slide-in-top': 'slide-in-top 0.6s ease-out',
        'slide-in-bottom': 'slide-in-bottom 0.6s ease-out',
      },

      keyframes: {
        'fade-in': {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        'fade-in-left': {
          '0%': {
            opacity: '0',
            transform: 'translateX(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-right': {
          '0%': {
            opacity: '0',
            transform: 'translateX(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        'fade-in-up': {
          '0%': {
            opacity: '0',
            transform: 'translateY(20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-20px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        'slide-in-left': {
          '0%': {
            transform: 'translateX(-20px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'slide-in-right': {
          '0%': {
            transform: 'translateX(20px)',
          },
          '100%': {
            transform: 'translateX(0)',
          },
        },
        'slide-in-top': {
          '0%': {
            transform: 'translateY(-20px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
        'slide-in-bottom': {
          '0%': {
            transform: 'translateY(20px)',
          },
          '100%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
