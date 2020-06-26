import React from 'react'
import { AppProps, AppContext } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { addIsMobileToPropsApp } from '@ucheba/utils/helpers/next'
import GlobalStyles from '@ucheba/ui/core/GlobalStyles'
import themeProject from '../theme'

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={{ mode: 'default', ...themeProject.variables }}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

App.getInitialProps = async ({ ctx, Component }: AppContext): Promise<{}> =>
  addIsMobileToPropsApp(ctx, Component)

export default App
