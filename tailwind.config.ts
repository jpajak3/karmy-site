import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        sand: '#F2EBE0',
        navy: '#0D1E30',
        coral: '#FF5533',
        stone: '#C4B098',
        cream: '#FDFAF7',
      },
      fontFamily: {
        display: ['var(--font-bebas)', 'Impact', 'sans-serif'],
        body: ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(72px, 12vw, 160px)', { lineHeight: '0.92' }],
        'display-lg': ['clamp(48px, 6vw, 96px)', { lineHeight: '0.95' }],
        'display-md': ['clamp(32px, 4vw, 56px)', { lineHeight: '1' }],
        'display-sm': ['clamp(24px, 3vw, 36px)', { lineHeight: '1.1' }],
        'stat': ['clamp(56px, 8vw, 96px)', { lineHeight: '1' }],
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
      },
      maxWidth: {
        'site': '1280px',
        'narrow': '900px',
        'form': '560px',
      },
      transitionTimingFunction: {
        'snap': 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      transitionDuration: {
        '400': '400ms',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'line-in': {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '100%': { transform: 'scaleX(1)', transformOrigin: 'left' },
        },
      },
    },
  },
  plugins: [],
}

export default config
