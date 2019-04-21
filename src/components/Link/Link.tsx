import React from 'react'

import * as S from './styles'
import { LocationDescriptorObject } from 'history'

export interface LinkProps {
  children: React.ReactNode
  /**
   * **url** is used for both React Router Links and
   * standard HTML anchor tag based elements' `href`, so
   * its typing is designed to handle either/or.
   *
   * It's a required prop whiles **to** which is what
   * the React Router Link uses (taking in **url**) is optional,
   * since the anchor tag version of this component does not
   * require **to**.
   */
  url: string | (LocationDescriptorObject<any> & string)
  /**
   * **target** is optional and is the standard anchor tag
   * target prop.
   *
   * @default 'blank'
   */
  target?: string
  /**
   * **type** determines whether we're using a React Router Link
   * component for an anchor tage based component.
   *
   * use `internal` to render a React Router Link
   * use `external` or leave blank for an anchor element
   */
  type?: string
  /**
   * **active** is used with React Router Link and intended for NavBar
   * or Nav links. When true, styling will be changed and pointer
   * events will be removed
   */
  active?: boolean
  /**
   * internally used
   */
  to?: string | (LocationDescriptorObject<any> & string)
  className?: string
}

const Link = ({
  children,
  url,
  target,
  type,
  active,
  className
}: LinkProps) => {
  switch (type) {
    case 'internal':
      return (
        <S.RouterLink
          className={className}
          to={url}
          active={active ? 'true' : 'false'}
        >
          {children}
        </S.RouterLink>
      )

    default:
      return (
        <S.Link href={url} target={target}>
          {children}
        </S.Link>
      )
  }
}

Link.defaultProps = {
  target: 'blank',
  type: 'external'
}

export default Link
