import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'

import Layout from 'components/Layout'

import themeDecorator from '../themeDecorator'

addDecorator(themeDecorator)

storiesOf('Layout', module)
  .add('Layout (wrapper)', () => (
    <React.Fragment>
      <Layout>
        <span>This is wrapped by a Layout component</span>
      </Layout>
    </React.Fragment>
  ))
  .add('Spacer', () => (
    <React.Fragment>
      <Layout>
        <span>Text Element</span>

        <Layout.Spacer marginTop='15px' marginBottom='35px' />

        <span>
          "Layout.Spacer" is used above this Text Element to add margin based
          spacing easily, without needing to update the styles for the Text
          Element
        </span>
      </Layout>
    </React.Fragment>
  ))
  .add('Hero', () => (
    <React.Fragment>
      <Layout>
        <Layout.Hero>
          <span>This is Text Element is inside a Layout.Hero element.</span>
        </Layout.Hero>
      </Layout>
    </React.Fragment>
  ))
  .add('Section', () => (
    <React.Fragment>
      <Layout>
        <Layout.Section>
          <span>This is Text Element is inside a Layout.Section element.</span>
        </Layout.Section>
      </Layout>
    </React.Fragment>
  ))
