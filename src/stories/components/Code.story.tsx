import React from 'react'

import { storiesOf, addDecorator } from '@storybook/react'

import Code from 'components/Code'

import themeDecorator from '../themeDecorator'

addDecorator(themeDecorator)

const source = `const greeter = name => console.log(\`Hello \${name}\`)
greeter("Trevor") // Hello, Trevor
`

storiesOf('Code', module).add('base', () => (
  <React.Fragment>
    <Code source={source} />
  </React.Fragment>
))
