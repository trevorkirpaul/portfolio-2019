import React, { ComponentType } from 'react'

import ApplicationContext, {
  ApplicationContextState
} from 'shared/context/Application'

export interface WrappedComponentProps {
  applicationContext: ApplicationContextState
}

const withApplicationContext = (
  WrappedComponent: ComponentType<WrappedComponentProps>
) => {
  class WithApplicationContext extends React.Component {
    render() {
      return (
        <ApplicationContext.Consumer>
          {(applicationContext: ApplicationContextState) => (
            <WrappedComponent
              {...this.props}
              applicationContext={applicationContext}
            />
          )}
        </ApplicationContext.Consumer>
      )
    }
  }

  return WithApplicationContext
}

export default withApplicationContext
