import React from 'react'
import {AppProps, AppContext} from 'next/app'
import {ThemeProvider} from 'styled-components'
import Theme from '@ucheba/utils/helpers/styles'
import {addIsMobileToPropsApp} from '@ucheba/utils/helpers/next'

const themeProject = new Theme({
  colors: {
    primary: 'orange',
  },
})

const App = ({Component, pageProps}: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={{mode: 'default', ...themeProject.variables}}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

App.getInitialProps = async ({ctx, Component}: AppContext): Promise<{}> =>
  addIsMobileToPropsApp(ctx, Component)

export default App
