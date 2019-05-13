import styled from 'styled-components'
import { animated } from 'react-spring'

import { ContentProps } from './components/Content'

const Modal = styled.div``

/**
 * **Content** wraps the Modal children
 */
const Content = styled.div<ContentProps>`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: ${({ background }) => background};
  color: ${({ color }) => color};
  z-index: 1000;
`

/**
 * **Backdrop** is used to render a screen behind the modal
 * which will help prevent the user from clicking background
 * actions as well as for aesthetic reasons
 */
const Backdrop = styled.div`
  position: fixed;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 100vh;
  background: #383838;

  opacity: 0.5;
`
const AnimatedBackdrop = animated(Backdrop)
const AnimatedContent = animated(Content)

export { Modal, AnimatedContent as Content, AnimatedBackdrop as Backdrop }
