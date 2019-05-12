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
  key?: any
  style?: any
}

const Content = ({
  children,
  background,
  color,
  danger,
  success,
  warning,
  className,
  key,
  style
}: ContentProps) => (
  <S.Content
    className={className}
    background={background}
    color={color}
    danger={danger}
    success={success}
    warning={warning}
    key={key}
    style={style}
  >
    {children}
  </S.Content>
)

Content.defaultProps = {
  background: '#383838',
  color: '#f8f8f8'
}

export default Content
