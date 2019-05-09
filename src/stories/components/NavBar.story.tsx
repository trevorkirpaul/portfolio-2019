import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'

import NavBar from 'components/NavBar'

import themeDecorator from '../themeDecorator'
import routerDecorator from '../routerDecorator'

addDecorator(themeDecorator)
addDecorator(routerDecorator)

storiesOf('NavBar', module).add('base', () => (
  <React.Fragment>
    <NavBar
      links={[
        {
          id: '001',
          name: 'home',
          url: '/',
          active: false
        },
        {
          id: '002',
          name: 'contact',
          url: '/contact',
          active: false
        },
        {
          id: '003',
          name: 'snippets',
          url: '/snippets',
          active: false
        }
      ]}
    />
  </React.Fragment>
))
