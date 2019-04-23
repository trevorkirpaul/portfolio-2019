import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'

import Layout from '../../components/Layout'
import NavBar from '../../components/NavBar'
import Icon from '../../components/Icon'

export interface HeaderProps {}

const Header = ({ location }: RouteComponentProps<HeaderProps>) => {
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

        <Icon type='Moon' />
      </Layout.Flex>
    </Layout>
  )
}
export default withRouter(Header)
