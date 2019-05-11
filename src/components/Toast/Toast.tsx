import React from 'react'
import ReactDOM from 'react-dom'

import Content from './components/Content'

export interface ToastProps {
  /**
   * **Toast** contents
   */
  children: React.ReactNode
  /**
   * `string` used as the id for the `div`
   * created by **Toast** dynamically
   */
  domNodeID: string
  /**
   * `boolean` which determines if **Toast** is rendered
   */
  visible: boolean
}

/**
 * **Toast** is a reusable modal-type component which is
 * rendered using React Portal.
 *
 * **Toast** will dynamically
 * create a `div` element using the `domNodeID` prop as
 * the id.
 *
 * This component should be used for "toast notifications"
 * and other modal-type features which need to render above
 * other elements.
 */
class Toast extends React.Component<ToastProps> {
  static Content = Content

  render() {
    const { children, domNodeID, visible } = this.props

    const el = document.getElementById(domNodeID)

    if (!el || !visible) {
      return null
    }
    return ReactDOM.createPortal(children, el)
  }
}

export default Toast
