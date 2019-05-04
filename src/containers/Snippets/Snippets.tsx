import React from 'react'

import Code from '../../components/Code'
import Layout from '../../components/Layout'
import TitlePanel from '../../components/TitlePanel'
import Text from '../../components/Text'

const source = `<Toggle>
{({ on, toggle }: { on: boolean, toggle: () => any }) => (
  <React.Fragment>
    <Title heading="Render Props" subHeading="React" on={on} />
    <Button onClick={toggle} label="Show/hide" />
  </React.Fragment>
)}
</Toggle>
`

const sourceTwo = `render() {
  const { children } = this.props

  return children({
    on: this.state.on,
    toggle: this.toggle,
  })
}`

const Snippets = () => (
  <Layout>
    <TitlePanel title='Snippets' />

    <Layout.Spacer marginBottom='25px' />

    <Code source={source} />

    <Layout.Spacer marginBottom='25px' />

    <Layout.Section>
      <Text>
        Toggle is a component which uses a render props pattern and
        props.children in order to allow the above usage. Not only is Toggle a
        component that renders its children but it does so through a function.
        The source code for Toggle will reveal this:
      </Text>
    </Layout.Section>

    <Layout.Spacer marginBottom='25px' />

    <Code source={sourceTwo} />
  </Layout>
)

export default Snippets
