import React from 'react'

import Layout from 'components/Layout'
import TitlePanel from 'components/TitlePanel'
import Text from 'components/Text'
import Heading from 'components/Heading'
import Link from 'components/Link'

import * as S from './styles'

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

      <Layout.Spacer marginTop='15px' marginBottom='35px' />

      <Layout.Hero>
        <Heading as='h2'>What I'm Currently Working On</Heading>
      </Layout.Hero>

      <Layout.Spacer marginTop='15px' marginBottom='35px' />

      <Layout.Hero>
        <Heading as='h3'>storybook-feedback</Heading>
        <Layout.Spacer marginTop='0px' marginBottom='15px' />

        <Link
          type='external'
          url='https://github.com/trevorkirpaul/storybook-feedback'
        >
          Github
        </Link>

        <Layout.Spacer marginTop='0px' marginBottom='5px' />

        <Link
          type='external'
          url='https://yarnpkg.com/en/package/storybook-feedback'
        >
          Yarn Package Listing
        </Link>

        <Layout.Spacer marginTop='0px' marginBottom='15px' />

        <S.Text>
          Storybook is a platform that helps with visually testing
          components/code. It's one of my favorite tools and it supports addons
          which can greatly extend the experience.
        </S.Text>

        <S.Text>
          I created `storybook-addon` because I wanted an easy and immediate way
          to communicate about a story. We are using storybook during testing
          and if a designer notices a bug then this addon allows them to easily
          document that problem.
        </S.Text>

        <S.Text>
          This project has been a great experience with creating an NPM package.
          There's a lot of extra work involved with ensuring sharable code is
          lightweight and easy to use for others.
        </S.Text>
      </Layout.Hero>
    </Layout>
  )
}

export default Home
