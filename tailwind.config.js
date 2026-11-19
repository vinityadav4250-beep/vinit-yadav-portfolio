/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#050507',
          900: '#08080b',
          850: '#0c0c11',
          800: '#111117',
          700: '#17171f',
          600: '#1f1f2a',
          500: '#2a2a37',
        },
        line: 'rgba(255,255,255,0.08)',
        violet: { 400: '#a78bfa', 500: '#8b5cf6', 600: '#7c3aed' },
        azure: { 400: '#60a5fa', 500: '#3b82f6' },
        aqua: { 300: '#67e8f9', 400: '#22d3ee' },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      letterSpacing: {
        tightest: '-0.045em',
      },
      maxWidth: {
        site: '76rem',
      },
      keyframes: {
        'border-spin': {
          to: { '--angle': '360deg' },
        },
        marquee: {
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
      },
      animation: {
        marquee: 'marquee 40s linear infinite',
        float: 'float 5s ease-in-out infinite',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
