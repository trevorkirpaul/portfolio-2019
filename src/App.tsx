import React from 'react'
import { ThemeProvider } from 'styled-components'

import Theme from './shared/theme'

import ApplicationContext from './shared/context/Application'
import Router from './containers/Router'

const App = () => {
  const [theme, setTheme] = React.useState('day')

  return (
    <ThemeProvider theme={Theme}>
      <ApplicationContext.Provider
        value={{
          theme,
          setTheme
        }}
      >
        <Router />
      </ApplicationContext.Provider>
    </ThemeProvider>
  )
}

export default App
