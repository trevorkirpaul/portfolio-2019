import React from 'react'
import { storiesOf } from '@storybook/react'

import Modal from 'components/Modal'
import TitlePanel from 'components/TitlePanel'
import Button from 'components/Button'

import themeDecorator from '../themeDecorator'
import addDivDecorator from '../addDivDecorator'

const TOAST_ROOT = 'MODAL-ROOT'

const BaseModalWithState = () => {
  const [visible, toggleVisibility] = React.useState(false)

  return (
    <React.Fragment>
      <Button onClick={() => toggleVisibility(!visible)}>Show Modal</Button>
      <Modal
        visible={visible}
        domNodeID='MODAL-ROOT'
        handleClose={() => toggleVisibility(!visible)}
      >
        <Modal.Content>
          <TitlePanel title='Modal Title' subTitle='Base Modal' />

          <Button onClick={() => toggleVisibility(!visible)}>Close</Button>
        </Modal.Content>
      </Modal>
    </React.Fragment>
  )
}

storiesOf('Modal', module)
  .addDecorator(storyFn => addDivDecorator(storyFn, TOAST_ROOT))
  .addDecorator(storyFn => themeDecorator(storyFn))
  .add('base', () => <BaseModalWithState />)
