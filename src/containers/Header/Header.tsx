import React from 'react'
import { RouteComponentProps, withRouter } from 'react-router-dom'
// import { History } from 'history'

import Layout from '../../components/Layout'
import NavBar from '../../components/NavBar'

export interface HeaderProps {}

const Header = ({ location }: RouteComponentProps<HeaderProps>) => {
  const { pathname } = location

  return (
    <Layout>
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
    </Layout>
  )
}
export default withRouter(Header)
