import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      keyframes: {
        'accordion-down': {
          from: { backgroundColor: '0' },
          to: { maxHeight: '10rem' },
        },
        'accordion-up': {
          from: { maxHeight: '10rem' },
          to: { maxHeight: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.9s ease-out',
        'accordion-up': 'accordion-up 0.9s ease-out',
      },
    },
  },
  plugins: [],
};
export default config;
