import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class', // 'media' también es una opción, pero 'class' te da más control
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', 
    './src/pages/**/*.{js,ts,jsx,tsx}', 
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {},
  plugins: [],
}

export default config
