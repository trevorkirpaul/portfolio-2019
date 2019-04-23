import styled from 'styled-components'

import { SpacerProps } from './components/Spacer'

const Layout = styled.div`
  font-family: 'Roboto';
  color: #383838;
  margin: 25px auto;
  max-width: 600px;
`

const Hero = styled.div``

const Spacer = styled.div<SpacerProps>`
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom};
`

const Section = styled.div``

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`

export { Layout, Hero, Spacer, Section, Flex }
