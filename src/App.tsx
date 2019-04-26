import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components'

import { themeDay, themeNight } from './shared/theme'

import ApplicationContext from './shared/context/Application'
import Router from './containers/Router'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.theme === 'day' ? '#e8e8e8' : '#383838')}
  }
`

const App = () => {
  const [theme, setTheme] = React.useState('day')

  return (
    <ThemeProvider theme={theme === 'day' ? themeDay : themeNight}>
      <React.Fragment>
        <GlobalStyle theme={theme} />
        <ApplicationContext.Provider
          value={{
            theme,
            setTheme
          }}
        >
          <Router />
        </ApplicationContext.Provider>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
