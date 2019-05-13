import React from 'react'

import Layout from 'components/Layout'
import TitlePanel from 'components/TitlePanel'
import Text from 'components/Text'

import WelcomeToast from './components/WelcomeToast'

const Home = () => {
  const [visible, toggleVisibility] = React.useState(true)

  return (
    <Layout>
      <WelcomeToast visible={visible} toggleVisibility={toggleVisibility} />

      <TitlePanel title='Trevor Kirpaul' subTitle='Web Developer' />

      <Layout.Spacer marginTop='15px' marginBottom='35px' />

      <Layout.Hero>
        <Text>
          I'm currently specialized in Front End development using React
          professionally but I am also very comfortable with other aspects of
          programming.
        </Text>

        <Layout.Spacer marginBottom='25px' />

        <Text>
          Currently, outside of work, I love working on personal projects,
          computer hardware, playing video games, and watching awesome shows
          like Game of Thrones!
        </Text>

        <Layout.Spacer marginBottom='25px' />

        <Text>
          My main personal projects currently involve this site as well as a
          larger, long-term web app with the focus being to show off how GraphQL
          can be a benefit over only exposing REST endpoints.
        </Text>

        <Layout.Spacer marginBottom='25px' />

        <Text>
          I'm always creating new React projects to experiment with codebase
          organization, documentation, communication, and other project
          management ideas that lean more towards developers.
        </Text>

        <Layout.Spacer marginBottom='25px' />

        <Text>
          I'm continually seeking to improve those aspects at work so most of my
          personal development tim is dedicated to them.
        </Text>
      </Layout.Hero>
    </Layout>
  )
}

export default Home
