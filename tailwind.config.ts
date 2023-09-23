import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    colors: {
      light: '#FFFFFF',
      dark: '#141416',
      gray: '#989898',
      primary1: '#3772FF',
      primary2: '#9757D7',
      primary3: '#EF466F',
      primary4: '#45B26B',
      secondary1: '#E4D7CF',
      secondary2: '#CDB4DB',
      neutral2: '#23262F',
      neutral3: '#353945',
      neutral4: '#777E90',
      neutral5: '#B1B5C3',
      neutral6: '#E6E8EC',
      neutral7: '#F4F5F6',
      neutral8: '#FCFCFD',
    },
    extend: {},
  },
  plugins: [],
}
export default config
