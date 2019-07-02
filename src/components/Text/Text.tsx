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
  className?: string
  size: string
}

const Text = ({ type, children, className, size }: TextProps) => {
  switch (type) {
    case 'span':
      return (
        <S.Span type={type} className={className} size={size}>
          {children}
        </S.Span>
      )
    case 'paragraph':
      return (
        <S.Paragraph type={type} className={className} size={size}>
          {children}
        </S.Paragraph>
      )
    default:
      return (
        <S.Paragraph type={type} className={className} size={size}>
          {children}
        </S.Paragraph>
      )
  }
}

Text.defaultProps = {
  type: 'paragraph',
  children: 'missing text',
  size: 'medium'
}

export default Text
