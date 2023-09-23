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
      neutraul2: '#23262F',
      neutraul3: '#353945',
      neutraul4: '#777E90',
      neutraul5: '#B1B5C3',
      neutraul6: '#E6E8EC',
      neutraul7: '#F4F5F6',
      neutraul8: '#FCFCFD',
    },
    extend: {},
  },
  plugins: [],
}
export default config
