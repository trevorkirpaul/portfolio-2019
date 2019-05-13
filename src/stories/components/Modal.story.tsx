import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Modal from 'components/Modal'
import TitlePanel from 'components/TitlePanel'
import Button from 'components/Button'
import Text from 'components/Text'

import themeDecorator from '../themeDecorator'
import addDivDecorator from '../addDivDecorator'

const TOAST_ROOT = 'MODAL-ROOT'

const StyledText = styled(Text)`
  color: #f8f8f8;
`

const StyledTextDark = styled(Text)`
  color: #383838;
`
const StyledButton = styled(Button)`
  color: #383838;
  background: palegoldenrod;
  border-radius: 5px;
  padding: 5px 10px;
`
const StyledButtonDark = styled(Button)`
  color: #f8f8f8;
  background: #383838;
  border-radius: 5px;
  padding: 5px 10px;
`

const StyledModal = styled(Modal)`
  background: paleturquoise;
  padding: 25px;
  border-radius: 5px;
  /* box-shadow: 3px 3px 5px 6px #ccc; */
  box-shadow: 0 10px 6px -6px #777;
`

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
        <TitlePanel title='Modal Title' subTitle='Base Modal' />

        <Button onClick={() => toggleVisibility(!visible)}>Close</Button>
      </Modal>
    </React.Fragment>
  )
}

const ModalUsingBackgroundAndColorWithState = () => {
  const [visible, toggleVisibility] = React.useState(false)

  return (
    <React.Fragment>
      <Button onClick={() => toggleVisibility(!visible)}>Show Modal</Button>
      <Modal
        visible={visible}
        domNodeID='MODAL-ROOT'
        handleClose={() => toggleVisibility(!visible)}
        background='#383838'
        color='#f8f8f8'
      >
        <StyledText>
          This Modal sets the background color using `props.background`
        </StyledText>
        <StyledText>
          It also sets the color but it's not used since we're using Text
          components
        </StyledText>
        <StyledButton onClick={() => toggleVisibility(!visible)}>
          Close
        </StyledButton>
      </Modal>
    </React.Fragment>
  )
}

const CustomStyledModalWithState = () => {
  const [visible, toggleVisibility] = React.useState(true)

  return (
    <React.Fragment>
      <Button onClick={() => toggleVisibility(!visible)}>Show Modal</Button>
      <StyledModal
        visible={visible}
        domNodeID='MODAL-ROOT'
        handleClose={() => toggleVisibility(!visible)}
      >
        <StyledTextDark>
          This Modal sets the background color using `props.background`
        </StyledTextDark>
        <StyledButtonDark onClick={() => toggleVisibility(!visible)}>
          Close
        </StyledButtonDark>
      </StyledModal>
    </React.Fragment>
  )
}

storiesOf('Modal', module)
  .addDecorator(storyFn => addDivDecorator(storyFn, TOAST_ROOT))
  .addDecorator(storyFn => themeDecorator(storyFn))
  .add('base', () => <BaseModalWithState />)
  .add('using background and color props', () => (
    <ModalUsingBackgroundAndColorWithState />
  ))
  .add('custom styles', () => <CustomStyledModalWithState />)
