import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'

import Icon from 'components/Icon'

import themeDecorator from '../themeDecorator'

addDecorator(themeDecorator)

storiesOf('Icon', module).add('base', () => (
  <React.Fragment>
    <Icon type='Camera' color='#383838' />
  </React.Fragment>
))
