import React from 'react'

import Link from '../Link'
import Text from '../Text'

import * as S from './styles'

export interface NavBarProps {
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
