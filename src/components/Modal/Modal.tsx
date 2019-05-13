import React from 'react'
import ReactDOM from 'react-dom'
import { Transition } from 'react-spring/renderprops'

import Content from './components/Content'

import * as S from './styles'

export interface ModalProps {
  className?: string
  children: React.ReactElement[]
  domNodeID: string
  visible: boolean
  handleClose: () => void
  background?: string
  color?: string
}

/**
 * **Modal** is a shared component rendered using
 * React Portal. You must create a `domNode`, generally
 * a `div` element with a unique ID, and pass the ID
 * to `props.domNodeID`
 *
 * There are 2 elements on separate animation "springs"
 *
 * The first is the **Backdrop** which handles
 * rendering a background below the modal which also
 * prevents the user from clicking items under the
 * modal.
 *
 * The second is **Content** which is a wrapper
 * around the children elements. This wraps the animation
 * and modal styling around any children elements.
 *
 * It's recommended to create shared components based
 * which use **Modal** unless you specifically need
 * modal elements on multiple DOM anchors
 */
class Modal extends React.Component<ModalProps> {
  render() {
    const {
      className,
      children,
      domNodeID,
      handleClose,
      visible,
      background,
      color
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
            enter={{ opacity: 0.5 }}
            leave={{ opacity: 0 }}
          >
            {show => show && (props => <S.Backdrop style={props} />)}
          </Transition>
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
                  className={className}
                  style={props}
                  background={background}
                  color={color}
                >
                  {children}
                </Content>
              ))
            }
          </Transition>
        </React.Fragment>,
        [handleClose]
      ),
      el
    )
  }
}

export default Modal
