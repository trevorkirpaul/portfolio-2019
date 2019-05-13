import styled, { css } from 'styled-components'
import { animated } from 'react-spring'

import { ContentProps } from './components/Content'

const Toast = styled.div``

const Content = styled.div<ContentProps>`
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background: ${({ background }) => background};
  color: ${({ color }) => color};

  display: flex;
  justify-content: center;
  align-items: center;

  ${({ danger, success, warning }) => {
    if (warning) {
      return css`
        background: #ffc107;
        color: #383838;
      `
    }

    if (success) {
      return css`
        background: #8bc34a;
        color: #f8f8f8;
      `
    }

    if (danger) {
      return css`
        background: #f44336;
        color: #f8f8f8;
      `
    }
  }}
`

const AnimatedContent = animated(Content)

export { Toast, AnimatedContent as Content }
