import React from 'react'

import Layout from '../../components/Layout'
import TitlePanel from '../../components/TitlePanel'
import Link from '../../components/Link'

const Contact = () => (
  <Layout>
    <TitlePanel title='Contact' />
    <Layout.Hero>
      <Link url='http://www.twitter.com'>twitter</Link>
    </Layout.Hero>
  </Layout>
)

export default Contact
