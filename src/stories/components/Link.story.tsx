import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'

import Link from 'components/Link'

import themeDecorator from '../themeDecorator'
import routerDecorator from '../routerDecorator'

addDecorator(themeDecorator)
addDecorator(routerDecorator)

storiesOf('Link', module)
  .add('base', () => (
    <React.Fragment>
      <Link url='#'>
        This is the base Link component which defaults to being a standard
        Anchor element
      </Link>
    </React.Fragment>
  ))
  .add('React Router Link', () => (
    <React.Fragment>
      <Link url='#' type='internal'>
        This is the React Router Link version
      </Link>
    </React.Fragment>
  ))
