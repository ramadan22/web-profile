import type { Config } from 'tailwindcss';
import plugin from 'tailwindcss/plugin';

// import tailwindcssAnimate from 'tailwindcss-animate';

const slideAnimation = ({
  direction,
  offset,
  isShow,
  withoutDelay = false,
}:{
  direction: string,
  offset: number,
  isShow: boolean,
  withoutDelay?: boolean,
}) => {
  const opacityStart = isShow ? '0' : '1';
  const opacityEnd = isShow ? '1' : '0';

  const from = isShow ? `${offset}px` : '0px';
  const to = isShow ? '0px' : `${offset}px`;

  return {
    [`0%, ${withoutDelay ? '0.01%' : '50%'}`]: {
      opacity: opacityStart,
      transform: `translate${direction}(${from})`,
    },
    '100%': {
      opacity: opacityEnd,
      transform: `translate${direction}(${to})`,
    },
  };
};

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
        'slide-to-right': slideAnimation({
          direction: 'X',
          offset: -50,
          isShow: true,
          withoutDelay: true,
        }),

        'slide-to-right-delay': slideAnimation({
          direction: 'X',
          offset: -50,
          isShow: true,
        }),

        'hide-to-right': slideAnimation({
          direction: 'X',
          offset: 50,
          isShow: false,
          withoutDelay: true,
        }),

        'hide-to-right-delay': slideAnimation({
          direction: 'X',
          offset: 50,
          isShow: false,
        }),

        'slide-to-left': slideAnimation({
          direction: 'X',
          offset: 50,
          isShow: true,
          withoutDelay: true,
        }),

        'slide-to-left-delay': slideAnimation({
          direction: 'X',
          offset: 50,
          isShow: true,
        }),

        'hide-to-left': slideAnimation({
          direction: 'X',
          offset: -50,
          isShow: false,
          withoutDelay: true,
        }),

        'hide-to-left-delay': slideAnimation({
          direction: 'X',
          offset: -50,
          isShow: false,
        }),

        'slide-to-top-delay': slideAnimation({
          direction: 'Y',
          offset: 50,
          isShow: true,
        }),

        'hide-to-top-delay': slideAnimation({
          direction: 'Y',
          offset: -50,
          isShow: false,
          withoutDelay: true,
        }),

        'slide-to-bottom-delay': slideAnimation({
          direction: 'Y',
          offset: -50,
          isShow: true,
        }),
      },
      animation: {
        'slide-to-right': 'slide-to-right 1 forwards',
        'slide-to-right-delay': 'slide-to-right-delay 1 forwards',
        'hide-to-right': 'hide-to-right 1 forwards',
        'hide-to-right-delay': 'hide-to-right-delay 1 forwards',

        'slide-to-left': 'slide-to-left 1 forwards',
        'slide-to-left-delay': 'slide-to-left-delay 1 forwards',
        'hide-to-left': 'hide-to-left 1 forwards',
        'hide-to-left-delay': 'hide-to-left-delay 1 forwards',

        'slide-to-top-delay': 'slide-to-top-delay 1 forwards',
        'hide-to-top-delay': 'hide-to-top-delay 1 forwards',

        'slide-to-bottom-delay': 'slide-to-bottom-delay 1 forwards',
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
