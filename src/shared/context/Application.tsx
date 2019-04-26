import React, { Dispatch, SetStateAction } from 'react'

export interface ApplicationContextState {
  /**
   * **theme** is a `string` which determines
   * the theme for the Application
   */
  theme: string
  /**
   * **setTheme** is a function which
   * sets the value for `theme`
   */
  setTheme: Dispatch<SetStateAction<string>>
}

const ApplicationContext = React.createContext({
  theme: 'day',
  setTheme: () => {}
} as ApplicationContextState)

export default ApplicationContext
