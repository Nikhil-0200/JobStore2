/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontSize: {
      xs: ['12px', '16px'],
      sm: ['14px', '20px'],
      base: ['16px', '19.5px'],
      lg: ['18px', '21.94px'],
      xl: ['20px', '24.38px'],
      '2xl': ['24px', '29.26px'],
      '3xl': ['28px', '50px'],
      '3.5xl': ['40px', '46px'],
      '4xl': ['48px', '58px'],
      '8xl': ['96px', '106px']
    },
    extend: {
      fontFamily: {
        "poppins-light": ['PoppinsLight', 'sans-serif'],
        'poppins-medium': ['PoppinsMedium', 'sans-serif'],
        'poppins-semibold': ['PoppinsSemiBold', 'sans-serif'],
        'poppins-extrabold': ['PoppinsExtraBold', 'sans-serif'],
      },
      colors: {
        'hero-black': "#12141D",
        "coral-red": "#FF6644",
        "slate-gray": "#6D6D6D",
        "green": "#ada373",
        "light-green": "#B9BABC",
        "sky-blue": "#E9F0FE",
        "nav-border": "#6D6D6D",
        "blue": "#226bf9",
        "slight-gray": "#d7d7d7",
        "light-white": "#F8F8F8",
      "button-gray": "#dfdfdf",
        "white": "#FFFFFF"
      },
      boxShadow: {
        '3xl': '0 10px 40px rgba(0, 0, 0, 0.1)'
      },
      backgroundImage: {
        'hero': "url('assets/images/collection-background.svg')",
        'card': "url('assets/images/thumbnail-background.svg')",
      },
      screens: {
        "wide": "1440px"
      }
    },
  },
  plugins: [],
}