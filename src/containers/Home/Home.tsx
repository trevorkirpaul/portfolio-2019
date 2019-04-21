import React from 'react'

import Layout from '../../components/Layout'
import TitlePanel from '../../components/TitlePanel'
import Text from '../../components/Text'
import Link from '../../components/Link'

const Home = () => (
  <Layout>
    <TitlePanel title='Trevor Kirpaul' subTitle='Web Developer' />

    <Layout.Spacer marginTop='15px' marginBottom='35px' />

    <Layout.Hero>
      <Text type='span'>
        Professional web developer specializing in React and Front End
        development
      </Text>
    </Layout.Hero>

    <Layout.Spacer marginTop='15px' marginBottom='35px' />

    <Layout.Hero>
      <Link url='https://github.com/trevorkirpaul'>github</Link>
    </Layout.Hero>
  </Layout>
)

export default Home
