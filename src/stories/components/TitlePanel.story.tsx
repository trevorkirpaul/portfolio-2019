import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'

import TitlePanel from 'components/TitlePanel'

import themeDecorator from '../themeDecorator'

addDecorator(themeDecorator)

storiesOf('TitlePanel', module).add('base', () => (
  <React.Fragment>
    <TitlePanel title='Title' subTitle='SubTitle' />
  </React.Fragment>
))
