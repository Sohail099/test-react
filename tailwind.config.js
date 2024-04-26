// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        'bottom-sm': '0px 1px 1px 0px',
        'hover-sm': '0px 0px 0px 6px',
        'rounded-sm': '0px 0px 0px 3px',
        'blur-sm': '0px 0px 10px 2px'
      },
      aspectRatio: {
        '4/3': '4 / 3',
        '3/4': '3 / 4',
        '16/9': '16 / 9',
        '9/16': '9 / 16'
      },
      spacing: {
        'adn-small': '.4rem',
        'adn-base': '1rem',
        'adn-large': '2rem'
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      keyframes: {
        pulseText: {
          '0%': {
            opacity: 0
          },
          '100%': {
            opacity: 1
          }
        }
      },
      animation: {
        pulseText: 'pulseText 0.3s cubic-bezier(1, 0.2, 0.2, 1)'
      }
    }
  },
  safelist: [
    {
      pattern:
        /text-(slate|sky|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)/
    },
    {
      pattern: /text-(xs|sm|base|lg|xl|2xl|3xl|4xl|5xl|6xl|7xl|8xl|9xl)/
    },
    {
      pattern: /text-(left|center|right)/
    },
    {
      pattern: /font-(thin|extralight|light|normal|medium|semibold|bold|extrabold|black)/
    },
    {
      pattern:
        /bg-(slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|blue|indigo|violet|purple|fuchsia|pink|rose)-(50|100|200|300|400|500|600|700|800|900)/
    },
    {
      pattern: /break-(normal|words|all)/
    },
    {
      pattern: /rounded-(none|sm|md|lg|xl|2xl|3xl|full)/
    },
    {
      pattern: /aspect-(auto|square|video|[16/9]|[9/16]|[3/4]|[4/3])/
    }
  ],
  plugins: [require('@tailwindcss/forms'), require('tailwindcss-animated')]
};
