import React from 'react'

import Layout from 'components/Layout'
import TitlePanel from 'components/TitlePanel'
import Text from 'components/Text'

const Home = () => {
  return (
    <Layout>
      <TitlePanel title='Trevor Kirpaul' subTitle='Web Developer' />

      <Layout.Spacer marginTop='15px' marginBottom='35px' />

      <Layout.Hero>
        <Text>
          I'm currently specialized in Front End development using React
          professionally but my passion for programming extends in many
          different directions.
        </Text>
      </Layout.Hero>
    </Layout>
  )
}

export default Home
