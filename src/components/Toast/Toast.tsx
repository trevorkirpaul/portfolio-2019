import React from 'react'
import ReactDOM from 'react-dom'
import { Transition } from 'react-spring/renderprops'

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
  background: string
  color: string
  danger: boolean
  success: boolean
  warning: boolean
  className?: string
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
  static defaultProps = {
    background: '#383838',
    color: '#f8f8f8',
    danger: false,
    success: false,
    warning: false
  }

  static Content = Content

  render() {
    const {
      children,
      domNodeID,
      visible,
      background,
      color,
      danger,
      success,
      warning,
      className
    } = this.props

    const el = document.getElementById(domNodeID)

    if (!el) {
      return null
    }

    return ReactDOM.createPortal(
      React.cloneElement(
        <React.Fragment>
          <Transition
            items={visible}
            from={{ opacity: 0 }}
            enter={{ opacity: 1 }}
            leave={{ opacity: 0 }}
          >
            {show =>
              show &&
              (props => (
                <Content
                  style={props}
                  background={background}
                  color={color}
                  danger={danger}
                  success={success}
                  warning={warning}
                  className={className}
                >
                  {children}
                </Content>
              ))
            }
          </Transition>
        </React.Fragment>
      ),
      el
    )
  }
}

export default Toast
