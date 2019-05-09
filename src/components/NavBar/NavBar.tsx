import React from 'react'

import Link from 'components/Link'
import Text from 'components/Text'

import * as S from './styles'

export interface NavBarProps {
  /**
   * **links** is an `array` of `objects`
   * which represet each link 'item'
   *
   * {
   *  id: string
   *  name: string
   *  url: string
   *  active: boolean
   * }
   */
  links: {
    id: string
    name: string
    url: string
    active: boolean
  }[]
}

const NavBar = ({ links }: NavBarProps) => (
  <S.NavBar>
    <S.UL>
      {links.map(link => (
        <S.LI key={link.id}>
          <Link url={link.url} type='internal' active={link.active}>
            <Text>{link.name}</Text>
          </Link>
        </S.LI>
      ))}
    </S.UL>
  </S.NavBar>
)

export default NavBar
