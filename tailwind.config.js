/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  darkMode: "class",
  theme: {
    fontFamily: {
      DanaRegular: "Dana Regular",
      DanaDemiBold: "Dana DemiBold",
      DanaMedium: "Dana Medium",
      MorabbaLight: "Morabba Light",
      MorabbaBold: "Morabba Bold",
      MorabbaMedium: "Morabba Medium",
    },
    screens: {
      'xs': '480px',
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
    extend: {

      colors: {
        brown: {
          100: "#9CA3AF",
          300: "#DBC1AC",
          600: "#967259",
          900: "#634832",
        },
      },
      boxShadow: {
        "normal": "0px 1px 10px 0px rgba(0, 0, 0, 0.05)",
      },
      borderRadius: {
        "4xl": "2rem",
      },
      letterSpacing: {
        'tightest': '-0.065em'
      },
      spacing: {
        '4.5' : '1.125rem',
        '25' : '6.25rem',
        '30': '7.5rem',
        '50' : '12.5rem'
      },
      container: {
        center: true,
        padding: {
          DEFALUT: '1rem',
          lg: '0.625rem'
        }
      },
      backgroundImage: {
        'homeMobile': 'url(/public/img/bgheader.jpg)',
        // 'homeDesktop': 'url(/public/img/headerBgDesktop.webp)'
        'homeDesktop': 'url(/public/img/bgheader.jpg)'
      },
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant("child", '& > *');
      addVariant("child-hover", '& > *:hover');
    }
  ],
};
