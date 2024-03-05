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
        "green": "#FF6644",
        "light-green": "#828388",
        "sky-blue": "#E9F0FE",
        "nav-border": "#E9F0FE",
        "blue": "#226bf9",
        "slight-gray": "#F0F0F0",
        "light-white": "#F8F8F8",
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