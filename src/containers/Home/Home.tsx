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
          I'm currently specialized in Front End development using React, Vue,
          and Web Components professionally but my passion for programming
          extends in many different directions.
        </Text>
      </Layout.Hero>

      <Layout.Spacer marginTop='15px' marginBottom='35px' />

      <Layout.Hero>
        <Heading as='h2'>Changelog</Heading>
      </Layout.Hero>

      <Layout.Spacer marginTop='15px' marginBottom='35px' />

      <Layout.Hero>
        <Heading as='h3'>[0.0.1] July 23 2020</Heading>
        <Layout.Spacer marginTop='15px' marginBottom='15px' />

        <Text>
          I've recently been spending much of my personal development time on
          getting Keyfolio to a 1.0 / MVP release. It's been a super fun project
          to work on and I've learned a lot about Strapi (which has finally
          reached a release version, congrats Strapi team!!!).
        </Text>
        <Layout.Spacer marginTop='15px' marginBottom='15px' />
        <Text>
          I've also been spending a little time on storybook-feedback. There are
          major changes coming, switching from firebase to MongoDB and their
          Realms service. I've had some blockers with Google Auth but I'm
          planning on switching to rely on creating and storing users using
          Mongo. This is still a project which is near to my heart since I
          absolutely love Storybook and one of my major goals has been to
          produce an NPM package which actually gets used.
        </Text>
        <Layout.Spacer marginTop='15px' marginBottom='15px' />
        <Text>
          I'll try and continue to post updates following this "Changelog"
          format!
        </Text>
      </Layout.Hero>

      <Layout.Spacer marginTop='15px' marginBottom='35px' />

      <Layout.Hero>
        <Heading as='h2'>Notable Projects</Heading>
      </Layout.Hero>

      <Layout.Spacer marginTop='15px' marginBottom='35px' />

      <Layout.Hero>
        <Heading as='h3'>Keyfolio</Heading>
        <Layout.Spacer marginTop='0px' marginBottom='15px' />

        <S.Text>
          Keyfolio is an app for keyboard enthusiasts to track their keyboard
          collections and also acts as a database of custom keyboard kits. Users
          can add keyboards to their list and document their build details.
        </S.Text>

        <S.Text>
          I was inspired to create this project when I noticed that many of my
          friends relied on Google Sheets to track and share their collection.
          Whiles that method worked fine, I saw a great chance to contribute to
          a community which I love.
        </S.Text>

        <S.Text>
          More details will be available once this project has been released.
        </S.Text>
      </Layout.Hero>

      <Layout.Spacer marginTop='0px' marginBottom='30px' />

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
          I created storybook-feedback because I wanted an easy and immediate
          way to communicate about a story. We are using storybook during
          testing and if a designer notices a bug then this addon allows them to
          easily document that problem.
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
