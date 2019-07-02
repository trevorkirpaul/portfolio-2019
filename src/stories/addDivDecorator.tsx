/**
 * **addDivDecorator** is used with stories to create
 * a `div` element which serves as the anchor/root
 * for React Portal based components.
 *
 * React Portal allows components to be rendered
 * in different anchor/roots than the main app, which
 * is normally rendered within a div with the id of "root"
 *
 * @param storyFn
 * @param domNodeID
 */
const addDivDecorator = (storyFn: any, domNodeID: string) => {
  const newDiv = document.createElement('div')

  newDiv.setAttribute('id', domNodeID)

  document.body.appendChild(newDiv)

  return storyFn()
}

export default addDivDecorator
