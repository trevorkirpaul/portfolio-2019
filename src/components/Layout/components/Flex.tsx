import React from 'react'

import * as S from '../styles'

export interface FlexProps {
  children: React.ReactNode
}

const Flex = ({ children }: FlexProps) => <S.Flex>{children}</S.Flex>

export default Flex
