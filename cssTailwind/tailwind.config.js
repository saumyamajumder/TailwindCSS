module.exports = {
  content: ["./*.{html,js}"],

  theme: {
    extend: {
      colors: {
        black: '#111',
        orange: '#fd7d16',
        textColor: '#7e8690',
      },
      fontFamily: {
        'serif': ['Cardo'],
        // 'sans': ["Open Sans"],
        'body': ['"Open Sans"'],
      },
      fontSize: {
        sm: ['14px', '20px'],
        base: ['16px', '24px'],
        lg: ['20px', '25px'],
        xl: ['30px', '30px'],
        xxl: ['35px', '32px'],
      },
    
    },
  },
  plugins: [],
}

