import React from 'react'

import * as S from './styles'

export interface ButtonProps {
  /**
   * React.ReactNode which will be used
   * as the Button label
   */
  children: React.ReactNode
  /**
   * function invoked when Button is clicked
   */
  onClick: () => void
  /**
   * `boolean` which disables the button and
   * adds extra styling such as lower opacity
   * and an on-hover effect
   */
  disabled?: boolean
  className?: string
}

const Button = ({ children, disabled, onClick, className }: ButtonProps) => (
  <S.Button className={className} onClick={onClick} disabled={disabled}>
    {children}
  </S.Button>
)

Button.defaultProps = {
  disabled: false
}

export default Button
