import React from 'react'

import * as S from './styles'

export interface ButtonProps {
  children: React.ReactNode
  onClick: () => void
  disabled: boolean
}

const Button = ({ children, disabled, onClick }: ButtonProps) => (
  <S.Button onClick={onClick} disabled={disabled}>
    {children}
  </S.Button>
)

export default Button
