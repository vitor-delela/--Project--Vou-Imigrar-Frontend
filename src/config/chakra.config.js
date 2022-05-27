import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  styles: {
    global: {
      ':root': {
        '--chakra-colors-pink-500': '#6655D4',
        '--chakra-colors-pink-600': '#6655D4'
      },
      '.chakra-accordion__icon': {
        width: '35px!important',
        height: '35px!important',
        color: '#6655D4!important'
      },
      '#root': {
        margin: 'auto',
        maxWidth: 'calc(600px + 2rem)'
      },
      '#app': {
        display: 'flex',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 'calc(100vh - 1rem)',
        width: 'calc(100vw - 2rem)',
        margin: '1rem',
        marginBottom: 0,
        maxWidth: '600px'
      },
      '.center': {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        width: '100%',
        height: '100%'
      },
      '.color': {
        color: '#6D4FD3'
      },
      '.chakra-container': {
        padding: '0px!important'
      },
      '.chakra-radio': {
        padding: '10px 20px',
        border: '1px solid #6D4FD3',
        borderRadius: '5px',
        color: '#6D4FD3'
      },
      '.selected': {
        backgroundColor: '#6D4FD3!important'
      }
    }
  },
  colors: {
    primary: 'linear-gradient(189.42deg, rgba(1, 163, 222, 0.8) -214.82%, rgba(102, 85, 212, 0.8) 92.88%), rgba(0, 0, 0, 0.6)',
    primaryHover: '#6D4FD3',
    lightBlue: '#00A4DE',
    purple: '#6655D4',
    black: '#00082D',
    glass: 'rgba(243, 243, 243, 0.2)',
    background: 'rgba(109, 79, 211, 0.05);',
    white: '#ffffff'
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, Roboto, arial, sans-serif',
    body: '-apple-system, BlinkMacSystemFont, Roboto, arial, sans-serif'
  },
  fontSizes: {
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem'
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
    black: 900
  }
})

export default theme
