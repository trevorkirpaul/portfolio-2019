import styled from 'styled-components'
import * as R from 'ramda'

const TitlePanel = styled.div`
  font-family: ${props =>
    R.pathOr('sans-serif', ['theme', 'fontFamily'], props)};
`

const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 15px;

  color: ${props =>
    R.pathOr('#383838', ['theme', 'color', 'foregroundPrimary'], props)};
`
const SubTitle = styled.h2`
  font-weight: 300;
  color: ${props =>
    R.pathOr('#383838', ['theme', 'color', 'foregroundPrimary'], props)};
`

export { TitlePanel, Title, SubTitle }
