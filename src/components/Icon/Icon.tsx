import React from 'react'
import * as I from 'react-feather'

import * as S from './styles'

export interface IconProps {
  /**
   * `string` which determines which type of icon
   * is rendered
   */
  type: string
  /**
   * `string` which sets the stroke color
   */
  color: string
  className?: string
}

const Icon = ({ type, color, className }: IconProps) => {
  const IconFromType = (I as any)[type]

  return (
    <S.Icon className={className}>
      <IconFromType color={color} />
    </S.Icon>
  )
}

Icon.defaultProps = {
  type: 'Camera',
  color: '#383838'
}

export default Icon
