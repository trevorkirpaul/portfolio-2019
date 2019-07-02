import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
import Switch from 'react-switch'

import Icon from 'components/Icon'
import Layout from 'components/Layout'
import NavBar from 'components/NavBar'
import withApplicationContext from 'shared/HoC/withApplicationContext'
import { ApplicationContextState } from 'shared/context/Application'

import * as S from './styles'

export interface HeaderProps extends RouteComponentProps {
  applicationContext: ApplicationContextState
}

const Header = ({
  location,
  applicationContext: { theme, setTheme }
}: HeaderProps) => {
  const { pathname } = location

  // @checked - future state, not current
  const handleOnChange = (checked: boolean) => {
    if (!checked) {
      return setTheme('day')
    }

    return setTheme('night')
  }

  return (
    <Layout>
      <Layout.Flex>
        <NavBar
          links={[
            {
              id: '001',
              name: 'home',
              url: '/',
              active: pathname === '/'
            },
            {
              id: '002',
              name: 'contact',
              url: '/contact',
              active: pathname === '/contact'
            },
            {
              id: '003',
              name: 'snippets',
              url: '/snippets',
              active: pathname === '/snippets'
            }
          ]}
        />

        <Switch
          onChange={handleOnChange}
          checked={theme === 'night'}
          checkedIcon={
            <S.IconWrap>
              <Icon type='Moon' />
            </S.IconWrap>
          }
          uncheckedIcon={
            <S.IconWrap>
              <Icon type='Sun' color='#f8f8f8' />
            </S.IconWrap>
          }
          height={35}
          width={75}
          onColor='#ffc107'
        />
      </Layout.Flex>
    </Layout>
  )
}
export default withApplicationContext(withRouter(Header))
