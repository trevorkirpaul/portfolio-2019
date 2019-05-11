import React from 'react'
import { storiesOf } from '@storybook/react'
import styled from 'styled-components'

import Toast from 'components/Toast'
import Text from 'components/Text'
import Button from 'components/Button'
import Icon from 'components/Icon'

import themeDecorator from '../themeDecorator'
import addDivDecorator from '../addDivDecorator'

const TOAST_ROOT = 'toast-root'

const ToastIcon = styled(Icon)`
  margin-right: 10px;
`

const ToastLabel = styled(Text)`
  font-family: sans-serif;
  color: #383838;
`

const ToastLabelLight = styled(Text)`
  font-family: sans-serif;
  color: #f8f8f8;
`

const ToastWithState = () => {
  const [visible, toggleVisibility] = React.useState(true)

  const onClick = () => toggleVisibility(!visible)
  return (
    <React.Fragment>
      <Button onClick={onClick}>Show Toast: {visible ? 'ON' : 'OFF'}</Button>
      <Toast domNodeID={TOAST_ROOT} visible={visible}>
        <Toast.Content background='skyblue'>
          <ToastLabel>This is a Toast notification!</ToastLabel>
        </Toast.Content>
      </Toast>
    </React.Fragment>
  )
}

const DangerToastWithState = () => {
  const [visible, toggleVisibility] = React.useState(true)

  const onClick = () => toggleVisibility(!visible)
  return (
    <React.Fragment>
      <Button onClick={onClick}>Show Toast: {visible ? 'ON' : 'OFF'}</Button>
      <Toast domNodeID={TOAST_ROOT} visible={visible}>
        <Toast.Content danger>
          <ToastIcon type='XCircle' color='#f8f8f8' />
          <ToastLabelLight>
            This is a "danger" theme Toast notification!
          </ToastLabelLight>
        </Toast.Content>
      </Toast>
    </React.Fragment>
  )
}

const WarningToastWithState = () => {
  const [visible, toggleVisibility] = React.useState(true)

  const onClick = () => toggleVisibility(!visible)
  return (
    <React.Fragment>
      <Button onClick={onClick}>Show Toast: {visible ? 'ON' : 'OFF'}</Button>
      <Toast domNodeID={TOAST_ROOT} visible={visible}>
        <Toast.Content warning>
          <ToastIcon type='AlertCircle' color='#383838' />
          <ToastLabel>This is a "warning" theme Toast notification!</ToastLabel>
        </Toast.Content>
      </Toast>
    </React.Fragment>
  )
}

const SuccessToastWithState = () => {
  const [visible, toggleVisibility] = React.useState(true)

  const onClick = () => toggleVisibility(!visible)
  return (
    <React.Fragment>
      <Button onClick={onClick}>Show Toast: {visible ? 'ON' : 'OFF'}</Button>
      <Toast domNodeID={TOAST_ROOT} visible={visible}>
        <Toast.Content success>
          <ToastIcon type='CheckCircle' color='#f8f8f8' />
          <ToastLabelLight>
            This is a "success" theme Toast notification!
          </ToastLabelLight>
        </Toast.Content>
      </Toast>
    </React.Fragment>
  )
}

storiesOf('Toast', module)
  .addDecorator(storyFn => addDivDecorator(storyFn, TOAST_ROOT))
  .addDecorator(storyFn => themeDecorator(storyFn))
  .add('base', () => <ToastWithState />)
  .add('danger', () => <DangerToastWithState />)
  .add('warning', () => <WarningToastWithState />)
  .add('success', () => <SuccessToastWithState />)
