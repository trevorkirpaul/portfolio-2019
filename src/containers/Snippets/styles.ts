import styled from 'styled-components'

import HeadingBase from 'components/Heading'
import TextBase from 'components/Text'

const Heading = styled(HeadingBase)`
  margin-bottom: 15px;
  color: ${({ theme }) => theme.color.foregroundPrimary};
`

const Text = styled(TextBase)`
  margin-bottom: 15px;
`

export { Heading, Text }
