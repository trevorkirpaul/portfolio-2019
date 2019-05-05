import React from 'react'

import { storiesOf } from '@storybook/react'

import Button from 'components/Button'

storiesOf('Button', module).add('base', () => (
  <React.Fragment>
    <Button disabled={false} onClick={() => {}}>
      Click
    </Button>
  </React.Fragment>
))
