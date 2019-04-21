import React from 'react'

import * as S from './styles'

export interface LinkProps {
  children: React.ReactNode
  url: string
  target: string
}

const Link = ({ children, url, target }: LinkProps) => (
  <S.Link href={url} target={target}>
    {children}
  </S.Link>
)

Link.defaultProps = {
  target: 'blank'
}

export default Link
