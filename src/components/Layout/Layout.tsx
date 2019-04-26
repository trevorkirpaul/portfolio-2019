import React, { Component } from 'react'

import Flex from './components/Flex'
import Hero from './components/Hero'
import Spacer from './components/Spacer'
import Section from './components/Section'

import * as S from './styles'

export interface LayoutProps {
  children: React.ReactNode
}

/**
 * **Layout** is a component used to
 * handle structure, spacing, organization, and
 * any other visually related concerns
 *
 * **Layout** itself should be used as your main div
 * or wrapper for a view.
 *
 * `Layout.Spacer` should be used when padding/margin
 * is needed between elements
 *
 * `Layout.Hero` is used for Hero type panel/div elements
 *
 * `Layout.Section` is used for sections, lower leverl grouping,
 * anytime that a div would be used
 */
class Layout extends Component<LayoutProps> {
  static Flex = Flex
  static Hero = Hero
  static Spacer = Spacer
  static Section = Section
  render() {
    const { children } = this.props
    return <S.Layout>{children}</S.Layout>
  }
}

export default Layout
