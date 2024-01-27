/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'primary': ["Plus Jakarta Sans", "sans-serif"],
        'secondary': ['Inter', "sans-serif"],
      },

      colors: {
        'sidebar-grey': '#F7F8FA',
        'line': '#EAEAEA',
        'header-bg': '#FAFAFA',
        'border-color': '#DADDDD',
        'gmail': '#787486',
        'search-icon': '#78828A',
        'error': '#ED544E',
        'error-gradient':'#ED544E1F',
        'success': '#66C87B',
        'purp': '#6160DC',
        'blu': '#54C5EB',
        'orang': '#FFB74A',
        'trends': '#525252',
        'heading': '#26282C',
        'platform-black': '#22242C',
        'grn': '#34CAA5',
        'previous-month': '#606060',
        'grn-gradient': '#34CAA51F',
        'total-order': '#898989',
        'trend-value': '#3A3F51',
        'date': '#737373',
        'amount': '#0D062D',
        'table-head': '#9CA4AB'
      },

      spacing: {
        '349': '349px',
        '696': '696px',
        '0.6': '60%',
        '0.4': '40%',
        '0.2': '20%',
        '416': '418px',
        'vw': '93vw'
      },

      gridTemplateColumns: {
        // Simple 16 column grid
        'layout': '80px auto',
        'trend': '47px auto',
        'main': '60% 39%',
        'customer': '2fr 1fr 1fr 1fr 1fr'
      },

      gridTemplateRows: {
        // Simple 16 column grid
        'dashboard': '88px auto',
        'mainH': '374px 374px',
        'graph': '80% 20%'
      },

      minWidth: {
        '482': '482px'
      }
    },
  },
  plugins: [],
}

