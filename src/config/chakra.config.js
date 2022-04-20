import { extendTheme } from '@chakra-ui/react'

// 2. Extend the theme to include custom colors, fonts, etc
const theme = extendTheme({
  styles: {
    global: {
      '#app': {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 'calc(100vh - 1rem)',
        width: 'calc(100vw - 2rem)',
        margin: '1rem',
        marginBottom: 0
      },
      '.center': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        height: '100%',
      },
      '.color': {
        color: '#6D4FD3'
      }
    }
  },
  colors: {
    primary: 'linear-gradient(189.42deg, rgba(1, 163, 222, 0.7) -214.82%, rgba(102, 85, 212, 0.7) 92.88%), rgba(0, 0, 0, 0.6)',
    primaryHover: '#6D4FD3',
    lightBlue: '#00A4DE',
    purple: '#6655D4',
    black: '#00082D',
    glass: 'rgba(243, 243, 243, 0.2)',
    background: 'rgba(109, 79, 211, 0.05);',
    white: '#ffffff'
  },
  fonts: {
    heading: "-apple-system, BlinkMacSystemFont, Roboto",
    body: "-apple-system, BlinkMacSystemFont, Roboto"
  },
  fontSizes: {
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900,
  }
})

export default theme
