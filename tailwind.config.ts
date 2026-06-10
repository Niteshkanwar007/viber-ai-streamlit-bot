import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0F172A',
        slateblue: '#1D2B3A',
        olive: '#68724D',
        brass: '#B08D57',
        field: '#F5F3EA',
        line: '#D8D5C8'
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'ui-sans-serif', 'system-ui'],
        serif: ['var(--font-serif)', 'Georgia', 'serif']
      },
      boxShadow: {
        document: '0 24px 80px rgba(15, 23, 42, 0.12)',
        card: '0 10px 30px rgba(15, 23, 42, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
