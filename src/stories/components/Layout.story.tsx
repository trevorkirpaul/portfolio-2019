import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'

import Layout from 'components/Layout'
import Text from 'components/Text'

import themeDecorator from '../themeDecorator'

addDecorator(themeDecorator)

storiesOf('Layout', module)
  .add('Layout (wrapper)', () => (
    <React.Fragment>
      <Layout>
        <Text>This is wrapped by a Layout component</Text>
      </Layout>
    </React.Fragment>
  ))
  .add('Spacer', () => (
    <React.Fragment>
      <Layout>
        <Text>Text Element</Text>

        <Layout.Spacer marginTop='15px' marginBottom='35px' />

        <Text>
          "Layout.Spacer" is used above this Text Element to add margin based
          spacing easily, without needing to update the styles for the Text
          Element
        </Text>
      </Layout>
    </React.Fragment>
  ))
  .add('Hero', () => (
    <React.Fragment>
      <Layout>
        <Layout.Hero>
          <Text>This is Text Element is inside a Layout.Hero element.</Text>
        </Layout.Hero>
      </Layout>
    </React.Fragment>
  ))
  .add('Section', () => (
    <React.Fragment>
      <Layout>
        <Layout.Section>
          <Text>This is Text Element is inside a Layout.Section element.</Text>
        </Layout.Section>
      </Layout>
    </React.Fragment>
  ))
