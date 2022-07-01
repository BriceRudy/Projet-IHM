module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        '1200px' : '75rem',
        '300px':'18.75rem',
        '992px':'62rem',
        '100px':'6.25rem'
      },
      height:{
        '400px':'25rem',
        '220px':'13.75rem',
        '150px':'9.375rem'
      },
      minWidth: {
        '35px': '2.1875rem',
        '100px':'6.25rem'
      },
      spacing: {
        '30px' : '1.875rem',
        '60px':'3.75rem',
        '5px':'0.3125rem',
        '15px':'0.9375rem',
        '18px':'1.125rem',
        '300px':'18.75rem',
        '7px':'0.4375rem',
        '13px':'0.8125rem',
        '3px':'0.1875rem',
        '20px':'1.25rem',
        't':'0.67rem',
        '-0.25':'-.25rem',
        '-0.5':'-0.5rem'
      },
      flexGrow: {
        '6': 6
      },
      fontFamily: {
        'monospace':['monospace,monospace'],
        'inherit':['"inherit"'],
        'relay':['"Raleway"','sans-serif']
      },
      transitionDuration:{
        '3000':'3000ms',
        '2000':'2000ms'
      },
      fontSize: {
        '13px':'0.8125rem',
        1:['20px','20px'],
        '15px':'0.9375rem',
        '10px':'0.625rem',
        '18px':'1.125rem',
        '32px':'2rem',
        'tp':'1rem'

      },
      borderRadius:{
        '20px':'1.25rem',
        '15px':'0.9375rem'
      },
      flex:{
        '0':'0 0 auto',
        '40':'1 1 40%'
      },
      lineHeight: {
        '18px':'1.125rem',
        '1.1':'1.1rem',
        '0':'0rem',
        '1.15':'1.15rem'
      },
      colors: {
        'whitee':'#FFFFFF',
        'bluee':'#0065FC',
        'shat':'#f2f2f2'
      },
      boxshadow:{
        'tip':'inset 0px 0px 0px 2px #f2f2f2',
      }
    },
  },
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
  ],
}
