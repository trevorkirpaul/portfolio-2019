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
  /**
   * Optional prop which sets the background color for the Content
   */
  background: string
  /**
   * Optional prop which sets the font color for the Content.
   * This will only affect native elements and not shared
   * components like **Text** or **TitlePanel**
   */
  color: string
  /**
   * When `true`, will use the "Danger" theme. This takes precedence
   * over **success** and **warning**
   */
  danger: boolean
  /**
   * When `true`, will use the "Success" theme. This takes precedence
   * over **warning**
   */
  success: boolean
  /**
   * When `true`, will use the "Warning" theme.
   */
  warning: boolean
  /**
   * when `true`, changes the appearance of **Toast**'s **Content** to
   * become a less wide window style, rather than taking
   * up the entire viewport width
   */
  responsive: boolean
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
    warning: false,
    responsive: false
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
      className,
      responsive
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
                  responsive={responsive}
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
