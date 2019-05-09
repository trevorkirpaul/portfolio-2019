import React from 'react'

import * as S from './styles'

export interface TextProps {
  /**
   * **type** determines which type
   * of element will be used
   *
   * `span` Span
   * `paragraph` Paragraph
   * defaults to Paragraph
   */
  type: string
  children: React.ReactNode
}

const Text = ({ type, children }: TextProps) => {
  switch (type) {
    case 'span':
      return <S.Span>{children}</S.Span>
    case 'paragraph':
      return <S.Paragraph>{children}</S.Paragraph>
    default:
      return <S.Paragraph>{children}</S.Paragraph>
  }
}

Text.defaultProps = {
  type: 'paragraph',
  children: 'missing text'
}

export default Text
