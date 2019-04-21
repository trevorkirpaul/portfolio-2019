import React from 'react'

import * as S from '../styles'

export interface SpacerProps {
  marginBottom: string
  marginTop: string
}

const Spacer = ({ marginTop, marginBottom }: SpacerProps) => (
  <S.Spacer marginTop={marginTop} marginBottom={marginBottom} />
)

Spacer.defaultProps = {
  marginTop: '0px',
  marginBottom: '0px'
}

export default Spacer
