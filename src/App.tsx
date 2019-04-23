import React from 'react'
import { ThemeProvider } from 'styled-components'

import theme from './shared/theme'

import Router from './containers/Router'

const App = () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
)

export default App
