module.exports = {
  mode: 'jit',
  darkMode: 'class',
  variants: {
    display: ['responsive'],
  },
  theme: {

    extend: {
      colors: {
        'bodybase': '#f3f2ef',
        'gold': '#915907',
        'input-color': '#eef3f8',
        'f2':'#f2f2f2',
        'muted':'#6b7280'
      },
      
      screens: {
        xs: '100%',
        sm: '600px',
        md: '728px',
        lg: '1128px',
        xl: '1128px',
        '2xl': '1128px',
      },
      fontFamily: {
        sans: ['-apple-system,system-ui,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Fira Sans,Ubuntu,Oxygen,Oxygen Sans,Cantarell,Droid Sans,Apple Color Emoji,Segoe UI Emoji,Segoe UI Emoji,Segoe UI Symbol,Lucida Grande,Helvetica,Arial,sans-serif'],
      },
    },
 
    container: {
      // you can configure the container to be centered
      center: true,

      // default breakpoints but with 40px removed
    },
  },
}
