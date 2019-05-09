import React from 'react'
import { ThemeProvider } from 'styled-components'

import { themeDay, themeNight } from '../shared/theme'

const theme = 'day'

/**
 * **themeDecorator** is used to wrap `themeProvider`
 * around a sstory easily. This helps us style our 'themed'
 * styled components correctly using the same theme from
 * the App
 */
const themeDecorator = (storyFn: any) => (
  <ThemeProvider theme={theme === 'day' ? themeDay : themeNight}>
    {storyFn()}
  </ThemeProvider>
)

export default themeDecorator
