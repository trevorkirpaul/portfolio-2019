import React from 'react'

import * as S from '../styles'

export interface ContentProps {
  className?: string
  children: React.ReactNode
  handleClose?: () => void
  style: any
  background?: string
  color?: string
}

const Content = ({
  className,
  children,
  style,
  background,
  color
}: ContentProps) => {
  return (
    <S.Content
      className={className}
      style={style}
      background={background}
      color={color}
    >
      {children}
    </S.Content>
  )
}

export default Content
