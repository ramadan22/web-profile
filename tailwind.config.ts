import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

// import tailwindcssAnimate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/features/**/*.{js,ts,jsx,tsx,mdx}',
    './src/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        cuprum: ['Cuprum', 'sans'],
        sen: ['Cuprum', 'sans'],
        sans: ['Sen', 'sans'],
      },
      colors: {
        muted: '#f2f7fa',
        'muted-foreground': '#c9d5e0',

        card: '#ffffff',
        'card-foreground': '#2b3242',

        popover: '#ffffff',
        'popover-foreground': '#2b3242',

        border: '#f0f4f8',

        input: '#f0f4f8',

        secondary: '#f2f7fa',
        'secondary-foreground': '#2b3242',

        accent: '#f2f7fa',
        'accent-foreground': '#2b3242',

        destructive: '#ff0000',
        'destructive-foreground': '#f7fafd',

        ring: '#c3d1e0',

        primary: '#007bff',
        'primary-foreground': '#f7FAFD',

        negative: {
          DEFAULT: '#F16528',
          light: '#F7A37E',
        },

        gray: {
          light: '#A5A49F',
          lighter: '#D2D2CF',
          lightest: '#F5F7F7',
          DEFAULT: '#78776F',
        },
      },
      keyframes: {
        'slide-left-to-right': {
          '0%, 50%': {
            opacity: '0',
            transform: 'translateX(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)',
          },
        },
        'slide-right-to-left': {
          '0%, 50%': {
            opacity: '0',
            transform: 'translateX(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0px)',
          },
        },
        'slide-bottom-to-top': {
          '0%, 50%': {
            opacity: '0',
            transform: 'translateY(50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
        'slide-top-to-bottom': {
          '0%, 50%': {
            opacity: '0',
            transform: 'translateY(-50px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0px)',
          },
        },
      },
      animation: {
        'slide-left-to-right': 'slide-left-to-right 1 forwards',
        'slide-right-to-left': 'slide-right-to-left 1 forwards',
        'slide-bottom-to-top': 'slide-bottom-to-top 1 forwards',
        'slide-top-to-bottom': 'slide-top-to-bottom 1 forwards',
      },
    },
  },
  plugins: [
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-duration': (value) => ({
            'animation-duration': value,
          }),
        },
        {
          values: theme('transitionDelay'),
        },
      );
    }),
  ],
};
export default config;
