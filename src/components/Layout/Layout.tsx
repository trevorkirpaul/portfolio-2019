import React, { Component } from 'react'

import Hero from './components/Hero'
import Spacer from './components/Spacer'

import * as S from './styles'

export interface LayoutProps {
  children: React.ReactNode
}

class Layout extends Component<LayoutProps> {
  static Hero = Hero
  static Spacer = Spacer
  render() {
    const { children } = this.props
    return <S.Layout>{children}</S.Layout>
  }
}

export default Layout
