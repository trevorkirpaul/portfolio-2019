import React from 'react'

import * as S from './styles'

interface LayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => <S.Layout>{children}</S.Layout>

export { Layout as default, LayoutProps }
