import styled, { css } from 'styled-components'
import { Link as RRLink } from 'react-router-dom'

const LinkBaseStyles = css`
  text-decoration: none;
  color: ${({ theme }) => theme.foregroundPrimary};
  border-bottom: 1px solid #383838;
  padding-bottom: 2px;

  &:visited {
    color: palevioletred;
  }

  &:hover {
    color: palevioletred;
    border-color: palevioletred;
  }
`

const Link = styled.a`
  ${LinkBaseStyles}
`

// in order to handle the DOM not wanting boolean values
// I'm creating an interface specifically for `RouterLink`
// rather than using `Link` components' interact from
// './Link.tsx
interface RouterLinkProps {
  active: string
  to: string
}

const RouterLink = styled(RRLink)<RouterLinkProps>`
  ${LinkBaseStyles}

  ${({ active }) =>
    active === 'true' &&
    css`
      border: none;
      pointer-events: none;
      user-select: none;

      &:hover {
        color: #383838;
        border-color: #383838;
        cursor: not-allowed;
      }
    `}
`

export { Link, RouterLink }
