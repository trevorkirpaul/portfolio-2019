import React from 'react'

import Layout from '../../components/Layout'
import TitlePanel from '../../components/TitlePanel'
import Text from '../../components/Text'
import Link from '../../components/Link'
import NavBar from '../../components/NavBar'

const Home = () => (
  <Layout>
    <NavBar
      links={[
        {
          id: '001',
          name: 'home',
          url: '/'
        }
      ]}
    />
    <TitlePanel title='Trevor Kirpaul' subTitle='Web Developer' />

    <Layout.Spacer marginTop='15px' marginBottom='35px' />

    <Layout.Hero>
      <Text type='span'>
        Professional web developer specializing in React and Front End
        development
      </Text>
    </Layout.Hero>

    <Layout.Spacer marginTop='15px' marginBottom='35px' />

    <Layout.Section>
      <Link url='https://github.com/trevorkirpaul'>github</Link>
    </Layout.Section>
  </Layout>
)

export default Home
