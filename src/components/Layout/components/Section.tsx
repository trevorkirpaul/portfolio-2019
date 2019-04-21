import React from 'react'

import * as S from '../styles'

export interface SectionProps {
  children: React.ReactNode
}

const Section = ({ children }: SectionProps) => (
  <S.Section>{children}</S.Section>
)

export default Section
