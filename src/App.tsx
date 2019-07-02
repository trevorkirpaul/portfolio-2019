import React from 'react'
import { createGlobalStyle } from 'styled-components'
import { ThemeProvider } from 'styled-components'

import { themeDay, themeNight } from 'shared/theme'
import { base } from 'shared/utils'

import ApplicationContext from 'shared/context/Application'
import Router from 'containers/Router'

const GlobalStyle = createGlobalStyle`
  body {
    background: ${props => (props.theme === 'day' ? '#e8e8e8' : '#383838')};
    font-size: ${base}px;
  }
`

const App = () => {
  const [theme, setTheme] = React.useState('day')

  React.useEffect(() => {
    const cachedTheme = localStorage.getItem('cachedTheme')

    /**
     * Check if we have a cached value for the theme
     * and use it
     */
    if (cachedTheme && theme !== cachedTheme) {
      setTheme(cachedTheme)
    }
  }, [theme])

  /**
   * **setThemeAndCache** is used to set the theme as well as
   * caching the theme for future visits
   *
   * @param theme string
   */
  const setThemeAndCache = (theme: string) => {
    localStorage.setItem('cachedTheme', theme)

    return setTheme(theme)
  }

  return (
    <ThemeProvider theme={theme === 'day' ? themeDay : themeNight}>
      <React.Fragment>
        <GlobalStyle theme={theme} />
        <ApplicationContext.Provider
          value={{
            theme,
            setTheme: setThemeAndCache
          }}
        >
          <Router />
        </ApplicationContext.Provider>
      </React.Fragment>
    </ThemeProvider>
  )
}

export default App
