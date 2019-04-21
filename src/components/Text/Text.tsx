import React from 'react'

import * as S from './styles'

export interface TextProps {
  type: string
  children: React.ReactNode
}

const Text = ({ type, children }: TextProps) => {
  switch (type) {
    case 'span':
      return <S.Span>{children}</S.Span>
    default:
      return <S.Paragraph>{children}</S.Paragraph>
  }
}

Text.defaultProps = {
  type: 'paragraph',
  children: 'missing text'
}

export default Text
