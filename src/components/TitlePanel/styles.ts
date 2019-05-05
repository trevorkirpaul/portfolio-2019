import styled from 'styled-components'

const TitlePanel = styled.div`
  font-family: ${props => props.theme.fontFamily};
`

const Title = styled.h1`
  font-weight: 500;
  margin-bottom: 15px;

  color: ${props => props.theme.color.foregroundPrimary};
`
const SubTitle = styled.h2`
  font-weight: 300;
  color: ${props => props.theme.color.foregroundPrimary};
`

export { TitlePanel, Title, SubTitle }
