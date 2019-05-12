import React from 'react'

import * as S from '../styles'

export interface ContentProps {
  children: React.ReactNode
  handleClose?: () => void
}

const Content = ({ children }: ContentProps) => {
  return <S.Content>{children}</S.Content>
}

export default Content
