import React from 'react'

import * as S from './styles'

export interface TitlePanelProps {
  /**
   * **title** is a string used for the main
   * heading of the component
   */
  title: string
  /**
   * **subTitle** is an optional string
   * used for the secondary heading
   */
  subTitle?: string
}

const TitlePanel = ({ title, subTitle }: TitlePanelProps) => (
  <S.TitlePanel>
    <S.Title>{title}</S.Title>
    {subTitle && <S.SubTitle>{subTitle}</S.SubTitle>}
  </S.TitlePanel>
)

export default TitlePanel
