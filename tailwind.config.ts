import type { Config } from 'tailwindcss'
const {nextui} = require("@nextui-org/react");
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '1.5rem',
        lg: '2rem'
      }
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          layout: {},
          colors: {}
        },
        dark: {
          layout: {},
          colors: {}
        },
        purple: {
          extend: 'dark',
          colors: {
            background: '#0D001A',
            foreground: '#ffffff',
            primary: {
              50: '#3B096C',
              100: '#520F83',
              200: '#7318A2',
              300: '#9823C2',
              400: '#c031e2',
              500: '#DD62ED',
              600: '#F182F6',
              700: '#FCADF9',
              800: '#FDD5F9',
              900: '#FEECFE',
              DEFAULT: '#DD62ED',
              foreground: '#ffffff'
            },
            focus: '#F182F6'
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '1px',
              medium: '2px',
              large: '4px'
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px'
            }
          }
        },
        amber: {
          extend: 'dark',
          colors: {
            background: '#2b1300',
            foreground: '#ffffff',
            primary: {
              50: '#FFF8E1',
              100: '#FFECB3',
              200: '#FFE082',
              300: '#FFD54F',
              400: '#FFCA28',
              500: '#FFC107',
              600: '#FFB300',
              700: '#FFA000',
              800: '#FF8F00',
              900: '#FF6F00',
              DEFAULT: '#FFC107',
              foreground: '#ffffff',
            },
            focus: '#FFD740',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '1px',
              medium: '2px',
              large: '4px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
        red: {
          extend: 'dark',
          colors: {
            background: '#1B0000', 
            foreground: '#FFFFFF',
            primary: {
              50: '#FFEBEE',
              100: '#FFCDD2',
              200: '#EF9A9A',
              300: '#E57373',
              400: '#EF5350',
              500: '#F44336',
              600: '#E53935',
              700: '#D32F2F',
              800: '#C62828',
              900: '#B71C1C',
              DEFAULT: '#F44336',
              foreground: '#FFFFFF',
            },
            focus: '#FF5252',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '1px',
              medium: '2px',
              large: '4px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
        sky: {
          extend: 'dark',
          colors: {
            background: '#000013',
            foreground: '#FFFFFF',
            primary: {
              50: '#E1F5FE',
              100: '#B3E5FC',
              200: '#81D4FA',
              300: '#4FC3F7',
              400: '#29B6F6',
              500: '#03A9F4',
              600: '#039BE5',
              700: '#0288D1',
              800: '#0277BD',
              900: '#01579B',
              DEFAULT: '#03A9F4',
              foreground: '#FFFFFF',
            },
            focus: '#29B6F6',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '1px',
              medium: '2px',
              large: '4px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },
        brown: {
          extend: 'dark',
          colors: {
            background: '#0d0d0d',
            foreground: '#FFFFFF',
            primary: {
              50: '#EFEBE9',
              100: '#D7CCC8',
              200: '#BCAAA4',
              300: '#A1887F',
              400: '#8D6E63',
              500: '#795548',
              600: '#6D4C41',
              700: '#5D4037',
              800: '#4E342E',
              900: '#3E2723',
              DEFAULT: '#795548',
              foreground: '#FFFFFF',
            },
            focus: '#8D6E63',
          },
          layout: {
            disabledOpacity: '0.3',
            radius: {
              small: '1px',
              medium: '2px',
              large: '4px',
            },
            borderWidth: {
              small: '1px',
              medium: '2px',
              large: '3px',
            },
          },
        },

            green: {
              extend: 'dark',
              colors: {
                background: '#001401',
                foreground: '#FFFFFF',
                primary: {
                  50: '#E8F5E9',
                  100: '#C8E6C9',
                  200: '#A5D6A7',
                  300: '#81C784',
                  400: '#66BB6A',
                  500: '#4CAF50',
                  600: '#43A047',
                  700: '#388E3C',
                  800: '#2E7D32',
                  900: '#1B5E20',
                  DEFAULT: '#4CAF50',
                  foreground: '#FFFFFF',
                },
                focus: '#8BC34A',
              },
              layout: {
                disabledOpacity: '0.3',
                radius: {
                  small: '1px',
                  medium: '2px',
                  large: '4px',
                },
                borderWidth: {
                  small: '1px',
                  medium: '2px',
                  large: '3px',
                },
              },
            },

      }
    })
  ],
}
export default config
