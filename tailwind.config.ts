import type { Config } from 'tailwindcss';

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
    },
  },
  plugins: [],
};
export default config;
