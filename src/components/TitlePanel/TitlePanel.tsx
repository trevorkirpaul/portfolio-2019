import React from 'react'

import * as S from './styles'

export interface TitlePanelProps {
  title: string
  subTitle?: string
}

const TitlePanel = ({ title, subTitle }: TitlePanelProps) => (
  <S.TitlePanel>
    <S.Title>{title}</S.Title>
    {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
  </S.TitlePanel>
)

export default TitlePanel
