import React from 'react'
import { MemoryRouter } from 'react-router'

/**
 * **routerDecorator** is a function used to wrap
 * a story with a `MemoryRouter` which will help
 * support any story which uses _React Router_
 *
 * @param storyFn function
 */
const routerDecorator = (storyFn: any) => (
  <MemoryRouter initialEntries={['/']}>{storyFn()}</MemoryRouter>
)

export default routerDecorator
