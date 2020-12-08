module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
  theme: {
    extend: {
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
      fontFamily: {
        display: ['Hind'],
      },
      colors: {
        watu: '#FFC200',
        body: '#F1F3F9',
        border: '#DDE3E8',
        text: '#012241',
        circle: '#8898AA',
        content: '#1B2125',
        para: '#788995',
        save: '#2BAE12',
      },
    },
  },
  variants: {},
  plugins: [],
}
