/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  theme: {
    fontFamily: {
        'barlow': ['Barlow', 'sans-serif'],
        'fraunces': ['Fraunces', 'serif']
    },
    extend: {
      keyframes: {
        'fade-in': {
            '0%': {
                opacity: '0',
            },
            '100%': {
                opacity: '1',
            },
        },
        'fade-out': {
          '100%': {
              opacity: '1',
          },
          '0%': {
              opacity: '0',
          },
      }
      },
      animation: {
          'fade-in': 'fade-in 1s ease-out',
          'fade-out': 'fade-out 5s ease-out'
      },

      backgroundImage: {
        'orange-header': "url('images/desktop/image-header.jpg')",
        'cherry': "url(/images/mobile/image-graphic-design.jpg)",
        'abstract': "url(https://images.unsplash.com/photo-1552250575-e508473b090f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80)",
        
      },
    colors: {
      'soft-red': '#fe7867',
      'yellow-s': '	#fad400',
      'cyan-desaturated': '#25564b',
      'dark-blue': '#19536b',
      'cyan-dark': '#458c7e',
      'moderate-cyan': 'hsl(170, 50%, 68%)',
      'cream': '	hsl(57.4, 15%, 99%)',


      bluespecial: {
        400: 'hsl(212, 27%, 19%)',
        300: 'hsl(213, 9%, 39%)',
        200: 'hsl(232, 10%, 55%)',
        100: 'hsl(210, 4%, 67%)',
      },

    },
    }, 
  },
  plugins: [],
}
