/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#6a2044',
          rgb: '106, 32, 68',
        },
        secondary: {
          DEFAULT: '#b29981',
          rgb: '178, 153, 129',
        },
        neutral: {
          light: '#e4ded7',
          DEFAULT: '#f6f0ea',
          dark: '#ffffff',
        },
      },
            fontFamily: {
              serif: ['Saudagar', 'serif'],
              sans: ['Blacker Sans', 'sans-serif'],
            },
    },
  },
  plugins: [],
};



