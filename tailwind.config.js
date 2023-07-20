/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // backgroundImage: {
      //   'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      //   'gradient-conic':
      //     'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      // },
      colors: {
        primary: {
          100: '#E0E4EF',
          500: '#3C4D82',
          900: '#091B50',
        },
        accent: {
          100: '#F7F3E3',
          500: '#FFCA1C',
          900: '#FBBF24',
        },
        neutral: {
          100: '#E8E8E8',
          200: '#909090',
        },
      },
      lineHeight: {
        button: '1.172',
      },
      boxShadow: {
        'active-button': '0 4px 4px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
