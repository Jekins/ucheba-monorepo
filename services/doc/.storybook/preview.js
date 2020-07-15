import React from 'react';
import { addDecorator, addParameters } from '@storybook/react'
import themeProject from '@ucheba/portal.web/src/theme'
import GlobalStyles from '@ucheba/ui/core/GlobalStyles'
import { ThemeProvider } from 'styled-components'
import { withKnobs } from '@storybook/addon-knobs'
import { withA11y } from '@storybook/addon-a11y'
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks'
import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

addParameters({
  docs: {
    container: DocsContainer,
    page: DocsPage,
  },
})

addParameters({
  viewport: {
    viewports: INITIAL_VIEWPORTS,
    defaultViewport: 'someDefault',
  },
})

addParameters({
  backgrounds: [
    { name: 'white', value: '#ffffff', default: true },
    { name: 'twitter', value: '#00aced' },
    { name: 'facebook', value: '#3b5998' },
  ],
})

addDecorator(withKnobs)

addDecorator(withA11y)

addDecorator(storyFn => {
  return (
    <ThemeProvider theme={{ mode: 'default', ...themeProject.variables }}>
      <GlobalStyles />
      {storyFn()}
    </ThemeProvider>
  )
})
