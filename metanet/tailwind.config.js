/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    // color palette
    colors: {
      background: '#18141A',
      bgpurple: '#15001F',
      metablack: '#1E1E1E',
      darkpurple : '#6E0E96',
      lightpurple: '#9755B2',
      darkpink: '#E413C4',
      lightpink: '#F07DDA',
      purple1: '#18061F',
      purple2: '#3C0D3B',
      pink1:'#EC4899',
      pink2:'#9D174D',
      metawhite: '#FFFFFF',
      metablack: '#000000',
      lightgray: '#D3d3D3',
      darkgray: '#888888'
    },
    extend: {
      backgroundImage: {
        'footerimg': "url('/assets/images/img01.png')",
      },
    },
  },
  plugins: [],
}

