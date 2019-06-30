import React from 'react'

import Code from 'components/Code'
import Layout from 'components/Layout'
import TitlePanel from 'components/TitlePanel'
import Text from 'components/Text'

import * as S from './styles'

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

const styledCompHeader = `//styles.tsx
 const Header = styled(({ as: Element, ...props}) => {
    return <Element {...props} />
  })
`

const headerComponent = `//Header.tsx
  import * as S from './styles'

  interface HeaderProps {
    as: React.ElementType;
    children: React.ReactNode
  }
  const Header = ({as, children}: HeaderProps) => {
    return <S.Header as={as} >{children}</S.Header>
  }
`

const Snippets = () => (
  <Layout>
    <TitlePanel title='Snippets' />

    <Layout.Spacer marginBottom='25px' />

    <S.Heading as='h2'>Styled Components Text & Header</S.Heading>

    <S.Text>
      This pattern allows you to use the `as` prop to render components using
      different elements. This is handy if you're working on a Header component
      where you want to use different Heading elements.
    </S.Text>

    <S.Text>
      First, we'll create the styled-component. Rather than using `styled.h1`,
      we'll return an arrow function which renders the `as` prop as the element.
    </S.Text>

    <Code source={styledCompHeader} />

    <Layout.Spacer marginTop='0px' marginBottom='15px' />

    <S.Text>
      Here is the Heading component where we set the as prop as a
      `React.ElementType` in the interface. This ensures that an HTML element
      type is passed. I usually set a default prop as well.
    </S.Text>

    <Code source={headerComponent} />

    <Layout.Spacer marginTop='0px' marginBottom='25px' />

    <S.Heading as='h2'>Render Props Pattern</S.Heading>

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
