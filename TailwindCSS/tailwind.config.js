module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '576px',
        md: '768px',
        lg: '992px',
        xl: '1199px',
        xxl: '1440px',
      },

      colors: {
        'website-blue': '#006de8',
        'website-dark-blue': '#002249',
        'website-border': '#6ec1e4',
      },



      boxShadow: {
        websiteShadow: '0 8px 16px rgb(0 0 0 / 10%)',
      },

      fontFamily: {
        heading: ['"Gilroy", Sans-serif'],
        bodyF: ['Karla'],
      },

      lineHeight: {
        headingLineheight: '1.2em',
        bodyLineheight: '30px',
      },

      fontSize: {
        bodyFont: '17px',
      },
      listStyleType: {
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
      },

      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '1rem',
          lg: '1rem',
          xl: '1rem',
        },
      },

    },
  },
  plugins: [],
}