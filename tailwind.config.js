/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        desaturadedRed: "hsl(0, 36%, 70%)",
        softRed: "hsl(0, 93%, 68%)",
        darkGrayisRed: "hsl(0, 6%, 24%)",
        lightGradient1: "hsl(0, 0%, 100%)",
        lightGradient2: "hsl(0, 100%, 98%)",
        redGradient1: "hsl(0, 80%, 86%)",
        redGradient2: "hsl(0, 74%, 74%)",
      },

      fontFamily: {
        theme: ["Josefin Sans", "sans-serif"],
      },
      backgroundImage: theme => ({
        mobile: "url('/hero-mobile.jpg')",
        desktop: "url('/hero-desktop.jpg')",
        pattern: "url('/bg-pattern-desktop.svg')",
      }),

      
    },

    screens: {
      xxs: "260px",
      xs: "375px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1400px",
      "3xl": "1680px",
      
  }
  },
  plugins: [],
};
