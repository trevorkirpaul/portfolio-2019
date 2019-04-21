import React from 'react'

import Layout from '../../components/Layout'
import TitlePanel from '../../components/TitlePanel'
import Link from '../../components/Link'

const Contact = () => (
  <Layout>
    <TitlePanel title='Contact' />
    <Layout.Hero>
      <Link url='https://twitter.com/trevorkirpaul'>twitter</Link>
    </Layout.Hero>

    <Layout.Spacer marginBottom='25px' />

    <Layout.Section>
      <Link url='https://github.com/trevorkirpaul'>github</Link>
    </Layout.Section>
  </Layout>
)

export default Contact
