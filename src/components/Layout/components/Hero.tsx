import React from 'react'

import * as S from '../styles'

export interface HeroProps {
  children: React.ReactNode
}

const Hero = ({ children }: HeroProps) => <S.Hero>{children}</S.Hero>

export default Hero
