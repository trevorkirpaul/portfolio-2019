import React from 'react'

import * as S from './styles'

export interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => <S.Layout>{children}</S.Layout>

export default Layout
