import React from 'react'
import ReactDOM from 'react-dom'

import Content from './components/Content'

export interface ModalProps {
  children: React.ReactElement
  domNodeID: string
  visible: boolean
  handleClose: () => void
}

class Modal extends React.Component<ModalProps> {
  static Content = Content
  render() {
    const { children, domNodeID, handleClose, visible } = this.props

    const el = document.getElementById(domNodeID)

    if (!el || !visible) {
      return null
    }

    return ReactDOM.createPortal(
      React.cloneElement(children, [handleClose]),
      el
    )
  }
}

export default Modal
