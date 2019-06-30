import React from 'react'
import styled, { css } from 'styled-components'

import { HeadingProps } from './Heading'

const h2Styles = css`
  font-weight: 300;
`

const Heading = styled(({ as: Element, ...props }: HeadingProps) => (
  <Element {...props} />
))`
  color: ${({ theme }) => theme.color.foregroundPrimary};
  font-family: ${({ theme }) => theme.fontFamily};

  ${({ as }) => {
    switch (as) {
      case 'h2':
        return h2Styles
      default:
        return null
    }
  }}
`

export { Heading }
