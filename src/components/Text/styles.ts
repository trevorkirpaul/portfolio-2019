import styled from 'styled-components'
import * as R from 'ramda'

import { remCalc } from 'shared/utils'

import { TextProps } from './Text'

const Span = styled.span<TextProps>`
  color: ${props => props.theme.color.foregroundPrimary};

  font-size: ${props =>
    R.pathOr(remCalc(16), ['theme', 'typography', 'size', props.size], props)};
`

const Paragraph = styled.p<TextProps>`
  color: ${props => props.theme.color.foregroundPrimary};

  line-height: 22px;

  font-family: ${props =>
    R.pathOr('sans-serif', ['theme', 'typography', 'fontFamily'], props)};

  font-size: ${props =>
    R.pathOr('14px', ['theme', 'typography', 'size', props.size], props)};
`

export { Span, Paragraph }
