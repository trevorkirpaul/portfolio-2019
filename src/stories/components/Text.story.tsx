import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'

import Text from 'components/Text'

import themeDecorator from '../themeDecorator'

addDecorator(themeDecorator)

storiesOf('Text', module)
  .add('base (P)', () => (
    <React.Fragment>
      <Text>
        This is the defult Text element, using a Paragraph element as its base
      </Text>
    </React.Fragment>
  ))
  .add('span', () => (
    <React.Fragment>
      <Text type='span'>This is Text using the "Type" of "span"</Text>
    </React.Fragment>
  ))
