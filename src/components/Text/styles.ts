import styled from 'styled-components'
import * as R from 'ramda'

import { TextProps } from './Text'

const Span = styled.span<TextProps>`
  color: ${props => props.theme.color.foregroundPrimary};

  font-size: ${props =>
    R.pathOr('14px', ['theme', 'typography', 'size', 'regular'], props)};
`

const Paragraph = styled.p<TextProps>`
  color: ${props => props.theme.color.foregroundPrimary};

  line-height: 22px;

  font-family: ${props =>
    R.pathOr('sans-serif', ['theme', 'typography', 'fontFamily'], props)};

  font-size: ${props =>
    R.pathOr('14px', ['theme', 'typography', 'size', 'regular'], props)};
`

export { Span, Paragraph }
