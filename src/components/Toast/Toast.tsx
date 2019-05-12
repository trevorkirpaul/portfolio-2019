import React from 'react'
import ReactDOM from 'react-dom'
import { useTransition } from 'react-spring'

import Content from './components/Content'

const RenderChildrenWithAnimation = ({
  children,
  visible,
  background,
  color,
  danger,
  success,
  warning
}: {
  children: React.ReactNode
  visible: boolean
  background: string
  color: string
  danger: boolean
  success: boolean
  warning: boolean
}) => {
  const transition = useTransition(visible, null, {
    from: { opacity: 0, bottom: -50, position: 'absolute' },
    enter: { opacity: 1, bottom: 0 },
    leave: { opacity: 0 }
  })

  return transition.map(
    ({ item, key, props }: { item?: any; key: any; props: any }) =>
      item && (
        <Content
          key={key}
          style={props}
          background={background}
          color={color}
          danger={danger}
          success={success}
          warning={warning}
        >
          {children}
        </Content>
      )
  )
}

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
  background?: string
  color?: string
  danger?: boolean
  success?: boolean
  warning?: boolean
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
    const {
      children,
      domNodeID,
      visible,
      background,
      color,
      danger,
      success,
      warning
    } = this.props

    const el = document.getElementById(domNodeID)

    if (!el) {
      return null
    }

    return ReactDOM.createPortal(
      <RenderChildrenWithAnimation
        background={background}
        color={color}
        danger={danger}
        success={success}
        warning={warning}
        children={children}
        visible={visible}
      />,
      el
    )
  }
}

export default Toast
