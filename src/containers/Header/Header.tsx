import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import Button from '../../components/Button'
import Icon from '../../components/Icon'
import Layout from '../../components/Layout'
import NavBar from '../../components/NavBar'
import withApplicationContext from '../../shared/HoC/withApplicationContext'
import { ApplicationContextState } from '../../shared/context/Application'

export interface HeaderProps extends RouteComponentProps {
  applicationContext: ApplicationContextState
}

const Header = ({
  location,
  applicationContext: { theme, setTheme }
}: HeaderProps) => {
  const { pathname } = location

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
            }
          ]}
        />

        <Button
          onClick={() => setTheme(theme === 'day' ? 'night' : 'day')}
          disabled={false}
        >
          <Icon type='Moon' />
        </Button>
      </Layout.Flex>
    </Layout>
  )
}
export default withApplicationContext(withRouter(Header))
