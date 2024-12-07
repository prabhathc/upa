import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        pixel: ['"Press Start 2P"', 'system-ui', 'sans-serif'],
      },
      colors: {
        upa: {
          brown: '#655150',
          purple: '#CEABD4',
          dark: '#4A3B3A'
        }
      },
      animation: {
        bounce: 'bounce 1s infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite'
      },
      backdropBlur: {
        xs: '2px'
      }
    },
  },
  plugins: [],
};

export default config;