import React from 'react'

import * as S from '../styles'

export interface ContentProps {
  children: React.ReactNode
  background?: string
  color?: string
  danger?: boolean
  success?: boolean
  warning?: boolean
  className?: string
  style?: any
  responsive: boolean
}

const Content = ({
  children,
  background,
  color,
  danger,
  success,
  warning,
  className,
  style,
  responsive
}: ContentProps) => (
  <S.Content
    className={className}
    background={background}
    color={color}
    danger={danger}
    success={success}
    warning={warning}
    style={style}
    responsive={responsive}
  >
    {children}
  </S.Content>
)

Content.defaultProps = {
  background: '#383838',
  color: '#f8f8f8'
}

export default Content
