module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/flowbite/**/*.js',
    './node_modules/tw-elements/dist/js/**/*.js'
  ],
  theme: {
    backdropFilter: {
      none: 'none',
      blur: 'blur(20px)'
    },
    minWidth: {
      0: '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      full: '100%',
      mbd: '300px'
    },
    extend: {}
  },
  plugins: [
    require('tailwindcss-filters'),
    require('flowbite/plugin'),
    require('tw-elements/dist/plugin')
  ]
}
