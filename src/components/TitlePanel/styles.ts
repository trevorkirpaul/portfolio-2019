import styled from 'styled-components'

const TitlePanel = styled.div``
const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 15px;

  color: ${props => props.theme.color.base.lightBlue};
`
const SubTitle = styled.h2`
  font-weight: 300;
`

export { TitlePanel, Title, SubTitle }
